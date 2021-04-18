import MaterialTable from "@material-table/core";
import { useParams } from "react-router";
import { ExportCsv, ExportPdf } from "@material-table/exporters";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";

const TableResults = ({ action }) => {
  let { id } = useParams();

  const { columns, rows } = action.read.competitions.for.resultsTable(
    parseInt(id)
  );

  return (
    <div className="data-table">
      <ThemeProvider theme={theme}>
        <MaterialTable
          title={action.read.competitions.where.id(parseInt(id)).name}
          columns={columns}
          data={rows}
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
              emptyDataSourceMessage: "Please add Participants and Judges",
            },
          }}
          options={{
            exportMenu: [
              {
                label: "Export PDF",
                exportFunc: (cols, datas) =>
                  ExportPdf(
                    cols,
                    datas,
                    `${action.read.state.event_name} | ${
                      action.read.competitions.where.id(parseInt(id)).name
                    } Results`
                  ),
              },
              {
                label: "Export CSV",
                exportFunc: (cols, datas) => ExportCsv(cols, datas, "results"),
              },
            ],
            headerStyle: {
              backgroundColor: "#EDEDED",
              color: "#001427",
              fontWeight: "700",
              fontFamily: "'Lato', sans-serif",
            },
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
