import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper'
import 'swiper/scss/autoplay'

import 'swiper/css'
import './index.scss'
import { useNavigate } from 'react-router-dom'
import Search from '../../components/search/search'
import TrustBy from '../trust-by/trust-by'

export default function Carousel() {
    const navigate = useNavigate()

    const onSearch = (value) => {
        navigate(`/search/${value}`)
    }
    return (
        <>
            <div className="carousel">
                <Swiper loop="true" modules={[Autoplay]} autoplay>
                    <SwiperSlide>
                        <img src="./images/carousel/bg-hero-1-1792-x1.jpg" alt="" />
                        <div className="text_info">
                            <p className="name">
                                Andrea, <b>Fashion Designer</b>
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/carousel/bg-hero-2-1792-x1.jpg" alt="" />
                        <div className="text_info">
                            <p className="name">
                                Moon, <b>Marketing Expert</b>
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/carousel/bg-hero-3-1792-x1.jpg" alt="" />
                        <div className="text_info">
                            <p className="name">
                                Andrea, <b>Fashion Designer</b>
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/carousel/bg-hero-4-1792-x1.jpg" alt="" />
                        <div className="text_info">
                            <p className="name">
                                Zack, <b>Marketing Expert</b>
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/carousel/bg-hero-5-1792-x1.jpg" alt="" />
                        <div className="text_info">
                            <p className="name">
                                Andrea, <b>Fashion Designer</b>
                            </p>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/carousel/bg-signup-1400-x1.png" alt="" />
                        <div className="text_info">
                            <p className="name">
                                Moon, <b>Marketing Expert</b>
                            </p>
                        </div>
                    </SwiperSlide>
                </Swiper>

                <div className="carousel_content">
                    <h2>
                        Find the perfect <span>freelance</span> services for your business
                    </h2>
                    <div className="carousel_search">
                        <Search
                            onSearch={onSearch}
                            enterButton="Search"
                            variant="search_carousel"
                            placeholder='Try "building mobile app"'
                        ></Search>
                    </div>
                </div>
            </div>
            <TrustBy />
        </>
    )
}
