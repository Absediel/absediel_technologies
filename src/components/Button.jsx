"use client";
import "../styles/Button.css";

const Button = ({
  children,
  outline = false,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`btn box ${
        outline ? "btn-outline" : "btn-primary"
      } ${className}`}
      {...props}
    >
      <span className="btn-content">{children}</span>
    </button>
  );
};

export default Button;