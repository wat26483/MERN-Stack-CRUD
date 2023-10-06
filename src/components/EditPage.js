import React, { useState,useEffect } from 'react'
import axios from 'axios'
import {  useNavigate, useParams } from 'react-router-dom';

function EditPage() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [lastName, setlastName] = useState("");
    const [email, setEmail] = useState("");

    let { id } = useParams();

    useEffect(() => {
        axios.get('http://localhost:4000/user/EditPage/'+ id).then((res) => {
            setName(res.data.Name)
            setlastName(res.data.LastName)
            setEmail(res.data.Email)

        })
    }, [])


    const onsubmit = (e) => {
        e.preventDefault();

        const userdata ={
            Name: name,
            LastName:lastName ,
            Email: email
        }

        axios.put('http://localhost:4000/user/update/'+id,userdata)
          .then(function (response) {
            console.log(response)
            navigate('/ListPage')
          })
          .catch(function (error) {
            console.log(error);
          });

        console.log('Update Successfully');
        console.log(`Name :${userdata.Name}`);
        console.log(`LastName: ${userdata.LastName}`);
        console.log(`Email: ${userdata.Email}`);

        
        
        
    }

  return (
    
    <div className='w-screen h-fit flex flex-col justify-center my-10 items-center'>
    <h1 className='m-3'>Update Accout</h1>
    <form onSubmit={onsubmit} className='flex flex-col  h-full shadow-2xl p-10'>
        <div className='pb-5'>
            <div class="w-72">
                <div class="relative h-10 w-full min-w-[200px]">
                    <input
                    value={name}
                        onChange={e=>setName(e.target.value)}
                        class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                    />
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        First Name
                    </label>
                </div>
            </div>
        </div>
        <div className='pb-5'>
            <div class="w-72">
                <div class="relative h-10 w-full min-w-[200px]">
                    <input
                    value={lastName}
                        onChange={e=>setlastName(e.target.value)}
                        class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                    />
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        Last Name
                    </label>
                </div>
            </div>
        </div>
        <div className='pb-5'>
            <div class="w-72">
                <div class="relative h-10 w-full min-w-[200px]">
                    <input
                        value={email}
                        onChange={e=>setEmail(e.target.value)}
                        class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                        placeholder=" "
                    />
                    <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                        @ Email
                    </label>
                </div>
            </div>
        </div>
        <button
            
            class="middle none center w-full rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
        >
            Updated
        </button>
    </form>

</div>
  )
}

export default EditPage