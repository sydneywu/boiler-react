import React, { Component } from "react";
import {connect} from "react-redux";
import {commentConst} from "../redux/Ducks/commentDuck";

class Product extends Component {
    render(){
        return (
            <div>
                <div>{JSON.stringify(this.props.comments)}</div>

                {this.props.loading ? (
                    <button disabled>Fetching...</button>
                ) : (
                    <button onClick={this.props.onRequestComments}>Request Comments</button>
                )}

                {this.props.loading ? (
                    <button disabled>Fetching...</button>
                ) : (
                    <button onClick={this.props.onCreateComment}>Create Comments</button>
                )}

                {this.props.commentError && <p style={{ color: "red" }}>{this.props.commentError.title}</p>}
            </div>
        )
    }
}

const mapStateToProps = state => {
    let {commentReducer} = state;
    let {comments, error: commentError, loading} = commentReducer;
    return {
        comments, commentError, loading
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestComments: () => dispatch({ type: commentConst.FETCH_COMMENTS_ACTION }),
        onCreateComment: () => dispatch({ type: commentConst.CREATE_COMMENT_ACTION, payload:{comment: {name: 'from penguin'}}})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);