import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getProductsByInstrumentId } from "../../api";
import { Container, Row, Col, OverlayTrigger, Tooltip, Alert } from "react-bootstrap";
import { BsFillInfoCircleFill} from "react-icons/bs";
import Stars from "../../components/Stars";
import "./SingleCategoryPage.css";

const SingleCategoryPage = () =>{
  const [products, setProducts] = useState([]);
  const {categoryId} = useParams();
  

    const loadData = async () => {
      const responseData = await getProductsByInstrumentId(categoryId);
      setProducts(responseData);
    };

    useEffect(() => {
      document.title = "Categoria";
      loadData();
    }, []);

  return (
    <Container>
      {products.length === 0 && (
        <Alert variant="warning" className="d-flex justify-content-center w-50 mt-5">
          Non ci sono prodotti sotto questa categoria
        </Alert>
      )}
      {products.map((item) => {
        return (
          <>
            <Row className="mt-4" key={item.id}>
              <Col
                xs={12}
                md={4}
                lg={4}
                className="d-flex justify-content-center"
              >
                <img
                  src={item.imageUrl}
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
                  <p className="fw-bold m-0">{item.name}</p> <br></br>
                  {item.description}
                  <br></br>
                  <div className="small text-muted mt-5 row ">
                    <div className="col-6">{item.price} &euro;</div>
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
                        value={item.rate}
                        max={5}
                        empty="fa fa-star-o"
                        full="fa fa-star"
                      />
                    </span>
                  </div>
                </div>
              </Col>
            </Row>
            <hr></hr>
          </>
        );
      })}
    </Container>
  );
};
export default SingleCategoryPage;