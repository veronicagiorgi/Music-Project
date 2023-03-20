import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductById } from "../../api";
import { Container, Row, Col, OverlayTrigger, Tooltip, Alert } from "react-bootstrap";
import { BsFillInfoCircleFill } from "react-icons/bs";
import Stars from "../../components/Stars";
const SingleCataloguePage = () =>{
    const [product, setProduct] = useState([]);
    const { productId } = useParams();
  
  const loadData = async () => {
    const responseData = await getProductById(productId);
    setProduct(responseData);
    };

  useEffect(() => {
    document.title = "Catalogo";
    loadData();
  }, []);


  return (
      <Container className="my-5">
        <Row className="mt-4" key={product.id}>
          <Col xs={12} md={4} lg={4} className="d-flex justify-content-center">
            <img
              src={product.imageUrl}
              style={{
                width: "200px",
                height: "200px",
                objectFit: "cover",
                marginBottom: "1em",
              }}
            />
          </Col>
          <Col xs={12} md={8} lg={8} className="d-flex align-items-center">
            <div>
              <p className="fw-bold m-0">{product.name}</p> <br></br>
              {product.description}
              <br></br>
              <div className="small text-muted mt-5 row ">
                <div className="col-6">{product.price} &euro;</div>
                <div className="d-flex col-6 justify-content-end">
                  <OverlayTrigger
                    overlay={
                      <Tooltip id="tooltip-products">
                        Contattaci per maggiori informazioni!
                      </Tooltip>
                    }
                  >
                    <span>
                      <BsFillInfoCircleFill />
                    </span>
                  </OverlayTrigger>
                </div>
                <span>
                  <Stars
                    value={product.rate}
                    max={5}
                    empty="fa fa-star-o"
                    full="fa fa-star"
                  />
                </span>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
  );
};
export default SingleCataloguePage;