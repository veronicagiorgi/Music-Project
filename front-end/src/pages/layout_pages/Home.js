import Hero from "../../components/Hero";
import ManufacturerList from "../../components/manufacturers/ManufacturerList";
import { Container, Row, Col } from "react-bootstrap";
import { getAllManufacturers } from "../../api";
import { useState, useEffect } from "react";

const Home = () => {

  const [manufacturers, setManufacturers] = useState([]);

  const loadData = async () => {
    const responseData = await getAllManufacturers();
    setManufacturers(responseData);
  };

  useEffect(() => {
    document.title = "Home";
    loadData();
  }, []);

  return (
    <>
      <Hero />
      <Container>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <h2 className="mb-3">Il piacere di scegliere</h2>
            <p>
              Benvenuti nel nostro sito dedicato agli strumenti musicali! Qui
              potrete trovare una vasta gamma di strumenti musicali di alta
              qualità, tra cui chitarre, batterie, tastiere e molto altro
              ancora.
            </p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-center">
          <Col xs={12} md={6} lg={4}>
            <h2 className="mb-3">"Il suono giusto"</h2>
            <p>
              Se sei appassionato di musica e stai cercando il giusto strumento
              per esprimere la tua creatività, il nostro blog è ciò che fa per
              te! Troverai guide, recensioni e consigli su come scegliere il
              miglior strumento per le tue esigenze, che tu sia un principiante
              o un professionista.
            </p>
          </Col>
        </Row>
        <Row className="d-flex justify-content-end mb-5">
          <Col xs={12} md={6} lg={4}>
            <h2 className="mb-3">Note di successo</h2>
            <p>
              Inoltre troverete notizie, curiosità e approfondimenti sui grandi
              artisti della storia della musica, dalle leggende del passato ai
              più grandi nomi dell'attualità!
            </p>
          </Col>
        </Row>
        <hr></hr>
        <ManufacturerList manufacturers={manufacturers} />
      </Container>
    </>
  );
};

export default Home;
