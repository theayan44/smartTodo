import './App.css';
import { AddTodo } from "./components/AddTodo";
import { Route, Routes } from "react-router-dom";
import { ViewImportants } from "./components/ViewImportants";
import { Home } from "./components/Home";
import { useState, useEffect } from "react";
import UpdateTodo from './components/UpdateTodo';

//Get items from local storage
// const getLocalItems = () => {
//   let list = localStorage.getItem('todoList');
//   // console.log(list);
//   if (list) {
//     return JSON.parse(list);
//   } else {
//     return [];
//   }
// }

function App() {
  // const [todos, setTodos] = useState(getLocalItems());

  // const onDelete = (todoItem) => {
  //   // console.log("I am on Delete");
  //   setTodos(
  //     todos.filter((item) => {
  //       return item !== todoItem;
  //     })
  //   );
  // };

  // const onAdd = (todoTitle, todoDesc, imp) => {
  //   // console.log("I am on Add");
  //   setTodos([...todos,
  //   {
  //     slno: todos.length !== 0 ? todos[todos.length - 1].slno + 1 : todos.length + 1,
  //     title: todoTitle,
  //     description: todoDesc,
  //     important: imp
  //   }
  //   ]);
  // };

  // const changeImportant = (ob) => {
  //   // // This will also works
  //   // const index = todos.findIndex((ob) => {
  //   //   return ob.slno === no;
  //   // })
  //   const index = todos.indexOf(ob);
  //   todos[index].important = !todos[index].important;
  //   setTodos([...todos]);
  // }

  // const onUpdate = (serialNo, updatedTitle, updatedDesc, updatedImportant) => {
  //   const index = todos.findIndex((item) => {
  //     return item.slno === serialNo;
  //   });
  //   todos[index].title = updatedTitle;
  //   todos[index].description = updatedDesc;
  //   todos[index].important = updatedImportant;
  //   setTodos([...todos]);
  // }

  // //Set the todos to local storage
  // useEffect(() => {
  //   localStorage.setItem('todoList', JSON.stringify(todos));
  // }, [todos])


  return (
    <><h1>Hello World</h1>
      {/* <Routes>
        <Route path="/" element={<Home todos={todos} onDelete={onDelete} changeImportant={changeImportant} />} />
        <Route path="/add-todo" element={<AddTodo onAdd={onAdd} />} />
        <Route path="/view-importants" element={<ViewImportants todos={todos} onDelete={onDelete} changeImportant={changeImportant} />} />
        <Route path="/update-todo/:slno" element={<UpdateTodo todos={todos} onUpdate={onUpdate} />} />
      </Routes> */}
    </>
  );
}

export default App;
