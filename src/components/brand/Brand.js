import React from "react";
import "./brand.css";
import google from "../../assets/google.png";
import slack from "../../assets/slack.png";
import atlassian from "../../assets/atlassian.png";
import dropbox from "../../assets/dropbox.png";
import shopify from "../../assets/shopify.png";
function Brand() {
  return (
    <div className="gpt3__brand section__padding ">
      <div>
        <img src={google} alt="gg" />
      </div>
      <div>
        <img src={slack} alt="sl" />
      </div>
      <div>
        <img src={atlassian} alt="at" />
      </div>
      <div>
        <img src={dropbox} alt="dr" />
      </div>
      <div>
        <img src={shopify} alt="sh" />
      </div>
    </div>
  );
}

export default Brand;
