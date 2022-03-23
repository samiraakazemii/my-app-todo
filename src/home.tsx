
import * as React from "react";
import { ReactElement, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';


//import Component
import Headerform from './components/headerform'
import FormAddTodo from "./components/formAddTodo";
import FormTodo from "./form-todo";
import TodoList from "./components/todoList";

const Home = (): ReactElement => {

const [todo,Settodo]=useState<FormTodo[]>([]);


 const AddTodo = (text:string) =>{
  Settodo( todo => [...todo,{
   key: Date.now(),
   text: text,
   done: false}]
    
  )
 }

  return (
    <>
      <Headerform />
      <section className="jumbotron">
         <div className="container d-flex flex-column align-items-center">
           <h1 className="jumbotron-heading">Welcome!</h1>
           <p className="lead text-muted">To get started, add some items to your list:</p>
           <FormAddTodo AddTodo={AddTodo}/>
         </div>
       </section>
       <div className="todosList">
           <div className="container">
             <div className="d-flex flex-column align-items-center ">
               <TodoList todo={todo}/>
             </div>
           </div>
        </div>
      
      
    </>
  );
};

export default Home;