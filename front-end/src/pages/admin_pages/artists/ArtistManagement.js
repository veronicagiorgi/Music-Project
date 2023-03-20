import { useEffect, useState } from 'react';
import { Button, Container, Row, Col, Modal, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import {
  getArtistByIdDTO,
  associateInstrumentToArtist,
  dissociateInstrumentFromArtist,
} from "../../../api";

import { BsXLg } from "react-icons/bs";

const ArtistManagement = () =>{

 const { artistId } = useParams ();
 const [artist, setArtist] = useState([]);
 const [instruments, setInstruments] = useState([]);
 const [instrumentId, setInstrumentId] = useState(0);
 const [show, setShow] = useState(false);
 const handleShow = () => setShow(true);
 const handleClose = () => setShow(false);

   const loadData = async() =>{
    const responseData = await getArtistByIdDTO(artistId);
    setArtist(responseData);
    setInstruments(responseData.instrumentCategory);
  }

  useEffect(()=>{
    document.title = "Artist Management"
    loadData()
  },[]);

  const handleFormSubmit = async (event) =>{
    event.preventDefault();
    const response = await associateInstrumentToArtist(instrumentId, artistId);
    if(response.ok){
      loadData();
      handleClose();
      setInstrumentId(0);
    } else {
      console.log(response)
    }
  };

  const handleDelete = async(id) =>{
    const response = await dissociateInstrumentFromArtist(id, artistId);
      handleClose()
      loadData();
  };
  
  return (
    <Container className="my-5">
      <section>
        <Row>
          <h1 className="mb-5 ms-5">
            {artist.artistFirstName} {artist.artistLastName}
          </h1>
        </Row>
        <div className="row text-center">
          <div className="col-12 col-sm-6 col-lg-4">
            <img
              src={artist.artistImageUrl}
              style={{ width: "200px", height: "200px", objectFit: "cover" }}
            />
          </div>
          <div className="col-12 col-sm-6 col-lg-8">
            <h4 className="mb-5">Strumenti</h4>
            <ul className="list-group list-group-flush w-50">
              {instruments.map((el) => {
                return (
                  <li className="list-group-item" key={el.id}>
                    <div className="d-flex justify-content-between">
                      <span>
                        {el.name} {el.type}
                      </span>
                      <Button
                        className='btn-sm'
                        variant="danger"
                        onClick={(e) => {
                          handleDelete(el.id);
                        }}
                      >
                        <BsXLg />
                      </Button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
      <hr></hr>
      <Row>
        <Col className="text-center">
          <Button variant="light" onClick={handleShow}>
            Associa uno strumento
          </Button>
        </Col>
      </Row>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Associa uno strumento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="id">
              <Form.Select
                autoFocus
                required
                className="mt-2"
                value={instrumentId}
                onChange={(e) => {
                  setInstrumentId(e.target.value);
                }}
              >
                <option value="">Seleziona uno strumento</option>
                <option value="1">Chitarra classica</option>
                <option value="2">Chitarra elettrica</option>
                <option value="3">Chitarra acustica</option>
                <option value="4">Pianoforte</option>
                <option value="7">Tromba</option>
                <option value="8">Sax</option>
                <option value="9">Violino</option>
                <option value="11">Batteria</option>
                <option value="12">Basso</option>
                <option value="15">Handpan</option>
              </Form.Select>
            </Form.Group>
            <div className="d-flex justify-content-end mt-4">
              <Button variant="primary" type="submit" className="me-2">
                Aggiungi
              </Button>
              <Button variant="secondary" onClick={handleClose}>
                Chiudi
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};
export default ArtistManagement;