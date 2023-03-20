import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsFillTelephoneFill,
  BsFillEnvelopeFill,
} from "react-icons/bs";
import { Link } from "react-router-dom";

const FooterTwo = () => {
  return (
    <Container as="footer" fluid className="text-light py-2" id="footer">
      <Row className="d-flex justify-content-evenly mt-4">
        <Col lg={2} sm={6}>
          <p className="fw-bold">Dove siamo</p>
          <p className="mb-0">
            Vicolo dei Panieri 5<br></br>
            00153 Roma
          </p>
        </Col>
        <Col lg={3} sm={6}>
          <p className="fw-bold">Contatti</p>
          <p className="mb-0">
            <BsFillTelephoneFill />
            +39 3285536385 <br></br>
            <span>
              <BsFillEnvelopeFill /> music.project@mail.it
            </span>
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="text-center moveFooter">
          <hr></hr>
          <Link
            to={"https://www.facebook.com/"}
            style={{ color: "white" }}
            className=" h5"
          >
            <BsFacebook />
          </Link>
          <Link
            to={"https://www.instagram.com/"}
            style={{ color: "white" }}
            className="mx-5 h5"
          >
            <BsInstagram />
          </Link>
          <Link
            to={"https://www.twitter.com/"}
            style={{ color: "white" }}
            className=" h5"
          >
            <BsTwitter />
          </Link>
        </Col>
      </Row>
    </Container>
  );
};
export default FooterTwo;
