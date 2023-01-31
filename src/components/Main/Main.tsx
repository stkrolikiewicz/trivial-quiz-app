import { Routes, Route } from "react-router-dom";
import { HomePage, QuizPage, CategoriesPage, NotFound } from "./components";

const Main = () => {
    return (
        <main>
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<HomePage />} />
                <Route path="/quiz" element={<QuizPage />} />
                <Route path="/quiz/:category" element={<CategoriesPage />} />
            </Routes>
        </main>
    );
};

export default Main;
