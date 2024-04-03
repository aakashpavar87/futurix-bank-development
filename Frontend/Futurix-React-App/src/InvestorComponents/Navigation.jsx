const Navigation = () => {
    return (
        <nav className="flex items-center justify-between  border border-gray-200 px-6 py-4 w-full h-full">
            <div className="flex items-center ">
                <img className="h-8 mr-2" src="https://assets.codepen.io/285131/almeria-logo.svg" alt="Logo" />
                <h1 className="text-white text-lg font-semibold p-3">Futurix NeoBank</h1>
            </div>
            <div className="hidden md:flex items-center space-x-4">
                <lord-icon
                    src="https://cdn.lordicon.com/wyqtxzeh.json"
                    trigger="hover"
                    style={{color:"red", textSize:"1px",background:"white"}}>
                </lord-icon>
                <a href="#" className="text-gray-500 hover:text-cyan-300">Overview</a>
                <a href="#" className="text-gray-500 hover:text-cyan-300">Payments</a>
                <a href="#" className="text-gray-500 hover:text-cyan-300">Cards</a>
                <a href="#" className="text-gray-500 hover:text-cyan-300">Account</a>
                <a href="#" className="text-gray-500 hover:text-cyan-300">System</a>
                <a href="#" className="text-gray-500 hover:text-cyan-300">Business</a>
            </div>
            <div className="flex items-center space-x-4">
                <button className="user-profile flex items-center text-gray-300 hover:text-cyan-300">
                    <span className="mr-2">Matheo Peterson</span>
                    <img className="h-8 w-8 rounded-full" src="https://assets.codepen.io/285131/almeria-avatar.jpeg" alt="Avatar" />
                </button>
                <button className="icon-button large text-gray-300 hover:text-cyan-300">
                    <i className="ph-magnifying-glass"></i>
                </button>
                <button className="icon-button large text-gray-300 hover:text-cyan-300">
                    <i className="ph-bell"></i>
                </button>
                <button className="icon-button large text-gray-300 hover:text-cyan-300 md:hidden">
                    <i className="ph-list"></i>
                </button>
            </div>
        </nav>
    );
}

export default Navigation