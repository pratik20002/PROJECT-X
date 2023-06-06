import React from 'react'

import "react-multi-carousel/lib/styles.css";
import "../App.css";
import Internships_Slider from './Slider/Internships_Slider';
import Courses from './Slider/Courses';


function MainSlider(props) {
    return (
        <div className="App">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">{props.title}</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="slider">
                            {props.slider_name === "1" ? <Internships_Slider /> : <Courses />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default MainSlider;
