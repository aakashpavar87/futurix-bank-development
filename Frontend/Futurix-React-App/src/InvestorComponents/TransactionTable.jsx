import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/userContext";
import { getinvestmentApi } from "../apis/InvestorApi";
import { Link, useLocation } from "react-router-dom";
import { InvestmentContext } from "../contexts/InvestmentContext";
import { helloWorldApiService } from "../apis/HelloWorldApi";

export const TransactionTable = () => {
  const myUser = useContext(UserContext);
  const {isInvested, setIsInvested} = useContext(InvestmentContext) || false
  const [investments, setInvestments] = useState([])
  const [number, setNumber] = useState(1)


  // (function(){
  //   setNumber(prev=>prev+1)
  // })()
  const myRefresher = function() {
    setNumber(prev=>prev+1)
  }


  useEffect(()=>{
    console.log("Heloo From Transaction Table");
    helloWorldApiService()
      .then(res=>console.log(res.data))
      .catch(err=>console.log(err.response.data.message))
    getinvestmentApi(myUser.userData.id)
      .then(res=>{
        console.log(res.data)
        setInvestments(res.data)
      })
      .catch(err=>console.log(err.response.data.message)
      )
  },[isInvested, number])
  

  return (
    <div className="flex justify-center items-center w-[80vw]">
      {investments.length !== 0 ? (
        <div id="investments" className=" w-full overflow-hidden rounded-lg ">
          <table className="w-full">
            <thead className="bg-gray-500">
              <tr>
                <th className="px-4 py-2 text-lg justify-center font-semibold">
                  Sr#
                </th>
                <th className="px-4 py-2 text-lg font-semibold">
                  Duration Of Investment
                </th>
                <th className="px-4 py-2 text-lg font-semibold">
                  Investment Amount
                </th>
                <th className="px-4 py-2 text-lg font-semibold">
                  Investment Status
                </th>
              </tr>
            </thead>
            <tbody>
              {
                investments && 
                investments.map((investment, idx)=>(
                  <tr key={idx}>
                    <td className=" px-4 py-2 text-center text-cyan-50">{idx+1}</td>
                    <td className=" px-4 py-2 text-center text-lg font-semibold text-white">{investment.investmentDuration} Year</td>
                    <td className="text-center px-4 py-2 text-cyan-50">&#8377;{investment.investmentAmount}</td>
                    <td className="text-center px-4 py-2">
                        <span className="px-2 py-1 text-lg  text-white rounded-full bg-green-500">Completed</span>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>
      ) : (
        <>
          <section className={`w-[30vw] h-[50vh] flex justify-center p-5 items-center bg-gray-100 rounded-lg my-4`}  data-aos="fade-up">
                <div className="flex flex-col w-full justify-center items-center gap-4">
                  <h1 className="text-4xl text-gray-700 text-center">
                    You don't have any Investments !!!
                  </h1>
                  <Link to="/investor/investment">
                    <button className="p-5 rounded-md text-gray-800 border border-gray-900">
                      Invest Now
                    </button>
                  </Link>
                </div>
          </section>
        </>
      )}
    </div>
  );
};

{
  /* <tr>
<td className="px-4 py-2 text-center text-cyan-50">1</td>
<td className="text-center px-4 py-2  text-lg font-semibold text-white">1 Year</td>
<td className="text-center px-4 py-2  text-cyan-50">&#8377;1000</td>
<td className=" text-center px-4 py-2">
    <span className=" px-2 py-1 text-lg  text-white rounded-full bg-amber-500">Pending</span>
</td>
</tr>
<tr>
<td className=" px-4 py-2 text-center text-cyan-50">2</td>
<td className=" px-4 py-2 text-center text-lg font-semibold text-white">5 Year</td>
<td className="text-center px-4 py-2 text-cyan-50">&#8377;500</td>
<td className="text-center px-4 py-2">
    <span className="px-2 py-1 text-lg  text-white rounded-full bg-green-500">Completed</span>
</td>
</tr> */
}
