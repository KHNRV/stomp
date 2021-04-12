import React, { useState } from "react";
import JudgesNew from "./JudgesNew";
import MaterialTable from "@material-table/core";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";

export default function Judges() {
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
          style={{ padding: "0.5em", backgroundColor: "whitesmoke" }}
          localization={{
            body: {
              emptyDataSourceMessage: "There are no Judges",
            },
          }}
          options={{
            search: false,
            headerStyle: {
              backgroundColor: "#dfad3e",
              color: "#08253f",
            },
            toolbarButtonAlignment: "right",
            padding: "dense",
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
                <JudgesNew />
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
