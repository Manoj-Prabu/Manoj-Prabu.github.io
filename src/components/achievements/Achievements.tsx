import React from 'react';
import SlideShow from '../slideshow/SlideShow';
import image1 from '../../assets/images/1.jpg';
import image2 from '../../assets/images/3.png';
import image4 from '../../assets/images/4.jpg';

function Achievements() {
  const images = [
    { image: image1, name: 'Value Champ Award', title: 'Value Champ', content: 'Awarded for better contribution & learning in the project.' },
    { image: image4, name: 'Technology Excellence Award', title: 'Technology Excellence', content: 'Awarded for being a technical expertise in the projects.' },
    { image: image2, name: 'Chess Titan Award', title: 'GI Chess Titan', content: 'Won the 1st prize in the chess compatition that conducted in the organaization level.' }
  ];
  return (
    <div id='mExperience' style={{ width: "90%", margin: "16px auto" }}>
      <h1>Achievements</h1>
      <div style={{ height: '450px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <SlideShow imageArr={images} buttonsOut={true} showShadow={false} timeout={5000} />
      </div>
    </div>
  )
}

export default Achievements