const BASE_URL_INSTRUMENTS = "http://localhost:8080/api/instruments";
const BASE_URL_MANUFACTURERS = "http://localhost:8080/api/manufacturers";
const BASE_URL_ARTISTS = "http://localhost:8080/api/artists";
const BASE_URL_PRODUCTS = "http://localhost:8080/api/products";
const BASE_URL_ARTICLES = "http://localhost:8080/api/articles";

// Get ALL instruments

export const getAllInstruments = async() =>{
  try {
    const response = await fetch(BASE_URL_INSTRUMENTS);
    if(response.ok){
      const data = response.json();
      return data;
    }
  } catch(error){
    return {ok: false, data: error}
  }
};

//Search instrument by input state
export const searchInstrument = async (term) =>{
   let url = "http://localhost:8080/api/instruments";
   if (term !== null && term !== undefined && term !== "") {
    url += "?search=" + term;
  }
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
   return {ok: false, data: error}
  }
};

//delete instrument by id

export const deleteInstrumentById = async (instrumentId) => {
  try {
    const response = await fetch(
      `${BASE_URL_INSTRUMENTS}/${instrumentId}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      return { ok: true, data: "Success" };
    } else {
      return { ok: false, data: await response.json() };
    }
  } catch (error) {
    return { ok: false, data: error };
  }
};


//post instrument

export const postInstrument = async(instrument) =>{
  try {
    const response = await fetch(BASE_URL_INSTRUMENTS, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(instrument),
    });
    const data = await response.json();
    return {ok: response.ok, data: data}
  } catch (error) {
    return {ok: false, data: error}
  }
}

// GET Product by instrument id
export const getProductsByInstrumentId = async (instrumentId) => {
  try {
    const response = await fetch(BASE_URL_INSTRUMENTS + "/" + instrumentId + "/products");
    if (response.ok) {
      const data = response.json();
      return data;
    }
  } catch (error) {
    return { ok: false, data: error };
  }
};

//DELETE Product By Id from Instrument id

export const deleteProductById = async (instrumentId, productId) => {
  try {
    const response = await fetch(
      `${BASE_URL_INSTRUMENTS}/${instrumentId}/delete/${productId}`,
      {
        method: "DELETE",
      }
    );
    if (response.ok) {
      return { ok: true, data: "Success" };
    } else {
      return { ok: false, data: await response.json() };
    }
  } catch (error) {
    return { ok: false, data: error };
  }
};

//update product by instrument id

export const putProduct = async (instrumentId, productId, product) =>{
  try {
    const response = await fetch(`${BASE_URL_INSTRUMENTS}/${instrumentId}/update/${productId}`,{
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
    });
    const data = await response.json();
    return {ok: true, data: data}

  } catch (error){
    return {ok: false, data: error}
  }
};

//post product
export const postProduct = async (instrumentId, product, manufacturerId) => {
  try {
    const response = await fetch(
      `${BASE_URL_INSTRUMENTS}/${instrumentId}/create/${manufacturerId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );
    const data = await response.json();
    return { ok: true, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};

// get product by id

export const getProductById = async (productId) => {
  try {
    const response = await fetch(`${BASE_URL_PRODUCTS}/${productId}`);
    if (response.ok) {
      const data = response.json();
      return data;
    }
  } catch (error) {
    return { ok: false, data: error };
  }
};

// get ALL MANUFACTURERS

export const getAllManufacturers = async () => {
  try {
    const response = await fetch(BASE_URL_MANUFACTURERS);
    if (response.ok) {
      const data = response.json();
      return data;
    }
  } catch (error) {
    return { ok: false, data: error };
  }
};

//get manufacturer by id
export const getManufacturerById = async (manufacturerId) => {
  try {
    const response = await fetch(
      BASE_URL_MANUFACTURERS + "/" + manufacturerId
    );
    if (response.ok) {
      const data = response.json();
      return data;
    }
  } catch (error) {
    return { ok: false, data: error };
  }
};

//get products by manufacturer id
export const getProductsByManufacturerId = async (manufacturerId) => {
  try {
    const response = await fetch(
      `${BASE_URL_MANUFACTURERS}/${manufacturerId}/products`
    );
    if (response.ok) {
      const data = response.json();
      return data;
    }
  } catch (error) {
    return { ok: false, data: error };
  }
};


//get all artists
export const getAllArtists = async () => {
  try {
    const response = await fetch(BASE_URL_ARTISTS);
    if (response.ok) {
      const data = response.json();
      return data;
    }
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const getArtistById = async (artistId) =>{
  try {
    const response = await fetch(BASE_URL_ARTISTS + "/" + artistId);
    if (response.ok) {
      const data = response.json();
      return data;
    }
  } catch (error) {
    return { ok: false, data: error };
  }
}

// delete artist by id
export const deleteArtistById = async (artistId) => {
  try {
    const response = await fetch(`${BASE_URL_ARTISTS}/${artistId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      return { ok: true, data: "Success" };
    } else {
      return { ok: false, data: await response.json() };
    }
  } catch (error) {
    return { ok: false, data: error };
  }
};

//post artista con strumento associato

export const createArtistWithInstrument = async (instrumentId, artist) =>{
  try {
    const response = await fetch(
      `${BASE_URL_INSTRUMENTS}/${instrumentId}/artists`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(artist),
      }
    );
    const data = await response.json();
    return { ok: true, data: data };
  } catch (error) {
    return { ok: false, data: error };
  }
};


//DTO ARTIST/INSTRUMENT

export const getArtistByIdDTO = async (artistId) =>{
  try {
    const response = await fetch(`${BASE_URL_ARTISTS}/${artistId}/dto`);
    if (response.ok) {
      const data = response.json();
      return data;
    }
  } catch (error) {
    return { ok: false, data: error };
  }
};

// Associazione artista-strumento

export const associateInstrumentToArtist = async (id, artistId) =>{
try {
    const response = await fetch(`${BASE_URL_INSTRUMENTS}/${id}/associate/${artistId}`, 
    {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
      })
    
    if (response.ok) {
      return {ok: true, data: "Success"}
    }
  } catch (error) {
    return { ok: false, data: error };
  }
};

export const dissociateInstrumentFromArtist = async (instrumentId, artistId) =>{
  try {
    const response = await fetch(`${BASE_URL_INSTRUMENTS}/${instrumentId}/artist/${artistId}`, {
      method: "DELETE",
    });
    if (response.ok) {
      const data = response.json();
      return data;
    } else {
      return { ok: false, data: await response.json() };
    }
  } catch (error) {
    return { ok: false, data: error };
  }
};

// Get All products
export const getAllProducts = async () => {
  try {
    const response = await fetch(BASE_URL_PRODUCTS);
    if (response.ok) {
      const data = response.json();
      return data;
    }
  } catch (error) {
    return { ok: false, data: error };
  }
};

// Get All Articles

export const getAllArticles = async () => {
  try {
    const response = await fetch(BASE_URL_ARTICLES);
    if (response.ok) {
      const data = response.json();
      return data;
    }
  } catch (error) {
    return { ok: false, data: error };
  }
};

//get articles by id

export const getArticleById = async (articleId) => {
  try {
    const response = await fetch(`${BASE_URL_ARTICLES}/${articleId}`);
    if (response.ok) {
      const data = response.json();
      return data;
    }
  } catch (error) {
    return { ok: false, data: error };
  }
};

