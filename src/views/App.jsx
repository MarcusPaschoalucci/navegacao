import React from "react";
import './App.css'
import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";

import { BrowserRouter } from 'react-router-dom';
// da pra importar usando o alias, dai pra declarar na aplciação tem q usar o alias
// import { BrowserRouter as Router} from 'react-router-dom';

// const App = props => (
//     <div className="App">
//         <BrowserRouter>
//             <Menu/>
//             <Content/>
//         </BrowserRouter>
//     </div>
// )

// export default App

const App = props => (
    <div classname="App">
        <BrowserRouter>
            <Menu/>
            <Content/>
        </BrowserRouter>
    </div>
)

export default App
