import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/navigation'

import './index.scss'

export default function Slider() {
    return (
        <div className="carousel_services">
            <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={5}
                navigation
                loop="true"
            >
                <SwiperSlide>
                    <a href="#">
                        <div className="text">
                            <p>Unlock growth online</p>
                            <h4>SEO</h4>
                        </div>
                        <img className="img_service" src="./images/services/seo-2x.jpg" alt="" />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#">
                        <div className="text">
                            <p>Color your dreams</p>
                            <h4>Illustration</h4>
                        </div>
                        <img
                            className="img_service"
                            src="./images/services/illustration-2x.jpg"
                            alt=""
                        />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#">
                        <div className="text">
                            <p>Go global</p>
                            <h4>Translation</h4>
                        </div>
                        <img
                            className="img_service"
                            src="./images/services/translation-2x.jpg"
                            alt=""
                        />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#">
                        <div className="text">
                            <p>Learn your business</p>
                            <h4>Data Entry</h4>
                        </div>
                        <img
                            className="img_service"
                            src="./images/services/data-entry-2x.jpg"
                            alt=""
                        />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#">
                        <div className="text">
                            <p>Showcase your story</p>
                            <h4>Book Covers</h4>
                        </div>
                        <img
                            className="img_service"
                            src="./images/services/book-covers-2x.jpg"
                            alt=""
                        />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#">
                        <div className="text">
                            <p>Build your brand</p>
                            <h4>Logo Design</h4>
                        </div>
                        <img
                            className="img_service"
                            src="./images/services/logo-design-2x.jpg"
                            alt=""
                        />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#">
                        <div className="text">
                            <p>Customize your site</p>
                            <h4>WordPress</h4>
                        </div>
                        <img
                            className="img_service"
                            src="./images/services/wordpress-2x.jpg"
                            alt=""
                        />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#">
                        <div className="text">
                            <p>Share your message</p>
                            <h4>Voice Over</h4>
                        </div>
                        <img
                            className="img_service"
                            src="./images/services/voiceover-2x.jpg"
                            alt=""
                        />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#">
                        <div className="text">
                            <p>Engage your audience</p>
                            <h4>Video Explainer</h4>
                        </div>
                        <img
                            className="img_service"
                            src="./images/services/animated-explainer-2x.jpg"
                            alt=""
                        />
                    </a>
                </SwiperSlide>
                <SwiperSlide>
                    <a href="#">
                        <div className="text">
                            <p>Reach more customers</p>
                            <h4>Social Media</h4>
                        </div>
                        <img className="img_service" src="./images/services/social-2x.jpg" alt="" />
                    </a>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
