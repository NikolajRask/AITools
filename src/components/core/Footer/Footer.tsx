import React from 'react'
import styles from './footer.module.scss'
import { GitHubLogoIcon, InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <p className={styles.footerLogo}>AITools | Created By @NikolajRask</p>
        <div className={styles.footerSocials}>
            <GitHubLogoIcon
                width={20}
                height={20}
            />
            <TwitterLogoIcon
                width={20}
                height={20}
            />

        </div>
    </footer>
  )
}

export default Footer