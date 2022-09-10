
// import './App.css';
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './App.css'

class App extends React.Component {//սա՝constructor(props) և սա՝super(props) այլևս չի գործածվում
    state = {
      newItem: "",
      list: []
    };
  

  // //incorporating local storage-ներառում է տեղական պահեստավորում 
  // componentDidMount() {
  //   this.hydrateStateWithLocalStorage();

  //   // add event listener to save state to localStorage-ավելացնել իրադարձությունների լսող՝ վիճակը localStorage-ում պահելու համար
  //   // when user leaves/refreshes the page-երբ օգտվողը հեռանում է/թարմացնում է էջը
  //   window.addEventListener(
  //     "beforeunload",
  //     this.saveStateToLocalStorage.bind(this)
  //   );
  // }

  // componentWillUnmount() {
  //   window.removeEventListener(
  //     "beforeunload",
  //     this.saveStateToLocalStorage.bind(this)
  //   );

  //   // saves if component has a chance to unmount
  //   this.saveStateToLocalStorage();
  // }

  // hydrateStateWithLocalStorage() {
  //   // for all items in state- բոլոր ապրանքների համար
  //   for (let key in this.state) {
  //     // if the key exists in localStorage- եթե բանալին առկա է localStorage-ում
  //     if (localStorage.hasOwnProperty(key)) {
  //       // get the key's value from localStorage-ստացեք բանալու արժեքը localStorage-ից
  //       let value = localStorage.getItem(key);

  //       // parse the localStorage string and setState-վերլուծել localStorage տողը և setState
  //       try {
  //         value = JSON.parse(value);
  //         this.setState({ [key]: value });
  //       } catch (e) {
  //         // handle empty string-handle empty string
  //         this.setState({ [key]: value });
  //       }
  //     }
  //   }
  // }

  // saveStateToLocalStorage() {
  //   // for every item in React state-React վիճակում գտնվող յուրաքանչյուր տարրի համար
  //   for (let key in this.state) {
  //     // save to localStorage-պահել տեղական պահեստում
  //     localStorage.setItem(key, JSON.stringify(this.state[key]));
  //   }
  // }

  updateInput(key, value) {
    // update react state, Input-ի հետ է աշխատում
    this.setState({ [key]: value });//[key]-սա նշանակում է որ փոփոխական է
  }

  addItem() {//այս ֆունկցիան աշխատում է ավելացնելու button-ի քլիքի ժամանակ
    // create a new item with unique id-ստեղծել նոր տարր եզակի ID-ով
    const newItem = {
      id: 1 + Math.random(),//1-ը որ դրել է դա հասկանում է պատահական թվեր վերցնի 1-ից 2 միջակայքում(քանի որ եթե թիվ չի լինում ինքը հասկանում է 0-ից 1 միջակայք), ամեն անգամ կստանանք պատահական եզակի ID
      value: this.state.newItem.slice()//slice()-ը սովորաբար փակագծերի մեջ վերցնում է 2 թիվ, մեկը սկզբնական ինդեքսն է մյուսը վերջնական և այ միջակայքում կտրում է ու ստանում է նոր array, իսկ երբ փակագծերի մեջ ոչինչ չկա ինքը ավտոմատ նույն թվերով array է վերադարձնում, տվյալ դեպքում այն վերադարձնում է նույն ստրինգը քանի որ this.state.newItem-ը ստրինգ է
 
    };

    // copy current list of items-պատճենեք տարրերի ընթացիկ ցանկը
    const list = [...this.state.list]; // վերցնում է ցուցակի տարրերը պատճե է անում ու դնում է list անունով array-ի մեջ քանի որ react-ում հնարավոր չէ հենց state-ի հետ միանգամից ուղիղ աշխատել, դրա համար իրան կոպի է անում դնում է փոփոխականի մեջ որ իրա հետ աշխատի

    // add the new item to the list
    list.push(newItem); // list array-ի մեջ ավելացնում ենք նոր տարր

    // update state with new list, reset the new item input-թարմացնել վիճակը նոր ցուցակով, վերականգնել նոր տարրի մուտքագրումը
    this.setState({
      list,
      newItem: ""
    });
  }

  deleteItem(id) { 
    // copy current list of items-պատճենեք իրերի ընթացիկ ցանկը
    const list = [...this.state.list];
    // filter out the item being deleted-զտել ջնջվող տարրը
    const updatedList = list.filter(item => item.id !== id); // ֆիլտր է անում array-ի տարրերի id-ները հերթով(delete կնոպկան սեղմելուց հետո) ու համամետում է որ ջնջվող id-ին նույնը չէ array-i մյուս id-ների հետ ու ջնջում է

    this.setState({ list: updatedList });// թարմացված ցուցակ
  }
  
  render() {
    return (
      <div className='todos'>
      <div>
      <h1 className="app-title" style={{ color: "red", textAlign: 'center',
      marginLeft:530,
       border: "5px ridge blue",width:400 }}>CLASS TO DO LIST: {this.state.list.length}</h1>
        
        <div className="container">
        <div
          style={{
            padding: 30,
            marginLeft: 550    
            
          }
        }
        >
          <div style={{ marginLeft: 41, fontSize: 25, color: "red" }}>Add an Item...</div>
          <input
            type="text"
            placeholder="Enter to-dos..."
            value={this.state.newItem}// սա նշանակում է որ Input-ի արժեքը կվերցնի նոր տարրը ամեն անգամ երբ օգտվողը(user@) ավելացնում է input-ի մեջ
            onChange={e => this.updateInput("newItem", e.target.value)}//input-ի փոփոխության(onChange) ժամանակ, this.updateInput ֆունկցիան ենք կանչում՝ "newItem"-ը գնում մտնում է 64 տողի key-ի մեջ(որպես օբյեկտի key է հանդիսանում "newItem"-ը), իսկ  e.target.value-ն որպես օբյեկտի արժեք գնում մընում է 64-րդ տողի value արժեքի մեջ
          
          />
          {/* տող ավելացնելու կնոպկա */}
          <button
            className="add-btn btn-floating"
            onClick={() => this.addItem()}
            disabled={!this.state.newItem.length}//այս տողը նրա համար է որ մինչև ինփութի մեջ մի բան չես գրում add կնոպկան չի ակտիվանում, այս տողը որ հանում ես, add կնոպկան միշտ ակտիվ է լինում
            style={{ background: "blueviolet", color: 'white' }}
          >
             Add 
          </button>
          <br /> <br />
          <ul style={{ marginLeft: 35, fontSize: 23, color: "red" }}>
            {this.state.list.map(item => { //map-ը ֆռում է մեր array-ի վրայով և մեր էկրանին տպում է li-երը, նրանց տալով տվյալ տարրին համապատասխան id-ն (key={item.id}) և արժեքը({item.value})
              return (
                // react-ում պարտադիր է գլխավոր տարրին(տվյալ ցուցակում գլխավոր տարր-ը li-ն է) տալ key(ատրիբուտ) որպեսզի տարբերակվեն input-ում մուտք արվող տարրերը, դա React-ն է ուզում
                <li key={item.id}>
                  {item.value}
                  <button className="btn btn-floating" style={{ background: "blueviolet", color: 'white' }} onClick={() => this.deleteItem(item.id)}>
                    <i class="material-icons">X</i>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Link to="/">
    <button className="home" type="button">HOOK TO DO</button>
  </Link>
      </div>
      </div>
    );
   
  }
}
// ReactDOM.render(<App />, document.getElementById('root'));

export default App;
