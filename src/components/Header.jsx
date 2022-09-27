import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../App.css";

const Header = (props) => {
  const [searchCategory, setSearchCategory] = useState('all');
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light sticky-top">
        <div className="container-fluid">
          <NavLink style={{ marginRight: '3rem' }} className="navbar-brand fw-bold fs-4" to="/">
            My Todo List
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                  id='menu'
                >
                  All Todos
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/add-todo"
                  id='menu'
                >
                  Add Todo
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/view-importants"
                  id='menu'
                >
                  View Importants
                </NavLink>
              </li>
            </ul>
            {
              props.search ?
                <form className="d-flex" role="search">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search Here..."
                    aria-label="Search"
                    onChange={(e) => {
                      props.searchItem(e.target.value, searchCategory);
                    }}
                  />
                  {/* <button className="btn btn-outline-success" type="submit">
                    Search
                  </button> */}
                  <select id='selectButton'
                    onChange={(e) => {
                      setSearchCategory(e.target.value);
                    }}
                  >
                    <option value="all">All</option>
                    <option value="title">By Title</option>
                    <option value="description">By Description</option>
                  </select>
                </form>
                : <></>
            }
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header;
