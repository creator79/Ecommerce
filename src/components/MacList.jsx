import React from "react";
import { MacbookScroll } from "../components/ui/macbook-scroll";

const MacbookScrollDemo = () => {
  return (
    <div className="overflow-hidden mt-[-15rem] w-full">
      <MacbookScroll
        title={
          <span>
            This is Our Latest Catalogues. <br /> Shop Now.
          </span>
        }
        src="https://w0.peakpx.com/wallpaper/380/104/HD-wallpaper-fashion-collage-louis-vuitton-collage.jpg"
        showGradient={false}
      />
    </div>
  );
};

export default MacbookScrollDemo;
