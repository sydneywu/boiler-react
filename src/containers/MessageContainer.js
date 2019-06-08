import React, { Component } from "react";
import {connect} from "react-redux";

class MessageContainer extends Component {
    render(){
        const { fetching, dog, onRequestDog, onRequestMessage, error } = this.props;

        return (
            <div>
                <div>{JSON.stringify(this.props.message)}</div>

                {dog ? (
                    <p className="App-intro">Keep clicking for new dogs</p>
                ) : (
                    <p className="App-intro">Replace the React icon with a dog!</p>
                )}

                {fetching ? (
                    <button disabled>Fetching...</button>
                ) : (
                    <button onClick={onRequestDog}>Request a Dog</button>
                )}

                {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
            </div>
        )
    }
}


const mapStateToProps = state => {
    let {messageReducer} = state
    return {
        message: messageReducer.message,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestDog: () => dispatch({ type: "API_MESSAGE_REQUEST" }),
        onRequestMessage: () => dispatch({ type: "API_MESSAGE_REQUEST" })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MessageContainer);