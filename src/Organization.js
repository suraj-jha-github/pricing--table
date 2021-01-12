import React from "react";
import "./PricingTable.css";
import {  IconButton } from "@material-ui/core";

import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function Organization() {
  return (
    <div className="price-column">
      <div className="price-header">
        <div className="price">
          <div className="dollar-sign">$</div>
          50
          <div className="per-month">/mo</div>
        </div>
        <div className="plan-name">Organization</div>
      </div>
      <div className="divider"></div>
      <div className="feature">
        <IconButton>
          <CheckCircleIcon className="check-circle" />
        </IconButton>
        Centralized Items
      </div>
      <div className="feature">
        <IconButton>
          <CheckCircleIcon />
        </IconButton>
        Version History
      </div>
      <div className="feature">
        <IconButton>
          <CheckCircleIcon />
        </IconButton>
        Plugin Administration
      </div>
      <div className="feature">
        <IconButton>
          <CheckCircleIcon />
        </IconButton>
        Facebook & Instragram Ads
      </div>
      <div className="feature ">
        <IconButton>
          <CheckCircleIcon />
        </IconButton>
        Design System Analytics
      </div>
      <div className="feature ">
        <IconButton>
          <CheckCircleIcon />
        </IconButton>
        Unlimited Cloud Storage
      </div>
      <button className="cta">Go Organization</button>
    </div>
  );
}

export default Organization;

