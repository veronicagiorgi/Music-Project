import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { postProduct, putProduct } from "../../api";

const ProductForm = ({ toggleShow, onUpdateData, item }) => {

  const [manufacturerId, setManufacturerId] = useState("");
  const { instrumentId } = useParams();

  const [name, setName] = useState(item ? item.name : "");
  const [description, setDescription] = useState(item ? item.description : "");
  const [imageUrl, setImageUrl] = useState(item ? item.imageUrl : "");
  const [price, setPrice] = useState(item ? item.price : "");
  const [rate, setRate] = useState(item ? item.rate : "");
  const [urlVideo, setUrlVideo] = useState(item ? item.urlVideo : "");


  const handleCancel = () => {
    toggleShow();
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
      if (item) {
        const productToEdit = {
          name: name,
          description: description,
          imageUrl: imageUrl,
          price: price,
          rate: rate,
          urlVideo: urlVideo,
        };
        const response = await putProduct(instrumentId, item.id, productToEdit);
        if (response.ok) {
          toggleShow();
          onUpdateData();
        } else {
          console.log(response.data);
        }
      } else {
        const newProduct = {
          name: name,
          description: description,
          imageUrl: imageUrl,
          price: price,
          rate: rate,
          urlVideo: urlVideo,
        };
        const response = await postProduct(
          instrumentId,
          newProduct,
          manufacturerId
        );
        if (response.ok) {
          toggleShow();
          onUpdateData();
        } else {
          console.log(response);
        }
      }
    };

  return (
    <Form onSubmit={handleFormSubmit}>
      <div className="mb-3">
        <Form.Group controlId="name">
          <Form.Label>Nome Modello*</Form.Label>
          <Form.Control
            required
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Group>
      </div>
      <div className="mb-3">
        <Form.Group controlId="description">
          <Form.Label>Descrizione* </Form.Label>
          <Form.Control
            required
            type="text"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
        </Form.Group>
      </div>
      <div className="mb-3">
        <Form.Group controlId="imageUrl">
          <Form.Label>Url immagine* </Form.Label>
          <Form.Control
            required
            type="text"
            value={imageUrl}
            onChange={(e) => {
              setImageUrl(e.target.value);
            }}
          />
        </Form.Group>
      </div>
      <div className="mb-3">
        <Form.Group controlId="price">
          <Form.Label>
            Prezzo <span className="text-muted">(opzionale)</span>
          </Form.Label>
          <Form.Control
            type="number"
            min={0}
            value={price}
            onChange={(e) => {
              setPrice(e.target.value);
            }}
          />
        </Form.Group>
      </div>
      <div className="mb-3">
        <Form.Group controlId="rate">
          <Form.Label>
            Recensione <span className="text-muted">(opzionale)</span>
          </Form.Label>
          <Form.Control
            type="number"
            min={0}
            max={5}
            value={rate}
            onChange={(e) => {
              setRate(e.target.value);
            }}
          />
        </Form.Group>
      </div>
      <div className="mb-3">
        <Form.Group controlId="urlVideo">
          <Form.Label>
            Url Video-Recensione<span className="text-muted"> (opzionale)</span>
          </Form.Label>
          <Form.Control
            type="text"
            value={urlVideo}
            onChange={(e) => {
              setUrlVideo(e.target.value);
            }}
          />
        </Form.Group>
      </div>
      <Form.Group controlId="manufacturer">
        <Form.Label>Casa Produttrice*</Form.Label>
        <Form.Select
          required
          aria-label="Default select example"
          value={manufacturerId}
          onChange={(e) => {
            setManufacturerId(e.target.value);
          }}
        >
          <option value="">Scegli una casa produttrice</option>
          <option value="1">Yamaha</option>
          <option value="2">Fender</option>
          <option value="3">Gibson</option>
          <option value="4">Ibanez</option>
          <option value="5">Astrand</option>
          <option value="6">Richwood</option>
          <option value="7">Dean</option>
          <option value="8">Hofner</option>
          <option value="9">Kawai</option>
          <option value="10">Steinway</option>
          <option value="11">Shulze Pollman</option>
          <option value="12">Stentor</option>
          <option value="13">Primavera</option>
          <option value="14">Alysee</option>
          <option value="15">Maton</option>
          <option value="16">Taylor</option>
          <option value="17">Martin&Co</option>
          <option value="18">Pearl</option>
          <option value="19">Ludwig</option>
          <option value="20">Mapex</option>
        </Form.Select>
      </Form.Group>
      <div className="small text-muted mt-2">
        * i campi contrassegnati sono obbligatori
      </div>
      <div className="mt-3">
        <Button type="submit" variant="outline-dark" className="me-3">
          Save
        </Button>
        <Button onClick={handleCancel} variant="outline-dark" className="me-3">
          Cancel
        </Button>
      </div>
    </Form>
  );
};
export default ProductForm;