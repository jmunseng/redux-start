import AddNumber from '../components/AddNumber';
import React,  { Component } from 'react';
import store from '../store';

// eslint-disable-next-line import/no-anonymous-default-export
export default class extends Component{
    render(){
        return <AddNumber onClick={
            function(size) {
                store.dispatch({type:'INCREMENT', size:size})
            }
        }></AddNumber>
    }
} 