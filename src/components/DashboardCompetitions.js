import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import MaterialTable from "@material-table/core";
import DashboardCompetitionsNew from "./DashboardCompetitionsNew";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";

const DashboardCompetitions = ({ eventName, compData, action }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const history = useHistory();

  function handleClick(competition_id) {
    history.push(`/competitions/${competition_id}`);
  }

  return (
    <div className="data-table">
      <DashboardCompetitionsNew
        open={modalIsOpen}
        setOpen={setModalIsOpen}
        action={action}
      />
      <ThemeProvider theme={theme}>
        <MaterialTable
          title={action.read.state.event_name}
          columns={action.read.competitions.for.competitionsTable().columns}
          data={action.read.competitions.for.competitionsTable().rows}
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
              emptyDataSourceMessage: "Please add a Competition",
              editRow: {
                deleteText: "Delete this Competition?",
              },
            },
          }}
          options={{
            headerStyle: {
              backgroundColor: "#EDEDED",
              color: "#001427",
            },
            toolbarButtonAlignment: "right", // here is the option to change toolbar buttons' alignment
            padding: "default",
            actionsColumnIndex: -1,
            fixedColumns: { left: 0, right: 0 },
          }}
          actions={[
            {
              icon: () => <img height="25" src="/buttons/add.svg" alt="add" />,
              tooltip: "Add Competition",
              isFreeAction: true,
              onClick: () => setModalIsOpen(true),
            },
          ]}
          onRowClick={(event, competition) => handleClick(competition.id)}
          editable={{
            onRowDelete: (competition) =>
              action.destroy.competition(competition),
          }}
        />
      </ThemeProvider>
    </div>
  );
};

export default DashboardCompetitions;
