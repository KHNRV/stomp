// import React, { useState } from "react";
import MaterialTable from "@material-table/core";
// import { compData, columns } from "../data";

const ScoringTable = ({ data, setData, columns }) => {
  return (
    <div className="scoring-table">
      <h2>Scoring Table</h2>
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
          onBulkUpdate: (changes) =>
            new Promise((resolve, reject) => {
              const change = Object.values(changes);
              const updatedData = [...data];
              let index;
              change.map((e) => {
                index = e.oldData.tableData.id;
                updatedData[index] = e.newData;
                return null;
              });
              setTimeout(() => {
                setData(updatedData);
                resolve();
              }, 1000);
            }),
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
      />
    </div>
  );
};

export default ScoringTable;
