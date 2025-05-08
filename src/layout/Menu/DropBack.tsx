import { FC } from 'react'
import styles from './dropback.module.css'

interface DropBackProps {
    isOpen: boolean
    setIsOpen: (arg0: boolean) => void
}

export const DropBack:FC<DropBackProps> = ({isOpen, setIsOpen}) => {
  return isOpen ? <div className={styles.DropBack} onClick={()=>setIsOpen(false)}></div> : null
}
