import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import DashboardCompetitionsNew from "./DashboardCompetitionsNew";

import MaterialTable from "@material-table/core";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";

const DashboardCompetitions = ({ eventName, compData }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const history = useHistory();

  function handleClick(competition_id) {
    history.push(`/competitions/${competition_id}`);
  }

  return (
    <div className="data-table">
      <DashboardCompetitionsNew open={modalIsOpen} setOpen={setModalIsOpen} />
      <ThemeProvider theme={theme}>
        <MaterialTable
          title={eventName}
          columns={compData.columns}
          data={compData.rows}
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
          editable={
            {
              // onRowDelete: (oldData) =>
              //   new Promise((resolve, reject) => {
              //     setTimeout(() => {
              //       const dataDelete = [...comps];
              //       const index = oldData.tableData.id;
              //       dataDelete.splice(index, 1);
              //       setComps([...dataDelete]);
              //       resolve();
              //     }, 1000);
              //   }),
            }
          }
        />
      </ThemeProvider>
    </div>
  );
};

export default DashboardCompetitions;
