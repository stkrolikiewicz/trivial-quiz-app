import React from "react";
import styles from "./Main.module.sass";
import { Routes, Route } from "react-router-dom";
import { HomePage, Question } from "./components";

const Main = () => {
    return (
        <main className={styles.main}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/question" element={<Question />} />
            </Routes>
        </main>
    );
};

export default Main;
