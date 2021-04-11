import { default as Results } from "material-table";
import { compData, columns } from "../data";

const ResultsTable = () => {

  return (
    <div className="results-table">
      <h2>Results Table</h2>
      <Results
        title="Solo Jazz Newcomer"
        columns={columns}
        data={compData}
        style={{ padding: "0.5em", backgroundColor: "#F8F8F8" }}
        localization={{
          body: {
            emptyDataSourceMessage:
              "There is no information for this competition",
          },
        }}
        options={{
          headerStyle: {
            backgroundColor: "#6B6A6A",
            color: "#fff",
          },
          searchAutoFocus: true,

          toolbarButtonAlignment: "left", // here is the option to change toolbar buttons' alignment

          padding: "default",
          paging: false,
          exportButton: true,
          fixedColumns: { left: 0, right: 0 },
        }}
      />
    </div>
  );
};

export default ResultsTable;
