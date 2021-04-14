import React, { useState } from "react";
import DashboardCompetitionsNew from "./DashboardCompetitionsNew";

import { NavLink } from "react-router-dom";
import MaterialTable from "@material-table/core";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";

const DashboardCompetitions = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const columns = [
    {
      title: "Competitions",
      field: "competitions",
      render: (rowData) => (
        <NavLink className="competitions-list" to={rowData.path}>
          {rowData.compName}
        </NavLink>
      ),
    },
    {
      title: "No# of Judges",
      field: "judges",
      type: "numeric",
      align: "center",
    },
    {
      title: "No# of Participants",
      field: "participants",
      type: "numeric",
      align: "center",
    },
  ];

  const [comps, setComps] = useState([
    {
      path: "/competitions/:id",
      compName: "Solo Jazz Newcomer",
      judges: 3,
      participants: 5,
    },
  ]);

  return (
    <div className="results-table">
      <DashboardCompetitionsNew open={modalIsOpen} setOpen={setModalIsOpen} />
      <ThemeProvider theme={theme}>
        <MaterialTable
          title={"CSC 2021"}
          columns={columns}
          data={comps}
          icons={{
            Search: () => (
              <img height="25" src="/buttons/search.svg" alt="search" />
            ),
            Delete: () => (
              <img height="25" src="/buttons/delete.svg" alt="delete" />
            ),
            Check: () => <img height="25" src="/buttons/save.svg" alt="save" />,
            Clear: () => (
              <img height="25" src="/buttons/cancel.svg" alt="cancel" />
            ),
          }}
          style={{ padding: "1.5em 0.5em", backgroundColor: "#F7F7F7" }}
          localization={{
            body: {
              emptyDataSourceMessage: "There are no Competitions",
            },
          }}
          options={{
            headerStyle: {
              backgroundColor: "#E0E0E0",
              color: "#001427",
            },
            toolbarButtonAlignment: "right", // here is the option to change toolbar buttons' alignment
            padding: "default",
            paging: false,
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
          editable={{
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...comps];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  setComps([...dataDelete]);
                  resolve();
                }, 1000);
              }),
          }}
        />
      </ThemeProvider>
    </div>
  );
};

export default DashboardCompetitions;
