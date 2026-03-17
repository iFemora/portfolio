import React from "react";
import Container from "react-bootstrap/Container";
import { Jumbotron } from "./migration";

// Repos section is disabled in config — this component is a no-op placeholder
const Project = ({ heading }) => {
  return (
    <Jumbotron fluid id="projects" className="bg-light m-0">
      <Container>
        <h2 className="display-4 pb-5 text-center">{heading}</h2>
      </Container>
    </Jumbotron>
  );
};

export default Project;
