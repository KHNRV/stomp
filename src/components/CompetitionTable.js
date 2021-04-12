import MaterialTable from "@material-table/core";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";

const CompetitionTable = ({ data, setData, columns, setColumns }) => {
  return (
    <div className="competition-table">
      <h2>Competition Table</h2>
      <ThemeProvider theme={theme}>
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
          actions={[
            {
              tooltip: "Remove All Selected Entries",
              icon: "person_remove",
              onClick: (event, data) => {
                // Apply modal logic
                console.log(data[0]);
                return alert("You want to delete " + data.length + " rows");
              },
            },
            {
              icon: "person_add",
              tooltip: "Add Competitor",
              isFreeAction: true,
              onClick: (event, data) =>
                alert(
                  "Participant Modal: Create a competitor (Stretch: Appears on the table)"
                ),
            },
            {
              icon: "gavel",
              tooltip: "Add Judge",
              isFreeAction: true,
              onClick: (event, data) =>
                alert(
                  "Judge Modal: Create a judge (Stretch: Appears on the table)"
                ),
            },
            {
              icon: "settings",
              tooltip: "Settings",
              isFreeAction: true,
              onClick: (event, data) =>
                alert("Settings Modal: Change comp name, etc.."),
            },
          ]}
          options={{
            selection: true,
            search: false,
            toolbarButtonAlignment: "right", // here is the option to change toolbar buttons' alignment
            padding: "default",
            paging: false,
            fixedColumns: { left: 0, right: 0 },
            headerStyle: {
              backgroundColor: "#dfad3e",
              color: "#08253f",
            },
          }}
          editable={
            {
              // IF YOU CAN APPLY ADD PARTICIPANT/COMPETITOR DELETE BELOW
              // onRowAdd: (newData) =>
              //   new Promise((resolve, reject) => {
              //     setTimeout(() => {
              //       setData([...data, newData]);
              //       resolve();
              //     }, 1000);
              //   }),
              // IF YOU CAN APPLY SELECT AND REMOVE DELETE BELOW
              // onRowDelete: (oldData) =>
              // new Promise((resolve, reject) => {
              //   setTimeout(() => {
              //     const dataDelete = [...data];
              //     const index = oldData.tableData.id;
              //     dataDelete.splice(index, 1);
              //     setData([...dataDelete]);
              //     resolve();
              //   }, 1000);
              // }),
            }
          }
        />
      </ThemeProvider>
    </div>
  );
};

export default CompetitionTable;
