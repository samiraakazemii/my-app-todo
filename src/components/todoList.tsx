import React, { useState } from 'react';
import { ReactElement } from "react";
import FormTodo from '../form-todo';
import Todo from './todo';
import Badge from 'react-bootstrap/Badge'

interface Props {
 todo:FormTodo[];

}

const TodoList =({todo}: Props): ReactElement =>{

 const[statusDone,SetSttusDone]=useState(false);

let filtertodo=todo.filter(item=>item.done==statusDone);
console.log(filtertodo);

const ToggleStatusDone = (flag:boolean) =>{
 SetSttusDone(flag);
}
 return(
  <>
  <nav className="col-6 mb-3">
   <div className="nav nav-tabs" id="nav-tab" role="tablist">
    <a className={`nav-item nav-link font-weight-bold ${!statusDone ? 'Active':''}`} id="nav-home-tab" onClick={() => ToggleStatusDone(false)} >undone <Badge bg="secondary" text="white">{todo.filter(item=>item.done==false).length}</Badge></a>
    <a className={`nav-item nav-link font-weight-bold ${statusDone ? 'Active':''}`} id="nav-profile-tab" onClick={() => ToggleStatusDone(true)} >done <Badge bg="success" text="white">{todo.filter(item=>item.done==true).length}</Badge></a>
   </div>
  </nav>
 {
   
   filtertodo.length == 0 ?
     <p>There isn't any tasks to Do</p>
     : filtertodo.map(items =>
      <Todo key={items.key} item={items} />
     )
   
 }
 

 </>
 )
}

export default TodoList;