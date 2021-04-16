import MaterialTable from "@material-table/core";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";
import sendData from "../helpers/sendData";
import { useParams } from "react-router";

const TableScoring = ({ data, setData, columns }) => {

  const { id } = useParams();

  return (
    <div className="data-table">
      <ThemeProvider theme={theme}>
        <MaterialTable
          title="Solo Jazz Newcomer"
          columns={data(parseInt(id)).columns}
          data={data(parseInt(id)).rows}
          style={{ padding: "1.5em 0em 0em 0em", backgroundColor: "#F7F7F7" }}
          icons={{
            Edit: () => <img height="28" src="/buttons/edit.svg" alt="edit" />,
            Check: () => <img height="25" src="/buttons/save.svg" alt="save" />,
            Clear: () => (
              <img height="25" src="/buttons/cancel.svg" alt="cancel" />
            ),
          }}
          localization={{
            body: {
              addTooltip: "Add Entry",
              emptyDataSourceMessage:
                "Please add Participants and Judges",
              editRow: {
                deleteText: "Delete this entry?",
              },
            },
          }}
          options={{
            search: false,
            actionsColumnIndex: -1, // Puts actions to the right hand side
            toolbarButtonAlignment: "right", // here is the option to change toolbar buttons' alignment
            padding: "default",
            paging: false,
            fixedColumns: { left: 0, right: 0 },
            headerStyle: {
              backgroundColor: "#EDEDED",
              color: "#001427",
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
                  // USE SENDDATA TO CONVERT BACK TO WHOLE DATA TO SEND TO DB
                  // console.log(JSON.stringify(sendData( updatedData, compCol)));
                  console.log(updatedData);
                  setData(updatedData);
                  resolve();
                }, 1000);
              }),
          }}
        />
      </ThemeProvider>
    </div>
  );
};

export default TableScoring;
