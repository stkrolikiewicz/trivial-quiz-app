import React, { useEffect, useState } from "react";
import { getQuestion } from "../../../../services/opentdb.service";

const Question = () => {
    const [question, setQuestion] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getQuestion()
            .then((res) => {
                setQuestion(res);
            })
            .then(() => {
                setLoading(false);
            });
    }, []);

    const handleClick = () => {
        setLoading(true);
        getQuestion()
            .then((res) => {
                setQuestion(res);
            })
            .then(() => {
                setLoading(false);
            });
    };
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h2>Question:</h2>
                    {loading ? <p>Loading...</p> : <p>{question}</p>}
                    <button
                        className="btn btn-primary"
                        onClick={handleClick}
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "Get new question"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Question;
