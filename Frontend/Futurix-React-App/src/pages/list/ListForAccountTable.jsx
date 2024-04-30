import "./list.css"
import Sidebar from "../../Admin-Components/sidebar/Sidebar"
import Navbar from "../../Admin-Components/navbar/Navbar"
import Accounttable from "../../Accounts/Accounttable"

const ListForAccounTable = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Accounttable />
      </div>
    </div>
  )
}

export default ListForAccounTable;
