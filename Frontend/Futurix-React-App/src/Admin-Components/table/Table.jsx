/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import "./table.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useEffect, useState } from "react";
import { getPreviousFiveTransaction } from "../../apis/AdminApi";
import { GiPayMoney, GiReceiveMoney } from "react-icons/gi";
import { FcMoneyTransfer } from "react-icons/fc";

const List = () => {
  const [previousSixTransaction, setPreviousSixTransaction] = useState([]);

  useEffect(() => {
    async function getData() {
      const sixTransactionsRes = await getPreviousFiveTransaction();
      setPreviousSixTransaction(sixTransactionsRes.data);
      console.log(previousSixTransaction);
    }
    getData();

    return () => {};
  }, []);

  const newRows = previousSixTransaction.map((transaction) => {
    let image;
    if (transaction.transactionType === "Deposit") {
      image = <GiReceiveMoney className="text-xl mx-3" />;
    } else if (transaction.transactionType === "Withdraw") {
      image = <GiPayMoney className="text-xl mx-3" />;
    } else {
      image = <FcMoneyTransfer className="text-xl mx-3" />;
    }
    return {
      id: transaction.transactionCode,
      product: transaction.transactionType,
      img: image,
      customer: transaction.accountNumber,
      date: transaction.date,
      amount: transaction.amount,
      method: transaction.description,
      status: transaction.status,
      recipient: transaction.receiverAccountNumber,
    };
  });

  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Transaction ID</TableCell>
            <TableCell className="tableCell">Transaction Type</TableCell>
            <TableCell className="tableCell">Account Number</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Amount</TableCell>
            <TableCell className="tableCell">Description</TableCell>
            <TableCell className="tableCell">Status</TableCell>
            <TableCell className="tableCell">Recipient</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {newRows.map((row, idx) => (
            <TableRow key={idx}>
              <TableCell className="tableCell">{row.id}</TableCell>
              <TableCell className="tableCell">
                <div className="cellWrapper">
                  {row.img}
                  {row.product}
                </div>
              </TableCell>
              <TableCell className="tableCell">{row.customer}</TableCell>
              <TableCell className="tableCell">{row.date}</TableCell>
              <TableCell className="tableCell">{row.amount}</TableCell>
              <TableCell className="tableCell">{row.method}</TableCell>
              <TableCell className="tableCell">
                <span className={`status ${row.status}`}>{row.status}</span>
              </TableCell>
              <TableCell className="tableCell">
                {row.recipient || "N/A"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
