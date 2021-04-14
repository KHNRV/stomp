import React, { useState } from "react";
import DashboardJudgesNew from "./DashboardJudgesNew";
import MaterialTable from "@material-table/core";

import { ThemeProvider } from "@material-ui/core/styles";
import theme from "../theme";

export default function DashboardJudges({
  eventName,
  judgeData,
  setJudgeData,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const columns = [
    { title: "First Name", field: "first_name" },
    { title: "Last Name", field: "last_name" },
    { title: "Email", field: "email" },
    { title: "Phone", field: "phone" },
  ];

  const [data, setData] = useState([
    {
      first_name: "Sylvia",
      last_name: "Sykes",
      email: "sylvia.sykes@hey.com",
      phone: "(970) 682-3614",
    },
    {
      first_name: "Annie",
      last_name: "Trudeau",
      email: "annie.trudeau@gmail.com",
      phone: "(514) 334-5547",
    },
  ]);

  return (
    <div className="results-table">
      <ThemeProvider theme={theme}>
        <DashboardJudgesNew open={modalIsOpen} setOpen={setModalIsOpen} />
        <MaterialTable
          title={eventName}
          columns={columns}
          data={judgeData}
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
          style={{ padding: "1.5em 0.5em", backgroundColor: "#F7F7F7" }}
          localization={{
            body: {
              emptyDataSourceMessage: "There are no Judges",
            },
          }}
          options={{
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
              tooltip: "Add Judge",
              isFreeAction: true,
              onClick: () => setModalIsOpen(true),
            },
          ]}
          editable={{
            onRowDelete: (oldData) =>
              new Promise((resolve, reject) => {
                setTimeout(() => {
                  const dataDelete = [...judgeData];
                  const index = oldData.tableData.id;
                  dataDelete.splice(index, 1);
                  setJudgeData([...dataDelete]);
                  resolve();
                }, 1000);
              }),
          }}
        />
      </ThemeProvider>
    </div>
  );
}
