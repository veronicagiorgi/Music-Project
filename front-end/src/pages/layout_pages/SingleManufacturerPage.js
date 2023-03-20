import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductListManufacturer from "../../components/products/ProductListManufacturer";
import { getProductsByManufacturerId } from "../../api";


const SingleManufacturerPage = () => {
  
  const [products, setProducts] = useState([]);
  const {manufacturerId} = useParams();  

    const loadData = async () => {
      const responseData = await getProductsByManufacturerId(manufacturerId);
      setProducts(responseData);
    };

    useEffect(() => {
      document.title = "Case Produttrici";
      loadData();
    }, []);

  return (
    <ProductListManufacturer products={products}/>
  );
};
export default SingleManufacturerPage;
