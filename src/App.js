import React, { Component } from 'react'
import User from './User'
import Styles from "./App.module.css"

class App extends Component {
    
    render() {
        return (
            <React.Fragment>
                <h1 className={Styles.txt}>Hello App</h1>
                <User />
            </React.Fragment>
        );
    }
}

export default App;