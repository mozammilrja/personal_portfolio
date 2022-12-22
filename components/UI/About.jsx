import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";

import img02 from "../../public/images/img-02.jpg";

import classes from "../../styles/about.module.css";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          <Col lg="6" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="About me" />
            <h3 className="mt-4">I&apos;m here</h3>
            <h3 className="mb-4">to help your next project</h3>
            <p>
              Good programming skills or an ability to large-scale technical projects
              as a programmer build many projects

              Full stack developer full time at Immunebytes Strong integration with intuitive problem-solving skills. Proficient in Reactjs, Redux, NextJs JavaScript. Passionate about implementing and launching new projects. Ability to translate business requirements into technical solutions.
            </p>
          </Col>

          <Col lg="6">
            <div
              className={`${classes.about__img__gallery} d-flex gap-4 justify-content-end`}
            >
              <div className=" d-flex flex-column mb-3">
                <div className=" d-flex align-items-center gap-5">
                  <div>
                    <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                      <span className={`${classes.about__icon}`}>
                        <i className="ri-checkbox-circle-line"></i>
                      </span>
                      Problem Solving
                    </h6>

                    <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                      <span className={`${classes.about__icon}`}>
                        <i className="ri-checkbox-circle-line"></i>
                      </span>
                      Search A Lot
                    </h6>
                  </div>

                  <div>
                    <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                      <span className={`${classes.about__icon}`}>
                        <i className="ri-checkbox-circle-line"></i>
                      </span>
                      Creative Idea
                    </h6>

                    <h6 className=" d-flex align-items-center gap-2 mt-3 fw-normal">
                      <span className={`${classes.about__icon}`}>
                        <i className="ri-checkbox-circle-line"></i>
                      </span>
                      High Quality
                    </h6>
                  </div>
                </div>

                <div className="mt-5" style={{ display: "flex", justifyContent: "center" }}>
                  <button className="primary__btn">
                    <Link href="#portfolio">My Portfolio</Link>
                  </button>

                  {/* <button className="secondary__btn">
                    <a href="https://drive.google.com/file/d/1pZpD3BEI28BhNFv9jZA9um_Gwy8ke7IF/view" target="_blank" rel="noreferrer">Download CV</a>
                  </button> */}
                </div>
                {/* <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img01} alt="about-img" />
                </div> */}

                {/* <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img02} alt="about-img" />
                </div> */}
              </div>

              <div className=" d-flex flex-column mb-3">
                {/* <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img03} alt="about-img" />
                </div> */}

                {/* <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={img04} alt="about-img" />
                </div> */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
