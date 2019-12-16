import React, { Component } from 'react'
import SingleRooms from "./singleRooms.js";
import DoubleRooms from "./doubleRooms.js";
import FamilyRooms from "./familyRooms.js";

export default class allRooms extends Component {
    render() {
        return (
            <div>
               <SingleRooms />
               <DoubleRooms />
               <FamilyRooms /> 
            </div>
        )
    }
}
