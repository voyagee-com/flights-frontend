import React from "react";
import AzulLogo from "../../images/AzulLogo";
import LatamLogo from "../../images/LatamLogo";
import GolLogo from "../../images/GolLogo";

const Icons = ({ icon }) => {
  switch (icon) {
    case "LA":
      return <LatamLogo />;
    case "AD":
      return <AzulLogo />;
    case "G3":
      return <GolLogo />;
    default:
      return icon;
  }
};

export default Icons;
