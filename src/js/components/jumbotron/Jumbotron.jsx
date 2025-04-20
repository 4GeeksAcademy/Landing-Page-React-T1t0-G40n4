import React from "react"
import "./Jumbotron.css"
const Jumbotron = () =>{
    return (
        <div className="jumbotron jumbotron-fluid jumbotron-content mb-4">
            <div className="container">
                <h1 className="display-4">Fluid jumbotron</h1>
                <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                <a href="#" className="btn btn-primary mb-4">Go somewhere</a>
            </div>
        </div>

    )
}
export default Jumbotron;