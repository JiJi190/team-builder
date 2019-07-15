import React, {useState} from 'react';

const Form = props => {
    const [memberData, setMemberData] = useState({
        name: "",
        email: "",
        role: ""
    })

    const changeHandle = event => {
        setMemberData({...memberData, [event.target.name]: event.target.value})
    }

    const submitHandle = event => {
        event.preventDefault();

    }

    return(
        <>
        <form onSubmit={submitHandle}>
            <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={changeHandle}
            value=""
            />

            
            <input
            type="text"
            name="email"
            placeholder="E-mail"
            onChange={changeHandle}
            value=""
            />

            <input
            type="text"
            name="role"
            placeholder="Team Role"
            onChange={changeHandle}
            value=""
            />
        </form>
        </>
    )
}

export default Form;