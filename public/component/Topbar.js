import React from 'react';

const Topbar = () => (
    <div className="topbar">
        <div className="container">
          <address className="topbar-item">
            <div className="icon">
              <ion-icon name="location-outline" aria-hidden="true" />
            </div>
            <span className="span">
              Manas Satara, Shivajinagar, Pune, Maharashtra 411005
            </span>
          </address>
          <div className="separator" />
          <div className="topbar-item item-2">
            <div className="icon">
              <ion-icon name="time-outline" aria-hidden="true" />
            </div>
            <span className="span">Daily : 8.00 am to 10.00 pm</span>
          </div>
          <a href="tel:+91123456767" className="topbar-item link">
            <div className="icon">
              <ion-icon name="call-outline" aria-hidden="true" />
            </div>
            <span className="span">+91 91919191919</span>
          </a>
          <div className="separator" />
          <a href="mailto:booking@manassatara.com" className="topbar-item link">
            <div className="icon">
              <ion-icon name="mail-outline" aria-hidden="true" />
            </div>
            <span className="span">booking@manassatara.com</span>
          </a>
        </div>
      </div>
);
export default Topbar;