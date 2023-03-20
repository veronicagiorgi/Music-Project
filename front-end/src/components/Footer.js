import { Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () =>{
  return (
    <Container as="footer" fluid className="text-light py-2" id="footer">
      <Row>
        <div className="col text-center">
          <h2 className="fw-bold">Contatti</h2>
          <hr></hr>
        </div>
      </Row>
      <div className="row mt-">
        <div className="col-12 col-sm-6 col-lg-3 ps-5">
          <p className="fw-bold">Dove siamo</p>
          <p>
            Vicolo dei Panieri 5<br></br>
            00153 Roma <br></br>
            <i className="fa-solid fa-phone fa-fw"></i>
            +39 3285536385 <br></br>
            <i className="fa-solid fa-envelope"></i>
            music.project@mail.it
          </p>
        </div>
        <div className="col-12 col-sm-6 col-lg-3">
          <p className="fw-bold">Orari</p>
          <p>
            <i className="fa-solid fa-circle-info"></i>
            Lun- Ven : 9:00 - 20:00 <br></br>
            <i className="fa-solid fa-circle-info"></i>
            Sabato: 9:00 - 13:00 <br></br>
            <i className="fa-solid fa-circle-info"></i>
            Domenica: Chiuso
          </p>
        </div>
        <div className="col-12 col-sm-12 col-lg-6 pe-5">
          <span className="small">
            Mandaci un messaggio, ti risponderemo il primo possibile!
          </span>
          <div className="row">
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="Nome"
                aria-label="Nome"
              />
            </div>
            <div className="col">
              <input
                type="text"
                className="form-control"
                placeholder="E-mail"
                aria-label="E-mail"
              />
            </div>
            <div className="text-center">
              <textarea
                id="messaggio"
                name="messaggio"
                className="form-control mt-2"
                placeholder="Scrivi qui il tuo messaggio.."
              ></textarea>
            </div>
            <div className="col-12 text-center">
              <button type="submit" id="send" className="btn mt-2 text-light rounded-0">
                Invia
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
export default Footer;