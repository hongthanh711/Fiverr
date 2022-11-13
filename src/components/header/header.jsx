import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { Earth } from '../icon/earth'
import Search from '../search/search'
import { LogoHeader } from './../icon'

import './index.scss'
import CategoryTabBar from './tab'

export default function Header() {
    const navigate = useNavigate()

    let location = useLocation().pathname

    const [fixed, setFixed] = useState(false)

    const onSearch = (value) => {
        navigate(`/search/${value}`)
    }

    // useEffect(() => {
    // window.addEventListener('scroll', changeHeader)
    // }, [location])

    const changeHeader = () => {
        if (window.scrollY >= 100) {
            setFixed(true)
        } else {
            setFixed(false)
        }
    }
    window.addEventListener('scroll', changeHeader)

    return (
        <header className={fixed ? 'fixed' : ''}>
            <nav className="navbar navbar-expand-md navbar-dark">
                {/* Brand */}
                <NavLink className="navbar-brand" to="/">
                    <LogoHeader />
                </NavLink>
                {/* Toggler/collapsibe Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapsibleNavbar"
                >
                    <span className="navbar-toggler-icon" />
                </button>

                <div className="search-component">
                    <Search
                        variant="primary"
                        placeholder="What service are you looking for"
                        onSearch={onSearch}
                    />
                </div>

                {/* Navbar links */}
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Fiverr Business
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Explore
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                <Earth />
                                <span> English</span>
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                US$ USD
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                Become a Seller
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">
                                English
                            </a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">
                                Sign In
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link join" href="/login">
                                Join
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <div className={`tab-content ${fixed ? 'animate__animated animate__flipInX' : null}`}>
                <CategoryTabBar />
            </div>
        </header>
    )
}
