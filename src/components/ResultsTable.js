import MaterialTable from "material-table";

import { ThemeProvider } from "@material-ui/core/styles";

const ResultsTable = ({ theme, columns, data }) => {
  return (
    <div className="results-table">
      <h2>Results Table</h2>
      <ThemeProvider theme={theme}>
        {/* <CssBaseline /> ----- FOR DARK MODE */}
        <MaterialTable
          title="Solo Jazz Newcomer"
          columns={columns}
          data={data}
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
      </ThemeProvider>
    </div>
  );
};

export default ResultsTable;
