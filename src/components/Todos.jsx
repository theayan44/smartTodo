import React from 'react';
import { TodoItem } from "./TodoItem";

export const Todos = (props) => {
    let count = 0;
    if (props.todos.length !== 0) {
        return (
            <div className="container">
                <h2 className="text-center my-3">{props.heading}</h2>
                {props.todos.map((todoItem) => {
                    count++;
                    return (
                        <TodoItem
                            key={count}
                            todoItem={todoItem}
                            onDelete={props.onDelete}
                            changeImportant={props.changeImportant}
                            index={count}
                        />
                    );
                })}
            </div>
        );
    } else {
        return (
            props.heading === "All Todos" ?
                <>
                    <h5 className="text-center my-3">No todos to display.</h5>
                </>
                : <>
                    <h5 className="text-center my-3">No Importants to display.</h5>
                </>
        );
    }
}
