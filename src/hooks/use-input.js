import { useState } from 'react';

const useInput = valdiateValue => {
    const [enteredValue, setEntereValue] = useState('');
    const [isTouched, setIsTouched] = useState(false);

    const valueIsValid = valdiateValue(enteredValue);
    const hasError = !valueIsValid && isTouched;

    const valueChangeHandler = (event) => {
        setEntereValue(event.target.value);
    };

    const inputBlurhandler = (event) => {
        setIsTouched(true);
    };

    const reset = () => {
        setEntereValue('');
        setIsTouched(false);
    };

    return {
        value: enteredValue,
        isValid: valueIsValid,
        hasError,
        valueChangeHandler,
        inputBlurhandler,
        reset

    };
};

export default useInput;