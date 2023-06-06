/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import { FaCrown } from "react-icons/fa";
import { AiFillCaretRight } from "react-icons/ai";
import "./css files/Navbar.css";
import { Link } from "react-router-dom";

import { useState } from "react";

// const SearchbarDropdown = (props) => {
//     const { options, onInputChange } = props;
//     const [displayDropdown, setDisplayDropdown] = useState(false);

//     useEffect(() => {
//         const hideDropdown = () => {
//             setDisplayDropdown(false);
//         };
//         document.addEventListener("click", hideDropdown);

//         return () => {
//             document.removeEventListener("click", hideDropdown);
//         };
//     }, []);

//     return (
//         <div className="search-bar-dropdown" onClick={(e) => e.stopPropagation()}>
//             <input
//                 id="search-bar"
//                 type="text"
//                 className="form-control"
//                 placeholder="Search"
//                 onChange={onInputChange}
//                 onFocus={() => setDisplayDropdown(true)}
//             />
//             {displayDropdown && (
//                 <ul id="results" className="list-group">
//                     {options.map((option, index) => (
//                         <button
//                             key={index}
//                             type="button"
//                             className="list-group-item list-group-item-action"
//                             onClick={() => {
//                                 onInputChange({ target: { value: option } });
//                                 setDisplayDropdown(false);
//                             }}
//                         >
//                             {option}
//                         </button>
//                     ))}
//                 </ul>
//             )}
//         </div>
//     );
// };

const defaultOptions = [];
for (let i = 0; i < 10; i++) {
    defaultOptions.push(`option ${i}`);
    defaultOptions.push(`suggestion ${i}`);
    defaultOptions.push(`advice ${i}`);
}

function Navbar() {
    const [options, setOptions] = useState([]);
    const [displayDropdown, setDisplayDropdown] = useState(false); // added this line
    const onInputChange = (event) => {
        setOptions(
            defaultOptions.filter((option) => option.includes(event.target.value))
        );
    };
    return (
        <div>
            <nav
                className="navbar navbar-expand-lg bg-body-tertiary shadow"
                bg="dark"
                style={{ backgroundColor: "#ffe2ac" }}
            >
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand pe-5 font-monospace">
                        Project-X
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse btns" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown">
                                <Link
                                    to="#"
                                    className="nav-link dropdown-toggle "
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    Internships
                                </Link>
                                <ul className="dropdown-menu ">
                                    <li>
                                        <Link to="#" className="dropdown-item">
                                            By Locations <AiFillCaretRight className="hide" />
                                        </Link>
                                        <ul className="dropdown-menu dropdown-submenu">
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    Submenu item 1
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    Submenu item 2
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    Submenu item 2
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="#" className="dropdown-item">
                                            By Positions <AiFillCaretRight className="hide" />
                                        </Link>
                                        <ul className="dropdown-menu dropdown-submenu">
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    Submenu item 4
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    Submenu item 2
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    Submenu item 2
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link to="#" className="dropdown-item">
                                            By Categories <AiFillCaretRight className="hide" />
                                        </Link>
                                        <ul className="dropdown-menu dropdown-submenu">
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    Submenu item 7
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    Submenu item 2
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="#" className="dropdown-item">
                                                    Submenu item 2
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link ">
                                    Finance Edu
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="#" className="nav-link d-inline-flex ">
                                    Premium <FaCrown />
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/ContactUs" className="nav-link ">
                                    Contact Us
                                </Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            {/* <SearchbarDropdown className="form-control me-2" options={options} onInputChange={onInputChange} /> */}
                            <input
                                class="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button class="btn btn-outline-success me-2" type="submit">
                                Search
                            </button>
                        </form>

                        <ul className="navbar-nav d-flex flex-row">
                            <li className="nav-item p-2">
                                <button className="btn btn-light">
                                    <Link to="/login" className="text-decoration-none text-black">
                                        Login
                                    </Link>
                                </button>
                            </li>
                            <li className="nav-item p-2">
                                <button className="btn btn-success">
                                    <Link to="login" className="text-decoration-none text-white">
                                        Register
                                    </Link>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
