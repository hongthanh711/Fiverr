import { Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import { sweetalertPopup } from '../../utils/popup-sweetalert/popup-sweetalert'

import 'swiper/css'
import 'swiper/css/navigation'

import './index.scss'

const feedbacks = [
    {
        thumbnailUrl: './images/thumbnail-feedbacks/testimonial-video-still-lavender.jpg',
        video: 'https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/rb8jtakrisiz0xtsffwi',
        name: 'Caitlin Tormey, Chief Commercial Officer',
        logoUrl:
            'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/naadam-logo-x2.0a3b198.png',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sequi natus ut adipisci illum expedita nobis consequatur, similique unde eligendi temporibus. Perferendis odio sit libero quisquam sequi, quae cumque vero."`,
    },
    {
        thumbnailUrl: './images/thumbnail-feedbacks/testimonial-video-still-haerfest.jpg',
        video: 'https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/yja2ld5fnolhsixj3xxw',
        name: 'Caitlin Tormey, Chief Commercial Officer',
        logoUrl:
            'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lavender-logo-x2.89c5e2e.png',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sequi natus ut adipisci illum expedita nobis consequatur, similique unde eligendi temporibus. Perferendis odio sit libero quisquam sequi, quae cumque vero."`,
    },
    {
        thumbnailUrl: './images/thumbnail-feedbacks/testimonial-video-still-naadam.jpg',
        video: 'https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/rb8jtakrisiz0xtsffwi',
        name: 'Caitlin Tormey, Chief Commercial Officer',
        logoUrl:
            'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/naadam-logo-x2.0a3b198.png',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sequi natus ut adipisci illum expedita nobis consequatur, similique unde eligendi temporibus. Perferendis odio sit libero quisquam sequi, quae cumque vero."`,
    },
    {
        thumbnailUrl: './images/thumbnail-feedbacks/testimonial-video-still-rooted.jpg',
        video: 'https://fiverr-res.cloudinary.com/video/upload/t_fiverr_hd/rb8jtakrisiz0xtsffwi',
        name: 'Caitlin Tormey, Chief Commercial Officer',
        logoUrl:
            'https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lavender-logo-x2.89c5e2e.png',
        text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sequi natus ut adipisci illum expedita nobis consequatur, similique unde eligendi temporibus. Perferendis odio sit libero quisquam sequi, quae cumque vero."`,
    },
]

const renderFeedback = () => {
    return feedbacks.map((ele, idx) => {
        return (
            <SwiperSlide key={idx}>
                <div>
                    <div className="row">
                        <div className="col-5 thumb_fb d-flex align-items-center">
                            <img
                                onClick={() => sweetalertPopup(ele.video)}
                                className="w-100"
                                src={ele.thumbnailUrl}
                                alt=""
                            />
                        </div>
                        <div className="col-7">
                            <div className="fb_content">
                                <h5>
                                    {ele.name}
                                    <span>
                                        <img
                                            className="img-fluid"
                                            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/naadam-logo-x2.0a3b198.png"
                                            alt=""
                                        />
                                    </span>
                                </h5>
                                <blockquote>
                                    <i>{ele.text}</i>
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </SwiperSlide>
        )
    })
}

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
                {renderFeedback()}
            </Swiper>
        </div>
    )
}
