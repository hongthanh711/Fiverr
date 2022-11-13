import React from 'react'
import Carousel from '../../modules/carousel/carousel'
import Feedback from '../../modules/feedback/feedback'
import JobInfo from '../../modules/job-info/job-info'
import MarketPlace from '../../modules/market-place/market-place'
import Services from '../../modules/services/services'

export default function Home() {
    return (
        <>
            <Carousel />
            <Services />
            <JobInfo />
            <Feedback />
            <MarketPlace />
        </>
    )
}
