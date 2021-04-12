import { Link } from "react-router-dom";


const Stepper = () => {
  return (
    <>
      <Link to="/competitions/:id">Competition</Link> <br/>
      <Link to="/competitions/:id/scoring">Scoring</Link><br/>
      <Link to="/competitions/:id/results">Results</Link><br/>
    </>
  );
};


export default Stepper