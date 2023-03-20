import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getArtistById, getArtistByIdDTO } from "../../api";
import { BsSpotify } from "react-icons/bs";

const SingleArtistPage = () => {

  const { artistId } = useParams();
  const [artist, setArtist] = useState([]);
  const [instruments, setInstruments] = useState([]);


    const loadData = async () => {
      const responseData = await getArtistById(artistId);
      const responseInstruments = await getArtistByIdDTO(artistId);
      setArtist(responseData);
      setInstruments(responseInstruments.instrumentCategory);
    };

    useEffect(() => {
      loadData();
      document.title = "Artista";
    }, []);  

  return (
    <Container className="my-5">
      <Row className="my-5">
        <Col xs={6} md={4} lg={9}>
          <h2>
            {artist.firstName} {artist.lastName}
          </h2>
          <p>{artist.country}</p>
          <br></br>
          <span className="mt-5 small">
            Ascolta {artist.firstName} {artist.lastName} su
          </span>
          <Link
            to={artist.spotifyUrl}
            style={{ color: "#1ed760", marginLeft: "4px" }}
          >
            Spotify <BsSpotify />
          </Link>
        </Col>
      </Row>
      <Row>
        <Col md={6} lg={6}>
          <img
            src={artist.imageUrl}
            style={{ width: "75%", marginLeft: "3em", marginBottom: "2em" }}
          />
          <br></br>
          <h4 className="mt-5 ms-3">Cosa suona?</h4>
          {instruments.map((dto) => {
            return (
              <span className="ms-3" key={dto.id}>
                {dto.name} {dto.type}
                <br></br>
              </span>
            );
          })}
        </Col>
        <Col md={6} lg={6}>
          <h3 className="my-3">Biografia</h3>
          <div>{artist.history}</div>
        </Col>
      </Row>
    </Container>
  );
};
export default SingleArtistPage;
