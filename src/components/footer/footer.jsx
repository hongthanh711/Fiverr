import { Button } from 'antd'
import React from 'react'

import {
    FacebookIcon,
    IgIcon,
    LinkinIcon,
    Logo,
    PinterestIcon,
    TwitterIcon,
    AccessibilityIcon,
    Earth,
} from '../icon'

import './index.scss'

const categories = [
    'Graphics & Design',
    'Digital Marketing',
    'Writing & Translation',
    'Video & Animation',
    'Music & Audio',
    'Programming & Tech',
    'Data',
    'Business',
    'Lifestyle',
    'Sitemap',
]

const about = [
    'Careers',
    'Press & News',
    'Partnerships',
    'Privacy Policy',
    'Terms of Service',
    'Intellectual Property Claims',
    'Investor Relations',
]

const support = ['Help & Support', 'Trust & Safety', 'Selling on Fiverr', 'Buying on Fiverr']

const community = [
    'Events',
    'Blog',
    'Forum',
    'Community Standards',
    'Podcast',
    'Affiliates',
    'Invite a Friend',
    'Become a Seller',
]

// const moreFromFiverr = [
//     'Fiverr Business',
//     'Fiverr Pro',
//     'Fiverr Studios',
//     'Fiverr Logo Maker',
//     'Fiverr Guides',
//     'Get Inspired',
//     'Fiverr Select',
//     'ClearVoice <p className="footer-subtext">Content Marketing</p>',
//     'Fiverr Workspace <p className="footer-subtext">Invoice Software</p>',
//     'Learn  <p className="footer-subtext">Online Course</p>',
//     'Working Not Working',
// ]

const renderLink = (list) => {
    return list.map((ele) => {
        return (
            <li className="nav-item" key={ele}>
                <a href="#" className="nav-link">
                    {ele}
                </a>
            </li>
        )
    })
}

export default function Footer() {
    return (
        <footer className="container">
            <div className="footer-wrapper">
                <div className="footer-content">
                    <div className="row">
                        <div className="col">
                            <h4 className="footer_title ">Categories</h4>
                            <ul className="nav flex-column">{renderLink(categories)}</ul>
                        </div>
                        <div className="col">
                            <h4 className="footer_title ">About</h4>
                            <ul className="nav flex-column">{renderLink(about)}</ul>
                        </div>
                        <div className="col">
                            <h4 className="footer_title ">Support</h4>
                            <ul className="nav flex-column">{renderLink(support)}</ul>
                        </div>
                        <div className="col">
                            <h4 className="footer_title ">Community</h4>
                            <ul className="nav flex-column">{renderLink(community)}</ul>
                        </div>
                        <div className="col">
                            <h4 className="footer_title ">More From Fiverr</h4>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Fiverr Business
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Fiverr Pro
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Fiverr Studios
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Fiverr Logo Maker
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Fiverr Guides
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Get Inspired
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Fiverr Select
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        ClearVoice
                                        <p className="footer-subtext">Content Marketing</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Fiverr Workspace
                                        <p className="footer-subtext">Invoice Software</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Learn
                                        <p className="footer-subtext">Online Course</p>
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Working Not Working
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <hr />

                <div className="footer-bottom d-flex justify-content-between">
                    <div className="footer-left d-flex">
                        <div className="img-logo">
                            <Logo />
                        </div>
                        <p>© Fiverr International Ltd. 2022</p>
                    </div>
                    <div className="footer-right d-flex">
                        <ul className="footer-icon d-flex">
                            <li>
                                <a className="social-icon footer_btn">
                                    <TwitterIcon />
                                </a>
                            </li>
                            <li>
                                <a className="social-icon footer_btn">
                                    <FacebookIcon />
                                </a>
                            </li>
                            <li>
                                <a className="social-icon footer_btn">
                                    <LinkinIcon />
                                </a>
                            </li>
                            <li>
                                <a className="social-icon footer_btn">
                                    <PinterestIcon />
                                </a>
                            </li>
                            <li>
                                <a className="social-icon footer_btn">
                                    <IgIcon />
                                </a>
                            </li>
                        </ul>
                        <div className="footer-wrapper-btn d-flex">
                            <div className="footer_btn">
                                <a>
                                    <span style={{ width: 16, height: 16 }} aria-hidden="true">
                                        <Earth />
                                        <span>English</span>
                                    </span>
                                </a>
                            </div>
                            <div className="footer_btn">
                                <a>
                                    <span>US$ USD</span>
                                </a>
                            </div>
                            <a>
                                <AccessibilityIcon />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
