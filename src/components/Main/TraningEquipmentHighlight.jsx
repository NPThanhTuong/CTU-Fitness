"use client";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
// import lgVideo from "lightgallery/plugins/video";
import { highlightImages } from "@/utils/constants";
import { twMerge } from "tailwind-merge";

function TraningEquipmentHighlight({ className }) {
  return (
    <div className={twMerge("mt-8", className)}>
      <LightGallery
        plugins={[lgZoom, lgThumbnail]}
        mode="lg-fade"
        elementClassNames="flex gap-4 flex-wrap justify-center"
      >
        {highlightImages.map((item, index) => (
          <a
            key={index}
            className="gallery-item"
            data-src={item.path}
            data-sub-html={item.title}
          >
            <img
              className="img-responsive h-96 rounded-sm"
              src={item.path}
              alt="Highlight image"
            />
          </a>
        ))}
      </LightGallery>
    </div>
  );
}

export default TraningEquipmentHighlight;
