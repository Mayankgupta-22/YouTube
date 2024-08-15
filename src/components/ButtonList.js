import React from 'react'
import Button from './Button'

const list = ["All", "JavaScript", "Roast", " game", " Movie", "cricket", "BGMI", " computer", " Mobile", "Aptitud", "comedy", "Python"]
const ButtonList = () => {
    return (
        <div className='flex gap-2'>
            {list.map((li, i) => (
                <Button key={i} name={li} />
            )

            )}
        </div>
    )
}

export default ButtonList
