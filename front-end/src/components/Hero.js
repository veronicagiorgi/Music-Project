import { Link } from "react-router-dom";
import "./Hero.css";
const Hero = () =>{
  return (
    <section id="jumbotron" className="d-flex align-items-center text-white mb-5">
      <div className="container">
        <div id="resize" className= "resize">
          <h1 className="text-light p-3">Music Project</h1>
          <Link to={"/catalogue"}
            className="btn btn-dark ms-3"
            data-bs-toggle="modal"
            data-bs-target="#jumbo-modal"
          >
            Catalogo
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Hero;