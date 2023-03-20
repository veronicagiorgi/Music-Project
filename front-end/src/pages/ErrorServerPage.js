import { Alert, Container } from "react-bootstrap";
import { BsFillEmojiDizzyFill } from "react-icons/bs";

const ErrorServerPage = () => {
  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <Alert variant="danger" className="p-5">
        <h1>
          Ooops there is a problem with the server
          <span className="ms-2">{<BsFillEmojiDizzyFill />}</span>
        </h1>
      </Alert>
    </Container>
  );
};

export default ErrorServerPage;
