import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
function ListPage() {
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/user/').then((res) => {
            setData(res.data)
        })
        console.log(data);
    }, [])

    return (
        <div className="w-screen flex justify-center items-center flex-col">
            <h1 className="my-2">
                List Accout
            </h1>
            <div className=' bg-slate-500 '>
                <table className=''>
                    <thead >
                        <tr className=' bg-slate-600 ' >
                            <th className='px-6 py-3' >Name</th>
                            <th className='px-6 py-3'>Last Name</th>
                            <th className='px-6 py-3'>Email</th>
                            <th className='px-6 py-3'>status</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            
                            data.map(data => (

                                <tr className=' hover:bg-slate-300' key={data._id}>
                                    <th className='px-6 py-3'>{data.Name}</th>
                                    <th className='px-6 py-3'>{data.LastName}</th>
                                    <th className='px-6 py-3'>{data.Email}</th>
                                    <th className='px-6 py-3'>
                                        <Link to={"/EditPage/"+ data._id}>Edit</Link>/
                                        <button onClick={()=>{
                                            axios.delete('http://localhost:4000/user/delete/'+ data._id)
                                            .then(function (response) {
                                                console.log(response)
                                                window.location.reload(false);
                                              })
                                              .catch(function (error) {
                                                console.log(error);
                                              });
                                        }}>Delete</button>
                                    </th>
                                </tr>

                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ListPage