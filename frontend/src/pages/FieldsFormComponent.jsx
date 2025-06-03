import axios from "axios";
import { useEffect, useState } from "react";
import { FieldList } from "../components/FieldList";
import { FieldListForm } from "../components/FieldListForm";

export function FieldsFormComponent(){
    const [fields, setFields] = useState([]);
    const [currentLabel, setCurrentLabel]= useState("");
    const [html, setHtml]= useState("");
    const [object, setObject]= useState({});

    useEffect(()=>{
        axios.get("http://localhost:5000/fields")
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

       axios.post('http://localhost:5000/form',{
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