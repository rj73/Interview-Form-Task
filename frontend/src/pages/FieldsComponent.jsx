import axios from "axios";
import { useEffect, useState } from "react";
import { FieldList } from "../components/FieldList";

export function FieldsComponent(){
    const [fields, setFields] = useState([]);
    const [inputValue, setInputValue]= useState("");

    useEffect(()=>{
        axios.get("http://localhost:5000/fields")
        .then((response)=>{
           
            setFields(response.data);
            
        })
    }, [fields])

   function createField(){
        axios.post("http://localhost:5000/fields",{
            "label": inputValue,
            "type": "text"
        }).then((response)=>{
            console.log(response);
        })
   }
 
    return <div>
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