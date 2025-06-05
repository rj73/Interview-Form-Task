import axios from "axios";
import { useEffect, useState } from "react";
import { FieldList } from "../components/FieldList";
import { FieldListForm } from "../components/FieldListForm";
import { useNavigate } from "react-router-dom";

export function FieldsFormComponent(){
    const [fields, setFields] = useState([]);
    const [currentLabel, setCurrentLabel]= useState("");
    const [html, setHtml]= useState("");
    const [object, setObject]= useState({});
    const navigate= useNavigate()

    useEffect(()=>{
        axios.get("https://interview-form-task.onrender.com/fields")
        .then((response)=>{
           
            setFields(response.data);
            
        })
    }, [])

    function addFunction(label) {
        const newInput = (
          <div key={label + Math.random()}>
            <div className="p-10 bg-blue-200 flex justify-between">
                <h2 className="text-xl text-white-600">{label}</h2>
                <input onChange={(e)=>{
                    const ans=object;
                    ans[label]=e.target.value;
                    setObject(ans);
                }} type="text" id="field_label" className="border-2 w-250"></input>
            </div>
          </div>
        );
        setHtml(prev => [...prev, newInput]);
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
            <FieldListForm key={index}  addToForm={addFunction} label={field.label} type={field.type}></FieldListForm>
        ))}
        </div>
        <div id="form_container">
        {html.length > 0 && (
  <>
    {html}
    <div className="p-10 bg-blue-200 flex justify-center">
    <button onClick={()=>{

       axios.post('https://interview-form-task.onrender.com/form',{
        information: object
       },{
        userid: "683d74ca55427badfsa64e3a7690dafsafd"
       })
       .then((response)=>{
        console.log("submitted",response);
       })
    }}
      type="button"
      className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
    >
      Submit
    </button>
    </div>
  </>
)}

        </div>
    </div>

}