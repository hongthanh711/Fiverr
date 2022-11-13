import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useAsync } from '../../hooks/useAsync'
import { fetchMenuJobApi } from '../../services/job'

import 'swiper/css'
import 'swiper/css/pagination'
import { Navigation } from 'swiper'

import './tab.scss'
import { Link } from 'react-router-dom'

export default function CategoryTabBar() {
    const { state: menuJob } = useAsync({
        service: () => fetchMenuJobApi(),
    })

    const renderTab = () => {
        return menuJob?.map((ele) => {
            return (
                <SwiperSlide key={ele.id}>
                    <Link className="link" to={ele.tenLoaiCongViec.split(' ').join('')}>
                        {ele.tenLoaiCongViec}
                    </Link>
                </SwiperSlide>
            )
        })
    }

    return (
        <div className="container">
            <Swiper
                slidesPerView={'auto'}
                spaceBetween={30}
                modules={[Navigation]}
                navigation
                className="tab"
            >
                {renderTab()}
            </Swiper>
        </div>
    )
}
