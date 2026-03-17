import React from "react";
import Container from "react-bootstrap/Container";

const Footer = (props) => {
  const bgStyle = { backgroundColor: "#f5f5f5" };

  return (
    <footer style={bgStyle} className="mt-auto py-5 text-center">
      <Container>
        {props.children}
        <p className="mt-4 text-muted">
          <small>
            &copy; {new Date().getFullYear()} Femi Siji-Kenneth. All rights reserved.
          </small>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
