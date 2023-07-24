import React from "react";
const SecondaryBanner = (props) => {
  return (
    <div className="Second-Banner-structure" style={{ backgroundImage: `url(${props.bg})` }}>
        <div className="SB-degradado">
            <div className="SB-des" >
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
        </div>
    </div>
  );
};
export default SecondaryBanner;
