import React, { useEffect } from "react";

const Fullpage = ({
  children,
  transition,
  sectionStart,
  nextSection,
  prevSection,
}: {
  children: React.ReactNode[];
  transition: number;
  sectionStart?: number;
  nextSection?: () => boolean;
  prevSection?: () => boolean;
}) => {
  let currentSection = sectionStart || 0;
  const id = "fullpage";

  useEffect(() => {
    window.addEventListener("wheel", HandleWheelEvent);
    return () => {
      window.removeEventListener("wheel", HandleWheelEvent);
    };
  }, []);

  const MoveSection = () => {
    const section = document.getElementById(id);
    if (section) {
      section.style.transform = `translateY(-${currentSection * 100}vh)`;
    }
  };

  const HandleWheelEvent = (e: WheelEvent): void => {
    window.removeEventListener("wheel", HandleWheelEvent);
    if (0 < e.deltaY && currentSection < children.length - 1) {
      GoNext();
    } else if (0 > e.deltaY && currentSection > 0) {
      GoPrev();
    }
    setTimeout(
      () => window.addEventListener("wheel", HandleWheelEvent),
      transition * 1000
    );
  };

  const GoNext = () => {
    currentSection++;
    MoveSection();
  };

  const GoPrev = () => {
    currentSection--;
    MoveSection();
  };

  return (
    <div
      id={id}
      className="fullpage"
      style={{ overflow: "hidden", transition: `all ${transition}s` }}
    >
      {children}
    </div>
  );
};

export default Fullpage;
