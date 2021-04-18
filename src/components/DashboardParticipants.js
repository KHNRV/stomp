import React, { useState } from "react";
import MaterialTable from "@material-table/core";
import { SnackbarContainer, snackbarService } from "uno-material-ui";
import DashboardParticipantsNew from "./DashboardParticipantsNew";
import { ThemeProvider } from "@material-ui/core/styles";

import theme from "../theme";

export default function DashboardParticipants({ action }) {
  const showSuccessMessage = (participant) => {
    snackbarService.showSnackbar(
      `${participant.first_name} is removed from your event!`,
      "info"
    );
  };
  const showErrorMessage = (participant) => {
    snackbarService.showSnackbar(
      `Cannot delete: ${participant.first_name} is already in a competition!`,
      "error"
    );
  };

  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div className="data-table">
      <ThemeProvider theme={theme}>
        <DashboardParticipantsNew
          open={modalIsOpen}
          setOpen={setModalIsOpen}
          action={action}
        />
        <MaterialTable
          title="Participants"
          columns={action.read.participants.for.dashboard().columns}
          data={action.read.participants.for.dashboard().rows}
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
              fontWeight: "700",
              fontFamily: "'Lato', sans-serif",
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
              action.destroy
                .participant(participant)
                .then(showSuccessMessage(participant))
                .catch(showErrorMessage(participant)),
          }}
        />
        <SnackbarContainer />
      </ThemeProvider>
    </div>
  );
}
