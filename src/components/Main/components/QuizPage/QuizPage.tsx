import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
    getCategories,
    getQuestion,
} from "../../../../services/opentdb.service";

import Category from "../../../../types/category.type";
import Question from "../../../../types/question.type";

const QuizPage = () => {
    const navigate = useNavigate();
    const [question, setQuestion] = useState<Question>();
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState<Category[]>([]);
    const [categoriesLoading, setCategoriesLoading] = useState(false);
    useEffect(() => {
        getQuestion()
            .then((res) => {
                setQuestion(res);
            })
            .then(() => {
                setLoading(false);
            });
    }, []);

    const getNewQuestion = () => {
        setLoading(true);
        getQuestion()
            .then((res) => {
                setQuestion(res);
            })
            .then(() => {
                setLoading(false);
            });
    };

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
                    <h2>Question:</h2>
                    {loading ? <p>Loading...</p> : <p>{question?.question}</p>}
                    <button
                        className="btn btn-primary"
                        onClick={getNewQuestion}
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "Get new question"}
                    </button>
                    <br />
                    <br />
                    {categories.length == 0 && (
                        <button
                            className="btn btn-primary"
                            onClick={showCategories}
                            disabled={categoriesLoading}
                        >
                            Show categories
                        </button>
                    )}
                    {categoriesLoading && <p>Loading...</p>}
                    {categories.length > 0 && <h2>Categories:</h2>}
                    {categories.length > 0 &&
                        categories.map((category, index) => {
                            return (
                                <p key={index}>
                                    id: {category.id}, name: {category.name}
                                </p>
                            );
                        })}
                </div>
            </div>
        </div>
    );
};

export default QuizPage;
