import { Link } from "react-router-dom";
import "./ArticleBlog.css";

const ArticleBlog = ({ article }) =>{
   return (
     <div className="col-12 col-md-6 col-lg-4 ">
       <div className="card card-size-blog">
         <img className="card-img-top-blog" src={article.imageUrl} alt="Immagine articolo" />
         <div className="card-body">
           <h6 className="card-title-blog">{article.title}</h6>
           <p className="card-text preview-text">{article.article}</p>
           <Link to={`/blog/single/${article.id}`} className="btn btn-sm btn-custom3 text-muted">Leggi l'articolo</Link>
         </div>
       </div>
     </div>
   );
};
export default ArticleBlog;