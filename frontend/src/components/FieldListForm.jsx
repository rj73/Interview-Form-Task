export function FieldListForm({addToForm, label, type}){
    return <div className="border-2 m-3 p-2 flex justify-between">
    <h2 className="">{label}</h2>
    <button onClick={()=>{
        addToForm(label);
    }} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Add to form</button>
   </div>
}