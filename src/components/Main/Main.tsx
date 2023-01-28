import React from "react";
import styles from "./Main.module.sass";

const Main = () => {
    return (
        <main className={styles.main}>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <button>Get Question</button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Main;
