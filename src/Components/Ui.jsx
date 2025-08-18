import React, { useEffect } from "react";

export default function SplineEmbed() {
  useEffect(() => {
    // Dynamically load the spline-viewer script only once
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://unpkg.com/@splinetool/viewer@1.10.45/build/spline-viewer.js";
    document.body.appendChild(script);
  }, []);

  return (
    <div className="relative w-full h-screen bg-black">
      <spline-viewer
        url="https://prod.spline.design/COR7vcVjaR79B5rr/scene.splinecode"
        class="absolute top-0 left-0 w-full h-full"
      ></spline-viewer>
    </div>
  );
}
