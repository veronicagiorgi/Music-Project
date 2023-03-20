import {Form, Button} from "react-bootstrap";
import { useState } from "react";



const SearchBar = ({ searchOnSumbit }) => {
  const [inputValue, setInputValue] = useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    searchOnSumbit(inputValue);
  };

  return (
    <div className="d-flex justify-content-end mb-4 mt-lg-0">
      <Form className="d-flex me-5" onSubmit={handleFormSubmit}>
        <Form.Control
          type="search"
          placeholder="Categoria.."
          className="me-2"
          aria-label="Search"
          onChange={(e) => {
            setInputValue(e.target.value)
          }}
          value={inputValue}
        />
        <Button variant="custom" type="submit" className="text-light rounded-0">
          Cerca
        </Button>
      </Form>
    </div>
  );
};
export default SearchBar;
