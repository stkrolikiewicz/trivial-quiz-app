import React from "react";
import styles from "./Main.module.sass";
import { Routes, Route, useParams } from "react-router-dom";
import { HomePage, QuizPage, SelectedQuiz } from "./components";

const Main = () => {
    const { category } = useParams();
    return (
        <main className={styles.main}>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/quiz" element={<QuizPage />} />
                <Route path="quiz/:category" element={<SelectedQuiz />} />
            </Routes>
        </main>
    );
};

export default Main;
