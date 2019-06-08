import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Message from "./containers/MessageContainer"
import Home from "./screens/Home"

class App extends Component {
    render() {
        const { message } = this.props;
        return (
            <div className="App">
                <Home />

            </div>
        );
    }
}

export default App;