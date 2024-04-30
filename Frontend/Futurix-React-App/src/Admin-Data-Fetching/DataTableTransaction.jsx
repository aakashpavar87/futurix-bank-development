export const transactioncolm = [
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "investment",
      headerName: "Investment Amount",
      width: 160,
    },
  
    {
      field: "transactionid",
      headerName: "Transaction Id",
      width: 160,
    },
    {
      field: "dateofopening",
      headerName: "Date of Opening",
      width: 250,
    },
    {
      field: "type",
      headerName: "Type",
      width: 160,
    },
  ];
  
//   const {data} = await getAllTransaction();
//   export const investmentrow = data.map((item,index)=>{
//   return {
//     id: index+1,
//     investment: item.investmentAmount,
//     // img: `http://localhost:8080/investor/${item.id}/profileImage`,
//     transactionid: item.transactionId,
//     dateofopening: item.investmentDate,
//     type: item.investmentType, 
//   }
//   })
  
 // temporary data
  export const transactionrow = [
    {
      id: 1,
      investment: "120000",
      trasactionid: "12",
      dateofopening:"12/12/2023",
      status: "Complete",
    },
    {
      id: 2,
      investment: "100000",
      trasactionid: "15",
      dateofopening:"12/12/2023",
      status: "Pending",
    },
    {
      id: 3,
      investment: "12100",
      trasactionid: "11",
      dateofopening:"12/12/2023",
      status: "Complete",
    },
    {
      id: 4,
      investment: "1000000",
      trasactionid: "20",
      dateofopening:"12/12/2023",
      status: "Complete",
    },
    {
      id: 5,
      investment: "1000000",
      trasactionid: "1",
      dateofopening:"12/12/2023",
      status: "Pending",  
    },
    {id: 6,
      investment: "1010000",
      trasactionid: "15",
      dateofopening:"12/12/2023",
      status: "Pending",
    },
    {id: 7,
      investment: "12090",
      trasactionid: "22",
      dateofopening:"12/12/2023",
      status: "Pending",
    },
    {id: 8,
      investment: "12100",
      trasactionid: "32",
      dateofopening:"12/12/2023",
      status: "Complete",
    },
    {id: 9,
      investment: "101000",
      trasactionid: "25",
      dateofopening:"12/12/2023",
      status: "Complete",
    },
    {id: 10,
      investment: "120400",
      trasactionid: "33",
      dateofopening:"12/12/2023",
      status: "Complete",
    },
  ];
  