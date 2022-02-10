import React, { useEffect, useState } from 'react';
import EditMenuComponent from './EditMenuComponent';
import { Link } from 'react-router-dom';
import ListofItems from './ListofItems';

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

  console.log(listofItems);
  console.log(localStorage.listofItems);

  return (
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
    <ListofItems 
      list={listofItems} 
      setListofItems={setListofItems} 
    />
  </div>
  )};

export default EditMenu;
