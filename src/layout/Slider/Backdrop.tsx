import { FC } from 'react'
import styles from './slider.module.css'

interface BackdropProps {
    isOpen: boolean
    setIsOpen: (arg0: boolean) => void
}

export const Backdrop:FC<BackdropProps> = ({isOpen, setIsOpen}) => {
  return isOpen ? <div className={styles.backdrop} onClick={()=>setIsOpen(false)}></div> : null
}
