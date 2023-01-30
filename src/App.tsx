import React from "react";
import "./styles/_app.sass";
import { Header, Main, Footer } from "./components";

function App() {
    return (
        <div className="body">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;
