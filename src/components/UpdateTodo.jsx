import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Footer } from './Footer';
import Header from './Header';
import { useNavigate } from 'react-router-dom';


const UpdateTodo = (props) => {
    // for Routing to Home Page after Update
    const navigate = useNavigate();
    const navigateToHome = () => {
        navigate('/');
    };

    const [todoItem, setTodoItem] = useState({});
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [important, setimportant] = useState(false);
    const [checkTitle, setCheckTitle] = useState(true);
    const [checkDesc, setCheckDesc] = useState(true);

    const ob = useParams();
    const serialNo = Number(ob.slno);

    useEffect(() => {
        const index = props.todos.findIndex((item) => {
            return item.slno === serialNo;
        })
        setTodoItem(props.todos[index]);
    }, [ob]);
    useEffect(() => {
        setTitle(todoItem.title);
        setDesc(todoItem.description);
    }, [todoItem]);
    return (
        <>
            <Header search={false} />
            <div
                className="container mt-3 mb-3 w-75   border border-dark border-opacity-10 rounded "
                style={{ height: "78vh" }}
            >
                <h3 className="text-center pt-3">Update Your Todo Here</h3>

                <div className="mb-3 pt-5">
                    <label htmlFor="exampleFormControlInput1" className="form-label">
                        Todo Title
                    </label>
                    <input
                        type="email"
                        value={checkTitle ? todoItem.title : title}
                        className="form-control"
                        id="exampleFormControlInput1"
                        placeholder="Write todo title here..."
                        onChange={(e) => { setCheckTitle(false); setTitle(e.target.value) }}
                        required
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label">
                        Todo Description
                    </label>
                    <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        placeholder='Description...'

                        value={checkDesc ? todoItem.description : desc}
                        rows="3"
                        onChange={(e) => { setCheckDesc(false); setDesc(e.target.value) }}
                        required
                    ></textarea>
                </div>

                <div className="form-check mb-3">
                    <input className="form-check-input"
                        type="checkbox"
                        value={important}
                        id="flexCheckDefault"
                        onChange={() => { setimportant(!important); }}
                        style={{ cursor: 'pointer' }} />
                    <label className="form-check-label" htmlFor="flexCheckDefault" style={{ cursor: 'pointer' }}>
                        Mark as Important!
                    </label>
                </div>

                <div className="float-end mt-2">
                    <button type="button"
                        onClick={() => {

                            props.onUpdate(serialNo, title, desc, important);
                            setTimeout(() => {
                                alert("Todo Updated. Check the List...");
                                navigateToHome();
                            }, 500);
                        }}
                        className="btn btn-primary ms-3 btn shadow-sm">
                        Update
                    </button>
                    <button
                        onClick={() => { navigateToHome(); }}
                        type="submit"
                        className="btn btn-outline-primary ms-3 btn shadow-sm"
                    >
                        Cancel
                    </button>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default UpdateTodo