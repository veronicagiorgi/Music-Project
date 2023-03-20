import { Container, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import  {getAllProducts } from "../../api";
import CatalogueList from "../../components/products/CatalogueList";


const CataloguePage = () => {

  const [products, setProducts] = useState([]);

    const loadData = async () => {
      const responseData = await getAllProducts();
      setProducts(responseData);
    };

    useEffect(() => {
      document.title = "Catalogo";
      loadData();
    }, []);


  return (
    <Container fluid className="my-5">
      <h2 className="ms-5 mb-2">Catalogo prodotti</h2>
      <p className="ms-5 mb-5 text-muted">
        Benvenuti nel nostro catalogo di prodotti musicali! <br></br>Siamo lieti di
        presentarvi la nostra gamma di strumenti musicali di alta qualità!
      </p>
      <Row className="flex-nowrap">
        <CatalogueList products={products} />
      </Row>
    </Container>
  );
};

export default CataloguePage;
