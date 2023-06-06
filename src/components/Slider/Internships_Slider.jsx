import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// import "../App.css";
import InternshipSliderCard from "./InternshipSliderCard";

const Internships_Slider = () => {
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
            logo_url:
                "https://img.freepik.com/free-vector/coach-speaking-before-audience-mentor-presenting-charts-reports-employees-meeting-business-training-seminar-conference-vector-illustration-presentation-lecture-education_74855-8294.jpg?q=10&h=200",
            position: "Web Developer",
            company_name: "Intersteller Scientific 1",
            stipend: "1000",
            mode: "Work from Home",
            duration: "2 months",
            desc: "description about product ",
        },
        {
            id: 2,
            logo_url:
                "data:image/jpeg;base64,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QEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERA//2Q==",
            position: "Abc Pvt Ltd",
            company_name: "xyz",
            stipend: "1000",
            mode: "Work from Home",
            duration: "2 months",
            desc: "description about product ",
        },
        {
            id: 3,
            logo_url: "data:image/png;base64,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",
            position: "qwe Sci Pvt ltd 3",
            company_name: "xyz",
            stipend: "1000",
            mode: "Work from Home",
            duration: "2 months",
            desc: "description about product ",
        },
    ];

    const slider_card = productData.map((item) => (
        <InternshipSliderCard
            key={item.id}
            logo_url={item.logo_url}
            position={item.position}
            company_name={item.company_name}
            stipend={item.stipend}
            mode={item.mode}
            duration={item.duration}
            desc={item.desc}
        />
    ));

    return (
        <div className="App">
            {/* <h1>hello</h1> */}
            <br />
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

export default Internships_Slider;
