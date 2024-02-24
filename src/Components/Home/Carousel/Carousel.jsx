import { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Carousel.css';

const galleryImages = [
    { path: '/gallery/img-1.png' },
    { path: '/gallery/img-2.png' },
    { path: '/gallery/img-3.png' },
    { path: '/gallery/img-4.png' },
    { path: '/gallery/img-5.png' },
    { path: '/gallery/img-6.png' },
    { path: '/gallery/img-7.png' },
];

const Carousel = () => {
    const [slidesToShow, setSlidesToShow] = useState(4);
    const [slidesToScroll, setSlidesToScroll] = useState(2);

    useEffect(() => {
        const updateSlidesToShow = () => {
            const screenWidth = window.innerWidth;

            if (screenWidth >= 1300)
                setSlidesToShow(4);
            else if (screenWidth >= 992)
                setSlidesToShow(3);
            else if (screenWidth >= 600)
                setSlidesToShow(2);
            else {
                setSlidesToShow(1);
                setSlidesToScroll(1);
            }
        };
        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);

        return () => {
            window.removeEventListener('resize', updateSlidesToShow);
        };
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 4000,
        slidesToShow: slidesToShow,
        slidesToScroll: slidesToScroll,
        autoplay: true,
        autoplaySpeed: 1000,
        pauseOnHover: true,
    };

    return (
        <section className="carouselSection">
            <Slider {...settings} className='slider'>
                {
                    galleryImages.map((images, index) =>
                        <div key={index} className="sliderCard">
                            <img src={images.path} alt="gallery_images" />
                        </div>
                    )
                }
            </Slider>
        </section >
    )
}

export default Carousel;