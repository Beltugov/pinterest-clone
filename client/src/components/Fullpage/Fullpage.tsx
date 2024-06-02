import React, {useEffect} from "react";

const Fullpage = ({
	                  children,
	                  transition,
	                  sectionStart,
                  }: {
	children: React.ReactNode[];
	transition: number;
	sectionStart?: number;
}) => {
	let currentSection = sectionStart || 0
	const id = "fullpage";

	useEffect(() => {
		window.addEventListener("wheel", HandleWheelEvent);
		return () => {
			window.removeEventListener("wheel", HandleWheelEvent);
		};
	}, []);

	const MoveSection = () => {
		const section = document.getElementById(id);
		if (section) {
			section.style.transform = `translateY(-${currentSection * 100}vh)`;
		}
	};

	const HandleWheelEvent = (e: WheelEvent): void => {
		window.removeEventListener("wheel", HandleWheelEvent);
		if (0 < e.deltaY && currentSection < children.length - 1) {
			GoNext();
		} else if (0 > e.deltaY && currentSection > 0) {
			GoPrev();
		}
		setTimeout(
			() => window.addEventListener("wheel", HandleWheelEvent),
			transition * 1000
		);
	};

	const GoNext = () => {
		currentSection++
		const currentElement = document.getElementById("fullpage-section-" + currentSection)
		if (currentElement) {
			currentElement.style.visibility = "visible"
		}
		MoveSection();
		setTimeout(() => {
			const prevElement = document.getElementById("fullpage-section-" + (currentSection - 1))
			if (prevElement) {
				prevElement.style.visibility = "hidden"
			}
		}, transition * 1000)
	};

	const GoPrev = () => {
		currentSection--
		const currentElement = document.getElementById("fullpage-section-" + currentSection)
		if (currentElement) {
			currentElement.style.visibility = "visible"
		}
		MoveSection();
		setTimeout(() => {
			const prevElement = document.getElementById("fullpage-section-" + (currentSection + 1))
			if (prevElement) {
				prevElement.style.visibility = "hidden"
			}
		}, transition * 1000)
	};

	return (
		<div
			id={id}
			className="fullpage"
			style={{overflow: "hidden", transition: `all ${transition}s`}}
		>
			{children.map((elem, index) =>
				<div key={index} id={"fullpage-section-" + index}
				     style={currentSection !== index ? {visibility: "hidden"} : {}}
				>
					{elem}
				</div>)}
		</div>
	);
};

export default Fullpage;
