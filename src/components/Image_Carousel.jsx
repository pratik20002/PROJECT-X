import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./css files/Image_Carousel.css";
import img1 from "./carousel_images/img1.png";
import img2 from "./carousel_images/img2.png";
import img3 from "./carousel_images/img3.png";
import img4 from "./carousel_images/img4.png";
import img5 from "./carousel_images/img5.png";
import img6 from "./carousel_images/img6.png";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
function Image_Carousel() {
    return (
        <>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {/* Add image from carousel_images folder  */}
                {/* <SwiperSlide><img src="./carousel_images/img1.png" alt="" /></SwiperSlide> */}

                <SwiperSlide><img src={img1} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img2} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img3} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img4} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img5} alt="" /></SwiperSlide>
                <SwiperSlide><img src={img6} alt="" /></SwiperSlide>
                {/* <SwiperSlide><img src="https://www.onefultonsquareflushing.com/wp-content/uploads/2015/07/1440x560-Banner_1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://s3.ap-southeast-2.amazonaws.com/cdn.greekherald.com.au/wp-content/uploads/2022/07/12132538/vhba-northern-hospital-complete-banner-1440x560-1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://d1zwpj0nw967gp.cloudfront.net/headerImages/compressed-mcb_mcbdirect__1484148944_1440x560.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://assets.corteva.com/is/image/Corteva/Elipris%20carousel%201440x560?$heroCarousel_desktop$" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://www.onefultonsquareflushing.com/wp-content/uploads/2015/07/1440x560-Banner_1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://s3.ap-southeast-2.amazonaws.com/cdn.greekherald.com.au/wp-content/uploads/2022/07/12132538/vhba-northern-hospital-complete-banner-1440x560-1.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://d1zwpj0nw967gp.cloudfront.net/headerImages/compressed-mcb_mcbdirect__1484148944_1440x560.jpg" alt="" /></SwiperSlide>
                <SwiperSlide><img src="https://assets.corteva.com/is/image/Corteva/Elipris%20carousel%201440x560?$heroCarousel_desktop$" alt="" /></SwiperSlide> */}


            </Swiper>
        </>
    );
}


export default Image_Carousel;