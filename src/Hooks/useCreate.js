import { useState } from "react";

const useCreate = (initialState ={}) => {

    const [formValue, setFormValue] = useState(initialState)

    const reset = ()=>{
        setFormValue(initialState)
    }
    
    const handleInputChange = ({target}) => {
        setFormValue({
            ...formValue,
            [target.name]: target.value
        })
    }

    return [formValue, handleInputChange, reset]

};

export default useCreate;