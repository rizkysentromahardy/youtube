import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Router from "../src/navigation";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return (
            <Router />
        );
    }
}

export default App;
