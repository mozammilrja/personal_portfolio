import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import heroImg from "../../public/images/profile.jpg";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* ========== hero content ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Hello" />
              <h2 className="mt-3 mb-3">I&apos;m Mozammil Raja</h2>
              <h5 className="mb-4">Frontend Developer</h5>
              <p>
I am extremely proficient in Front-End Development using HTML5, Cascade Style Sheets (CSS3), Bootstrap, MaterialUI,Tailwindcss, Advance Javascript, React.Js & NextJS And apart from Front-End, I have good knowledge in Back-End using Node,Express & MongoDB and continuously engage in trying to extend my skills with new technology.              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <a href="https://drive.google.com/file/d/1EJ2R1GVRhQQoQNsETDtYMeL44z8It5gh/view?usp=sharing" target="_blank" rel="noreferrer">Download CV</a>
                </button>

                {/* <button className="secondary__btn">
                  <a href="https://drive.google.com/file/d/1pZpD3BEI28BhNFv9jZA9um_Gwy8ke7IF/view" target="_blank" rel="noreferrer">Download CV</a>
                </button> */}
              </div>
            </div>
          </Col>

          {/* ========== hero img ============= */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image alt="hero-image" src={heroImg} width="400" height="400" />

              <div className={`${classes.hero__skills}`}>
                <h6>Skills</h6>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
              </div>

              <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-lightbulb-flash-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Experience</h6>
                  <h5 className="mb-0">1.5 Years</h5>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
