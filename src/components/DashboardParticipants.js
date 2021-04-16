import React, { useState } from "react";
import DashboardParticipantsNew from "./DashboardParticipantsNew";
import MaterialTable from "@material-table/core";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";

export default function DashboardParticipants({
  eventName,
  partData,
  setPartData,
  action,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="data-table">
      <ThemeProvider theme={theme}>
        <DashboardParticipantsNew
          open={modalIsOpen}
          setOpen={setModalIsOpen}
          setPartData={setPartData}
        />
        <MaterialTable
          title={eventName}
          columns={partData.columns}
          data={partData.rows}
          icons={{
            Search: () => (
              <img height="20" src="/buttons/search.svg" alt="search" />
            ),
            Delete: () => (
              <img height="25" src="/buttons/delete.svg" alt="delete" />
            ),
            Check: () => <img height="25" src="/buttons/save.svg" alt="save" />,
            Clear: () => (
              <img height="25" src="/buttons/cancel.svg" alt="cancel" />
            ),
          }}
          style={{ padding: "1.5em 0em 0em 0em", backgroundColor: "#F7F7F7" }}
          localization={{
            body: {
              emptyDataSourceMessage: "Please add a Participant",
              editRow: {
                deleteText: "Delete this Participant?",
              },
            },
          }}
          body={{
            editRow: {
              deleteText: "Delete Row?",
            },
          }}
          options={{
            headerStyle: {
              backgroundColor: "#EDEDED",
              color: "#001427",
            },
            toolbarButtonAlignment: "right",
            padding: "default",
            actionsColumnIndex: -1,
            actionsAlign: "center",
          }}
          actions={[
            {
              icon: () => <img height="25" src="/buttons/add.svg" alt="add" />,
              tooltip: "Add Participant",
              isFreeAction: true,
              onClick: () => setModalIsOpen(true),
            },
          ]}
          editable={{
            onRowDelete: (participant) =>
              action.destroy.participant(participant),
          }}
        />
      </ThemeProvider>
    </div>
  );
}
