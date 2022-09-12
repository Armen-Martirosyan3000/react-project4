import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './App.css'

class App extends React.Component {//constructor(props) և super(props) այլևս չի գործածվում
  state = {
    newItem: "",
    list: []
  };

  // update react state,-թարմացնել արձագանքման վիճակը, Input-ի հետ է աշխատում
  updateInput(key, value) {
    this.setState({ [key]: value });
  }

  // create a new item with unique id-ստեղծել նոր տարր եզակի պատահական ID-ով,այս ֆունկցիան աշխատում է add button-ի քլիքի ժամանակ
  addItem() {
    const newItem = {
      id: 1 + Math.random(),
      value: this.state.newItem.slice()//այստեղ slice()-ի միջոցով ինփութում ներառված նոր տարրը(newItem) պատճե է անում և տալիս է value արժեքին
    };

    // copy current list of items-վերցնում է ցուցակի տարրերը պատճե է անում ու դնում է list անունով array-ի մեջ քանի որ react-ում հնարավոր չէ հենց state-ի հետ միանգամից ուղիղ աշխատել, դրա համար իրան կոպի է անում դնում է փոփոխականի մեջ որ իրա հետ աշխատի
    const list = [...this.state.list];


    // add the new item to the list-ավելացնել նոր տարրը ցանկում՝list array-ի մեջ
    list.push(newItem);


    // update state with new list, reset the new item input-թարմացնել վիճակը նոր ցուցակով, վերականգնել նոր տարրի մուտքագրումը
    this.setState({
      list,
      newItem: ""
    });
  }

  // copy current list of items-պատճենեք իրերի ընթացիկ ցանկը
  deleteItem(id) {
    const list = [...this.state.list];
    // filter out the item being deleted-զտել ջնջվող տարրը(delete կնոպկան սեղմելուց հետո)
    const updatedList = list.filter(item => item.id !== id);
    this.setState({ list: updatedList });//updated list-թարմացված ցուցակ
  }

  render() {
    return (
      <div className="ClassTodo">
        <Link to="/">
          <button className="ClassButt" type="button">HOOK TO DO</button>
        </Link>
        <h1 className="app-title">CLASS TO DO LIST: {this.state.list.length}</h1>
        <div className="container">
          <div>
            <div className='div'>Add an Item...</div>
            <input className='inputt'
              type="text"
              placeholder="Enter to-dos..."
              value={this.state.newItem}//adding newItem-Input-ի արժեքը կվերցնի newItem-ը ամեն անգամ երբ օգտվողը(user@) ավելացնում է input-ի մեջ
              onChange={e => this.updateInput("newItem", e.target.value)}//input-ի փոփոխության(onChange) ժամանակ, this.updateInput ֆունկցիան ենք կանչում՝ "newItem"-ը գնում մտնում է 12 տողի key-ի մեջ(որպես օբյեկտի key է հանդիսանում "newItem"-ը), իսկ  e.target.value-ն որպես օբյեկտի արժեք գնում մընում է 64-րդ տողի value արժեքի մեջ   
            />
            {/*button Add */}
            <button
              className="add-btn"
              onClick={() => this.addItem()}
              disabled={!this.state.newItem.length}//Activating the add button-այս տողը նրա համար է որ մինչև ինփութի մեջ մի բան չես գրում add կնոպկան չի ակտիվանում
            >
              Add
            </button>
            <br /> <br />
            <ul className="ul1">
              {this.state.list.map(item => { //Printing li's-map-ը անցնում է մեր array-ի վրայով և մեր էկրանին տպում է li-երը
                return (
                  //distinguishing elements-react-ում պարտադիր է գլխավոր տարրին(տվյալ ցուցակում գլխավոր տարր-ը li-ն է) տալ key(ատրիբուտ) որպեսզի տարբերակվեն input-ում մուտք արվող տարրերը
                  <li key={item.id}>
                    {item.value}
                    <button className="btn-floating" onClick={() => this.deleteItem(item.id)}>
                      <i class="material-icons">X</i>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );

  }
}

export default App;
