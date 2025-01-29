const Navbar = () => {
    return(
        <div className="fixed top-0 border-b w-full p-4 bg-[#203444] text-white">
            <div className="w-full max-w-[80%] flex justify-between m-auto">
                <div>
                    <p className="">LOGO</p>
                </div>
                <div className="flex gap-4">
                    <p className="">About Us</p>
                    <p className="">What We Do</p>
                    <p className="">Team</p>
                    <p className="">Values</p>
                    <p className="">Contact Us</p>
                </div>
            </div>
        </div>
    )
}

export default Navbar