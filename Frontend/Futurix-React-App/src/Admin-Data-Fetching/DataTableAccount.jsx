import { AccountData } from "../apis/AccountApi";

const response = await AccountData();
const data = response.data;
console.log(data);

export const accCols = [
  { field: "id", headerName: "ID", width: 70 },

  {
    field: "AccountNumber",
    headerName: "Account number",
    width: 200,
  },

  {
    field: "openingDate",
    headerName: "Opening Date",
    width: 150,
  },
  {
    field: "AccountType",
    headerName: "Account type",
    width: 160,
  },
];

export const accRows = data.map((item, idx) => {
  return {
    id: idx + 1,
    AccountNumber: item.accountnumber,
    openingDate: item.dateofopening,
    AccountType: item.saving_account == null ? "Current" : "saving",
  };
});

console.log(accRows);

//temporary data
//export const accRows = [
// {
//   id: 1,
//   username: "Snow",
//   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   AccountNumber: "12345678919111",
//   openingDate: "04/12/2012",
//   AccountType: "Saving"

// },
// {
//   id: 2,
//   username: "Jamie Lannister",
//   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   AccountNumber: "12345678919111",
//   openingDate: "04/12/2012",
//   AccountType: "Saving"
// },
// {
//   id: 3,
//   username: "Lannister",
//   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   AccountNumber: "12345678919111",
//   openingDate: "04/12/2012",
//   AccountType: "Saving"
// },
// {
//   id: 4,
//   username: "Stark",
//   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   AccountNumber: "12345678919111",
//   openingDate: "04/12/2012",
//   AccountType: "Saving"
// },
// {
//   id: 5,
//   username: "Targaryen",
//   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   AccountNumber: "123456789012",
//   openingDate: "05/20/2002",
//   AccountType: "Current",
// },
// {
//   id: 6,
//   username: "Melisandre",
//   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   AccountNumber: "789012345678 ",
//   openingDate: "01/11/2005",
//   AccountType: "Saving",
// },
// {
//   id: 7,
//   username: "Clifford",
//   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   AccountNumber: "12345678919111",
//   openingDate: "04/12/2012",
//   AccountType: "Saving"
// },
// {
//   id: 8,
//   username: "Frances",
//   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   AccountNumber: "12345678919111",
//   openingDate: "04/12/2012",
//   AccountType: "Saving"
// },
// {
//   id: 9,
//   username: "Roxie",
//   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   AccountNumber: "12345678919111",
//   openingDate: "04/12/2012",
//   AccountType: "Saving"
// },
// {
//   id: 10,
//   username: "Roxie",
//   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//   AccountNumber: "12345678919111",
//   openingDate: "04/12/2012",
//   AccountType: "Saving"
// },
// ];
