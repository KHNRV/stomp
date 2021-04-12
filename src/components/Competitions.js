import React, { useState } from "react";

import { NavLink } from "react-router-dom";
import MaterialTable from "@material-table/core";

const columns = [
  {
    title: "Competitions",
    field: "competitions",
  },
  {
    title: "No# of Participants",
    field: "participants",
    type: "numeric",
  },
];

const Competitions = () => {

  const [comps, setComps] = useState([
    {
      competitions: <NavLink to="/competitions/:id">Solo Jazz Newcomer</NavLink>,
      participants: 5,
    },
  ]);

  return (
    <div className="competitions">
      <MaterialTable
        title=""
        columns={columns}
        data={comps}
        style={{ padding: "0.5em", backgroundColor: "#F8F8F8" }}
        localization={{
          body: {
            emptyDataSourceMessage:
              "There is no information for this competition",
          },
        }}
        options={{
          search: false,
          toolbarButtonAlignment: "left", // here is the option to change toolbar buttons' alignment
          padding: "dense",
          paging: false,
          actionsColumnIndex: -1,
          fixedColumns: { left: 0, right: 0 },
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

export default Competitions;
