import MaterialTable from "@material-table/core";

// import { compData, columns } from "../data";

const Competition = ({ data, columns }) => {
  return (
    <div className="competition-table">
      <h2>Competition Table</h2>
      <MaterialTable
        title="Solo Jazz Newcomer"
        columns={columns}
        data={data}
        style={{ padding: "0.5em", backgroundColor: "#F8F8F8" }}
        localization={{
          body: {
            emptyDataSourceMessage:
              "There is no information for this competition",
          },
        }}
        options={{
          headerStyle: {
            backgroundColor: "#6B6A6A",
            color: "#fff",
          },
          searchAutoFocus: true,

          toolbarButtonAlignment: "left", // here is the option to change toolbar buttons' alignment

          padding: "default",
          paging: false,
          fixedColumns: { left: 0, right: 0 },
        }}
      />
    </div>
  );
};

export default Competition;
