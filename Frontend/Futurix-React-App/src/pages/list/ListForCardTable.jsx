import "./list.css"
import Sidebar from "../../Admin-Components/sidebar/Sidebar"
import Navbar from "../../Admin-Components/navbar/Navbar"
import Cardtable from "../../Admin-Components/Cards/Cardtable"

const ListForCardTable = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Cardtable/>
      </div>
    </div>
  )
}

export default ListForCardTable;
