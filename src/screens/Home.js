import React, { Component } from "react";
import logo from "../logo.svg";
import MessageContainer from "../containers/MessageContainer"
import ProductContainer from "../containers/ProductContainer"
import CommentContainer from "../containers/CommentContainer"

class App extends Component {
    render() {
        const { message } = this.props;
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React Boiler with redux saga</h1>
                </header>

                <MessageContainer />
                <ProductContainer />
                <CommentContainer />

            </div>
        );
    }
}

export default App;