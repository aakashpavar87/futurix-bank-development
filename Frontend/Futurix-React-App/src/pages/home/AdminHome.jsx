import Sidebar from "../../Admin-Components/sidebar/Sidebar";
import Navbar from "../../Admin-Components/navbar/Navbar";
import "./home.css";
import Widget from "../../Admin-Components/widget/Widget";
import Featured from "../../Admin-Components/featured/Featured";
import Chart from "../../Admin-Components/chart/Chart";
import Table from "../../Admin-Components/table/Table";

const AdminHome = () => {
  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" />
          {/* <Widget type="order" /> */}

          <Widget type="earning" />
          <Widget type="balance" />
        </div>
        <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
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
