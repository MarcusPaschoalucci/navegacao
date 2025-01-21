import React from "react";
import './Content.css';
import { Routes, Route } from "react-router-dom";

import Home from "../../views/examples/Home";
import About from "../../views/examples/About";
import Param from "../../views/examples/Params";
import NotFound from "../../views/examples/NotFound";

const Content = props => (
    <main className="Content">
        {/* <h1>Componente Content</h1> */}
        <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/param/:id" element={<Param />} />
            <Route path="/" exact element={<Home />} />
            <Route path="*" element={<NotFound />} />
            {/* Home sem exact por ultimo => qnd n encontrar uma pag vai voltar pra home! */}
            {/* <Route path="/"  element={<Home />} /> */}
        </Routes>
    </main>
)

export default Content