import { useState } from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';
import './Hook.css'
import { useNavigate } from "react-router-dom";
// import { BrowserRouter,  Routes, Route } from "react-router-dom";
import React from 'react';



function Hook() {
	
	const [todos, setTodos] = useState([])//այս դատարկ զանգվածում պահպանվում է մեր առաջադրանքների ցուցակը
  
	const addItem= (userInput) => {// տարրերի ավելացման պունկտ,addItem ֆունկցիան userInput-ի միջոցով ստանում է արժեքներ
	  if(userInput) {// սա ստուգում է, որ եթե ինփութի մեջ դատարկ է այդ տողը չավելացնի
		const newItem = {
		  id: 1 + Math.random(),//Math.random().toString(36).substring(2,9)։Math.random()-վերադարձնում է 0-1 միջակայքում պատահական թվեր։ Math.random().toString(36) երբ մեզ անհրաժեշտ է նիշերի և թվերի խառնուրդ օգտագործում ենք toString()-ը, որը իր մեջ ընդունում 2-ից մինչև 36 թիվը, եթե մինչև 10-ն(ներառյալ) ենք փակագծերի մեջ գրում ինքը պատահական թվեր է բերում, իսկ 11-ից սկասած մինչև 36 թիվը ներառյալ գրելու դեպքում բերում է թվերի և նշերի պատահական խառնուրդ, իսկ substring(2,9)-ը Math.random().toString(36)-ի միջոցով տրված թվերի և նիշերի խառնուրդ կոդը կտրել և դարձնել 7 հատանոց կոդ(9-2)
		  value: userInput.slice(),//   ստեղ պահպանում ենք input-ում գրված տեքստը
		  complete: false// սրա միջոցով ենք գիծ քաշում մեր առաջադրանքի վրա որ կատարված է,սրանով մենք իմանում ենք առաջադրանքը ակտիվ է թե ոչ, այսինքն կատարված թե չկատարված առաջադրանք է
		}
		setTodos([...todos, newItem])//․․․ spred  սպրեդ օպերատորի միջոցով զանգվածի նախկին վիճակին ավելացնում ենք նոր էլեմենտը, նոր էլեմենտ ստանալուց հետո մեզ անհրաժեշտ է իրան ավելացնենք զանգվածում
	  }
	}
  
	const removeItem = (id) => {
	  setTodos([...todos.filter((item) => item.id !== id)])//item.id !== id եթե այս պայմանը բավարարում է մենք վերադարձնում ենք array-ի բոլոր էլեմենտները, իսկ եթե այս պայմանը չի բավարարվում ապա մենք ընթացիկ էլեմենտը չենք վերադարձնում։ ֆիլտր է անում array-ի տարրերի id-ները հերթով(delete կնոպկան սեղմելուց հետո) ու համամետում է որ ջնջվող id-ին նույնը չէ array-i մյուս id-ների հետ ու ջնջում է
	}//removeItem-ը ընդունում է id, այստեղ մեղ պետք է ֆիլտր անենք մեր առաջադրանքների ցուցակը ընթացիկ id-ով և իրեն հետ ավելացնենք stat-ի մեջ
  
	const handleToggle = (id) => {//այս ֆունկցիան պետք է փոխի 1 արժեք օբյեկտի complete դաշտում
	  setTodos([//մենք ստանում ենք ինչոր id, ու setTodos-ի միջոցով ստուգում ենք եթե item.id === id ապա մենք կվերցնենք ընթացիկ օբյեկտը իրեն պատճե կանենք ու complete դաշտը կփոխենք հակառակ արժեքը որը կար այդ օբյեկտում, եթե ոչ մենք կպատճենենք ամբողջ էլեմենտը
		...todos.map((item) => 
		  item.id === id ? { ...item, complete: !item.complete } : {...item }
		)
	  ])
	}
	const navigate = useNavigate()
	function ClassComponent(){
		  navigate( "/app", { replace: true } );
		   }

	return (
	  <div className="HookTodo">
		<button className="HookButt" onClick={ClassComponent}>CLASS TO DO </button>
		<header>
		  <h1 className='h11'>HOOK TO DO LIST: {todos.length}</h1>
		  
		</header>
		
		{/* ToDoForm-ը ձևավորում է TO DO list-ի forma-ն, {addItem}-ն գնում է ToDoForm.js-ի մեջ */}
		<ToDoForm addItem={addItem} />
		{todos.map((item) => {// map-ով տպում ենք ցուցակը
		  return (// վերադարձնում է TO DO-ի ցուցակը
		//   {item} {item.id} {handleToggle} removeItem={removeItem} սրանք որպես props gnwum en ToDo.js
			<ToDo
			  item={item}
			  key={item.id}//key-ն ստանում ենք item-ի id-ից
			  toggleItem={handleToggle}//toggleItem-միացնել առաջադրանքը, handleToggle-գործածել փոխարկել
			  removeItem={removeItem}
			  />
		  )
		  
		})}
		
	  </div>
	 
	);
  }
  
  export default Hook;