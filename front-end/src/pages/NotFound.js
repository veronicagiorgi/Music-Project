import { Alert, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {BsFillEmojiDizzyFill} from "react-icons/bs";

const NotFound = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Alert variant="danger" className="p-5">
        <h1>
          Ooops page not found <span className="ms-2">{<BsFillEmojiDizzyFill />}</span>
        </h1>
        <Link to="/">Back to home page</Link>
      </Alert>
    </Container>
  );
};

export default NotFound;
