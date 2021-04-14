import MaterialTable from "@material-table/core";
import { ExportCsv, ExportPdf } from "@material-table/exporters";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";

const TableResults = ({ data, columns }) => {
  return (
    <div className="data-table">
      <ThemeProvider theme={theme}>
        <MaterialTable
          title="Solo Jazz Newcomer"
          columns={columns}
          data={data}
          icons={{
            Search: () => (
              <img height="20" src="/buttons/search.svg" alt="search" />
            ),
            Export: () => (
              <img height="28" src="/buttons/export.svg" alt="export" />
            ),
          }}
          style={{ padding: "1.5em 0em 0em 0em", backgroundColor: "#F7F7F7" }}
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
              backgroundColor: "#E0E0E0",
              color: "#001427",
            },
            searchAutoFocus: true,
            toolbarButtonAlignment: "right", // here is the option to change toolbar buttons' alignment
            padding: "default",
            paging: false,
            fixedColumns: { left: 0, right: 0 },
          }}
        />
      </ThemeProvider>
    </div>
  );
};

export default TableResults;
