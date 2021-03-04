import React from "react";

import { Navbar } from "./navbar";
import { Jumbotron } from "./jumbotron";
import { Card } from "./cards";
import { Footer } from "./footer";

const cardArray = {
	imageURL: "https://picsum.photos/seed/picsum/536/354",
	cardTitle: "Card 1",
	cardDescription:
		"Lorem ipsum dolor sit amet consectetur adipiscing elit className ut, tempor ad interdum nisi cubilia sociosqu augue vivamus.",
	buttonURL: "https://getlorem.com/es/",
	buttonLabel: "Find Out More!"
};

//create your first component
export function Home() {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
				<div className="row">
					<Card
						imageURL={cardArray.imageURL}
						cardTitle={cardArray.cardTitle}
						cardDescription={cardArray.cardDescription}
						buttonURL={cardArray.buttonURL}
						buttonLabel={cardArray.buttonLabel}
					/>
					<Card
						imageURL={cardArray.imageURL}
						cardTitle={cardArray.cardTitle}
						cardDescription={cardArray.cardDescription}
						buttonURL={cardArray.buttonURL}
						buttonLabel={cardArray.buttonLabel}
					/>
					<Card
						imageURL={cardArray.imageURL}
						cardTitle={cardArray.cardTitle}
						cardDescription={cardArray.cardDescription}
						buttonURL={cardArray.buttonURL}
						buttonLabel={cardArray.buttonLabel}
					/>
				</div>
			</div>
			<Footer />
		</div>
	);
}
