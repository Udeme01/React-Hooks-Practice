import {useState} from 'react';

function useFormHook(initialValue) {
    // create a state variable that tracks the input fields value...
    const [value, setValue] = useState(initialValue);

    // created a reset function to reset the values in the input fields to it's initial state after submission...
    const reset = () => {
        setValue(initialValue);
    }

    // created an object with 2 properties...
    const bind = {
        value: value,
        onChange: e => {
            setValue(e.target.value)
        }
    }

  return [value, bind, reset]
}

export default useFormHook;