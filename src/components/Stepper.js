import { Link } from "react-router-dom";


const Stepper = () => {
  return (
    <>
      <Link to="/competition/:id">Competition</Link> <br/>
      <Link to="/competition/:id/scoring">Scoring</Link><br/>
      <Link to="/competition/:id/results">Results</Link><br/>
    </>
  );
};


export default Stepper