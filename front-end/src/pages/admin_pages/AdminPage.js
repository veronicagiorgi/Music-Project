import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BsBoxArrowRight } from "react-icons/bs";
import "./AdminPage.css";
import { useEffect } from "react";

const AdminPage = () => {

  useEffect(()=>{ 
    document.title = "Admin";
  }, [])

    //const [products, setProdutcs]= useState([]);

  return (
    <Container className="pb-5">
      <div className="d-flex justify-content-end">
        <Link to={"/"} className="btn btn-outline-info my-3">
          Home <BsBoxArrowRight />
        </Link>
      </div>
      <section id="jumbotronAdmin" className="d-flex align-items-center ">
        <h1 className="text-center mb-5 fw-bold text-white ms-5">
          Sezione Admin
        </h1>
      </section>
      <Row>
        <div className="mb-4">
          <h4>Per gestire il database, accedi ad una sezione.</h4>
          <hr></hr>
        </div>
      </Row>
      <Row className="justify-content-evenly">
        <Col xs={12} lg={4} className="my-2">
          <div className="card border-0" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Strumenti e Prodotti</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Chitarre, Pianoforti, Batterie ..
              </h6>
              <p className="card-text">
                Qui è possibile modificare, aggiungere o elminare un prodotto.
              </p>
              <Link to={"/admin/instruments"} className="btn btn-outline-dark">
                Accedi alla sezione "Strumenti e Prodotti".
              </Link>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={4} className="my-2">
          <div className="card border-0" style={{ width: "18rem" }}>
            <div className="card-body">
              <h5 className="card-title">Artisti</h5>
              <h6 className="card-subtitle mb-2 text-muted">
                Tutti gli artist
              </h6>
              <p className="card-text">
                Qui è possibile modificare, aggiungere o elminare un artista.
              </p>
              <Link to={"/admin/artists"} className="btn btn-outline-dark">
                Accedi alla sezione "Artisti".
              </Link>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminPage;
