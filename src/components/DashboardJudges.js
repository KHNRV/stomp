import React, { useState } from "react";
import DashboardJudgesNew from "./DashboardJudgesNew";
import MaterialTable from "@material-table/core";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";

export default function DashboardJudges() {
  // DBLOGIC
  const columns = [
    { title: "First Name", field: "first_name" },
    { title: "Last Name", field: "last_name" },
    { title: "Email", field: "email" },
    { title: "Phone", field: "phone" },
  ];

  const [data, setData] = useState([
    {
      first_name: "Sylvia",
      last_name: "Sykes",
      email: "sylvia.sykes@hey.com",
      phone: "(970) 682-3614",
    },
    {
      first_name: "Annie",
      last_name: "Trudeau",
      email: "annie.trudeau@gmail.com",
      phone: "(514) 334-5547",
    },
  ]);

  return (
    <div className="results-table">
      <ThemeProvider theme={theme}>
        <MaterialTable
          columns={columns}
          data={data}
          style={{ padding: "0.5em", backgroundColor: "#F7F7F7" }}
          localization={{
            body: {
              emptyDataSourceMessage: "There are no Judges",
            },
          }}
          options={{
            search: false,
            headerStyle: {
              backgroundColor: "#C2C2C2",
              color: "#001427",
            },
            toolbarButtonAlignment: "right",
            padding: "default",
            paging: false,
            fixedColumns: { left: 0, right: 0 },
            actionsColumnIndex: -1,
          }}
          components={{
            Toolbar: (props) => (
              <div
                style={{
                  display: "flex",
                  flexDirection: "row-reverse",
                  paddingBottom: "10px",
                }}
              >
                <DashboardJudgesNew />
              </div>
            ),
          }}
          editable={{
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...data];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  setData([...dataDelete]);
                  resolve();
                }, 1000);
              }),
          }}
        />
      </ThemeProvider>
    </div>
  );
}
