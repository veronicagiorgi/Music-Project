import { useState, useEffect } from "react";
import { validate } from "../../../validate";
import {
  getAllArtists,
  deleteArtistById,
  createArtistWithInstrument,
} from "../../../api";
import { Link } from "react-router-dom";
import { BsBoxArrowRight } from "react-icons/bs";
import { Container, Button, Modal, Form } from "react-bootstrap";
import CardArtistAdmin from "../../../components/artists/CardArtistAdmin";

const AdminArtist = () => {
  const [artists, setArtists] = useState([])
  const [artistId, setArtistId] = useState(1);
  const [instrumentId, setInstrumentId] = useState(0);
  const [show, setShow] = useState(false);
  const [showAdd, setShowAdd] = useState(false);

  const defaultInputState = {
    firstName: "",
    lastName: "",
    country: "",
    imageUrl: ""
  };

  const [inputState, setInputState] = useState(defaultInputState);
  const [inputErrors, setInputErrors] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

  const clear = () => {
    setInputState(defaultInputState);
    setArtistId(1);
    setInstrumentId(1);
  };

  const loadData = async () => {
    const responseData = await getAllArtists();
    setArtists(responseData);
  };

  useEffect(() => {
    document.title = "Admin Artist"
    loadData();
  }, []);

  const handleInputChange = (input, value) => {
    const newInputState = { ...inputState, [input]: value };
    setInputState(newInputState);
  };

  const handleDeleteArtist = async (event) => {
    event.preventDefault();
    const confirm = window.confirm("Sei sicuro di voler cancellare l'artista con id " + artistId + "?");
    if (confirm) {
      const response = await deleteArtistById(artistId);
      if (response.ok) {
        handleClose();
        loadData();
        clear();
      } else {
        console.log(response) 
      }
    }
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const errorObj = validate(inputState);
    if(Object.keys(errorObj).length === 0){
      const response = await createArtistWithInstrument(instrumentId, inputState);
      if (response.ok) {
        handleCloseAdd();
        clear();
        loadData();
      } else {
        console.log(response)
      }
    }  
    setInputErrors(errorObj);
  };

  return (
    <Container className="my-5">
      <header>
        <div className="d-flex justify-content-end">
          <Link to={"/admin"} className="btn btn-outline-warning my-3">
            Exit <BsBoxArrowRight />
          </Link>
        </div>
        <h2 className="text-center mb-5">Sezione Artsti</h2>
        <div className="d-flex justify-content-evenly">
          <Button
            variant="outline-danger"
            className="btn-sm"
            onClick={handleShow}
          >
            Elimina un artista
          </Button>
          <Button variant="light" className="btn-sm" onClick={handleShowAdd}>
            Crea un artista
          </Button>
        </div>
      </header>
      <div className="row">
        {artists.map((artist) => {
          return <CardArtistAdmin artist={artist} key={artist.id} />;
        })}
      </div>
      {/*modale per la delete */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminazione Artista</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Digitare l'ID dell'artista da eliminare:
          <Form onSubmit={handleDeleteArtist}>
            <Form.Group className="mb-3" controlId="id">
              <Form.Control
                type="number"
                min={1}
                placeholder="ID"
                autoFocus
                className="mt-2"
                value={artistId}
                onChange={(e) => {
                  setArtistId(e.target.value);
                }}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleDeleteArtist}>
            Elimina
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
      {/* modale per la post */}
      <Modal show={showAdd} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungere un artista</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" controlId="firstName">
              <Form.Label>Nome:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nome"
                autoFocus
                className="mt-2"
                value={inputState.firstName}
                onChange={(e) => {
                  handleInputChange(e.target.id, e.target.value);
                }}
                isInvalid={inputErrors.firstName ? true : false}
              />
              <Form.Control.Feedback type="invalid">
                {inputErrors.firstName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastName">
              <Form.Label>Cognome:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Cognome"
                className="mt-2"
                value={inputState.lastName}
                onChange={(e) => {
                  handleInputChange(e.target.id, e.target.value);
                }}
                isInvalid={inputErrors.lastName ? true : false}
              />
              <Form.Control.Feedback type="invalid">
                {inputErrors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="country">
              <Form.Label>Nazione:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nazione"
                className="mt-2"
                value={inputState.country}
                onChange={(e) => {
                  handleInputChange(e.target.id, e.target.value);
                }}
                isInvalid={inputErrors.country ? true : false}
              />
              <Form.Control.Feedback type="invalid">
                {inputErrors.country}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group className="mb-3" controlId="imageUrl">
              <Form.Label>Url immagine:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Url immagine"
                className="mt-2"
                value={inputState.imageUrl}
                onChange={(e) => {
                  handleInputChange(e.target.id, e.target.value);
                }}
                isInvalid={inputErrors.imageUrl ? true : false}
              />
              <Form.Control.Feedback type="invalid">
                {inputErrors.imageUrl}
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group controlId="instrument" className="mt-3">
              <Form.Label>Strumenti</Form.Label>
              <Form.Select
                value={instrumentId}
                required
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
                <option value="12">Batteria</option>
                <option value="13">Basso</option>
              </Form.Select>
            </Form.Group>
            <div className="d-flex justify-content-end mt-4">
              <Button variant="primary" type="submit" className="me-2">
                Aggiungi
              </Button>
              <Button variant="secondary" onClick={handleCloseAdd}>
                Chiudi
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};
export default AdminArtist;
