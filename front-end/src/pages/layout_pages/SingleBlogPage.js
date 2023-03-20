import { getArticleById } from "../../api";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

const SingleBlogPage = () =>{

  const { blogId } = useParams();
  const [ blog, setBlog ] = useState([]);

  const loadData = async () => {
    const responseData = await getArticleById(blogId);
    setBlog(responseData);
  }; 

  useEffect(() => {
    loadData();
    document.title = "Blog";
  }, []);  

  return (
    <>
      <Row className="justify-content-center">
        <img
          src={blog.imageUrl}
          style={{
            width: "auto",
            height: "500px",
            objectFit: "cover",
            marginBottom: "1em",
          }}
        />
      </Row>
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={10} lg={10}>
            <h3 className="my-3">{blog.title}</h3>
            <div>{blog.article}</div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default SingleBlogPage;