import MaterialTable from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";

const ResultsTable = ({ data, columns }) => {
  return (
    <div className="results-table">
      <h2>Results Table</h2>
      <ThemeProvider theme={theme}>
        <MaterialTable
          title="Solo Jazz Newcomer"
          columns={columns}
          data={data}
          style={{ padding: "0.5em", backgroundColor: "whitesmoke" }}
          localization={{
            body: {
              emptyDataSourceMessage:
                "There is no information for this competition",
            },
          }}
          options={{
            exportMenu: [
              {
                label: "Export PDF",
                exportFunc: (cols, datas) =>
                  ExportPdf(cols, datas, `${"competition"}-results`),
              },
              {
                label: "Export CSV",
                exportFunc: (cols, datas) =>
                  ExportCsv(cols, datas, "myCsvFileName"),
              },
            ],

            headerStyle: {
              backgroundColor: "#dfad3e",
              color: "#08253f",
            },
            searchAutoFocus: true,

            toolbarButtonAlignment: "left", // here is the option to change toolbar buttons' alignment

            padding: "dense",
            paging: false,
            fixedColumns: { left: 0, right: 0 },
          }}
        />
      </ThemeProvider>
    </div>
  );
};

export default ResultsTable;
