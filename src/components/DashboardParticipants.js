import React, { useState } from "react";
import MaterialTable from "@material-table/core";
import DashboardParticipantsNew from "./DashboardParticipantsNew";
import { ThemeProvider } from "@material-ui/core/styles";
import { Slide, Fade } from "@material-ui/core";

import theme from "../theme";
import Alert from "./Alert";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export default function DashboardParticipants({ action }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // Alert for Participant already in competition
  const [alert, setAlert] = useState({
    open: false,
    Transition: Fade,
  });

  const handleAlert = (Transition) => () => {
    setAlert({
      open: true,
      Transition,
    });
  };

  return (
    <div className="data-table">
      <ThemeProvider theme={theme}>
        <DashboardParticipantsNew
          open={modalIsOpen}
          setOpen={setModalIsOpen}
          action={action}
        />
        <MaterialTable
          title='Participants'
          
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
                .catch(handleAlert(SlideTransition)),
          }}
        />
        <Alert alert={alert} setAlert={setAlert} />
      </ThemeProvider>
    </div>
  );
}
