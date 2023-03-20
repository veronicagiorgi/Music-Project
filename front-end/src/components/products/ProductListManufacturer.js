import { useState, useEffect } from "react";
import {
  Container,
  Row,
  Col,
  Alert,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import Stars from "../Stars";
import { useParams } from "react-router-dom";
import { getManufacturerById } from "../../api";
import {BsFillInfoCircleFill} from "react-icons/bs";

const ProductList = ({ products }) => {
  const {manufacturerId} = useParams();
  const [manufacturer, setManufacturer] = useState([]);


    const loadData = async () => {
      const responseData = await getManufacturerById(manufacturerId);
      setManufacturer(responseData);
    };

    useEffect(() => {
      loadData();
    }, []);

  return (
    <Container>
      <div className="ms-lg-5">
        <img
          src={manufacturer.logo}
          style={{ width: "200px" }}
          className="mb-4"
        />
      </div>
      {products.length === 0 && (
        <Alert variant="warning" className="d-flex justify-content-center w-50">
          Non ci sono prodotti della marca {manufacturer.name}
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
                  <p className="fw-bold m-0">{item.name}</p>
                  <br></br>
                  {item.description} <br></br>
                  <div className="row small text-muted mt-5">
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
              </Col>
            </Row>
            <hr></hr>
          </>
        );
      })}
    </Container>
  );
};
export default ProductList;
