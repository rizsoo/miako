import React, { useState } from 'react';

const Todo = ({ title, cat, price, list, item, setListofItems, isActive }) => {

  const [edit, setEdit] = useState(true);

  //DELETE
  const deleteListItem = () => {
    setListofItems(list.filter((el) => el.id !== item.id))
  }
  //EDIT TITLE
  const editTitle = (e) => {
    setListofItems(list.map((el) => {
      if(el.id === item.id) {
        return {
          ...el, title: e.target.value
        }
      }
      return el;
    }))
  }
  const editCategory = (e) => {
    setListofItems(list.map((el) => {
      if(el.id === item.id) {
        return {
          ...el, category: e.target.value
        }
      }
      return el;
    }))
  }
  const editActive = (e) => {
    setListofItems(list.map((el) => {
      if(el.id === item.id && el.isActive === true) {
        return {
          ...el, isActive: false
        }
      }
      return {
        ...el, isActive: true
      };
    }))
  }
  return  (
    <div className={isActive? 'editing-meal green-bc' : 'editing-meal red-bc'}>
      <div className='edit1'>
        {edit?
          <input className='title-on-edit' type="text" defaultValue={title} onChange={editTitle} disabled /> :
          <input className='title-on-edit white-bc' type="text" defaultValue={title} onChange={editTitle} /> }
        <div className='edit-foodname'>
        <p className='cat'>Kategória: {cat}</p>
        {edit? null : 
        <div className='categories'>
            <select onChange={editCategory} id="cat" name="categories">
              <option value="starter" >Előétel</option>
              <option value="soup" >Leves</option>
              <option value="main" >Főétel</option>
              <option value="salad" >Savanyúságok</option>
              <option value="dessert" >Desszert</option>
            </select>
          </div>}
        </div> 
        <div>
          <p>Ár: {edit? <input className='editprice' type="text" defaultValue={price} onChange={editTitle} disabled /> : 
          <input type="text" defaultValue={price} onChange={editTitle} /> }
          </p>
        </div>
    
    </div>
    <div className='edit2'>
      <div className='edit-edit-edit'>
        <button className='save' onClick={() => setEdit(!edit)}>{edit? "Szerkesztés" : "Mentés"}</button>
        {edit?
          <button className='isactive' onClick={editActive} disabled>{isActive? "Aktív" : "Piszkozat"}</button> :
          <button className='isactive' onClick={editActive}>{isActive? "Aktív" : "Piszkozat"}</button>
        }
      </div>
      {edit? null :<button className='delete-item' onClick={deleteListItem}>Törlés</button> } 
    </div>
    </div>
)};

export default Todo;
