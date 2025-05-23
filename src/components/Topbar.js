import React from 'react';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="container">
        <div className="topbar-left">
          <div className="topbar-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>Manas Satara, Shivajinagar, Pune, Maharashtra 411005</span>
          </div>

           {/* Diamond shape */}
          
          <div className="topbar-item">
            <i className="fas fa-clock"></i>
            <span>Daily : 8.00 am to 10.00 pm</span>
          </div>
        </div>

        <div className="topbar-right">
          <div className="topbar-item">
            <i className="fas fa-phone"></i>
            <span>+91 91919191919</span>
          </div>
          
          <div className="topbar-item">
            <i className="fas fa-envelope"></i>
            <span>booking@manassatara.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar; 