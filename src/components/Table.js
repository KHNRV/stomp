import React, { useState } from "react";
import MaterialTable from "material-table";

const Table = () => {
  const [columns, setColumns] = useState([
    { title: "Bib #", field: "bib" },
    { title: "Name", field: "name" },
    { title: "Surname", field: "surname" },
    { title: "Judge 1", field: "judge1" },
    { title: "Judge 2", field: "judge2" },
    { title: "Judge 3", field: "judge3" },
    { title: "Judge 4", field: "judge4" },
    { title: "Judge 5", field: "judge5" },
  ]);

  const [data, setData] = useState([
    {
      bib: 101,
      name: "Dora",
      surname: "Dewing",
      judge1: 'yes',
      judge2: 'yes',
      judge3: 'maybe',
      judge4: 'yes',
      judge5: 'no',
    },
    {
      bib: 102,
      name: "Sophie",
      surname: "Minocchi",
      judge1: 'no',
      judge2: 'no',
      judge3: 'maybe',
      judge4: 'no',
      judge5: 'yes',
    },
    {
      bib: 103,
      name: "Willette",
      surname: "Romagosa",
      judge1: 'yes',
      judge2: 'no',
      judge3: 'no',
      judge4: 'yes',
      judge5: 'yes',
    },
    {
      bib: 104,
      name: "Camey",
      surname: "Darree",
      judge1: 'no',
      judge2: 'no',
      judge3: 'maybe',
      judge4: 'yes',
      judge5: 'yes',
    },
    {
      bib: 105,
      name: "Dennet",
      surname: "Reidshaw",
      judge1: 'yes',
      judge2: 'yes',
      judge3: 'maybe',
      judge4: 'maybe',
      judge5: 'yes',
    },
  ]);

  return (
    <MaterialTable
      title="Solo Jazz Newcomer"
      columns={columns}
      data={data}
      cellEditable={{
        onCellEditApproved: (newValue, oldValue, rowData, columnDef) => {
          return new Promise((resolve, reject) => {
            console.log("newValue: " + newValue);
            setTimeout(resolve, 1000);
          });
        },
      }}
    />
  );
};

export default Table;
