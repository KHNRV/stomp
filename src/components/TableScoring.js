import MaterialTable from "@material-table/core";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";
import sendData from "../helpers/sendData";
import { useParams } from "react-router";
import { useState } from "react";

const TableScoring = ({ action }) => {
  const { id } = useParams();

  const [tableData, setTableData] = useState(
    action.read.competitions.for.scoresTable(parseInt(id))
  );

  function handleBulkUpdate(changes) {
    const update = { ...tableData };
    update.rows = update.rows.map((row) => {
      const id = row.tableData.id;
      if (changes[id]) {
        return changes[id].newData;
      }
      return row;
    });

    return action.update
      .competition(parseInt(id))
      .from.scoresTable(update)
      .then(() =>
        setTableData(action.read.competitions.for.scoresTable(parseInt(id)))
      );
  }

  return (
    <div className="data-table">
      <ThemeProvider theme={theme}>
        <MaterialTable
          title={action.read.competitions.where.id(parseInt(id)).name}
          columns={tableData.columns}
          data={tableData.rows}
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
              emptyDataSourceMessage: "Please add Participants and Judges",
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
            onBulkUpdate: (changes) => handleBulkUpdate(changes),
          }}
        />
      </ThemeProvider>
    </div>
  );
};

export default TableScoring;
