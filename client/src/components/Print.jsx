import React from "react";

function Print() {
  return (
    <div className="container">
      <div className="container">
        <div className="row">
          <div className="col-md-6" style="font-size: 24px; font-weight: bold;">
            Hospital Name
          </div>
          <div className="col-md-6">
            <div style="margin-bottom: 10px;">
              <strong>Mobile:</strong> 123-456-7890
            </div>
            <div style="margin-bottom: 10px;">
              <strong>Address:</strong> 123 Main St, City, Country
            </div>
            <div style="margin-bottom: 10px;">
              <strong>Email:</strong> example@example.com
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Print;
