import React from 'react'

const TeamMember = props => {
    return(
        <>
        <h1>{props.member.name}</h1>
        <h2>{props.member.email}</h2>
        <h2>{props.member.role}</h2>
        </>
    )
}

export default TeamMember