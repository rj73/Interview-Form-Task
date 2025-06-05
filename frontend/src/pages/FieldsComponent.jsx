import axios from "axios";
import { useEffect, useState } from "react";
import { FieldList } from "../components/FieldList";
import { useNavigate } from "react-router-dom";

export function FieldsComponent(){
    const [fields, setFields] = useState([]);
    const [inputValue, setInputValue]= useState("");
    const navigate= useNavigate();

    useEffect(()=>{
        axios.get("https://interview-form-task.onrender.com/fields")
        .then((response)=>{
           
            setFields(response.data);
            
        })
    }, [fields])

   function createField(){
        axios.post("https://interview-form-task.onrender.com/fields",{
            "label": inputValue,
            "type": "text"
        }).then((response)=>{
            console.log(response);
        })
   }
 
    return <div>
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
        <div>
        {fields.map((field, index)=>(
            <FieldList key={index} label={field.label} type={field.type}></FieldList>
        ))}
        </div>
        <div>
            <h1 className="text-3xl mt-15 text-center text-blue-600">Create a Field</h1>
            <div className="p-10 bg-blue-200 flex justify-between">
                <input type="text" onChange={(e)=>{
                    setInputValue(e.target.value);
                }} id="field_label" className="border-2 w-250"></input>
                <button onClick={createField} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Create</button>
            </div>
        </div>
    </div>

}