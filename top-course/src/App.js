import React, { useState } from "react";
import Navbar from './components/Navbar';
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { useEffect } from "react";
import { filterData, apiUrl } from "./data";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";
 

const App = () => {

  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  const [error, setError] = useState();
  

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const output = await response.json();
      setCourses(output.data);
    } catch (error) {
      toast.error("something went wrong");
      setLoading(false);
      setError(error);
      
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [])
  
  if(error){
    return (
      <div className="flex justify-center items-center bg-bgDark2">
        <img src="/images/404.avif" className="h-[100vh]"></img>
      </div>
    );

  }
  else {
    return (
      <div className="min-h-screen flex flex-col bg-bgDark2">
        <div>
          <Navbar />
        </div>
        <div className="bg-bgDark2">
          <div>
            <Filter
              filterData={filterData}
              category={category}
              setCategory={setCategory}
            />
          </div>
          <div
            className="w-11/12 max-w-[1200px] 
        mx-auto flex flex-wrap justify-center items-center min-h-[50vh]"
          >
            {loading ? (
              <Spinner />
            ) : (
              <Cards courses={courses} category={category} />
            )}
          </div>
        </div>
      </div>
    );
  }
  
};

export default App;
