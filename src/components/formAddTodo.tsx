import React, { useState } from 'react';
import { ReactElement } from "react";

interface Props {
 AddTodo:(value: string) => void;

}

const FormAddTodo =({AddTodo}: Props): ReactElement=>{
 const[Text,SetText]=useState('');

const formHandler = (e:any)=>{
 e.preventDefault();
 AddTodo(Text);
 SetText('');

}

const InputHandler =(e:any)=> SetText(e.target.value)


 return(
  <>
     <form className="form-inline" onSubmit={formHandler}>
        <div className="form-group d-flex">
         <input type="text" className="form-control mx-sm-3" placeholder="i want to do ..." onChange={InputHandler} value={Text} />
         <button type="submit" className="btn btn-primary">add</button>
        </div>
      </form>
  </>
 )
}

export default FormAddTodo;