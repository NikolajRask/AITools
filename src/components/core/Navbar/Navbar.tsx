import React from 'react'
import styles from './navbar.module.scss'
import { Button } from '@/components/ui/button'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <h1 className={styles.logo}>AITools</h1>
        <div className={styles.navItemsWrapper}>
            <p className={styles.navItem}>Home</p>
            <p className={styles.navItem}>Other</p>
            <p className={styles.navItem}>Other 2</p>
            <Button>
              Submit App
            </Button>
        </div>
    </nav>
  )
}

export default Navbar