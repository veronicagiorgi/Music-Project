import { Link } from "react-router-dom";

const CardArtistAdmin = ({ artist }) => {
  return (
    <div className="col-12 col-md-6 col-lg-3 my-2 ">
      <div className="card mt-4 h-100 border-0">
        <Link to={`/admin/artists/management/${artist.id}`} className="btn">
          <div className="card-header text-center h-75 bg-white border-0">
            <img
              src={artist.imageUrl}
              alt={artist.firstName}
              className="rounded"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
          <div className="card-body ">
            <h5 className="mb-3 text-center ">
              {artist.firstName} {artist.lastName}
            </h5>
            <h6 className="text-center mt-2">{artist.country}</h6>
            <div className="text-center mb-3 small">ID: {artist.id}</div>
          </div>
        </Link>
        {/* <div className=" d-flex justify-content-between border-0">
          <button className="btn btn-info m-2 btn-sm">Vedi i Prodotti</button>
          <button className="btn btn-secondary m-2 btn-sm">
            Vedi gli Artisti
          </button>
        </div> */}
      </div>
    </div>
  );
};
export default CardArtistAdmin;
