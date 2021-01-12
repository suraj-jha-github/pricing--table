import {  IconButton } from '@material-ui/core';
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import React from 'react';
import './PricingTable.css'

function Professional() {
    return (
        <div className="price-column popular">
            <div className="most-popular">Most Popular</div>
            <div className="price-header">
                <div className="price">
                    <div className="dollar-sign">$</div>
                    25
                    <div className="per-month">/mo</div>
                </div>
                <div className="plan-name">Professional</div>
            </div>
            <div className="divider"></div>
            <div className="feature">
                <IconButton >
                    <CheckCircleIcon className="check-circle"/>
                </IconButton>
                Centralized Items
            </div>
            <div className="feature">
                <IconButton >
                    <CheckCircleIcon/>
                </IconButton>
                Version History
            </div>
            <div className="feature">
                <IconButton >
                    <CheckCircleIcon/>
                </IconButton>
                Plugin Administration
            </div>
            <div className="feature">
                <IconButton >
                    <CheckCircleIcon/>
                </IconButton>
                Facebook & Instragram Ads
            </div>
            <div className="feature inactive profeature">
                <IconButton >
                    <CancelIcon/>
                </IconButton>
                Design System Analytics
            </div>
            <div className="feature inactive profeature">
                <IconButton >
                    <CancelIcon/>
                </IconButton>
                Unlimited Cloud Storage
            </div>
            <button className="cta">Go Professional</button>
        
        </div>
    )
}

export default Professional;
