import React, { useEffect , useState} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
const Read=()=>{
const [UserData, setUserData] = useState([]);
const setData = (item) => {
    let { id, firstName, lastName, checkbox } = item;
    localStorage.setItem('ID', id);
    localStorage.setItem('First Name', firstName);
    localStorage.setItem('Last Name', lastName);
    localStorage.setItem('Checkbox Value', checkbox)
    //console.log(item);
     }
     const onDelete = (id) => {
        axios.delete(`https://612109f024d11c001762ef1a.mockapi.io/User-Details/${id}`)
        .then(() => {
            getData();
        })
    }
    const getData = () => {
        axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/User-Details`)
            .then((getData) => {
                 setUserData(getData.item);
             })
    }
    useEffect(() => {
        axios.get(`https://612109f024d11c001762ef1a.mockapi.io/User-Details`)
        .then((response) => {
        setUserData(response.data);
        })
    }, [])
    return(
        <>
        <table className="table table-dark">
  <thead>
    <tr>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Checked</th>
      <th>Update</th>
      <th>Delete</th>
    </tr>
  </thead>
  <tbody>
  {UserData.map((item) => {
     return (
       <tr>
          <td>{item.firstName}</td>
           <td>{item.lastName}</td>
           <td>{item.checkbox ? 'Checked' : 'Unchecked'}</td>
        <Link to="/update">
        <td>
          <button onClick={() => setData(item)}>Update</button>
        </td>
        </Link>
        <td> 
          <button onClick={() => onDelete(item.id)}>Delete</button>
        </td>
        </tr>
   )})}
   </tbody>
</table>
        </>
        
    )
}
export default Read;
