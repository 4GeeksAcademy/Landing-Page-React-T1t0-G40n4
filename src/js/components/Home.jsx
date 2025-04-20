import React from 'react';

//include images into your bundle

import  Navbar  from "./navbar/Navbar";
import Jumbotron from "./jumbotron/Jumbotron";
import Card from "./Card";
import Footer from "./footer/Footer";

//create your first component
const Home = () => {
	
	const cards = [{id: 1, title: "card1",img:"https://images.pexels.com/photos/30948820/pexels-photo-30948820.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load" , description:"Aca le pongo todo lo que quiero escribir" }, 
	 {id:2, title:"card2", img: "https://images.pexels.com/photos/30327991/pexels-photo-30327991/free-photo-of-fort-historique-d-okzitanien-france.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load", description:"Aca le pongo todo lo que quiero escribir"}, 
	 {id:3, title:"card3", img:"https://images.pexels.com/photos/31300999/pexels-photo-31300999.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load",  description:"Aca le pongo todo lo que quiero escribir"}, 
	 {id:4, title:"card4", img:"https://images.pexels.com/photos/30601565/pexels-photo-30601565.jpeg?auto=compress&cs=tinysrgb&w=1200&lazy=load", description:"Aca le pongo todo lo que quiero escribir"}]
	
	return (
		<>
			<Navbar/>
			<div className="container mt-4"> 
				<Jumbotron/>
				<div className="row">
					
						{cards.map(card=>(
							<div key={card.id} className="col col-md-3"> 
								<Card card={card}/> 
							</div>
							))}
					
					
				</div>
				
				
			</div>
			<Footer/>
		</>
	);
};

export default Home;