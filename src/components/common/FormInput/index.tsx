import React, {InputHTMLAttributes, memo} from 'react';

type Props = {
  label?: string
} & InputHTMLAttributes<any>

const FormInput = memo(({label, ...rest}: Props) => {
  return (
    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      {label && <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                       htmlFor={rest.id}>
        {label}
      </label>}
      <input
        {...rest}
        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
        id={rest.id}/>
    </div>
  );
});


FormInput.displayName = 'FormInput'
export default FormInput;