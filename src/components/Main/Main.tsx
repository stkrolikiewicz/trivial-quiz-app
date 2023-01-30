import React from "react";
import styles from "./Main.module.sass";
import { Routes, Route, useParams } from "react-router-dom";
import { HomePage, QuizPage, SelectedQuiz } from "./components";

const Main = () => {
    return (
        <main className={styles.main}>
            <Routes>
                <Route path="/trivial-quiz-app/" element={<HomePage />} />
                <Route path="/trivial-quiz-app/quiz" element={<QuizPage />} />
                <Route
                    path="/trivial-quiz-app/quiz/:category"
                    element={<SelectedQuiz />}
                />
            </Routes>
        </main>
    );
};

export default Main;
