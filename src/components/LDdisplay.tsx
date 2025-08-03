import React from 'react'

type DisplayProps = {
    count: number
}

const LDdisplay = ({count}: DisplayProps) => {
  return (
    <div>
        <h1>Likes count: {count}</h1>
        <h2>{count > 0 ? 'ou you liked' : count == 0 ? 'hmm waiting' : 'noo why dislike'}</h2>
    </div>
  )
}

export default LDdisplay