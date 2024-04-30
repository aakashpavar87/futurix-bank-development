// import { getAllUsers } from "./apis/UserApi";
import { getAllCards } from "./apis/CardApi";
import { getUserIdByAccountNumber } from "./apis/UserApi";

const response = await getAllCards();
const data = response.data;
console.log(data);

export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "accountnumber",
    headerName: "Account number",
    width: 200,
  },
  {
    field: "CardNumber",
    headerName: "Card number",
    width: 200,
  },

  {
    field: "date_of_exspiry",
    headerName: "ExpiryDate",
    width: 150,
  },
  {
    field: "CardType",
    headerName: "Card type",
    width: 160,
  },
];

// export const userRows = data.map(async (item, idx) => {
//   let response = await getUserIdByAccountNumber(item.accountnumber)
//   const userId = response.data
//   return {
//     id: idx + 1,
//     accountnumber: item.accountnumber,
//     cardId: item.cardId,
//     userId: userId,
//     CardNumber: item.card_number,
//     date_of_exspiry: item.date_of_exspiry,
//     CardType: item.creditCard == null ? "Debit Card" : "Credit Card",
//   }
// });

export const userRows = data.map((item, idx) => {
  let myUserId;
  getUserIdByAccountNumber(item.accountnumber).then((res) => {
    myUserId = res.data;
    console.log(myUserId);
  });
  return {
    id: idx + 1, // Assuming idx + 1 is unique, replace this with your unique ID if available in the API response
    accountnumber: item.accountnumber,
    cardId: item.cardId,
    userId: myUserId,
    CardNumber: item.card_number,
    date_of_exspiry: item.date_of_exspiry,
    CardType: item.creditCard == null ? "Debit Card" : "Credit Card",
  };
});

console.log(userRows);

//temporary data
// export const userRows = [
//   {
//     id: 1,
//     username: "Snow",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     CardNumber: "123456789101",
//     ActionvationTime: "03/04/2000-03/04/2005",
//     CardType: "Credit card",
//   },
//   {
//     id: 2,
//     username: "Jamie Lannister",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     CardNumber: "859127864212",
//      ActionvationTime: "05/22/2002-06/10/2005",
//      CardType: "Credit card",
//   },
//   {
//     id: 3,
//     username: "Lannister",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     CardNumber: "137924682111 ",
//      ActionvationTime: "02/17/2003-04/07/2004",
//      CardType: "Debit card",
//   },
//   {
//     id: 4,
//     username: "Stark",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     CardNumber: "765321089054 ",
//     ActionvationTime: "05/22/2002-06/10/2005",
//     CardType: "Credit card",
//   },
//   {
//     id: 5,
//     username: "Targaryen",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     CardNumber: "123456789012 ",
//      ActionvationTime: "05/20/2002-05/21/2005",
//      CardType: "Debit card",
//   },
//   {
//     id: 6,
//     username: "Melisandre",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     CardNumber: "789012345678 ",
//      ActionvationTime: "01/11/2005-03/23/2010",
//      CardType: "Credit card",
//   },
//   {
//     id: 7,
//     username: "Clifford",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     CardNumber: "901234567890  ",
//      ActionvationTime: "03/04/2010-03/04/2015",
//      CardType: "Debit card",
//   },
//   {
//     id: 8,
//     username: "Frances",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     CardNumber: "859127864212",
//      ActionvationTime: "04/15/2002-06/23/2006",
//      CardType: "Debit card",
//   },
//   {
//     id: 9,
//     username: "Roxie",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     CardNumber: "137924682111",
//      ActionvationTime: "03/04/2002-03/04/2007",
//      CardType: "Debit card",
//   },
//   {
//     id: 10,
//     username: "Roxie",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     CardNumber: "298743219873",
//      ActionvationTime: "02/23/2004-03/06/2007",
//      CardType: "Credit card",
//   },
// ];
