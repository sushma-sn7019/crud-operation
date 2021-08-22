import React, { useState , useEffect} from 'react';
import axios from 'axios';

let Update =()=>{
    //intializing the state
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    const [id, setID] = useState(null);
 
    //getting the state data from set method into localstorage using UseEffect
    useEffect(() => {
        setID(localStorage.getItem('ID'))
        setFirstName(localStorage.getItem('First Name'));
        setLastName(localStorage.getItem('Last Name'));
        setCheckbox(localStorage.getItem('Checkbox Value'));
    }, []); 

    //Updating data using put method
    const updateUserData = () => {
        axios.put(`https://612109f024d11c001762ef1a.mockapi.io/User-Details/${id}`, {
            firstName,
             lastName,
             checkbox
        })
   
    }

    //setting the values and returning the html
    return(
        <>
        <form className="container bg-success">
<h3>Update Information</h3>
  <div className="form-group">
    <label for="exampleInputFirstName">First Name</label>
    <input type="name" 
    name="Fname"
    className="form-control" 
    id="exampleInputFirstName"  
    placeholder="First Name"
    value={firstName}
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
    value={lastName}
    onChange={(e) => setLastName(e.target.value)} required/>
  </div>
  <div className="form-group form-check">
    <input type="checkbox" 
    className="form-check-input" 
    id="exampleCheck1"
    checked={checkbox}
    onChange={(e) => setCheckbox(!checkbox)}/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" onClick={updateUserData} className="btn btn-primary">Update</button>
</form>
        </>
    )
}
export default Update;