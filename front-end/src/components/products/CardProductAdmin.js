import { Card, Button, Col } from "react-bootstrap";
import { useState } from "react";
import ProductForm from "./ProductForm";

const CardProductAdmin = ({ item, onDeleteProduct, onUpdateData }) => {
  const [showEdit, setShowEdit] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const toggleShowModal = () => {
    const timer = setTimeout(() => {
      setShowModal(!showModal);
      setShowEdit(!showEdit);
    }, 150);
    return () => clearTimeout(timer);
  };

  const handleDeleteProduct = () => {
    const confirm = window.confirm(
      "Sei sicuro di voler cancellare il prodotto con id " + item.id + "?"
    );
    if (confirm) {
      onDeleteProduct(item.id);
    }
  };
  const toggleShowEdit = () => {
    setShowEdit(!showEdit);
  };

  return (
    <Col lg={4} sm={6}>
      {showEdit && (
        <Card className="text-center h-100 border-0">
          <Card.Header className="bg-white">
            <img
              src={item.imageUrl}
              alt={item.name}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </Card.Header>
          <Card.Body>
            <Card.Title>{item.name}</Card.Title>
            <Card.Text>Numero identificativo: {item.id}</Card.Text>
            <Card.Text>Prezzo: {item.price} &euro;</Card.Text>
            <Button variant="light" className="mx-2" onClick={toggleShowEdit}>
              Modifica
            </Button>
            <Button variant="danger" tye="sumbmit" onClick={handleDeleteProduct}>
              Elimina
            </Button>
          </Card.Body>
        </Card>
      )}
      {
        <Card.Footer className="bg-white ">
          {!showEdit && (
            <div>
              <ProductForm
                toggleShow={toggleShowModal}
                edit
                item={item}
                onUpdateData={onUpdateData}
              />
            </div>
          )}
        </Card.Footer>
      }
    </Col>
  );
};

export default CardProductAdmin;