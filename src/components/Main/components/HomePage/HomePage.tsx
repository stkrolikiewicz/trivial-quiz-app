import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12">
                    <button
                        className="btn btn-secondary"
                        onClick={() => navigate("/question")}
                    >
                        Start a quiz!
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomePage;
