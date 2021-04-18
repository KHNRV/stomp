import React, { useState } from "react";
import MaterialTable from "@material-table/core";
import { Slide, Fade } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";

import Alert from "./Alert";
import DashboardJudgesNew from "./DashboardJudgesNew";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

export default function DashboardJudges({ action }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // Alert for Judge already in competition
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
        <DashboardJudgesNew
          open={modalIsOpen}
          setOpen={setModalIsOpen}
          action={action}
        />
        <MaterialTable
          title='Judges'
          columns={action.read.judges.for.dashboard().columns}
          data={action.read.judges.for.dashboard().rows}
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
              emptyDataSourceMessage: "Please add a Judge",
              editRow: {
                deleteText: "Delete this Judge?",
              },
            },
          }}
          options={{
            headerStyle: {
              backgroundColor: "#EDEDED",
              color: "#001427",
            },
            toolbarButtonAlignment: "right",
            padding: "default",
            fixedColumns: { left: 0, right: 0 },
            actionsColumnIndex: -1,
          }}
          actions={[
            {
              icon: () => <img height="25" src="/buttons/add.svg" alt="add" />,
              tooltip: "Add Judge",
              isFreeAction: true,
              onClick: () => setModalIsOpen(true),
            },
          ]}
          editable={{
            onRowDelete: (judge) =>
              action.destroy.judge(judge).catch(handleAlert(SlideTransition)),
          }}
        />
        <Alert alert={alert} setAlert={setAlert} />
      </ThemeProvider>
    </div>
  );
}
