import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';



const Exercise = props => {

    return (
        <tr>
            <td>{props.exercise.username}</td>
            <td>{props.exercise.description}</td>
            <td>{props.exercise.duration}</td>
            <td>{props.exercise.date.substring(0, 10)}</td>
            <td>
                <Link to={`/edit/${props.exercise._id}`}>Edit</Link> |  
                 <a href="#" onClick={() => {
                    props.deleteExercise(props.exercise._id)
                }}>Delete</a>

            </td>
        </tr>
    )
}


export default class ExerciseList extends Component {
    constructor(props) {
        super(props);

        this.deleteExer = this.deleteExer.bind(this);


        this.state = {
            exercises: []
        }
    };

    componentDidMount() {

        axios.get("http://localhost:4000/exercises")
            .then(res => {
                this.setState({
                    exercises: res.data
                })
            })
            .catch(err => console.log(err));
    };


    deleteExer(id){

        axios.delete(`http://localhost:4000/exercises/${id}`)
            .then(res => {
                this.setState({
                    exercises: res.data.filter(exer => exer._id !==  id)
                })
            })
            .catch(err => console.log(err));

        window.location = "/";
    };


    exerciseList() {
       return this.state.exercises.map(ex => {
            return <Exercise exercise={ex} deleteExercise={this.deleteExer} key={ex._id} />
        });
    };

    render() {
        return (
            <div>
                <h3>Logged Exercises</h3>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th>Username</th>
                            <th>Description</th>
                            <th>Duration</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.exerciseList()}
                    </tbody>
                </table>
            </div>
        );
    }
}
