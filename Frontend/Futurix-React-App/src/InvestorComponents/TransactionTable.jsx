export const TransactionTable = () => {
    return (
        <div   id="investments" className=" w-full overflow-hidden rounded-lg ">
            <table className="w-full">
                <thead className="bg-gray-500">
                    <tr>
                        <th className="px-4 py-2 text-lg justify-center font-semibold">Sr#</th>
                        <th className="px-4 py-2 text-lg font-semibold">Duration Of Investment</th>
                        <th className="px-4 py-2 text-lg font-semibold">Investment  Amount</th>
                        <th className="px-4 py-2 text-lg font-semibold">Investment Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
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
                    </tr>
                    {/* Add more rows as needed */}
                </tbody>
            </table>
        </div>
    );

};