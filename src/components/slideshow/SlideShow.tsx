import React, { useState, useEffect, useRef } from 'react';
import style from "./SlideShow.module.css";

type propsType = {
  imageArr: {
    image: string
    name: string
    title?: string
    content?: string
  }[]
  buttonsOut?: boolean
  showShadow?: boolean
  timeout?: number
}

function SlideShow({ imageArr, buttonsOut = false, showShadow = true, timeout = 10000 }: propsType) {

  const slideRef = useRef<number>(0);
  const [rand, setRand] = useState(0);

  useEffect(() => {
    showSlides(slideRef.current);
    const interval = setInterval(() => {
      slideRef.current += 1
      showSlides(slideRef.current);
    }, timeout);

    return () => clearInterval(interval);
  }, [rand])

  const slideChange = (n: number) => {
    slideRef.current += n;
    setRand(Math.random());
    showSlides(slideRef.current);
  }

  const currentSlide = (n: number) => {
    slideRef.current = n;
    setRand(Math.random());
    showSlides(n);
  }

  const showSlides = (n: number) => {
    let slides = document.getElementsByClassName(style.imgPosition);
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

  return (
    <div style={{ position: 'relative', height: "100%" }}>
      {imageArr.map((e, i) =>
        <div className={style.imgPosition + ' ' + (showShadow ? style.shadeStyle : '')} key={'slide-key-' + i} style={{ height: "100%" }}>
          <img src={e.image} alt={e.name} style={{
            width: '100%',
            verticalAlign: 'middle',
            objectFit: 'cover',
            height: "100%"
          }} />
          {e.title && <div className={buttonsOut ? '' : style.shadeText} style={{ paddingTop: '15px' }}>
            <h1>{e.title}</h1>
            {e.content && <p style={{ fontSize: "16px" }}>{e.content}</p>}
          </div>}
        </div>
      )}
      <span className={style.prev} style={{ left: buttonsOut ? -41 : 0 }} onClick={() => slideChange(-1)}>❮</span>
      <span className={style.next} style={{ right: buttonsOut ? -41 : 0 }} onClick={() => slideChange(1)}>❯</span>
      <div className={style.slideDot} style={{ bottom: buttonsOut ? -30 : 0 }}>
        {imageArr.map((e, i) => <span key={'image-dot-' + i} className={style.dot} onClick={() => currentSlide(i)}></span>)}
      </div>
    </div>
  )
}

export default SlideShow