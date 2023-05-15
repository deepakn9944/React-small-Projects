import React,{useState} from 'react'
import Card from './Card'

function Cards(props) {

  const courses = props.courses;
  const category = props.category;
  
  const allCourses = [];
  const [likedCourses, setLikedCourses] = useState([]);
  
  if (!courses) {
    return (
      <div className='flex justify-center items-center'>
        <img src="/images/no_data.png" width="70%" height="70%"></img>
      </div>
    );
  }
  const getCourses = () => {
    if (category === 'All') {
      Object.values(courses).forEach((courseCategory) => {
        courseCategory.forEach((course) => {
          allCourses.push(course);
        });
      });
      return allCourses;
    }
    else {
      return courses[category];
    }
    
  }

   

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-4">
      {getCourses().map((course) => {
        return (
          <Card
            key={course.id}
            course={course}
            likedCourses={likedCourses}
            setLikedCourses={setLikedCourses}
          ></Card>
        );
      })}
    </div>
  );
}

export default Cards;