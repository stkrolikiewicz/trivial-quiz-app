import Question from "../../../../../../../../types/question.type";

const Quiz = (props: any) => {
    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log("Submit");
    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <form onSubmit={handleSubmit}>
                        {props.quiz.map((question: any, index: number) => (
                            <fieldset key={index}>
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
                                            <label htmlFor={`answear${index}`}>
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
                </div>
            </div>
        </div>
    );
};

export default Quiz;
