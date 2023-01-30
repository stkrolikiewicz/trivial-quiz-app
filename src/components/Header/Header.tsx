import React from "react";
import styles from "./Header.module.sass";
import { useNavigate, useLocation } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <header className={styles.header}>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <h1>
                        <span className="trivial">Trivial</span> Quiz App
                    </h1>
                    {location.pathname !== "/" && (
                        <button
                            className="nav-item btn btn-outline-primary"
                            onClick={() => navigate("/")}
                        >
                            Back to home
                        </button>
                    )}
                </div>
            </nav>
        </header>
    );
};

export default Header;
