import React, { useState } from "react";
import DashboardCompetitionsNew from "./DashboardCompetitionsNew";

import { NavLink } from "react-router-dom";
import MaterialTable from "@material-table/core";

const DashboardCompetitions = () => {
  // DBLOGIC
  const columns = [
    {
      title: "Competitions",
      field: "competitions",
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
      competitions: (
        <NavLink to="/competitions/:id">Solo Jazz Newcomer</NavLink>
      ),
      judges: 3,
      participants: 5,
    },
  ]);

  return (
    <div className="competitions">
      <MaterialTable
        columns={columns}
        data={comps}
        style={{ padding: "0.5em", backgroundColor: "#F8F8F8" }}
        localization={{
          body: {
            emptyDataSourceMessage: "There are no Competitions",
          },
        }}
        options={{
          search: false,
          headerStyle: {
            backgroundColor: "#dfad3e",
            color: "#08253f",
          },
          toolbarButtonAlignment: "right", // here is the option to change toolbar buttons' alignment
          padding: "default",
          paging: false,
          actionsColumnIndex: -1,
          fixedColumns: { left: 0, right: 0 },
        }}
        components={{
          Toolbar: (props) => (
            <div
              style={{
                display: "flex",
                flexDirection: "row-reverse",
                paddingBottom: "10px",
              }}
            >
              <DashboardCompetitionsNew />
            </div>
          ),
        }}
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
    </div>
  );
};

export default DashboardCompetitions;
