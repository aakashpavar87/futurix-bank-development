import "./single.css";
import Sidebar from "../../Admin-Components/sidebar/Sidebar";
import Navbar from "../../Admin-Components/navbar/Navbar";
import Chart from "../../Admin-Components/chart/Chart";
import List from "../../Admin-Components/table/Table";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getOneUserById } from "../../apis/UserApi";

const Single = () => {
  const [singleUser, setSingleUser] = useState({});
  const params = useParams();
  useEffect(() => {
    console.log(params);
    getOneUserById(52).then((res) => setSingleUser(res.data));
  });

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{singleUser.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{singleUser.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">+1 2345 67 89</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">
                    Elton St. 234 Garden Yd. NewYork
                  </span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <List />
        </div>
      </div>
    </div>
  );
};

export default Single;
