/* eslint-disable react-hooks/exhaustive-deps */
import Sidebar from "../../Admin-Components/sidebar/Sidebar";
import "./home.css";
import Widget from "../../Admin-Components/widget/Widget";
import Featured from "../../Admin-Components/featured/Featured";
import Chart from "../../Admin-Components/chart/Chart";
import Table from "../../Admin-Components/table/Table";
import { useEffect, useState } from "react";
import { getAllUsers } from "../../apis/UserApi";
import {
  getBankBalance,
  getPreviousTransactionTotalAmount,
  getTotalAmountInvestmentsOfBank,
} from "../../apis/AdminApi";

const AdminHome = () => {
  const [users, setUsers] = useState([]);
  const [transactions, setTransactions] = useState([]);
  const [bankBalance, setBankBalance] = useState(0);

  const [totalInvestments, setTotalInvestments] = useState(0);

  useEffect(() => {
    async function getData() {
      const userRes = await getAllUsers();
      const bankBalanceRes = await getBankBalance();
      const transactionRes = await getPreviousTransactionTotalAmount();
      const investmentsRes = await getTotalAmountInvestmentsOfBank();

      setUsers(userRes.data);
      setTransactions(transactionRes.data);
      setTotalInvestments(investmentsRes.data);

      setBankBalance(bankBalanceRes.data.totalBalance);
    }

    getData();

    return () => {
      console.log("clean up");
    };
  }, []);

  return (
    <div className="home w-[98vw] mx-auto -mt-12 pl-2">
      <Sidebar />
      <div className="homeContainer">
        <div className="widgets">
          <Widget type="user" numericData={users.length} />
          {/* <Widget type="order" /> */}

          <Widget type="earning" numericData={totalInvestments || 0} />
          <Widget type="balance" numericData={bankBalance || 0} />
        </div>
        <div className="charts">
          <Featured previousTransactionAmount={transactions} />
          <Chart title="Last Days Revenue Chart" aspect={3 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
