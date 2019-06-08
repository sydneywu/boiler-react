import React, { Component } from "react";
import {connect} from "react-redux";

class ProductContainer extends Component {
    render(){
        const { fetching, product, error } = this.props;

        return (
            <div>
                <div>{JSON.stringify(this.props.product)}</div>

                {product ? (
                    <p className="App-intro">Keep clicking for new dogs</p>
                ) : (
                    <p className="App-intro">Replace the React icon with a dog!</p>
                )}

                {fetching ? (
                    <button disabled>Fetching...</button>
                ) : (
                    <button onClick={this.props.onRequestProduct}>Request a Product</button>
                )}

                {error && <p style={{ color: "red" }}>Uh oh - something went wrong!</p>}
            </div>
        )
    }
}


const mapStateToProps = state => {
    let {productReducer} = state
    return {
        product: productReducer.product,
        error: productReducer.error,
        fetching: productReducer.fetching,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onRequestProduct: () => dispatch({ type: "FETCH_PRODUCT" })
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);