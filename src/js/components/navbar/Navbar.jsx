import React from "react"
import "./Navbar.css"
const Navbar = () =>{
    return (
		<div className="navbar navbar-dark navbar-expand-lg bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand text-white" href="#">Navbar</a>
				<button className="navbar-toggler text-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon "></span>
				</button>
				<div className="collapse navbar-collapse navbar-content" id="navbarNav">
					<ul className="navbar-nav" >
						<li className="nav-item">
							<a className="nav-link active text-white" aria-current="page" href="#">Home</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">Features</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white" href="#">Pricing</a>
						</li>
						<li className="nav-item">
							<a className="nav-link text-white " href="#">Contact</a>
						</li>
					</ul>
				</div>
			</div>
			
			
		</div>
    )
}
export default Navbar;