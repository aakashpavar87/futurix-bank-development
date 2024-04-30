import "./list.css"
import Sidebar from "../../Admin-Components/sidebar/Sidebar"
import Investor from "../../Admin-Components/Investor/Investortable"

const ListForInvestorTable = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Investor/>
      </div>
    </div>
  )
}

export default ListForInvestorTable;
