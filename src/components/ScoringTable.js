// import React, { useState } from "react";
import MaterialTable from "material-table";

import { ThemeProvider } from "@material-ui/core/styles";

const ScoringTable = ({theme, columns, data, setData}) => {

  return (
    <div className="scoring-table">
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
              addTooltip: "Add Entry",
              emptyDataSourceMessage:
                "There is no information for this competition",
              editRow: {
                deleteText: "Delete this entry?",
              },
            },
          }}
          options={{
            search: false,
            headerStyle: {
              backgroundColor: "#6B6A6A",
              color: "#fff",
            },
            searchAutoFocus: true,

            actionsColumnIndex: -1, // Puts actions to the right hand side
            toolbarButtonAlignment: "right", // here is the option to change toolbar buttons' alignment

            padding: "default",
            paging: false,
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

export default ScoringTable;
