import React from 'react';
import Todo from './Todo';

const ListofItems = ( { list, setListofItems, setInputTitle } ) => {
  
  return (
  <div className="listof-items">
    {list.map((item) => 
    <Todo 
      title={item.title}
      cat={item.category}
      price={item.price}
      list={list}
      item={item}
      key={item.id}
      isActive={item.isActive}
      setListofItems={setListofItems}
    />
  )}
  </div>
  )};

export default ListofItems;
