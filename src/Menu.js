import './Menu.css';
import data from './data.json'
import { Link } from "react-router-dom";
import Header from './Header';
import imgFood from './img/menu.JPG'

console.log(data);


function Menu() {
  let foodData = localStorage.getItem("listofItems")
  const foodList = JSON.parse(foodData)
  console.log(foodList);
  
    return (
    <div>
      <Header />
      <div className='menu'>
        <img className='page-header-image' src={imgFood} alt=''/>
      <div className='menu-content'>
        <h1 className='page-title'>MENÜ</h1>
      <p className="food-category">Előétel</p>
      {foodList.map((data) => {
        if(data.category === "starter" && data.isActive === true) 
        return (
          <div className="food">
            <p className="food-title">{data.title}</p>
            <p className="food-price">{data.price} Ft</p>
          </div>
        )
      })}
      <p className="food-category">Levesek</p>
      {foodList.map((data) => {
        if(data.category === "soup" && data.isActive === true) 
        return (
          <div className="food">
            <p className="food-title">{data.title}</p>
            <p className="food-price">{data.price} Ft</p>
          </div>
        )
      })}
      <p className="food-category">Főételek</p>
      {foodList.map((data) => {
        if(data.category === "main" && data.isActive === true) 
        return (
          <div className="food">
            <p className="food-title">{data.title}</p>
            <p className="food-price">{data.price} Ft</p>
          </div>
        )
      })}
      <p className="food-category">Házi savanyúságok</p>
      {foodList.map((data) => {
        if(data.category === "salad" && data.isActive === true) 
        return (
          <div className="food">
            <p className="food-title">{data.title}</p>
            <p className="food-price">{data.price} Ft</p>
          </div>
        )
        })} 
      <p className="food-category">Édességek</p>
      {foodList.map((data) => {
        if(data.category === "dessert" && data.isActive === true) 
        return (
          <div className="food">
            <p className="food-title">{data.title}</p>
            <p className="food-price">{data.price} Ft</p>
          </div>
        )
      })}
      <Link to="/editmenu"><button>Szerkesztés</button></Link>
      </div>
      </div>
    </div>
  );
}

export default Menu;
