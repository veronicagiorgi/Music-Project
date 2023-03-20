const Stars = ({ value, max, empty, full }) => {
  const result = [];
  let string="";
if(value === "" || value === undefined || value === 0){
  return string += "Recensione non disponibile";
} else {
  for (let i = 0; i < value; i++) {
    result.push(
      <i key={i} className={`${full}`} style={{ color: "#BA8449" }}></i>
    );
  }
  for (let i = value; i < max; i++) {
    result.push(
      <i key={i} className={`${empty}`} style={{ color: "#cba175" }}></i>
    );
  }
}
  

  return <>{result}</>;
};
export default Stars;
