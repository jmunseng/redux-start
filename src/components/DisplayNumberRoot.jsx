import React, { Component } from 'react';
import DisplayNumber from '../components/DisplayNumber'

export default class DisplayNumberRoot extends Component {
    render() {
        return (
            <div>
                <h1>Add Number Root</h1>
                <DisplayNumber />
            </div>
        )
    }
}