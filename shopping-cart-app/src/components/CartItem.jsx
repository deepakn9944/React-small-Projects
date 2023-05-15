import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { remove } from '../redux/Slices/CartSlice'
import { toast } from "react-hot-toast";

const CartItem = ({ item, itemIndex, len }) => {

  const dispatch = useDispatch();
  function removeItemHandler() {
    dispatch(remove(item.id));
    toast.error("Item removed successfully");
  }
  return (
    <div
      className={
        itemIndex + 1 != len
          ? "flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center w-[100%] border-b-2 border-slate-500"
          : "flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center w-[100%]"
      }
    >
      <div className="w-[30%]">
        <img src={item.image} className="object-cover"  loading="lazy"/>
      </div>
      <div className="md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]">
        <div>
          <p className="text-xl text-slate-700 font-semibold">{item.title}</p>
          <p className="text-base text-slate-700 font-medium">
            {item.description.substring(1, 100)}...
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-bold text-lg text-green-600">${item.price}</p>
          <div
            onClick={removeItemHandler}
            className=" bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3"
          >
            <MdDelete />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
