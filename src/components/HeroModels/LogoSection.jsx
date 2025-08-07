import { logoIconsList } from "../../constants/index.js";
import React from "react";

const LogoIcon = ({ icon }) => {
  return (
    <div className="flex-none flex-center marquee-item">
      <div className="w-16 h-16">
        <img src={icon.imgPath} alt={icon.name} />
      </div>
    </div>
  );
};

const LogoSection = () => {
  return (
    <div className="md:my-20 my-10 relative">
    <div className="gradient-edge" />
    <div className="gradient-edge" />

    <div className="marquee h-52">
      <div className="marquee-box md:gap-12 gap-5">
        {logoIconsList.map((icon) => (
            <LogoIcon key={icon.imgPath} icon={icon} />
        ))}

        {logoIconsList.map((icon) => (
            <LogoIcon key={`duplicate-${icon.imgPath}`} icon={icon} />
        ))}
      </div>
    </div>
  </div>
 );
};

export default LogoSection;
