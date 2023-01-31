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
            <div className="row mx-lg-3  my-3 mx-sm-0">
                <div className="col-12 mb-3 mx-sm-0">
                    {!loading && quiz.length && (
                        <h2 className="category">
                            Category: <em>{quiz[0].category}</em>
                        </h2>
                    )}
                </div>
                <div className="col-12 mx-sm-0">
                    {loading && (
                        <div
                            className="spinner-grow text-primary"
                            role="status"
                        ></div>
                    )}
                    {quiz.length > 0 && <Quiz quiz={quiz} />}
                </div>
            </div>
        </div>
    );
};

export default SelectedQuiz;
