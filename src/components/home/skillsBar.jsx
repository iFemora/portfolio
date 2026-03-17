import React from "react";
import { Col } from "react-bootstrap";

const SkillsBar = ({ skill, value, isScrolled }) => {
  return (
    <Col xs="12" className="pb-3">
      <div className="d-flex justify-content-between mb-1">
        <span className="lead">{skill}</span>
        <span className="lead">{value}%</span>
      </div>
      <div className="progress" style={{ height: "8px" }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{
            width: isScrolled ? `${value}%` : "0%",
            transition: "width 1s ease-in-out",
            backgroundColor: "#533483",
          }}
          aria-valuenow={value}
          aria-valuemin="0"
          aria-valuemax="100"
        />
      </div>
    </Col>
  );
};

export default SkillsBar;
