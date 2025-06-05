import axios from "axios";
import { useEffect, useState } from "react";
import { DataFieldComponent } from "../components/DataFieldComponent";
import { useNavigate } from "react-router-dom";

export function DataComponent(){
    const [data, setData]= useState({});
    const navigate= useNavigate();

    useEffect(()=>{
        axios.get("https://interview-form-task.onrender.com/form", {
        headers:{
            userid: "683d74ca55427ba64e3a7690"
        }}).then((resp)=>{
            setData(d=> d=resp.data);
            console.log(resp)
        })
    }, [])
    return (
        <div className="flex justify-center items-center h-screen bg-blue-200">
          <div>
             <div className="flex justify-center m-10">
    <button onClick={()=>{
        navigate('/fields')
    }} type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Fields</button>
<button onClick={()=>{
        navigate('/form')
    }} type="button" class="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Form</button>
<button onClick={()=>{
        navigate('/data')
    }}  type="button" class="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Information</button>
    </div>
            <div className="ml-30">
          {data &&
            Object.entries(data).map(([key, value], index) => (
              <DataFieldComponent key={index} label={key} content={value} />
            ))
          }
          </div>
          </div>
        </div>
      );
}