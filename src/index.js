import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/App';
import { BrowserRouter } from 'react-router-dom';

import state from './redux/state';


const root = ReactDOM.createRoot(document.getElementById('root'));

// const messages = [
//     {message: "Hi!", id: 1},
//     {message: "Hi Margaret!", id: 2},
//     {message: "Hi Andry!", id: 3},
//     {message: "Hi Dima!", id: 4},
//     {message: "Hi somebody!", id: 5},
// ]

// const posts = [
//     {post:"Hey, howe are you?", id: 1},
//     {post:"Hey!",id: 2},
//     {post:"I am fine!",id: 3},
// ]

// const infoData = [
//     {name: "Dima", id: 1},
//     {name: "Tania", id: 2},
//     {name: "Margaret", id: 3},
//     {name: "Andriy", id: 4}
// ]
root.render(
    <BrowserRouter>
        <App state = {state} />
    </BrowserRouter>
);

