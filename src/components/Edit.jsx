import React,{ useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from "@material-ui/core/Button";

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        name: "",
        dob: "",
        state: "",
        age:"",
        pincode: "",
        email: "",
    });

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        });
    }

    const [data, setData] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:5000/candidates/${id}`)
            .then((res)=>{
                setData(res.data);
            }).catch((err)=>{
                console.log(err);
            })
    },[])

    const {name, age, pincode, email, dob, state} = data;





    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:5000/candidates/${id}`, form)
            .then((res) => {
                console.log(res);
                navigate("/home");
            }).catch((err) => {
                console.log(err);
            })
    }

    const handleClose = (e) => {
        navigate("/home");
    }


    return (
        <div className="form-grp">
        <div className="form-head">
          <h4>Candidate Creation Page</h4>
        </div>
  
        <br />
  
        <form>
          <div className="container">
            <div className="div-form-1">
              <div>
                <label>Name</label>
                <br></br>
                <input
                  type="text"
                  name="name"
                  placeholder={name}
                  value={form.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Date Of Birth </label>
                <br></br>
                <input type="date"
                 name="dob"
                  placeholder={dob}
                 onChange={handleChange}
                  value={form.dob}
                 />
              </div>
              <div>
                <label>Age</label>
                <br></br>
                <input type="number" name="age"
                placeholder={age}
                onChange={handleChange}
                value={form.age}
  
                />
              </div>
            </div>
            <div className="div-form-2">
              <div>
                <label>Address</label>
                <br></br>
                <input
                  type="text"
                  name="email"
                  placeholder={email}
                  onChange={handleChange}
                  value={form.email}
                />
              </div>
              <div>
                <label>State</label>
                <br></br>
                <select placeholder="select your city"
                name="state"
                
                onChange={handleChange} 
                value={form.state}>
                  <option value={state}>{state}</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Delhi">Delhi</option>
                  <option value="Goa">Goa</option>
                  <option value="Gujarat">Gujarat</option>
                  <option value="Haryana">Haryana</option>
                  <option value="Himachal Pradesh">Himachal Pradesh</option>
                  <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                  <option value="Jharkhand">Jharkhand</option>
                  <option value="Karnataka">Karnataka</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Madhya Pradesh">Madhya Pradesh</option>
                  <option value="Maharashtra">Maharashtra</option>
                  <option value="Meghalaya">Meghalaya</option>
                  <option value="Mizoram">Mizoram</option>
                  <option value="Nagaland">Nagaland</option>
                  <option value="Odisha">Odisha</option>
                  <option value="Punjab">Punjab</option>
                  <option value="Rajasthan">Rajasthan</option>
                  <option value="Sikkim">Sikkim</option>
                  <option value="Tamil Nadu">Tamil Nadu</option>
                  <option value="Telangana">Telangana</option>
                  <option value="Tripura">Tripura</option>
                  <option value="Uttar Pradesh">Uttar Pradesh</option>
                  <option value="Uttarakhand">Uttarakhand</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
              </div>
              <div>
                <label>Pincode</label>
                <br/>
                <input type="number"
                 name="pincode"
                 placeholder={pincode}
                 onChange={handleChange}
                  value={form.pincode}
                 />
              </div>
            </div>
          </div>
        </form>
        <div className="btn-grp">
          <Button
            variant="contained"
            style={{ marginLeft: "10px", marginTop: "10px" }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button
            style={{ marginLeft: "10px", marginTop: "10px" }}
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Create
          </Button>
        </div>
      </div>
    );
  };
export default Edit;