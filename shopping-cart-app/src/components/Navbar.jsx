import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
const Navbar = () => {

  const { cart } = useSelector((state) => state);

  return (
    <div className="bg-slate-900">
      <div className="flex flex-row items-center max-w-6xl justify-between h-20 mx-auto">
        <NavLink to="/">
          <img src="/logo.png" className="h-14 ml-5" />
        </NavLink>
        <div className="flex items-center space-x-6 text-slate-100 font-md">
          <NavLink to="/">
            <h2 className="cursor-pointer hover:text-green-400 transition duration-300 ease-in">
              Home
            </h2>
          </NavLink>
          <NavLink to="/cart">
            <div className="text-2xl cursor-pointer hover:text-green-400 transition transform duration-200 relative">
              <FaShoppingCart className="h-[1em] w-[1em]" />
              <div className="bg-green-600 rounded-full h-5 w-5 absolute  bottom-[38%] left-[48%] text-[12px] flex justify-center items-center animate-bounce">
                {cart.length}
              </div>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
