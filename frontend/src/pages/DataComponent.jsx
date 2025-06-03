import axios from "axios";
import { useEffect, useState } from "react";
import { DataFieldComponent } from "../components/DataFieldComponent";

export function DataComponent(){
    const [data, setData]= useState({});

    useEffect(()=>{
        axios.get("http://localhost:5000/form", {
        headers:{
            userid: "683d74ca55427ba64e3a7690"
        }}).then((resp)=>{
            setData(d=> d=resp.data);
        })
    }, [])
    return (
        <div className="flex justify-center items-center h-screen bg-blue-200">
            <div>
          {data &&
            Object.entries(data).map(([key, value], index) => (
              <DataFieldComponent key={index} label={key} content={value} />
            ))
          }
          </div>
        </div>
      );
}