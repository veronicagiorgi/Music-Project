import {Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./CardArtistLayout.css";

const CardArtistLayout = ({ item }) =>{

  return (
    <Col xs={12} sm={6} md={4} lg={3}>
      <Card className="card">
        <Card.Img variant="top" className="img1" src={item.coverImage} />
        <Card.Img variant="top" className="img2" src={item.imageUrl} />
        <Card.Title className="text-center mt-4">
          {item.firstName} {item.lastName}
        </Card.Title>
        <Card.Text className="content text-center mb-2">
          <Link
            className="btn btn-sm btn-custom2"
            to={`/artists/single/${item.id}`}
          >
            Scopri di più!
          </Link>
        </Card.Text>
      </Card>
    </Col>
  );
};
export default CardArtistLayout;