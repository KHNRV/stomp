import MaterialTable from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";

// import { compData, columns } from "../data";

const ResultsTable = ({ data, columns }) => {
  return (
    <div className="results-table">
      <h2>Results Table</h2>
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
            backgroundColor: "#6B6A6A",
            color: "#fff",
          },
          searchAutoFocus: true,

          toolbarButtonAlignment: "left", // here is the option to change toolbar buttons' alignment

          padding: "default",
          paging: false,
          fixedColumns: { left: 0, right: 0 },
        }}
      />
    </div>
  );
};

export default ResultsTable;
