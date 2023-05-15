import { useState } from "react";
import "./App.css";

function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    streetAddress: "",
    city: "",
    state: "",
    postalCode: "",

    comments: false,
    candidates: false,
    offers: false,
    pushNotification: "",
  });

  function changeHandler(event) {
    const { name, value, checked, type } = event.target;
    setFormData((previousData) => {
      return {
        ...previousData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  function submitHandler(event) {
    event.preventDefault();
    console.log(formData);
  }

  return (
    <div className="w-[700px] mx-auto">
      <form onSubmit={submitHandler}>
        <label>First Name</label>
        <br></br>
        <input
          type="text"
          placeholder="John"
          name="firstName"
          value={formData.firstName}
          onChange={changeHandler}
        ></input>
        <br></br>

        <label>Last Name</label>
        <br></br>
        <input
          type="text"
          placeholder="Doe"
          name="lastName"
          value={formData.lastName}
          onChange={changeHandler}
        ></input>
        <br></br>

        <label>Email Address</label>
        <br></br>
        <input
          type="email"
          placeholder="email@gmail.com"
          name="email"
          value={formData.email}
          onChange={changeHandler}
        ></input>
        <br></br>

        <label htmlFor="country">Country</label>
        <br></br>
        <select
          onChange={changeHandler}
          name="country"
          value={formData.country}
          id="country"
        >
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Japan">Japan</option>
          <option value="UK">UK</option>
          <option value="Russia">Russia</option>
        </select>
        <br></br>

        <label>Street address</label>
        <br></br>
        <input
          type="text"
          placeholder="1234 Main St"
          name="streetAddress"
          value={formData.streetAddress}
          onChange={changeHandler}
        ></input>
        <br></br>

        <label>City</label>
        <br></br>
        <input
          type="text"
          placeholder="Delhi"
          name="city"
          value={formData.city}
          onChange={changeHandler}
        ></input>
        <br></br>

        <label>State / Province</label>
        <br></br>
        <input
          type="text"
          placeholder="West Bengal"
          name="state"
          value={formData.state}
          onChange={changeHandler}
        ></input>
        <br></br>

        <label>ZIP / Postal Code</label>
        <br></br>
        <input
          type="text"
          placeholder="246174"
          name="postalCode"
          value={formData.postalCode}
          onChange={changeHandler}
        ></input>
        <br></br>

        <fieldset>
          <legend>By Email</legend>
          <div className="flex items-baseline">
            <input
              type="checkbox"
              name="comments"
              id="comments"
              checked={formData.comments}
              onChange={changeHandler}
            ></input>
            <div>
              <label htmlFor="comments"> Comments </label>
              <p>Get notified when someone posts a comment on a posting.</p>
            </div>
          </div>

          <br></br>
          <div className="flex items-baseline">
            <input
              type="checkbox"
              name="candidates"
              id="candidates"
              checked={formData.candidates}
              onChange={changeHandler}
            ></input>
            <div>
              <label htmlFor="candidates"> Candidates </label>
              <p>Get notified when someone applies for a job.</p>
            </div>
          </div>

          <br></br>

          <div className="flex items-baseline">
            <input
              type="checkbox"
              name="offers"
              id="offers"
              checked={formData.offers}
              onChange={changeHandler}
            ></input>
            <div>
              <label htmlFor="offers"> Offers </label>
              <p>Get notified when a candidate accept or reject an offer.</p>
            </div>
          </div>
        </fieldset>

        <br></br>

        <br></br>

        <fieldset>
          <legend>Push Notifications</legend>
          <p>These are delivered via SMS to your mobile phone</p>
          <input
            type="radio"
            name="pushNotification"
            value="Everything"
            id="Everything"
            checked={formData.mode === "online-mode"}
            onChange={changeHandler}
          ></input>
          <label htmlFor="Everything">Everything</label>
          <br></br>
          <input
            type="radio"
            name="pushNotification"
            value="Same as email"
            id="same-as-email"
            onChange={changeHandler}
          ></input>
          <label htmlFor="same-as-email">Same as email</label>
          <br></br>
          <input
            type="radio"
            name="pushNotification"
            value="No push notification"
            id="no-push-notification"
            onChange={changeHandler}
          ></input>
          <label htmlFor="no-push-notification">No push notification</label>
        </fieldset>

        <br></br>

        <br></br>

        <button>Save</button>
      </form>
    </div>
  );
}

export default App;
