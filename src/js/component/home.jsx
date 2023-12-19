import React from "react";
import Navbar from "./navbar";
import Jumbotron from "./jumbotron";
import Cards from "./card";
import Footer from "./footer";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar/>
		<div className="container">
			<div>
				<Jumbotron/>
			</div>
			<div className="row">
				<div className="col-3">
					<Cards
					image = "https://picsum.photos/500/325?random=1"
					cardName = "Card 1"
					text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum commodi laborum, exercitationem eligendi et laudantium consectetur. Maiores nisi error omnis vitae earum, illum, dolorum architecto ipsa in neque illo laboriosam."
					/>
				</div>
				<div className="col-3">
					<Cards
					image = "https://picsum.photos/500/325?random=2"
					cardName = "Card 2"
					text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum commodi laborum, exercitationem eligendi et laudantium consectetur. Maiores nisi error omnis vitae earum, illum, dolorum architecto ipsa in neque illo laboriosam."
					/>
				</div>
				<div className="col-3">
					<Cards
					image = "https://picsum.photos/500/325?random=3"
					cardName = "Card 3"
					text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum commodi laborum, exercitationem eligendi et laudantium consectetur. Maiores nisi error omnis vitae earum, illum, dolorum architecto ipsa in neque illo laboriosam."
					/>
				</div>
				<div className="col-3">
					<Cards
					image = "https://picsum.photos/500/325?random=4"
					cardName = "Card 4"
					text = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum commodi laborum, exercitationem eligendi et laudantium consectetur. Maiores nisi error omnis vitae earum, illum, dolorum architecto ipsa in neque illo laboriosam."
					/>
				</div>
				
			</div>
		</div>	
			<Footer/>
		</div>
	);
};

export default Home;
