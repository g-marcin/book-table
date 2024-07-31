import { FC } from 'react'
import { Menu } from 'react-feather'
import styles from './hamburger.module.css'

interface HamburgerProps {
    setIsMenuOpen: (arg0: boolean) => void;
}

export const Hamburger:FC<HamburgerProps> = ({setIsMenuOpen}) => {
  return (
    <>
      <button
          onClick={() => {
            setIsMenuOpen(true);
          }}
          className='ml-auto'
        >
          <Menu  />
        </button>
    </>
  )
}
