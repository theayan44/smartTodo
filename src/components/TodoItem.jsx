import React from 'react';
import { NavLink } from 'react-router-dom';

export const TodoItem = (props) => {
    return (
        <div className="card my-2">
            <div className="card-header"
                style={{
                    display: 'flex',
                    justifyContent: 'space-between'
                }} >
                <span>{props.index}</span>
                <div style={{
                    display: 'flex',
                    gap: '1rem',
                }}>
                    {/* Important icon/button */}
                    {props.todoItem.important ?
                        <i className="bi bi-star-fill" id='icons'
                            onClick={() => {
                                props.changeImportant(props.todoItem);
                            }}
                            style={{ color: 'skyblue' }}></i>
                        : <i className="bi bi-star" id='icons'
                            onClick={() => {
                                props.changeImportant(props.todoItem);
                            }}></i>
                    }

                    {/* Edit icon/button */}
                    <NavLink
                        className="nav-link active"
                        aria-current="page"
                        to={`/update-todo/${props.todoItem.slno}`}><i className="bi bi-pencil-square" id='icons'></i></NavLink>

                    {/* Delete icon/button */}
                    <i className="bi bi-trash" id='icons'
                        onClick={() => {
                            if (window.confirm("Are you sure to permanently delete this Todo!!!"))
                                props.onDelete(props.todoItem);
                            window.location.reload();
                        }}
                    ></i>
                </div>
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.todoItem.title}</h5>
                <p className="card-text">{props.todoItem.description}</p>
            </div>
        </div>
    )
}
