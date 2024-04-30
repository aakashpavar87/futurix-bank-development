/* eslint-disable no-unused-vars */
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  transactioncolm,
  transactionrow,
} from "../../Admin-Data-Fetching/DataTableTransaction";
import "../datatable/datatable.css";

const Transaction = () => {
  const [data, setData] = useState(transactionrow);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const navigate = useNavigate();
  const handleCheckout = () => {
    navigate("/admin/cards");
  };
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/cards/test" style={{ textDecoration: "none" }}>
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
        columns={transactioncolm.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default Transaction;
