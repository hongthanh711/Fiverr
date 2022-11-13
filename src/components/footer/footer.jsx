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

export default function Footer() {
    return (
        <footer className="container">
            <div className="footer-wrapper">
                <div className="footer-content">
                    <div className="row">
                        <div className="col">
                            <h4 className="footer_title ">Categories</h4>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Graphics & Design
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Digital Marketing
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Writing & Translation
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Video & Animation
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Music & Audio
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Programming & Tech
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Data
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Business
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Lifestyle
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Sitemap
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <h4 className="footer_title ">About</h4>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Careers
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Press & News
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Partnerships
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Privacy Policy
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Terms of Service
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Intellectual Property Claims
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Investor Relations
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <h4 className="footer_title ">Support</h4>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Help & Support
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Trust & Safety
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Selling on Fiverr
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Buying on Fiverr
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="col">
                            <h4 className="footer_title ">Community</h4>
                            <ul className="nav flex-column">
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Events
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Blog
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Forum
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Community Standards
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Podcast
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Affiliates
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Invite a Friend
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a href="#" className="nav-link">
                                        Become a Seller
                                    </a>
                                </li>
                            </ul>
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
