import React, { ReactElement } from "react";
import FormTodo from "../form-todo";

interface Props {
 item:FormTodo;

}
const Todo  = ({item}: Props): ReactElement=>{
console.log(item);

 return(
  <div className="col-6 mb-2">
  <div className="d-flex justify-content-between align-items-center border rounded p-3">
    <div>
      {item.text}
    </div>
    <div>
      <button type="button" className="btn btn-sm mr-1">done/undone</button>
      <button type="button" className="btn btn-info btn-sm mr-1" >edit</button>
      <button type="button" className="btn btn-danger btn-sm" >delete</button>
    </div>
  </div>
</div>
 )
}


export default Todo;