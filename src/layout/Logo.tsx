import { Link } from 'react-router-dom'
import SvgBook from '../assets/images/SvgBook'
import styles from './logo.module.css'


export const Logo = () => {
  return (
    <>
        <Link className={styles.logo} to="/">
          <SvgBook fill={'white'} width={35} height={35}/>
          <span className="text-decoration-none">book-table</span>
        </Link>
    </>
  )
}
