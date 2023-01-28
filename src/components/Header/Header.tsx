import React from "react";
import styles from "./Header.module.sass";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h1>Trivial Quiz App</h1>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
