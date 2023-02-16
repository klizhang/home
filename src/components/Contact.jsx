import React from "react";
import { Element } from "react-scroll";
import styled from "styled-components";
// Components
import { Container } from "react-bootstrap";
import { Title } from "./globalStyledComponents";

const StyledSection = styled.section`
  min-height: 89vh;
  padding-top: var(--nav-height);
`;

export default function Contact() {
  return (
    <Element name={"Contact"} id="contact">
      <StyledSection className="d-flex flex-column justify-content-center">
        <Container className="d-flex">
          <Title>
            <h2>Contact Me</h2>
            <div className="underline"></div>
          </Title>
        </Container>
        <Container className="d-flex justify-content-center">
          <h4>My email: <a href="mailto:klizhang@usc.edu">klizhang@usc.edu</a></h4>
        </Container>
        <Container className="d-flex justify-content-center">
        </Container>
      </StyledSection>
    </Element>
  );
}
