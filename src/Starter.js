import React from 'react';
import './PricingTable.css'
import CancelIcon from '@material-ui/icons/Cancel';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { IconButton } from '@material-ui/core';

function Starter() {
    return (
        <div className="price-column">
            <div className="price-header">
                <div className="price">
                    <div className="dollar-sign">$</div>
                    0
                    <div className="per-month">/mo</div>
                </div>
                <div className="plan-name">Starter</div>
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
            <div className="feature inactive">
                <IconButton >
                   <CancelIcon/>
                </IconButton>
                Facebook & Instragram Ads
            </div>
            <div className="feature inactive">
                <IconButton >
                    <CancelIcon/>
                </IconButton>
                Design System Analytics
            </div>
            <div className="feature inactive">
                <IconButton >
                    <CancelIcon/>
                </IconButton>
                Unlimited Cloud Storage
            </div>
            <button className="cta">Go Starter</button>
 
        
        </div>
        
    )
}

export default Starter;

