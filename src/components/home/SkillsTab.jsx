import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import SkillsBar from "./skillsBar";

const SkillsSection = ({ skills, isScrolled }) => {
  return skills.map((skill, index) => (
    <SkillsBar
      key={index}
      skill={skill.name}
      value={skill.value}
      isScrolled={isScrolled}
    />
  ));
};

const SkillsTab = ({ skills, isScrolled }) => {
  const midpoint = Math.ceil(skills.length / 2);
  const firstHalf = skills.slice(0, midpoint);
  const secondHalf = skills.slice(midpoint);

  return (
    <Container>
      <Row>
        <Col md="6">
          <SkillsSection skills={firstHalf} isScrolled={isScrolled} />
        </Col>
        <Col md="6">
          <SkillsSection skills={secondHalf} isScrolled={isScrolled} />
        </Col>
      </Row>
    </Container>
  );
};

export default SkillsTab;
