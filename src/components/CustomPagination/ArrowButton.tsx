import React, { FC } from 'react'

interface ArrowButtonProps {
    side: 'left' | 'right' | 'up' | 'down' 
    onClickHandler: () => void | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
}

const arrowDirection = {
    left:'<',
    right:'>',
    up: '^',
    down: 'v'
}

export const ArrowButton:FC<ArrowButtonProps> = ({side, onClickHandler}) => {
  return (
    <button onClick={()=>onClickHandler()}>{arrowDirection[side]}</button>
  )
}
