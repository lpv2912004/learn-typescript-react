import { useEffect, useRef } from 'react';

/* 
   ? useRef is a hook that returns a mutable ref object whose 
   ?  .current property is initialized to the passed argument (initialValue). 
   ? The returned object will persist for the full lifetime of the component. 
   ? It can be used to access a DOM element directly or to store a mutable 
   ? value that does not cause re-renders when updated. 
*/

const UseRefExample = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const usernameInputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Focus the input element when the component mounts
        inputRef.current?.focus();
    }, []);

    const handleClick = () => {
        console.log('username is ', usernameInputRef.current?.value);
    };

    return (
        <div>
            <input ref={inputRef} type='text' placeholder='focus me' />
            <input ref={usernameInputRef} type='text' placeholder='username' />
            <button onClick={handleClick}> Send </button>
        </div>
    );
};

export default UseRefExample;
