import React, { ReactElement, useState } from "react";
import FormTodo from "../../form-todo";
import EditTodo from "./editTodo";

interface Props {
 item:FormTodo;
 DeleteTodo: (x:number) => void;
 Toggletodo: (x:number) => void;
 Edittodo: (x:number,y:string) => void;

}
  const Todo  = ({item,DeleteTodo,Toggletodo,Edittodo}: Props): ReactElement=>{ 
  const[edit,setedit]=useState(false);

  const EditHandler=(Text:string) =>{
    Edittodo(item.key,Text);
    setedit(false)
  }

 return(
   <>
   {
   !edit ?
   <div className="col-6 mb-2">
      <div className="d-flex justify-content-between align-items-center border rounded p-3">
        <div>
          {item.text}
        </div>
        <div>
          <button type="button" className={`btn btn-sm m-1 ${item.done ? 'btn-warning':'btn-success'}`} onClick={()=>Toggletodo(item.key)}>{!item.done ? 'done':'undone'}</button>
          <button type="button" className="btn btn-info btn-sm m-1" onClick={()=>setedit(true)}>edit</button>
          <button type="button" className="btn btn-danger btn-sm m-1" onClick={()=>DeleteTodo(item.key)} >delete</button>
        </div>
      </div>
  </div>
   :
  <EditTodo text={item.text} Edit={EditHandler}/> 
   
  } 
   </>

 )
}


export default Todo;