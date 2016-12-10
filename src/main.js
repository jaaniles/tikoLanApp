import React from 'react';
import ReactDOM from 'react-dom';
import thunk from "redux-thunk"
import { Provider } from "react-redux"

import { Map } from "immutable"

import { applyMiddleware, createStore } from "redux";

import PlayerEntry from "./components/PlayerEntry"
import Leaderboard from "./containers/Leaderboard"
import Form        from "./containers/Form"

import reducer from "./reducers/index"

import { addPlayerEntry } from "./actions/player"

const store = createStore(reducer, applyMiddleware(thunk))

/*store.dispatch(addPlayer("anonym", 0))
store.dispatch(addPlayer("Jaani", 2, 4))
store.dispatch(addPlayer("Joona"))
*/

function App(){
    return (
        <div>
            <div className="topnav">
                <h4 className="title">-[.__.]-></h4>
            </div>
            <br/>
            <div>
                <Leaderboard/>
                <Form/>
            </div>
        </div>
    )
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);