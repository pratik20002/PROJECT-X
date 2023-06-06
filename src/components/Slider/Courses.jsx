import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "../App.css";
import Silder2Card from "./CoursesCard";


const Courses = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 1024 },
            items: 3,
        },
        desktop: {
            breakpoint: { max: 1024, min: 800 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 800, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    const productData = [
        {
            id: 1,
            url:
                "https://internshala.com/static/images/home/specializations/fsd.png",
            name: "Full Stack Development Course",
            desc: "description about product ",
        },
        {
            id: 2,
            url:
                "https://internshala.com/static/images/home/specializations/hrm.png",
            name: "Data Science Course",
            desc: "description about product ",
        },
        {
            id: 3,
            url:
                "https://internshala.com/static/images/home/specializations/ds.png",
            name: "Human Resource Management Course",
            desc: "description about product ",
        },
        {
            id: 4,
            url:
                "https://internshala.com/static/images/home/specializations/dm.png",
            name: "Digital Marketing Course",
            desc: "description about product ",
        },
        {
            id: 5,
            url:
                "https://internshala.com/static/images/home/specializations/pm.png",
            name: "Product Management Course",
            desc: "description about product ",
        },
        {
            id: 6,
            url:
                "https://internshala.com/static/images/home/specializations/ev.png",
            name: "Electric Vehicle Industry Course",
            desc: "description about product ",
        },
    ];

    const slider_card = productData.map((item) => (
        <Silder2Card
            key={item.id}
            name={item.name}
            url={item.url}
            desc={item.desc}
        />
    ));



    return (
        <div className="App">
            <Carousel
                responsive={responsive}
                autoPlaySpeed={1000}
                autoPlay={true}
                infinite={true}
                keyBoardControl={true}
                customTransition="all .5"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
                transitionDuration={500}
            // showDots={true}
            >
                {slider_card}
            </Carousel>
        </div>
    );
};

export default Courses;
