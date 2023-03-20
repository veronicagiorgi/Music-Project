export const validate = (inputObj) =>{

  const pattern = new RegExp(
    "^(https?:\\/\\/)?" + 
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + 
      "((\\d{1,3}\\.){3}\\d{1,3}))" + 
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + 
      "(\\?[;&a-z\\d%_.~+=-]*)?" + 
      "(\\#[-a-z\\d_]*)?$",
    "i"
  );
  
  const errorObj = {};

  if(inputObj.firstName === ""){
    errorObj.firstName = "Il nome è obbligatorio";
  }
  if(inputObj.lastName=== ""){
    errorObj.lastName = "Il cognome è obbligatorio";
  }
  if (inputObj.imageUrl === "") {
    errorObj.imageUrl = "L'immagine è obbligatoria";
  }
  if (inputObj.imageUrl !== "" && !inputObj.imageUrl.match(pattern)) {
    errorObj.imageUrl = "Image url must be a valid http url";
  }
  if (inputObj.country === ""){
    errorObj.country = "La nazionalità è obbligatoria"
  }

  return errorObj;
};