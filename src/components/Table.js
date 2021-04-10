import React, { useState } from "react";
import MaterialTable from "material-table";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
// import { Autorenew } from "@material-ui/icons";

// Dark mode
// import useMediaQuery from "@material-ui/core/useMediaQuery";
// import CssBaseline from "@material-ui/core/CssBaseline";

// The scoring System
const scoring = { 0: "no", 1: "maybe", 2: "yes" };

const Table = () => {
  const [columns, setColumns] = useState([
    {
      title: "Bib #",
      field: "bib",
      cellStyle: {
        backgroundColor: "#6B6A6A",
        color: "#fff",
      },
    },
    {
      title: "First Name",
      field: "first_name",
      cellStyle: {
        backgroundColor: "#C2C2C2",
        color: "black",
      },
    },
    {
      title: "Last Name",
      field: "last_name",
      cellStyle: {
        backgroundColor: "#C2C2C2",
        color: "black",
      },
    },
    { title: "Judge 1", field: "judge1", lookup: scoring },
    { title: "Judge 2", field: "judge2", lookup: scoring },
    { title: "Judge 3", field: "judge3", lookup: scoring },
    { title: "Judge 4", field: "judge4", lookup: scoring },
    { title: "Judge 5", field: "judge5", lookup: scoring },
  ]);

  const [data, setData] = useState([
    {
      bib: 101,
      first_name: "Dora",
      last_name: "Dewing",
      judge1: 2,
      judge2: 2,
      judge3: 1,
      judge4: 2,
      judge5: 0,
    },
    {
      bib: 102,
      first_name: "Sophie",
      last_name: "Minocchi",
      judge1: 0,
      judge2: 0,
      judge3: 1,
      judge4: 0,
      judge5: 2,
    },
    {
      bib: 103,
      first_name: "Willette",
      last_name: "Romagosa",
      judge1: 2,
      judge2: 0,
      judge3: 0,
      judge4: 2,
      judge5: 2,
    },
    {
      bib: 104,
      first_name: "Camey",
      last_name: "Darree",
      judge1: 0,
      judge2: 0,
      judge3: 1,
      judge4: 2,
      judge5: 2,
    },
    {
      bib: 105,
      first_name: "Dennet",
      last_name: "Reidshaw",
      judge1: 2,
      judge2: 2,
      judge3: 1,
      judge4: 1,
      judge5: 2,
    },
  ]);

  // const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)"); //If true dark mode gets applied

  // const theme = React.useMemo(
  //   () =>
  //     createMuiTheme({
  //       palette: {
  //         type: prefersDarkMode ? "dark" : "light",
  //       },
  //     }),
  //   [prefersDarkMode]
  // );

  const theme = createMuiTheme({
    palette: {
      text: {
        primary: "black",
      },
      primary: {
        main: "#D64933",
      },
      secondary: {
        main: "#0C7C59",
      },
    },
  });

  return (
    <div className="table">
      <h2>Scoring Table</h2>
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
              editRow: {
                deleteText: "Delete this row?",
              },
            },
          }}
          actions={[
            {
              icon: "add",
              tooltip: "Add User",
              isFreeAction: true,
              onClick: (event) => alert("Create new participant"),
            },
          ]}
          options={{
            headerStyle: {
              backgroundColor: "#6B6A6A",
              color: "#fff",
            },
            searchAutoFocus: true,

            actionsColumnIndex: -1, // Puts actions to the right hand side
            toolbarButtonAlignment: "left", // here is the option to change toolbar buttons' alignment

            padding: "default",
            paging: false,
            exportButton: true,
            fixedColumns: { left: 0, right: 0 },
          }}
          editable={{
            onRowAdd: (newData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  setData([...data, newData]);

                  resolve();
                }, 1000);
              }),
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
          /**
           * rowData: bib,first_name,...,judge5,tableData
           * columnDef: title,field,cellStyle,tableData
           */
          cellEditable={{
            onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {
              return new Promise((resolve, reject) => {
                // console.log("newValue: " + newValue);

                const updatedData = [...data];
                updatedData[rowData.tableData.id][columnDef.field] = newValue;
                setData([...updatedData]);

                setTimeout(resolve, 100);
              });
            },
          }}
        />
      </ThemeProvider>
    </div>
  );
};

export default Table;
