import Transaction from "../../Admin-Components/Transaction/Transaction"
import Sidebar from "../../Admin-Components/sidebar/Sidebar"
import "./list.css"

const ListForTransactionTable = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Transaction/>
      </div>
    </div>
  )
}

export default ListForTransactionTable;