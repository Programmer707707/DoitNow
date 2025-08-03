import React from 'react'

type ButtonProps = {
    onClick: () => void;
    label: string;
}

const DislikeButton = ({onClick, label}: ButtonProps) => {
  return (
        <button onClick={onClick}>{label}</button>
)
}

export default DislikeButton