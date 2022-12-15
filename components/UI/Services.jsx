import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                {/* <ServicesItem title="App Development" icon="ri-apps-line" /> */}
                <ServicesItem
                  title="Full-Stack Development"
                  icon="ri-code-s-slash-line"
                />

                <ServicesItem title="Web Development" icon="ri-computer-line" />
              </div>
            </div>
          </Col>

          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="What I do" />
            <h3 className="mb-0 mt-4">Better Design,</h3>
            <h3 className="mb-4">Better Experience</h3>
            <p>
              Full stack developer  Strong integration with intuitive problem-solving skills. Proficient in Reactjs, Redux, NextJs JavaScript. Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
