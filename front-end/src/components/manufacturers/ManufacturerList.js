import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./ManufacturerList.css";
const ManufacturerList = ({ manufacturers }) => {

  return (
    <Row className="my-5">
      {manufacturers.map((item)=>{
        return (
          <Col key={item.id} xs={6} md={4} lg={3}>
            <Link to={`/manufacturer/single/${item.id}`}>
              <div className="card border-0 h-100 hoverCard">
                <img className="card-img-top p-4 imgResize" src={item.logo} />
              </div>
            </Link>
          </Col>
        );
      })}
    </Row>

  )
};
export default ManufacturerList;