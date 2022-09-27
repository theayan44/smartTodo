import React, { useState } from 'react';
import { Footer } from "./Footer";
import Header from "./Header";

export const AddTodo = (props) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [important, setimportant] = useState(false);

  return (
    <>
      <Header search={false} />
      <div
        className="container mt-3 mb-3 w-75   border border-dark border-opacity-10 rounded "
        style={{ height: "78vh" }}
      >
        <h3 className="text-center pt-3">Add Your Todo Here</h3>

        <div className="mb-3 pt-5">
          <label htmlFor="exampleFormControlInput1" className="form-label">
            Todo Title
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Write todo title here..."
            onChange={(e) => { setTitle(e.target.value) }}
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
            rows="3"
            onChange={(e) => { setDesc(e.target.value) }}
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
          <button type="button" onClick={() => {
            props.onAdd(title, desc, important);
            setTimeout(() => {
              alert("Todo added. Check the List...");
              window.location.reload();
            }, 500);
          }} className="btn btn-primary ms-3 btn shadow-sm">
            Add
          </button>
          <button
            onClick={() => { window.location.reload() }}
            type="submit"
            className="btn btn-outline-primary ms-3 btn shadow-sm"
          >
            Clear
          </button>
        </div>
      </div>
      <Footer />
    </>
  )
}
