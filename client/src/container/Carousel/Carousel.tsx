import React, {useEffect, useState} from "react";
import {titleCarouselImg, titleColor, titleText,} from "../../consts/titleCarousel";
import "./Carousel.scss";
import Down from "../../assets/down.svg";

const Carousel = () => {
	const [carouselPage, setCarouselPage] = useState<number>(0);

	useEffect(() => {
		const timerId = setTimeout(() => {
			setCarouselPage(carouselPage >= 3 ? 0 : carouselPage + 1);
		}, 6000);
		return () => {
			clearTimeout(timerId);
		};
	}, [carouselPage]);

	return (
		<div className="carousel">
			<div className="carousel-block-name">
				<h1 className="carousel-block-name__title">Найдите свежие идеи:</h1>
				{titleText.map((value, index) => (
					<div key={index} className="carousel-block-name__subtitle">
						{carouselPage === index && carouselPage > 0 && (
							<div
								key={index}
								className="carousel-block-name__subtitle-item prev"
								style={{color: `${titleColor[carouselPage - 1]}`}}
							>
								{titleText[index - 1]}
							</div>
						)}
						{carouselPage === index && (
							<div
								className="carousel-block-name__subtitle-item new"
								style={{color: `${titleColor[carouselPage]}`}}
							>
								{value}
							</div>
						)}
					</div>
				))}
				<div className="carousel-block-name__radio-btn">
					{titleCarouselImg.map((value, index) => (
						<label key={index} htmlFor={"radio-" + index}>
							<div
								onClick={() => setCarouselPage(index)}
								className="radio-btn"
								style={
									carouselPage === index
										? {backgroundColor: `${titleColor[carouselPage]}`}
										: {}
								}
							>
								<input
									type="radio"
									id={"radio-" + index}
									name="carouselPage"
									value={index}
									checked={carouselPage === index}
									onChange={() => {
										setCarouselPage(index);
									}}
								/>
							</div>
						</label>
					))}
				</div>
			</div>

			{titleCarouselImg.map((array, arrIndex) => (
				<div className="background-cards" key={arrIndex}>
					{carouselPage === arrIndex &&
						array.map((img, imgIndex) => (
							<div className="background-cards__item" key={imgIndex}>
								{carouselPage !== 0 && (
									<div
										className="item prev"
										style={{animationDelay: `${imgIndex / 4}s`}}>
										<img
											src={titleCarouselImg[carouselPage - 1][imgIndex]}
											alt=""
											width={230}
											height={340}
										/>
										<img
											src={titleCarouselImg[carouselPage - 1][imgIndex]}
											alt=""
											width={230}
											height={340}
										/>
									</div>

								)}
								<div
									className="item new"
									style={{animationDelay: `${(imgIndex + 2) / 4}s`}}
								>
									<img src={img} alt="" width={230} height={340}/>
								</div>
								<div
									className="item new"
									style={{animationDelay: `${(imgIndex + 2) / 4}s`}}
								>
									<img src={img} alt="" width={230} height={340}/>
								</div>
							</div>
						))}
				</div>
			))}
			<button
				className="down-btn"
				style={{backgroundColor: titleColor[carouselPage]}}
				onClick={() => {
					const event = new WheelEvent("wheel", {
						deltaY: 100,
					});
					dispatchEvent(event);
				}}
			>
				<img src={Down} alt="Down"/>
			</button>
		</div>
	);
};

export default Carousel;
