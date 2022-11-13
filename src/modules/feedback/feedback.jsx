import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { sweetalertPopup } from '../../utils/popup-sweetalert/popup-sweetalert'

import 'swiper/css'
import 'swiper/css/navigation'

import './index.scss'

export default function Feedback() {
    return (
        <div className="carousel_services container">
            <Swiper
                modules={[Navigation]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                loop="true"
            >
                <SwiperSlide>
                    <div>
                        <div className="row">
                            <div className="col-5 thumb_fb d-flex align-items-center">
                                <img
                                    onClick={() =>
                                        sweetalertPopup(
                                            'https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/rb8jtakrisiz0xtsffwi'
                                        )
                                    }
                                    className="w-100"
                                    src="./images/thumbnail-feedbacks/testimonial-video-still-lavender.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="col-7">
                                <div className="fb_content">
                                    <h5>
                                        Caitlin Tormey, Chief Commercial Officer
                                        <span>
                                            <img
                                                className="img-fluid"
                                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/naadam-logo-x2.0a3b198.png"
                                                alt=""
                                            />
                                        </span>
                                    </h5>
                                    <blockquote>
                                        <i>
                                            "Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit. Iste beatae incidunt ab inventore eius quod fugiat
                                            debitis corporis vero id quia ipsum perferendis
                                            consectetur, eveniet aliquam animi dolore deleniti
                                            natus."
                                        </i>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="row">
                            <div className="col-5 thumb_fb d-flex align-items-center">
                                <img
                                    className="img-fluid thumb_fb"
                                    src="./images/thumbnail-feedbacks/testimonial-video-still-lavender.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="col-7">
                                <div className="fb_content">
                                    <h5>
                                        Caitlin Tormey, Chief Commercial Officer
                                        <span>
                                            <img
                                                className="img-fluid"
                                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/naadam-logo-x2.0a3b198.png"
                                                alt=""
                                            />
                                        </span>
                                    </h5>
                                    <blockquote>
                                        <i>
                                            "Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit. Iste beatae incidunt ab inventore eius quod fugiat
                                            debitis corporis vero id quia ipsum perferendis
                                            consectetur, eveniet aliquam animi dolore deleniti
                                            natus."
                                        </i>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="row">
                            <div className="col-5 thumb_fb d-flex align-items-center">
                                <img
                                    className="img-fluid thumb_fb"
                                    src="./images/thumbnail-feedbacks/testimonial-video-still-lavender.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="col-7">
                                <div className="fb_content">
                                    <h5>
                                        Caitlin Tormey, Chief Commercial Officer
                                        <span>
                                            <img
                                                className="img-fluid"
                                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/naadam-logo-x2.0a3b198.png"
                                                alt=""
                                            />
                                        </span>
                                    </h5>
                                    <blockquote>
                                        <i>
                                            "Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit. Iste beatae incidunt ab inventore eius quod fugiat
                                            debitis corporis vero id quia ipsum perferendis
                                            consectetur, eveniet aliquam animi dolore deleniti
                                            natus."
                                        </i>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="row">
                            <div className="col-5 thumb_fb d-flex align-items-center">
                                <img
                                    className="img-fluid thumb_fb"
                                    src="./images/thumbnail-feedbacks/testimonial-video-still-lavender.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="col-7">
                                <div className="fb_content">
                                    <h5>
                                        Caitlin Tormey, Chief Commercial Officer
                                        <span>
                                            <img
                                                className="img-fluid"
                                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/naadam-logo-x2.0a3b198.png"
                                                alt=""
                                            />
                                        </span>
                                    </h5>
                                    <blockquote>
                                        <i>
                                            "Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit. Iste beatae incidunt ab inventore eius quod fugiat
                                            debitis corporis vero id quia ipsum perferendis
                                            consectetur, eveniet aliquam animi dolore deleniti
                                            natus."
                                        </i>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="row">
                            <div className="col-5 thumb_fb d-flex align-items-center">
                                <img
                                    className="img-fluid thumb_fb"
                                    src="./images/thumbnail-feedbacks/testimonial-video-still-lavender.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="col-7">
                                <div className="fb_content">
                                    <h5>
                                        Caitlin Tormey, Chief Commercial Officer
                                        <span>
                                            <img
                                                className="img-fluid"
                                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/naadam-logo-x2.0a3b198.png"
                                                alt=""
                                            />
                                        </span>
                                    </h5>
                                    <blockquote>
                                        <i>
                                            "Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit. Iste beatae incidunt ab inventore eius quod fugiat
                                            debitis corporis vero id quia ipsum perferendis
                                            consectetur, eveniet aliquam animi dolore deleniti
                                            natus."
                                        </i>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="row">
                            <div className="col-5 thumb_fb d-flex align-items-center">
                                <img
                                    className="img-fluid thumb_fb"
                                    src="./images/thumbnail-feedbacks/testimonial-video-still-lavender.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="col-7">
                                <div className="fb_content">
                                    <h5>
                                        Caitlin Tormey, Chief Commercial Officer
                                        <span>
                                            <img
                                                className="img-fluid"
                                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/naadam-logo-x2.0a3b198.png"
                                                alt=""
                                            />
                                        </span>
                                    </h5>
                                    <blockquote>
                                        <i>
                                            "Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit. Iste beatae incidunt ab inventore eius quod fugiat
                                            debitis corporis vero id quia ipsum perferendis
                                            consectetur, eveniet aliquam animi dolore deleniti
                                            natus."
                                        </i>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div>
                        <div className="row">
                            <div className="col-5 thumb_fb d-flex align-items-center">
                                <img
                                    className="img-fluid thumb_fb"
                                    src="./images/thumbnail-feedbacks/testimonial-video-still-lavender.jpg"
                                    alt=""
                                />
                            </div>
                            <div className="col-7">
                                <div className="fb_content">
                                    <h5>
                                        Caitlin Tormey, Chief Commercial Officer
                                        <span>
                                            <img
                                                className="img-fluid"
                                                src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/naadam-logo-x2.0a3b198.png"
                                                alt=""
                                            />
                                        </span>
                                    </h5>
                                    <blockquote>
                                        <i>
                                            "Lorem ipsum dolor sit amet, consectetur adipisicing
                                            elit. Iste beatae incidunt ab inventore eius quod fugiat
                                            debitis corporis vero id quia ipsum perferendis
                                            consectetur, eveniet aliquam animi dolore deleniti
                                            natus."
                                        </i>
                                    </blockquote>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    )
}
