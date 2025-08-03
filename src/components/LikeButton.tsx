import React from 'react'

type ButtonProps = {
    onClick: () => void;
    label: string;
}

const LikeButton = ({onClick, label}: ButtonProps) => {
    return (
        <button onClick={onClick}>{label}</button>
    )
}

export default LikeButton