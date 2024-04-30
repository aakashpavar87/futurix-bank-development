import "./list.css";
import Sidebar from "../../Admin-Components/sidebar/Sidebar";
import Navbar from "../../Admin-Components/navbar/Navbar";
import Cardtable from "../../Admin-Components/Cards/Cardtable";
import LoanTable from "../../Admin-Components/Loans/LoanTable";

const ListForLoanTable = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <LoanTable />
      </div>
    </div>
  );
};

export default ListForLoanTable;
