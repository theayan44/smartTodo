import React, { useState } from 'react';
import Header from "./Header";
import { Todos } from "./Todos";
import { Footer } from "./Footer";

export const Home = (props) => {
    const [newTodos, setNewTodos] = useState(props.todos);

    const searchItem = (searchValue, searchCategory) => {
        setNewTodos(
            props.todos.filter((item) => {
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
            <Todos todos={newTodos} heading="All Todos" onDelete={props.onDelete} changeImportant={props.changeImportant} />
            <br />
            <Footer />
        </>
    )
}
