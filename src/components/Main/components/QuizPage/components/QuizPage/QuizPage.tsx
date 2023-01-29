import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    getCategories,
    getQuestion,
} from "../../../../../../services/opentdb.service";

import Category from "../../../../../../types/category.type";

const QuizPage = () => {
    const navigate = useNavigate();
    const [categories, setCategories] = useState<Category[]>([]);
    const [categoriesLoading, setCategoriesLoading] = useState(false);
    const [category, setCategory] = useState("9");
    useEffect(() => {
        showCategories();
    }, []);

    const showCategories = () => {
        console.log("Show categories");
        setCategoriesLoading(true);
        getCategories()
            .then((res) => {
                setCategories(res);
            })
            .then(() => {
                setCategoriesLoading(false);
            });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Submit");
        console.log(category);
        navigate(`/quiz/${category}`);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <button
                        className="btn btn-secondary"
                        onClick={() => navigate("/")}
                    >
                        Back to home
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    {categoriesLoading && <p>Loading...</p>}
                    {categories.length > 0 && (
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="category">Select category:</label>
                            <br />
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                            >
                                {categories.map((category, index) => {
                                    return (
                                        <option key={index} value={category.id}>
                                            {category.name}
                                        </option>
                                    );
                                })}
                            </select>
                            <br />
                            <button type="submit" className="btn btn-primary">
                                Start quiz!
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default QuizPage;
