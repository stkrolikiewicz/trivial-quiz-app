import React, { useEffect, useState } from "react";
import OpentdbService from "../../../../services/opentdb.service";

const Question = () => {
    const opentdb = new OpentdbService();
    const [question, setQuestion] = useState("");
    useEffect(() => {
        opentdb.getQuestion().then((data) => {
            setQuestion(data);
        });
    }, []);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <h1>Question</h1>
                    {question === "" ? <p>Loading...</p> : <p>{question}</p>}
                </div>
            </div>
        </div>
    );
};

export default Question;
