import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CatalogueList = ({ products }) =>{
  return (
    <main>
      <div className="row">
        {products.map((item) => {
          return (
            <Col key={item.id} xs={6} sm={6} lg={3}>
              <Link to={`/catalogue/single/${item.id}`} className="btn">
                <Card className="text-center h-100 border-0 hoverCard">
                  <Card.Header className="bg-white border-0">
                    <img
                      src={item.imageUrl}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                  </Card.Header>
                  <Card.Body>
                    <p className="small">{item.name}</p>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          );
        })}
      </div>
    </main>
  );
};
export default CatalogueList;