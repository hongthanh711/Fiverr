import React from 'react'

import './index.scss'
export default function TrustBy() {
    return (
        <div className="trusted_by d-flex justify-content-center">
            <span className="d-flex align-items-center">Trusted by:</span>
            <ul className="list_partner d-flex align-items-center">
                <li>
                    <img src="./images/logo-partner/facebook.31d5f92.png" alt="" />
                </li>
                <li>
                    <img src="./images/logo-partner/google.517da09.png" alt="" />
                </li>
                <li>
                    <img src="./images/logo-partner/netflix.e3ad953.png" alt="" />
                </li>
                <li>
                    <img src="./images/logo-partner/pandg.8b7310b.png" alt="" />
                </li>
                <li>
                    <img src="./images/logo-partner/paypal.ec56157.png" alt="" />
                </li>
            </ul>
        </div>
    )
}
