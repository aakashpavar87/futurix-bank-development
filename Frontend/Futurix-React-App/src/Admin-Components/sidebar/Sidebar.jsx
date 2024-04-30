/* eslint-disable no-unused-vars */
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import StoreIcon from "@mui/icons-material/Store";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../contexts/DarkModeContext";
import "./sidebar.css";
import { useAuth } from "../../hooks/useAuth";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);
  const { adminLogout, logout } = useAuth();
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span className="logo">Futurix Bank</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <br />
          <Link to="/admin" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Dashboard</span>
            </li>
          </Link>
          <p className="title">LISTS</p>
          <Link to="/admin/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Customers</span>
            </li>
          </Link>
          <Link to="/admin/accounts" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>Accounts</span>
            </li>
          </Link>
          <Link to="/admin/cards" style={{ textDecoration: "none" }}>
            <li>
              <CreditCardIcon className="icon" />
              <span>Cards</span>
            </li>
          </Link>
          <Link to="/admin/loans" style={{ textDecoration: "none" }}>
            <li>
              <PsychologyOutlinedIcon className="icon" />
              <span>Loans</span>
            </li>
          </Link>
          <Link to="/admin/investoradd" style={{ textDecoration: "none" }}>
            <li>
              <PsychologyOutlinedIcon className="icon" />
              <span>Investors</span>
            </li>
          </Link>

          <Link to="/admin/investmentadd" style={{ textDecoration: "none" }}>
            <li>
              <PsychologyOutlinedIcon className="icon" />
              <span>Investment</span>
            </li>
          </Link>

          <p className="title">USER</p>
          <li
            onClick={() => {
              logout();
              adminLogout();
            }}
          >
            <ExitToAppIcon className="icon" />
            <span>Logout</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
