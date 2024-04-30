import "./Accounttable.css";
import { DataGrid } from "@mui/x-data-grid";

import { accCols, accRows } from "../Admin-Data-Fetching/DataTableAccount";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

const Accounttable = () => {
  const [data, setData] = useState(accRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/admin/accounts");
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/accounts/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <DataGrid
        className="datagrid "
        rows={data}
        columns={accCols.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Accounttable;
