import React, { useRef, useEffect, useState } from 'react';
import style from "../assets/css/Carousal.module.css";
import img1 from "../assets/images/2.jpg";
import img2 from "../assets/images/3.jpg";

function Carousal() {

	const slideRef = useRef<number>(0);
	const [rand, setRand] = useState(0);

	useEffect(() => {
		showSlides(slideRef.current);
		const interval = setInterval(() => {
			slideRef.current += 1
			showSlides(slideRef.current);
		}, 7000);

		return () => clearInterval(interval);
	}, [rand])

	const imageArr: string[] = [img1, img2];

	const slideChange = (n: number) => {
		slideRef.current += n;
		showSlides(slideRef.current);
	}

	const currentSlide = (n: number) => {
		slideRef.current = n;
		setRand(Math.random());
		showSlides(n);
	}

	const showSlides = (n: number) => {
		let slides = document.getElementsByClassName(style.mySlides);
		let dots = document.getElementsByClassName(style.dot);
		let slidesLen = slides.length;
		if (n > slidesLen - 1) slideRef.current = 0;
		else if (n < 0) slideRef.current = (slidesLen - 1);
		for (let i = 0; i < slidesLen; i++) {
			(slides[i] as HTMLElement).style.display = "none";
			(dots[i] as HTMLElement).className = dots[i].className.replace("active", "")
		}
		(slides[slideRef.current] as HTMLElement).style.display = "block";
		(dots[slideRef.current] as HTMLElement).className += " " + style.active;
	}

	return <div id="mAbout" className={style.slideshowContainer}>
		<div className={style.mySlides + ' ' + style.fade}>
			<img src={img1} alt="2" />
			<div className={style.imageText}>image two</div>
		</div>
		<div className={style.mySlides + ' ' + style.fade}>
			<img src={img2} alt="3" />
			<div className={style.imageText}>image three</div>
		</div>
		<a className={style.prev} style={{ left: 0 }} onClick={() => slideChange(-1)}>❮</a>
		<a className={style.next} style={{ right: 0 }} onClick={() => slideChange(1)}>❯</a>
		<div className={style.slideDot}>
			{imageArr.map((e, i) => <span key={e} className={style.dot} onClick={() => currentSlide(i)}></span>)}
		</div>
	</div>

	// return <div className={style.slideset}>
	//     <img src={require('../assets/images/1.jpg')} alt="1" />
	//     <img src={require('../assets/images/2.jpg')} alt="2" />
	//     <img src={require('../assets/images/3.jpg')} alt="3" />
	//     <img src={require('../assets/images/4.jpg')} alt="4" />
	//     <img src={require('../assets/images/5.jpg')} alt="5" />
	// </div>
}

export default Carousal;