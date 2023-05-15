import { useState } from 'react';
import './App.css';

function App() {

  const [formData, setFormData] = useState({ firstName: "", lastName: "", email: "", comments:"", isVisible:true, mode:"", favCar:""});


  function changeHandler(event) {

    const { name, value, checked, type } = event.target;
    setFormData(previousData => {
      return {
        ...previousData,
        [name]: type === "checkbox" ? checked : value 
      };
    })
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="first name"
          name="firstName"
          value={formData.firstName}
          onChange={changeHandler}
        ></input>
        <br></br>
        <input
          type="text"
          placeholder="last name"
          name="lastName"
          value={formData.lastName}
          onChange={changeHandler}
        ></input>
        <br></br>
        <input
          type="email"
          placeholder="email"
          name="email"
          value={formData.email}
          onChange={changeHandler}
        ></input>

        <br></br>
        <textarea
          placeholder="comments"
          name="comments"
          value={formData.comments}
          onChange={changeHandler}
        ></textarea>

        <br></br>
        <input
          type="checkbox"
          name="isVisible"
          id="isVisible"
          onChange={changeHandler}
          checked={formData.isVisible}
        ></input>
        <label htmlFor="isVisible"> Am I Visible ?</label>
        <br></br>
        <fieldset>
          <legend>Mode:</legend>
          <input
            type="radio"
            name="mode"
            value="online-mode"
            id="online-mode"
            ckecked={formData.mode === "online-mode"}
            onChange={changeHandler}
          ></input>
          <label htmlFor="online-mode">Online Mode</label>
          <input
            type="radio"
            name="mode"
            value="offline-mode"
            id="offline-mode"
            ckecked={formData.mode === "offline-mode"}
            onChange={changeHandler}
          ></input>
          <label htmlFor="offline-mode">Offline Mode</label>
        </fieldset>

        <br></br>
        <label htmlFor="favCar">Select your Favourite Car</label>
        <select onChange={changeHandler} name="favCar" id="favCar" value={formData.favCar}>
          <option value="Scorpio">Scorpio</option>
          <option value="Fortuner">Fortuner</option>
          <option value="Thar">Thar</option>
          <option value="Rover">Rover</option>
        </select>


        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
