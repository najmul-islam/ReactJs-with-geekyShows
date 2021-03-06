import React, { Component } from 'react';

class Marks extends Component {
    constructor(props){
        super(props)
        this.state = {
            mroll: this.props.roll
        }
    }

    static getDerivedStateFromProps(props, state) {
        console.log("Get Derived State From Props");
        console.log(props, state);
        if (props.roll !== state.mroll) {
            return { mroll: props.roll }
        }
        return null
    }

    shouldComponentUpdate(nextProps, nextState){
        if(this.state.mroll < 107){
            console.log("Mark - ShouldComponentUpdate");
            console.log(nextProps, nextState);
            return true;
        }
        console.log(nextProps, nextState);
        return false;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("Marks - GetSnapShotBeforeUpdate - It runs before update");
        console.log(prevProps, prevState );
        return 45;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("Marks - ComponentDidUpdate - It runs agter update");
        console.log(prevProps, prevState, snapshot);

    }

    render() {
        console.log("Marks Redndered");
        return (
            <div>
               <h1>{this.state.mroll}</h1>
            </div>
        );
    }
}

export default Marks;