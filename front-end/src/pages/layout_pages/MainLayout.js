import { Outlet } from "react-router-dom";
import NavbarComponent from "../../components/NavbarComponent";
import FooterTwo from "../../components/FooterTwo";


const MainLayout = () => {
  return (
    <>
      <NavbarComponent />
      <Outlet />
      <FooterTwo />
    </>
  );
};

export default MainLayout;
