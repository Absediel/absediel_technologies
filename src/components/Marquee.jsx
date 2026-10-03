"use client";
import "../styles/Marquee.css";
import TechPill from "./Techpill";

const Marquee = ({ items = [], reverse = false }) => {
  const data = [...items, ...items];

  return (
    <div className="marquee">
      <div
        className={`marquee-track ${reverse ? "reverse" : ""}`}
      >
        {data.map((item, index) => (
          <TechPill
            key={`${item.title}-${index}`}
            icon={item.icon}
            title={item.title}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Marquee;