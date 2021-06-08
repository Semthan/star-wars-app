import React from 'react'
import Data from './Data'

export default function Card({fullName}) {
    return (
        <div className="row p-3 border mb-2 border">
            <Data fullName = {fullName} />
        </div>
    )
}
