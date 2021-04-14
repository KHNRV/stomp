import React, { useState } from "react";
import DashboardParticipantsNew from "./DashboardParticipantsNew";
import MaterialTable from "@material-table/core";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";

export default function DashboardParticipants() {
  // DBLOGIC
  const columns = [
    { title: "Bib #", field: "bib" },
    { title: "First Name", field: "first_name" },
    { title: "Last Name", field: "last_name" },
    { title: "Email", field: "email" },
    { title: "Phone", field: "phone" },
  ];

  const [data, setData] = useState([
    {
      bib: 101,
      first_name: "Yam",
      last_name: "Atkins",
      email: "yam.atkins@gmail.com",
      phone: "(599) 723-6865",
    },
    {
      bib: 102,
      first_name: "Oli",
      last_name: "Atkins",
      email: "oli.atkins@gmail.com",
      phone: "(476) 431-6434",
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
              emptyDataSourceMessage: "There are no Participants",
            },
          }}
          options={{
            search: false,
            headerStyle: {
              backgroundColor: "#E0E0E0",
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
                <DashboardParticipantsNew />
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
