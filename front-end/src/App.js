import { Route, Routes } from "react-router-dom";
import Home from "./pages/layout_pages/Home";
import CataloguePage from "./pages/layout_pages/CataloguePage";
import ArtistPage from "./pages/layout_pages/ArtistPage";
import AdminPage from "./pages/admin_pages/AdminPage";
import MainLayout from "./pages/layout_pages/MainLayout";
import AdminInstrument from "./pages/admin_pages/instruments/AdminInstrument";
import AdminArtist from "./pages/admin_pages/artists/AdminArtist";
import InstrumentManagement from "./pages/admin_pages/instruments/InstrumentManagement";
import NotFound from "./pages/NotFound";
import ArtistManagement from "./pages/admin_pages/artists/ArtistManagement";
import CategoryPage from "./pages/layout_pages/CategoryPage";
import Blog from "./pages/layout_pages/Blog";
import SingleCategoryPage from "./pages/layout_pages/SingleCategoryPage";
import SingleManufacturerPage from "./pages/layout_pages/SingleManufacturerPage";
import SingleArtistPage from "./pages/layout_pages/SingleArtistPage";
import SingleBlogPage from "./pages/layout_pages/SingleBlogPage";
import SingleCataloguePage from "./pages/layout_pages/SingleCataloguePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="" element={<Home />} />
        <Route path="artists" element={<ArtistPage />} />
        <Route path="artists/single/:artistId" element={<SingleArtistPage />} />
        <Route path="catalogue" element={<CataloguePage />} />
        <Route path="catalogue/single/:productId" element={<SingleCataloguePage />}/>
        <Route path="category" element={<CategoryPage />} />
        <Route path="category/single/:categoryId" element={<SingleCategoryPage />} />        
        <Route path="manufacturer/single/:manufacturerId" element={<SingleManufacturerPage />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/single/:blogId" element={<SingleBlogPage />} />
      </Route>
      <Route path="/admin" element={<AdminPage />} title="Admin"/>
      <Route path="/admin/instruments" element={<AdminInstrument />} />
      <Route path="/admin/artists" element={<AdminArtist />} />
      <Route path="/admin/instruments/management/:instrumentId" element={<InstrumentManagement />} />
      <Route path="/admin/artists/management/:artistId" element={<ArtistManagement />}/>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
