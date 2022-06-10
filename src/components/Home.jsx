import React,{ useState, useEffect }  from 'react';
import axios from 'axios';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useNavigate, Link } from 'react-router-dom';

export default function Home() {
    const [data, setData] = useState([
            {
                "name": "Tushar Sahu",
                "dob": "2022-06-10",
                "state": "",
                "age": "21",
                "pincode": "491441",
                "email": "tksahu1234@gmail.com",
                "id": 1
              },
    ]);
    const navigate = useNavigate();

    useEffect(()=>{
    axios.get("http://localhost:5000/candidates")
        .then((res)=>{
            setData(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    },[])

    const handleDelete = (id)=>{
        axios.delete(`http://localhost:5000/candidates/${id}`)
        .then((res)=>{
            console.log(res);
            setData(data.filter((item)=>item.id!==id))
        }).catch((err)=>{
            console.log(err);
        })
    }

    const handleEdit=(id)=>{
        navigate(`/edit/${id}`)
    }

  return (
    <div>
        <div className="header">Candidate List: {data.length} </div>
        <div className="container">
            <table className="table">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Date of Birth</th>
                        <th>Email</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>{index+1}</td>
                                <td>{item.name}</td>
                                <td>{item.dob}</td>
                                <td>{item.email}</td>
                                <td>
                                    <select name="action">
                                        <option value=""></option>
                                        <option value="pass">Shortlisted</option>
                                        <option value="fail">Rejected</option>
                                    </select>
                                </td>
                                <td
                                onClick={()=>{
                                    handleEdit(item.id)
                                }}>
                                <EditIcon />
                                </td>
                                <td
                                onClick={()=>{
                                    handleDelete(item.id);
                                }}
                                >
                                    <DeleteIcon />
                                </td>
                            </tr>
                        )
                    }
                    )}
                </tbody>
                <Link to="/form">
              +  Add Candidate
            </Link>
            </table>
            
            </div>
    </div>
    );
}