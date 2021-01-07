
import React, { Component } from "react";
import { connect } from "react-redux"; 
import DisplayNumber from "../components/DisplayNumber";
function mapReduxStateToReactProps(state){
    return{
       number: state.number
    }
}

export default connect(mapReduxStateToReactProps)(DisplayNumber);



/*
import DisplayNumber from "../components/DisplayNumber";
import store from "../store";
// eslint-disable-next-line import/no-anonymous-default-export
export default class extends Component{
    state={number:store.getState().number}
    constructor(props){
        super(props);
        store.subscribe(
            function(){
                this.setState({number:store.getState().number});
            }.bind(this)
        )
    }
    render(){
        return <DisplayNumber number={this.state.number} unit={this.props.unit}/>
    }
}

*/