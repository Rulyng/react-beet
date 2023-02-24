import React, {useState} from 'react'
import Calc from "./calc";
import { arr } from "./data/arr";
import CartUser from "./component/cart/cartUser";

import './app.css'


function App() {

  //вивід Юзерів
  // const newAr = arr.map(item => <CartUser key={item} item={item}/> )

  //  сщортування Юзерів
  // const newArrSort = arr.map(item => item.age > 18 && <CartUser key={item} item={item}/>)

//по кліку

const[showUser, setshowUser] = useState();
const [sortUsers, setsortUsers] = useState();


function showUsersBtn(){
  const newAr2 = arr.map(item => <CartUser key={item} item={item}/>)
  setshowUser(newAr2)
}

function sortUserBtn(){
  let newSortUser = arr.map(item => item.age>18 && <CartUser key={item} item={item} />)
  setsortUsers(newSortUser)
}
  return (
    <div className='wrap'>

    <section>
    <h2>Calc +</h2>
      <Calc/></section>

    <section>
      <h2>Users</h2>
      
      <button onClick={showUsersBtn}>Show users</button>
      <div className="carts-users">
        {/* {newAr} */}

        {showUser}
        </div>

      </section>
     
      <section>
      <h2>Sort Users</h2>

      <button onClick={sortUserBtn} >Sort users</button>
      
      <div className="carts-users">
        {/* {newArrSort} */}
        {sortUsers}
        </div>
      </section>

    </div>
  );
}

export default App;
