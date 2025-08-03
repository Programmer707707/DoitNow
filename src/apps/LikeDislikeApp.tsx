import React, {useState, useEffect} from 'react'
import LikeButton from '../components/LikeButton'
import DislikeButton from '../components/DislikeButton'
import LDdisplay from '../components/LDdisplay'


const LikeDislikeApp = () => {
    const [count, setCount] = useState<number>(0)

    useEffect(() => (
    console.log("Likes count changed ", count)
    ), [count])

    useEffect(() => (
    console.log("LikesDislike App mounted")
    ), [])
    

    const inc = () => setCount(count+1)
    const dec = () => setCount(count-1)

    return(
        <div>
            <LDdisplay count={count} />
            <LikeButton onClick={inc} label="Like" />
            <DislikeButton onClick={dec} label="DisLike" />
        </div>
    )
}

export default LikeDislikeApp