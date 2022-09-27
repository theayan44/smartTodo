import React, { useState } from 'react';
import { Footer } from "./Footer";
import { Todos } from "./Todos";
import Header from "./Header";

export const ViewImportants = (props) => {
    const [newTodos, setNewTodos] = useState(
        props.todos.filter((item) => {
            return item.important === true;
        })
    );

    const impTodos = props.todos.filter((item) => {
        return item.important === true;
    })

    const searchItem = (searchValue, searchCategory) => {
        setNewTodos(
            impTodos.filter((item) => {
                if (searchCategory === 'all') {
                    const str = item.title.toLowerCase() + item.description.toLowerCase();
                    return str.indexOf(searchValue.toLowerCase()) >= 0;
                } else if (searchCategory === 'title') {
                    return item.title.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0;
                } else {
                    return item.description.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0;
                }
            })
        )
    }
    return (
        <>
            <Header search={true} searchItem={searchItem} />
            <Todos todos={newTodos} heading="Important Todos" onDelete={props.onDelete} changeImportant={props.changeImportant} />
            <br></br>
            <Footer />
        </>
    )
}
