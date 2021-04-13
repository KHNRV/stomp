import SelectParticipants from "./SelectParticipants";
// import { ThemeProvider } from "@material-ui/core/styles";
// import theme from "../theme";

const TableCompetition = ({ data, setData, columns, setColumns }) => {
  // DBLOGIC
  return (
    <div className="competition-table">
      <SelectParticipants />
    </div>
  );
};

export default TableCompetition;
