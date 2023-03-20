import { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import { getAllArtists } from "../../api";
import CardArtistLayout from "../../components/artists/CardArtistLayout";

const ArtistPage = () => {
    const [artists, setArtists] = useState([]);

    const loadData = async () => {
      const responseData = await getAllArtists();
      setArtists(responseData);
    };

    useEffect(() => {
      document.title = "Artisti";
      loadData();
    }, []);


  return (
    <Container>
      <h2 className="mt-5">Artisti</h2>
      <h6 className="text-muted">
        Fatti ispirare dalle storie dei migliori artisti di sempre!
      </h6>
      <Row className="my-5">
        {artists.map((item) => {
          return <CardArtistLayout key={item.id} item={item} />;
        })}
      </Row>
    </Container>
  );
};

export default ArtistPage;
