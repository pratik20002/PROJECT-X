import React from "react";
// import Search from './Search'
// import SliderOne from './SliderOne'
// import Slider2 from './Slider2'
import "../App.css";
import MainSlider from "./MainSlider";
import Image_Carousel from "./Image_Carousel";
const Home = () => {
    return (
        <div>
            {/* <Search /> */}
            {/* Add a image with defined width and height alligned at center of screen*/}
            <div className="text-center my-5">
                <h5>Hii there 😊</h5>
                <p>Welcome to project X</p>

            </div>
            <Image_Carousel />
            <br />
            <br />
            <br />
            <br />
            <MainSlider title={"Intership Details"} slider_name={"1"} />
            <br />
            <br />
            <MainSlider title={"Courses"} slider_name={"2"} />
            <br />
            <br />
            {/* <Slider2 /> */}
        </div>
    );
};

export default Home;
