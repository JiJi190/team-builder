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
        props.addMember(memberData);
        setMemberData({name: "",
        email: "",
        role: ""})

    }

    return(
        <>
        
        
        <form onSubmit={(event) => submitHandle(event)}>
            <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={(event) => changeHandle(event)}
            value={memberData.name}
            />

            
            <input
            type="text"
            name="email"
            placeholder="E-mail"
            onChange={(event) => changeHandle(event)}
            value={memberData.email}
            />

            <input
            type="text"
            name="role"
            placeholder="Team Role"
            onChange={(event) => changeHandle(event)}
            value={memberData.role}
            />
            <input
            type="submit"
            onSubmit={(event) => submitHandle(event)}
            />
        </form>
        
        </>
    )
}

export default Form;