import { useState } from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';
import './Hook.css'
import { useNavigate } from "react-router-dom";
import React from 'react';



function Hook() {
	const [todos, setTodos] = useState([])
	const addItem = (userInput) => {//Adding new items-addItem ֆունկցիան userInput-ի միջոցով ստանում է արժեքներ(ToDoForm.js)
		if (userInput) {//if the input is empty it will not add that row-սա ստուգում է, որ եթե ինփութի մեջ դատարկ է այդ տողը չավելացնի
			const newItem = {
				id: 1 + Math.random(),//Assigns random values ​​to id-Math.random()-ը id-ին տալիս է 0-1 միջակայքում պատահական թվերով արժեքներ
				value: userInput.slice(),
				complete: false//draw a line on the task accomplished-գիծ քաշում մեր առաջադրանքի վրա որ կատարված է
			}
			setTodos([...todos, newItem])//Adds a new element to the previous state-նախկին վիճակին(...todos) ավելացնում ենք նոր էլեմենտը
		}
	}

	const removeItem = (id) => {
		setTodos([...todos.filter((item) => item.id !== id)])//filters the array elements-ֆիլտր է անում array-ի տարրերի id-ները (delete կնոպկան սեղմելուց հետո) ու ջնջում է
	}
	//մենք ստանում ենք ինչ որ id, ու setTodos-ի միջոցով ստուգում ենք եթե item.id === id ապա մենք կվերցնենք ընթացիկ օբյեկտը իրեն պատճե կանենք ու complete դաշտը կփոխենք, եթե ոչ մենք կպատճենենք ամբողջ էլեմենտը
	const handleToggle = (id) => {
		setTodos([
			...todos.map((item) =>
				item.id === id ? { ...item, complete: !item.complete } : { ...item }
			)
		])
	}
	const navigate = useNavigate()
	function ClassComponent() {
		navigate("/app", { replace: true });
	}

	return (
		<div className="HookTodo">
			<header>
				<button className="HookButt" onClick={ClassComponent}>CLASS TO DO </button>
				<h1 className='h11'>HOOK TO DO LIST: {todos.length}</h1>


			</header>

			{/* TODO list form-ToDoForm-ը ձևավորում է TO DO list-ի forma-ն, {addItem}-ն գնում է ToDoForm.js-ի մեջ */}
			<ToDoForm addItem={addItem} />
			{todos.map((item) => {//print list-map-ով տպում ենք ցուցակը
				return (
					// {item} {item.id} {handleToggle} removeItem={removeItem} սրանք որպես props գնում են ToDo.js
					<ToDo
						item={item}
						key={item.id}//key-ի արժեքն է item․id-ն
						toggleItem={handleToggle}//handleToggle-գործածել փոխարկել
						removeItem={removeItem}
					/>
				)

			})}

		</div>

	);
}

export default Hook;