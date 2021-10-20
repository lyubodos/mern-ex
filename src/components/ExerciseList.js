import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class ExerciseList extends Component {
    constructor(props){

        super(props);

        this.state = {
            exercises: []
        }
    };


    exercisesList(){
        return this.state = exercises.join("");
    }

    render() {
        return (
            <div>
                <h2>Logged Exercises:</h2>
                <table className="table">
                    <thead className="table-light"> 
                        <tr>Username</tr>
                        <tr>Description</tr>
                        <tr>Duration</tr>
                        <tr>Date</tr>
                        <tr>Actions</tr>
                    </thead>
                    <tbody>
                        {this.exercisesList()}
                    </tbody>
                </table>
            </div>
        );
    }
}
