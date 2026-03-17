import React from "react";

// Bootstrap 5 removed Jumbotron — this is a compatibility shim
export const Jumbotron = React.forwardRef(
  ({ children, fluid, className, style, id }, ref) => {
    return (
      <div
        ref={ref}
        id={id}
        style={style}
        className={`py-5 ${className || ""}`}
      >
        {children}
      </div>
    );
  }
);

export const NavLink = ({ href, children, className, target, rel }) => {
  return (
    <a
      href={href}
      className={`nav-link ${className || ""}`}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  );
};
