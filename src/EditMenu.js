import React, { useEffect, useState } from 'react';
import EditMenuComponent from './EditMenuComponent';
import { Link } from 'react-router-dom';
import ListofItems from './ListofItems';
import Header from './Header';
import Todo from './Todo';

const EditMenu = () => {
  const [inputTitle, setInputTitle] = useState("");
  const [inputCategory, setInputCategory] = useState("starter");
  const [inputPrice, setInputPrice] = useState("");

  const [listofItems, setListofItems] = useState([]);

  //Run once when app starts
  useEffect(() => {
    getLocalItems()
  }, []);

  //USE Effect
  useEffect(() => {
    saveIntoLocal();
  }, [listofItems]);

  //Save to local
const saveIntoLocal = () => {
  if (localStorage.getItem("listofItems") === null) {
    localStorage.setItem("listofItems", JSON.stringify([]));
  } else {
    localStorage.setItem("listofItems", JSON.stringify(listofItems));
  }
};
const getLocalItems = () => {
  if (localStorage.getItem("listofItems") === null) {
    localStorage.setItem("listofItems", JSON.stringify([]));
  } else {
    let todoLocal = JSON.parse(localStorage.getItem('listofItems'));
    setListofItems(todoLocal)
  }
};


  const [searchTerm, setSearchTerm] = useState('')
  const filteredProducts = listofItems.filter(val => {
    if (searchTerm === "" || val.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
      return val
    } 
  });

  console.log(listofItems);
  console.log(filteredProducts);

  return (
  <div>
    <Header />
    <div className='editmenu'>
    <Link to="/"><button>Vissza</button></Link>
    <EditMenuComponent 
      listofItems={listofItems}
      setListofItems={setListofItems}

      inputTitle={inputTitle}
      setInputTitle={setInputTitle} 

      inputCategory={inputCategory}
      setInputCategory={setInputCategory}

      inputPrice={inputPrice}
      setInputPrice={setInputPrice}
      />
    <input className='searchFoodinEditor' type="text" placeholder={"Keresés az ételek között..."} onChange={event => {setSearchTerm(event.target.value)}}/>

    {filteredProducts.length > 0 ? filteredProducts.map((item) => 
    <Todo 
      title={item.title}
      cat={item.category}
      price={item.price}
      list={listofItems}
      item={item}
      key={item.id}
      isActive={item.isActive}
      setListofItems={setListofItems}
    />
  ) : <p>Nincs találat...</p>}
    </div>
  </div>
  )};

export default EditMenu;
