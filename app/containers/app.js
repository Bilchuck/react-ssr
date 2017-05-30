import React, { Component } from 'react';
import { reducer } from '../reducers';

export default class extends Component {
    constructor(...props) {
        super(...props);
        this.state = this.props.store.getState();
    }
    clickHandler(e) {
        alert('Server rendered elements works well');
        console.log(e);
    }
    render() {
        return <div>
                <h1>Hello world</h1>
                <button onClick={(e) => this.clickHandler(e)}>Click me!</button>
                <h2>{this.state.status}</h2>
            </div>;
    }
}