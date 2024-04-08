import "./list.css"
import Sidebar from "../../Admin-Components/sidebar/Sidebar"
import Navbar from "../../Admin-Components/navbar/Navbar"
import Datatable from "../../Admin-Components/datatable/Datatable"

const List = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List