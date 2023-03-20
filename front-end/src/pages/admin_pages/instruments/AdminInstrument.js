import { useEffect, useState } from "react";
import { getAllInstruments, deleteInstrumentById, postInstrument } from "../../../api";
import CardInstrumentAdmin from "../../../components/instruments/CardInstrumentAdmin";
import { Link } from "react-router-dom";
import { BsBoxArrowRight } from "react-icons/bs";
import { Button, Container, Form, Modal } from "react-bootstrap";


const AdminInstrument = () => {
  const [instruments, setInstruments] = useState([]);
  const [instrumentId, setInstrumentId] = useState(1);

  const [show, setShow] = useState(false);
  const [showAdd, setShowAdd] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd= () => setShowAdd(true);
  

  const defaultInputState = {
    name: "",
    type: "",
    imageUrl: "",
  };
      
  const [inputState, setInputState] = useState(defaultInputState);

  const clear = () =>{
    setInputState(defaultInputState)
    setInstrumentId(1);
  };

  const loadData = async () => {
    const responseData = await getAllInstruments();
    setInstruments(responseData);
  };

  useEffect(() => {
    document.title = "Admin Instrument";
    loadData();
  }, []);

  const handleInputChange = (input, value) => {
    const newInputState = { ...inputState, [input]: value };
    setInputState(newInputState);
  };

 const handleAddInstrument = async (event) =>{
  event.preventDefault();
  const response = await postInstrument(inputState);
  if(response.ok) {
    handleCloseAdd();
    loadData();
    clear();
  } else {
    console.log(response)
  }
 };

  const handleDeleteInstrument = async (event) =>{
    event.preventDefault();
    const confirm = window.confirm("Sei sicuro di voler cancellare lo strumento con id " + instrumentId + "?");
    if(confirm){
      const response = await deleteInstrumentById(instrumentId);
      if(response.ok){
        handleClose();
        loadData();
        clear();
      } else {
        console.log(response)
      }
    }
  };

  return (
    <Container>
      <header>
        <div className="d-flex justify-content-end">
          <Link to={"/admin"} className="btn btn-outline-warning my-3">
            Exit <BsBoxArrowRight />
          </Link>
        </div>
        <h2 className="text-center mb-5">Sezione Strumenti</h2>
        <div className="d-flex justify-content-evenly mb-5">
          <Button
            variant="outline-danger"
            className="btn-sm"
            onClick={handleShow}
          >
            Elimina uno strumento
          </Button>
          <Button variant="light" className="btn-sm" onClick={handleShowAdd}>
            Aggiungi uno strumento
          </Button>
        </div>
      </header>
      <div className="row">
        {instruments.map((instrument) => {
          return (
            <CardInstrumentAdmin instrument={instrument} key={instrument.id} />
          );
        })}
      </div>
      {/* modale per la delete */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Eliminazione Strumento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Digitare l'ID dello strumento da eliminare:
          <Form onSubmit={handleDeleteInstrument}>
            <Form.Group className="mb-3" controlId="id">
              <Form.Control
                type="number"
                min={1}
                placeholder="ID"
                autoFocus
                className="mt-2"
                value={instrumentId}
                onChange={(e) => {
                  setInstrumentId(e.target.value);
                }}
                required
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleDeleteInstrument}>
            Elimina
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Chiudi
          </Button>
        </Modal.Footer>
      </Modal>
      {/* modale per aggiungere uno strumento */}
      <Modal show={showAdd} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Aggiungi uno Strumento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleAddInstrument}>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nome:</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Nome"
                autoFocus
                className="mt-2"
                value={inputState.name}
                onChange={(e) => {
                  handleInputChange(e.target.id, e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="type">
              <Form.Label>Tipologia:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Tipologia"
                className="mt-2"
                value={inputState.type}
                onChange={(e) => {
                  handleInputChange(e.target.id, e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="imageUrl">
              <Form.Label>Url immagine:</Form.Label>
              <Form.Control
                type="text"
                required
                placeholder="Url immagine"
                className="mt-2"
                value={inputState.imageUrl}
                onChange={(e) => {
                  handleInputChange(e.target.id, e.target.value);
                }}
              />
            </Form.Group>
            <Button variant="primary" type="submit" className="me-2">
              Aggiungi
            </Button>
            <Button variant="outline-secondary" onClick={handleCloseAdd}>
              Chiudi
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};
export default AdminInstrument;
