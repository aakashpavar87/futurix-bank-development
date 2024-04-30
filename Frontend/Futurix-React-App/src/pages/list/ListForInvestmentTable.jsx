import "./list.css"
import Sidebar from "../../Admin-Components/sidebar/Sidebar"
import  Investment from "../../Admin-Components/Investment/Investment"

const ListForInvestmentTable = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Investment/>
      </div>
    </div>
  )
}

export default ListForInvestmentTable;
