import { Link } from "react-router-dom";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { Button } from "react-bootstrap";
import { useState } from "react";

const CardInstrumentAdmin = ({instrument}) =>{
  const [artists, setArtists] = useState(instrument.artists);
  const [viewArtists, setviewArtists] = useState(false);
  
  const handleShowArtists = () =>{
    setviewArtists((viewArtists) => !viewArtists);
  }
  return (
    <div className="col-12 col-md-6 col-lg-3 my-2 ">
      <div className="card mt-4 h-100 border-0">
        <Link
          to={`/admin/instruments/management/${instrument.id}`}
          className="btn"
        >
        <OverlayTrigger overlay={<Tooltip id="tooltip-products">Clicca per vedere i prodotti!</Tooltip>}>
          <div className="card-header text-center h-75 bg-white border-0">
            <img
              src={instrument.imageUrl}
              alt={instrument.name}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
        </OverlayTrigger>
          <div className="card-body ">
            <h5 className="mb-2 text-center mt-2">
              {instrument.name} {instrument.type}
            </h5>
            <div className="text-center mb-3 small">
              ID: {instrument.id}
            </div>
          </div>
        </Link>
         <div className="text-center mt-2">
          <Button className="btn btn-light m-2 btn-sm" onClick={handleShowArtists}>
            Vedi gli Artisti
          </Button>
          {viewArtists && (
          <ul>{artists.map((el)=>{
            return(
              <li className="list-unstyled" key={el.id}>{el.firstName} {el.lastName}</li>
            )
          })}</ul>)}
        </div> 
      </div>
    </div>
  );
};
export default CardInstrumentAdmin;