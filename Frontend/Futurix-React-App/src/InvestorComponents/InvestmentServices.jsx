export const InvestmentServices = () => {
    return (
        <div id="services" className="h-full mr-4">
            <div className="container mx-auto py-12">
                <h1 className="text-3xl font-bold text-center mb-8 hover:text-cyan-400 text-gray-300">Investment Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="rounded-lg shadow-md shadow-white p-6 border border-spacing-3 hover:text-cyan-400 border-slate-200">
                        <h2 className="text-xl font-semibold mb-4 text-gray-300 hover:text-cyan-400">Online Banking</h2>
                        <p className="text-gray-300 hover:text-cyan-400">Access your investment accounts and manage your portfolio online with ease.</p>
                    </div>
                    <div className="bg-gray-800 rounded-lg shadow-md shadow-white p-6 border border-spacing-3 hover:text-cyan-400 border-slate-200">
                        <h2 className="text-xl font-semibold mb-4 text-gray-300 hover:text-cyan-300">Financial Planning</h2>
                        <p className="text-gray-300 hover:text-cyan-300">Receive personalized financial planning advice to help you achieve your investment goals. </p>&#128522;
                    </div>
                    <div className=" rounded-lg shadow-md shadow-white p-6 border border-spacing-3 hover:text-cyan-400 border-slate-200">
                        <h2 className="text-xl font-semibold mb-4 text-gray-300 hover:text-cyan-300">Investment Advice</h2>
                        <p className="text-gray-300 hover:text-cyan-300">Get expert investment advice from our experienced financial advisors to make informed decisions.</p>
                    </div>


                    <div className=" bg-gray-800 rounded-lg shadow-md shadow-white p-6 border border-spacing-3 hover:text-cyan-400 border-slate-200">
                         <h2 className="text-xl font-semibold mb-4 text-gray-300 hover:text-cyan-400">High-Yield Savings</h2>
                        <p className="text-gray-300 hover:text-cyan-400">
                            Earn competitive interest rates on your savings while having easy access to your funds.
                        </p>
                        <ul className="text-gray-300 mt-4 hover:text-cyan-400">
                            <li>Competitive interest rates</li>
                            <li>No minimum balance requirement</li>
                            <li>FDIC insured for up to  &#8377; 250,000  &#x1F62E;</li>
                        </ul>
                    </div>
                       <div className="rounded-lg shadow-md shadow-white p-6 border border-spacing-3 hover:text-cyan-300 border-slate-200">
                        <h2 className="text-xl font-semibold mb-4 text-gray-300 hover:text-cyan-300">Investment Portfolios</h2>
                        <p className="text-gray-300 hover:text-cyan-300">
                            Build a diversified investment portfolio tailored to your risk tolerance and financial goals.
                        </p>
                        <ul className="text-gray-300 mt-4 hover:text-cyan-300">
                            <li>Customizable portfolio options</li>
                            <li>Access to professional investment management</li>
                            <li>Regular portfolio performance updates</li>
                        </ul>
                    </div>
                    <div className="bg-gray-800 rounded-lg shadow-md shadow-white p-6 border border-spacing-3 hover:text-cyan-400 border-slate-200">
                        <h2 className="text-xl font-semibold mb-4 hover:text-cyan-400 text-white" >Retirement Accounts</h2>
                        <p className="text-gray-300 hover:text-cyan-400">
                            Prepare for retirement with tax-advantaged retirement accounts such as IRAs and 401(k)s.
                        </p>
                        <ul className="text-gray-300 mt-4 hover:text-cyan-400">
                            <li>Tax-deferred growth potential</li>
                            <li>Contributions may be tax-deductible</li>
                            <li>Wide range of investment options</li>
                        </ul>
                    </div>
                    {/* Add more service cards as needed */}
                </div>
            </div>
           
        </div>
    );
}
