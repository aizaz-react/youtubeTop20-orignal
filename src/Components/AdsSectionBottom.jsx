import React, { useEffect } from "react";
import { getAds } from "../Functions/GlobalFunctions";

const AdsSectionBottom = () => {
  useEffect(() => {
    setTimeout(() => {
      getAds("ads5", "f115cfab7bd15124908c0b38696c5c2e");
    }, 6000);
    setTimeout(() => {
      getAds("ads6", "c3d246d1dc5a3c5cbaa9498115c4c2e6");
    }, 7000);
    setTimeout(() => {
      getAds("ads7", "2da0c2bb2d961b93729a3547bad82631");
    }, 8000);
    setTimeout(() => {
      getAds("ads8", "db2db4031782f0e417dfb5faa1759fe2");
    }, 9000);
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",

        justifyContent: "space-around",
        marginTop: "2%",
      }}
    >
      <div id="ads5"></div>
      <div id="ads6"></div>
      <div id="ads7"></div>
      <div id="ads8"></div>
    </div>
  );
};

export default AdsSectionBottom;
