import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact me" />
            <h3 className="mt-4 mb-4">Contact with me</h3>
            <p>
              {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
              beatae ratione iusto cum. Doloremque suscipit eius provident error
              labore est reprehenderit, exercitationem corrupti earum deleniti! */}
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-map-pin-line"></i>
                </span>
                <p>New Delhi, India</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-mail-line"></i>
                </span>
                <a className="mailto" href="mailto:mozammilrja0218@gmail.com">mozammilrja0218@gmail.com</a>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <i className="ri-phone-line"></i>
                </span>
                <p>+91 8102472325</p>
              </li>
            </ul>

            <div className={`${classes.social__links}`}>
              <Link href="#">
                <i className="ri-youtube-line"></i>
              </Link>
              <a className="mailto" href="https://github.com/mozammilrja" target="_blank" rel="noreferrer" >
                <i className="ri-github-line"></i>
              </a>
              <Link href="#">
                <i className="ri-facebook-line"></i>
              </Link>
              <a className="mailto" href="https://www.linkedin.com/in/mozammil-raja/" target="_blank" rel="noreferrer" >
                <i className="ri-linkedin-line"></i>
              </a>
              <a className="mailto" href="https://www.instagram.com/mozammil_khann/" target="_blank" rel="noreferrer">
                <i className="ri-instagram-line"></i>
              </a>
            </div>
          </Col>
          {/* { https://www.instagram.com/mozammil_khann/ } */}

          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
