
import React, { useState , useEffect } from "react";
import axios from 'axios';    
function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);

    const postData = () => {
        axios.post(`https://612109f024d11c001762ef1a.mockapi.io/User-Details`, {
            firstName,
            lastName,
            checkbox
        })
    }
    return(
<>
<form className="container bg-secondary">
<h3>React Crud Operations</h3>
  <div className="form-group">
    <label for="exampleInputFirstName">First Name</label>
    <input type="name" 
    name="Fname"
    className="form-control" 
    id="exampleInputFirstName"  
    placeholder="First Name"
    onChange={(e) => setFirstName(e.target.value)} required/>
    <small className="form-text text-dark">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="exampleInputLastName">Last Name</label>
    <input type="name" 
    name="Lname"
    className="form-control" 
    id="exampleInputLastName" 
    placeholder="Last Name"
    onChange={(e) => setLastName(e.target.value)}/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" 
    className="form-check-input" 
    id="exampleCheck1"
    onChange={(e) => setCheckbox(!checkbox)} required/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={postData} className="btn btn-primary">Submit</button>
</form>
</>
    )
 };

export default Create;
