import React, { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [progress, setProgress] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const progressPath = document.querySelector(".progress-wrap path");
    const pathLength = progressPath.getTotalLength();

    // إعدادات البداية
    progressPath.style.strokeDasharray = `${pathLength} ${pathLength}`;
    progressPath.style.strokeDashoffset = pathLength;

    const updateProgress = () => {
      const scroll = window.pageYOffset;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      const progressValue = pathLength - (scroll * pathLength) / height;
      progressPath.style.strokeDashoffset = progressValue;
      setProgress(progressValue);
    };

    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
      updateProgress();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`progress-wrap ${isActive ? "active-progress" : ""}`}
      onClick={scrollToTop}
    >
      <svg
        className="progress-circle"
        width="100%"
        height="100%"
        viewBox="-1 -1 102 102"
      >
        <path d="M50,1 a49,49 0 1,1 0,98 a49,49 0 1,1 0,-98" />
      </svg>
    </div>
  );
};

export default ScrollProgress;
