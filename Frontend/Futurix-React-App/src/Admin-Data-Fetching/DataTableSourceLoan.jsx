import { getAllLoans } from "../apis/LoanApi";

const response = await getAllLoans();
const data = response.data;
console.log(data);

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "accountNumber",
    headerName: "AccountNumber",
    width: 200,
  },

  {
    field: "ActivationTime",
    headerName: "Activation Time",
    width: 150,
  },
  {
    field: "LoanType",
    headerName: "Loan Type",
    width: 160,
  },
];

export const userRows = data.map((item, idx) => {
  return {
    id: idx + 1,
    accountNumber: item.accountNumber,
    ActivationTime: item.durationInYears,
    LoanType: item.loanType,
  };
});

console.log(userRows);

//temporary data
// export const userRows = [
// {
//   id: 1,
//   username: "Snow",
//   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   LoanId: "snowMicheal@gmail.com",
//   ActivationTime: "40",
//   LoanType: "active",
// },
// {
//   id: 2,
//   username: "Jamie Lannister",
//   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   LoanId: "jamielanniser@gmail.com",
//   ActivationTime: "44",
//   LoanType: "inactive",
// },
// {
//   id: 3,
//   username: "Lannister",
//   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   LoanId: "lannister@gmail.com",
//   ActivationTime: "23",
//   LoanType: "active",
// },
// {
//   id: 4,
//   username: "Stark",
//   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   LoanId: "stark@gmail.com",
//   ActivationTime: "34",
//   LoanType: "active",
// },
// {
//   id: 5,
//   username: "Targaryen",
//   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   LoanId: "Targaryen@gmail.com",
//   ActivationTime: "32",
//   LoanType: "inactive",
// },
// {
//   id: 6,
//   username: "Melisandre",
//   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   LoanId: "Melisandre@gmail.com",
//   ActivationTime: "23",
//   LoanType: "inactive",
// },
// {
//   id: 7,
//   username: "Clifford",
//   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   LoanId: "Clifford@gmail.com",
//   ActivationTime: "32",
//   LoanType: "active",
// },
// {
//   id: 8,
//   username: "Frances",
//   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   LoanId: "Frances@gmail.com",
//   ActivationTime: "33",
//   LoanType: "active",
// },
// {
//   id: 9,
//   username: "Roxie",
//   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   LoanId: "Roxie@gmail.com",
//   ActivationTime: "42",
//   LoanType: "active",
// },
// {
//   id: 10,
//   username: "Roxie",
//   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   LoanId: "snowMicheal@gmail.com",
//   ActivationTime: "40",
//   LoanType: "active",
// },
// ];
