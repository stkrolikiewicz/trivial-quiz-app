import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../../../services/opentdb.service";

import Category from "../../../types/category.type";

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
                    {categoriesLoading && (
                        <div
                            className="spinner-grow text-primary"
                            role="status"
                        ></div>
                    )}
                    {categories.length > 0 && (
                        <form onSubmit={handleSubmit} className="card p-3">
                            <div className="mb-3">
                                <label
                                    htmlFor="category"
                                    className="form-label"
                                >
                                    Select category:
                                </label>
                                <select
                                    value={category}
                                    onChange={(e) =>
                                        setCategory(e.target.value)
                                    }
                                    className="form-select"
                                >
                                    {categories.map((category, index) => {
                                        return (
                                            <option
                                                key={index}
                                                value={category.id}
                                            >
                                                {category.name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
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
