import { useEffect, useState } from 'react';
import { Alert, Container, Button, Modal,Row } from 'react-bootstrap';
import { useParams, Link } from 'react-router-dom';
import { BsBoxArrowRight, BsPlusLg } from "react-icons/bs";
import { getProductsByInstrumentId } from '../../../api';
import CardProductAdmin from '../../../components/products/CardProductAdmin';
import { deleteProductById } from '../../../api';
import ProductForm from '../../../components/products/ProductForm';

const InstrumentManagment = () =>{

 const { instrumentId } = useParams ();
 const [products, setProducts] = useState([]);
 const[showModal, setShowModal] = useState(false);

  const loadData =async() =>{
    const responseData = await getProductsByInstrumentId(instrumentId);
    setProducts(responseData);
  };

  useEffect(()=>{
    document.title = "Instrument Management";
    loadData();
  }, []);

//delete product

  const deleteProduct = async (productId) => {
    const response = await deleteProductById(
      instrumentId,
      productId,
    );
    if (response.ok) {
      loadData();
    } else {
      console.log(response);
    }
  };

  const toggleShowModal = () => {
    const timer = setTimeout(()=>{
      setShowModal(!showModal);
    }, 150);
    return () => clearTimeout(timer)
  };

  return (
    <>
      <Container className="my-5 pb-5">
        <div className="d-flex justify-content-end mb-5">
          <Link to={"/admin/instruments"} className="btn btn-outline-info my-3">
            Back To Instruments <BsBoxArrowRight />
          </Link>
        </div>
        <span>Aggiungi un prodotto</span> <br></br>
        <Button variant="warning" className="my-2" onClick={toggleShowModal}>
          {<BsPlusLg />}
        </Button>
        {products.length === 0 && (
          <Alert variant="warning" className="w-50">
            Non ci sono prodotti per questa categoria
          </Alert>
        )}
        
        <Row>
          {products.map((item) => {
            return (
              <CardProductAdmin
                edit
                key={item.id}
                item={item}
                onDeleteProduct={deleteProduct}
                onUpdateData={loadData}
              />
            );
          })}
        </Row>
      </Container>

      <Modal show={showModal} onHide={toggleShowModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Crea un nuovo prodotto</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ProductForm
            toggleShow={toggleShowModal}
            onUpdateData={loadData}
          />
        </Modal.Body>
      </Modal>
    </>
  );
};
export default InstrumentManagment;