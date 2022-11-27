import React from "react";
import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About Me</Heading>
            <FooterLink href="#">Personal Portfolio</FooterLink>
            <FooterLink href="#">Goals</FooterLink>
            <FooterLink href="#">In Progress</FooterLink>
          </Column>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href="#">Frontend</FooterLink>
            <FooterLink href="#">Backend</FooterLink>
            <FooterLink href="#">Coding</FooterLink>
            <FooterLink href="#">Redux</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Me</Heading>
            <FooterLink href="#">İstanbul</FooterLink>
            <FooterLink href="#">Ordu</FooterLink>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <FooterLink href="#">
              <i className="fab fa-facebook-f">
                <span style={{ marginLeft: "10px" }}>Facebook</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-instagram">
                <span style={{ marginLeft: "10px" }}>Instagram</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-twitter">
                <span style={{ marginLeft: "10px" }}>Twitter</span>
              </i>
            </FooterLink>
            <FooterLink href="#">
              <i className="fab fa-linkedin">
                <span style={{ marginLeft: "10px" }}>LinkedIn</span>
              </i>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;
