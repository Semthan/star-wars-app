import React from 'react'

export default function Data({fullName,gender,height,birth_year}) {
    return (
        <div>
            <strong>{fullName}</strong>
            <p>{gender}</p>
            <p>{height}</p>
            <p>{birth_year}</p>
        </div>

    )
}
