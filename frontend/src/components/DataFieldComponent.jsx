export function DataFieldComponent({label, content}){
    return (
        <div className="flex">
          <h2 className="text-xl font-bold">{label}:</h2>
          <h3 className="text-lg">{content}</h3>
        </div>
      );
}