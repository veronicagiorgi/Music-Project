import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { searchInstrument } from "../../api";
import SearchBar from "../../components/SearchBar";
import "./CategoryPage.css";

const CategoryPage = () => {

  const [categories, setCategories] = useState([]);

   const loadData = async (term) => {
     const responseData = await searchInstrument(term);
     setCategories(responseData);
    };

    const searchOnSumbit = async (term) => {
      loadData(term);
    };

    useEffect(() => {
      document.title = "Categorie";
      loadData();
    }, []);

  return (
    <Container>
      <SearchBar searchOnSumbit={searchOnSumbit} />
      <section id="categoryPhoto"></section>
      <Row className="my-5">
        <h2>Categorie</h2>
        <p className="text-muted">
          Seleziona una categoria per saperne di più!
        </p>
      </Row>
      <Row className="mb-5">
        {categories.map((item) => {
          return (
            <div key={item.id} className="col-6 col-lg-3 col-sm-4 col-xl-2 ">
              <Link to={`/category/single/${item.id}`} className="btn">
                <div className="card hoverCard">
                  <img
                    className="card-img-top p-4"
                    src={item.imageUrl}
                    alt={item.name}
                  />
                  <div className="card-body">
                    <h6 className="card-title mt-2">
                      {item.name} {item.type}
                    </h6>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </Row>
    </Container>
  );
};

export default CategoryPage;
