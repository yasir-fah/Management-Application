import { forwardRef } from "react";

const Input = forwardRef(function Input({ isTextarea, label,type, ...props },ref) {

  
  const fieldsClasses = 'w-full p-1  border-b-2 rounded-sm border-stone-300 bg-stone-300 hover:bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600';


  return (
    <p className="flex flex-col gap-1  my-4">
      <label className="text-sm font-bold uppercase text-stone-500">{label}</label>
      {/* using 'ref()' from (built in DOM element), then pass it to parent component */}
      {isTextarea ?
        <textarea ref={ref} className={fieldsClasses} {...props}/> :
        <input ref={ref} className={fieldsClasses} type={type}  {...props}
        />}
    </p>
  );
}
)

export default Input;
