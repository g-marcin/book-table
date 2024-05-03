import { FC, MouseEvent } from 'react'

interface ArrowButtonProps {
    side: 'left' | 'right' | 'up' | 'down' 
    onClickHandler: () => void | ((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)
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
