import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getQuiz } from "../../../../../../services/opentdb.service";
import Question from "../../../../../../types/question.type";
import Quiz from "./components/Quiz/Quiz";

const SelectedQuiz = () => {
    const { category } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [quiz, setQuiz] = useState<Question[]>([]);

    useEffect(() => {
        showQuiz();
    }, []);

    const showQuiz = () => {
        setLoading(true);
        getQuiz(category as string)
            .then((res) => {
                setQuiz(res);
            })
            .then(() => {
                setLoading(false);
            });
    };
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <button
                        className="btn btn-secondary"
                        onClick={() => navigate("/quiz")}
                    >
                        Chose another category
                    </button>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    {quiz.length && <h2>Category: {quiz[0].category}</h2>}
                </div>
                <div className="col-12">
                    {loading && <p>Loading...</p>}
                    {quiz.length && <Quiz quiz={quiz} />}
                </div>
            </div>
        </div>
    );
};

export default SelectedQuiz;
