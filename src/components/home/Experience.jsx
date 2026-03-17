import React from "react";
import { Jumbotron } from "./migration";
import { Container } from "react-bootstrap";

const ExperienceItem = ({ data }) => {
  return (
    <div className="mb-5">
      <div className="d-flex justify-content-between align-items-start flex-wrap mb-1">
        <div>
          <h5 className="mb-0 fw-bold">{data.role}</h5>
          <p className="text-muted mb-0">{data.company} · {data.location}</p>
        </div>
        <small className="text-muted mt-1">{data.date}</small>
      </div>
      <ul className="mt-2">
        {data.points.map((point, i) => (
          <li key={i} className="mb-1">{point}</li>
        ))}
      </ul>
    </div>
  );
};

const Experience = ({ experiences }) => {
  return (
    <Jumbotron fluid id="experience" className="bg-light m-0">
      <Container className="py-3">
        <h2 className="display-4 pb-5 text-center">{experiences.heading}</h2>
        {experiences.data.map((item, index) => (
          <ExperienceItem key={index} data={item} />
        ))}
      </Container>
    </Jumbotron>
  );
};

export default Experience;
