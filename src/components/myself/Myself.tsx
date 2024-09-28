import React from 'react';
import desktop from '../../assets/images/desktop.jpg';
import blender from '../../assets/images/blender.png';
import agri from '../../assets/images/agriculture.png';
// import style from "./Myself.module.css";
import SlideShow from '../slideshow/SlideShow';


function Myself() {
    const images = [{
        image: desktop,
        name: 'Programming',
        title: 'Software Developer',
        content: `💻 Drawn into the world of programming by the allure of 0's and 1's, 
            I’ve spent 5 years crafting impactful solutions. 
            My mission? To harness the vast ocean of technologies and create innovative solutions that resonate globally. 
            Let’s make a difference together!`
    }, {
        image: blender,
        name: 'Blender',
        title: '2D Animation',
        content: `🎨 The child in me never put down the pen, and thanks to Blender, my drawings have come to life! 
            As a hobbyist, I transform my imagination into fun, creative videos and shorts that bring joy and spark inspiration. 
            Dive into my animated world and watch the magic unfold!`
    }, {
        image: agri,
        name: 'Agriculture',
        title: 'Agriculture',
        content: `🌾 As the backbone of India, agriculture is the bone that supports our families. 
        I believe in staying connected to agriculture, as it is where our lives begin. 
        In my retirement, I hope to give back to nature and enjoy a life in harmony with it.`
    }];
    return (
        <SlideShow imageArr={images} />
    )
}

export default Myself