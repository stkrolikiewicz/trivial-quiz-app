import React, { useState } from "react";
import Question from "../../../../../../../../types/question.type";

const Quiz = (props: any) => {
    const [answers, setAnswers] = useState<string[]>([]);
    const [submitted, setSubmitted] = useState(false);
    const [score, setScore] = useState(0);
    const [showAnswears, setShowAnswears] = useState(false);

    const correctAnswers = props.quiz.map((question: Question) => {
        return question.correct_answer;
    });

    const handleSubmit = (e: any) => {
        e.preventDefault();
        setSubmitted(true);
        console.log(answers);
        console.log(correctAnswers);
        checkAnswers();
        console.log("Submit");
    };

    const checkAnswers = () => {
        let score = 0;
        answers.forEach((answer, index) => {
            if (answer === correctAnswers[index]) {
                score++;
            }
        });
        setScore(score);
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    {!submitted && (
                        <form onSubmit={handleSubmit}>
                            {props.quiz.map((question: any, index: number) => (
                                <fieldset
                                    key={index}
                                    id={index.toString()}
                                    onChange={(e) => {
                                        const target =
                                            e.target as HTMLInputElement;
                                        console.log(target.value);
                                        const newAnswers = answers;
                                        newAnswers[index] = target.value;
                                        setAnswers(newAnswers);
                                    }}
                                >
                                    <legend>{question.question}</legend>
                                    {question.answers.map(
                                        (answear: string, index: number) => (
                                            <div key={answear}>
                                                <input
                                                    id={`answear${index}`}
                                                    type="radio"
                                                    value={answear}
                                                    name={question.question}
                                                />
                                                <label
                                                    htmlFor={`answear${index}`}
                                                >
                                                    {answear}
                                                </label>
                                            </div>
                                        )
                                    )}
                                </fieldset>
                            ))}
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </form>
                    )}
                    {submitted && (
                        <div>
                            <div>
                                <h2>Quiz finished</h2>
                                <h4>Score: {score}/10</h4>
                                <button
                                    className="btn btn-primary"
                                    onClick={() => {
                                        setShowAnswears(!showAnswears);
                                    }}
                                >
                                    {!showAnswears
                                        ? "Show answears"
                                        : "Hide answears"}
                                </button>
                            </div>
                            {showAnswears && (
                                <div>
                                    {props.quiz.map(
                                        (qeustion: any, index: number) => (
                                            <div key={index}>
                                                <h5>{qeustion.question}</h5>
                                                <p>
                                                    Your answear:{" "}
                                                    {answers[index]}
                                                </p>
                                                <p>
                                                    Correct answear:{" "}
                                                    {qeustion.correct_answer}
                                                </p>
                                            </div>
                                        )
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Quiz;
