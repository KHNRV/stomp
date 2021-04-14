import React, { useState } from "react";
import DashboardParticipantsNew from "./DashboardParticipantsNew";
import MaterialTable from "@material-table/core";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";

export default function DashboardParticipants({ partData, setPartData }) {
  
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const columns = [
    { title: "Bib #", field: "bib" },
    { title: "First Name", field: "first_name" },
    { title: "Last Name", field: "last_name" },
    { title: "Email", field: "email" },
    { title: "Phone", field: "phone" },
  ];

  return (
    <div className="results-table">
      <ThemeProvider theme={theme}>
        <DashboardParticipantsNew open={modalIsOpen} setOpen={setModalIsOpen} />
        <MaterialTable
          title={"CSC 2021"}
          columns={columns}
          data={partData}
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
              emptyDataSourceMessage: "There are no Participants",
            },
          }}
          options={{
            search: true,
            headerStyle: {
              backgroundColor: "#E0E0E0",
              color: "#001427",
            },
            toolbarButtonAlignment: "right",
            padding: "default",
            paging: false,
            fixedColumns: { left: 0, right: 0 },
            actionsColumnIndex: -1,
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
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...partData];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  setPartData([...dataDelete]);
                  resolve();
                }, 1000);
              }),
          }}
        />
      </ThemeProvider>
    </div>
  );
}
