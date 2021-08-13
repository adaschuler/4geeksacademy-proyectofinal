import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import logoImageUrl from "../../img/logo.png";
import mintImageUrl from "../../img/plant/mint.png";
import mintImageUrl01 from "../../img/plant/mint-gallery01.jpg";
import mintImageUrl02 from "../../img/plant/mint-gallery02.jpg";
import mintImageUrl03 from "../../img/plant/mint-gallery03.jpg";
import mintImageUrl04 from "../../img/plant/mint-gallery04.jpg";
import mintImageUrl05 from "../../img/plant/mint-gallery05.jpg";
import mintImageUrl06 from "../../img/plant/mint-gallery06.jpg";
import "../../styles/carousel.scss";
import { Carousel } from "react-bootstrap";

export function ControlledCarousel() {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<div className="justify-content-sm-center">
			<div className="text-center mt-5">
				<div className="card">
					<div className="card-body">
						<ul className="list-group list-group-flush">
							<li className="list-group-item">
								<img src={logoImageUrl} />
								<img src={logoImageUrl} />
							</li>
						</ul>
						<Carousel activeIndex={index} onSelect={handleSelect}>
							<Carousel.Item>
								<img className="d-block w-100" src={mintImageUrl01} alt="First slide" />
								<Carousel.Caption>
									<h6>First slide label</h6>
									{/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={mintImageUrl02} alt="Second slide" />

								<Carousel.Caption>
									<h6>Second slide label</h6>
									{/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
								</Carousel.Caption>
							</Carousel.Item>
							<Carousel.Item>
								<img className="d-block w-100" src={mintImageUrl03} alt="Third slide" />

								<Carousel.Caption>
									<h6>Third slide label</h6>
									{/* <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p> */}
								</Carousel.Caption>
							</Carousel.Item>
						</Carousel>
					</div>
				</div>
			</div>
		</div>
	);
}
