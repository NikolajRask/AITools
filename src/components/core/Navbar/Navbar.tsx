'use client'

import React from 'react'
import styles from './navbar.module.scss'
import { Button } from '@/components/ui/button'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <h1 className={styles.logo} onClick={() => {
          window.location.href = "/"
        }}>AITools</h1>
        <div className={styles.navItemsWrapper}>
            <a href={'/'} className={styles.navItem}>Browse</a>
            <a href={'https://nikorask.medium.com'} className={styles.navItem}>Blog</a>
            <Button onClick={() => {
              window.location.href = "/submit"
            }}>
              Submit App
            </Button>
        </div>
    </nav>
  )
}

export default Navbar