
import Random from "./components/Random";
import Tag from "./components/Tag";


export default function App() {
  return (
    <div className="background w-full  relative flex flex-col items-center">
      <h1 className=" bg-white text-center text-3xl font-bold rounded-md mt-[25px] w-11/12 ">
        RANDOM GIFS
      </h1>
        <Random></Random>
        <Tag></Tag>
    </div>
  );
}
