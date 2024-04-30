import "../datatable/datatable.css";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../Datatablesource";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import DeleteCardModal from "../../Admin-Data-Fetching/DeleteModal";

const Cardtable = () => {
  const [data, setData] = useState(userRows);
  const [isConfirmationVisible, setConfirmationVisible] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleDeleteClick = (userId, columnId) => {
    console.log(userId, columnId);
    setSelectedUserId(userId, columnId);
    setConfirmationVisible(true);
  };

  const handleConfirmDelete = () => {
    console.log(`Deleting record with ID: ${selectedUserId}`);
    setConfirmationVisible(false);
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
              onClick={() =>
                handleDeleteClick(params.row.userId, params.row.CardNumber)
              }
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
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
      {isConfirmationVisible && (
        <DeleteCardModal
          isOpen={isConfirmationVisible}
          onClose={() => setConfirmationVisible(false)}
          onConfirm={handleConfirmDelete}
          userId={selectedUserId}
        />
      )}
    </div>
  );
};

export default Cardtable;
