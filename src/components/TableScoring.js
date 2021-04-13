import MaterialTable from "@material-table/core";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";

const TableScoring = ({ data, setData, columns }) => {
  // DBLOGIC
  return (
    <div className="scoring-table">
      <ThemeProvider theme={theme}>
        <MaterialTable
          title="Solo Jazz Newcomer"
          columns={columns}
          data={data}
          style={{ padding: "0.5em", backgroundColor: "#F8F8F8" }}
          icons={{ 
            Edit: () => <img height="32"src="/buttons/edit.svg" alt="edit" /> ,
            Check: () => <img height="30"src="/buttons/save.svg" alt="save" /> ,
            Clear: () => <img height="28"src="/buttons/cancel.svg" alt="cancel" /> ,
        }}
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
            searchAutoFocus: true,
            actionsColumnIndex: -1, // Puts actions to the right hand side
            toolbarButtonAlignment: "right", // here is the option to change toolbar buttons' alignment
            padding: "default",
            paging: false,
            fixedColumns: { left: 0, right: 0 },
            headerStyle: {
              backgroundColor: "#dfad3e",
              color: "#08253f",
            },
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
                  // reject(alert("hey"));
                }, 1000);
              }),
          }}
        />
      </ThemeProvider>
    </div>
  );
};

export default TableScoring;