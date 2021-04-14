import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import DashboardCompetitionsNew from "./DashboardCompetitionsNew";

import { NavLink } from "react-router-dom";
import MaterialTable from "@material-table/core";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";

const DashboardCompetitions = ({ eventName }) => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const history = useHistory();

  function handleClick() {
    history.push("/competitions/:id");
  }

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
    <div className="data-table">
      <DashboardCompetitionsNew open={modalIsOpen} setOpen={setModalIsOpen} />
      <ThemeProvider theme={theme}>
        <MaterialTable
          title={eventName}
          columns={columns}
          data={comps}
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
              emptyDataSourceMessage: "There are no Competitions",
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
          onRowClick={handleClick}
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
