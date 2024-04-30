import { getAllInvestor } from "../apis/InvestorApi";
export const investorcolm = [
  { field: "id", headerName: "ID", width: 70 },
  {
    field: "investment",
    headerName: "Investor Name",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },

  {
    field: "status",
    headerName: "Investment Status",
    width: 160,
  },
  {
    field: "phone",
    headerName: "Phone Number",
    width: 160,
  },
  {
    field: "email",
    headerName: "Email",
    width: 250,
  },
  {
    field: "activate",
    headerName: "Active/Inactive",
    width: 160,
  },
];

const { data } = await getAllInvestor();
export const investorrow = data.map((item, index) => {
  return {
    id: index + 1,
    username: item.investorName,
    img: `http://localhost:8080/investor/${item.id}/profileImage`,
    status: item.investmentList.length === 0 ? "inactive" : "Active",
    phone: item.investorPhoneNumber,
    email: item.investorEmail,
    activate: item.active,
  };
});
//temporary data
// export const investorrow = [
//   {
//     id: 1,
//     username: "Snow",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     status: "Active",
//     phone: "7863096311",
//     email: "harshvgajjar@gmail.com"
//   },
//   {
//     id: 2,
//     username: "Jamie Lannister",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     status : "Inactive"
//   },
//   {
//     id: 3,
//     username: "Lannister",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     status : "Active"
//   },
//   {
//     id: 4,
//     username: "Stark",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     status : "Active"
//   },
//   {
//     id: 5,
//     username: "Targaryen",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     status: "Inactive",
//   },
//   {
//     id: 6,
//     username: "Melisandre",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     status: "Inactive",
//   },
//   {
//     id: 7,
//     username: "Clifford",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     status : "Inactive"
//   },
//   {
//     id: 8,
//     username: "Frances",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     status : "Inactive"
//   },
//   {
//     id: 9,
//     username: "Roxie",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     status : "Active"
//   },
//   {
//     id: 10,
//     username: "Roxie",
//     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
//     status : "Active"
//   },
// ];
