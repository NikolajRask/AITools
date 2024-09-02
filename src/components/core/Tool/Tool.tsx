import { Card } from '@/components/ui/card'
import React from 'react'
import styles from './tool.module.scss'
import { Skeleton } from '@/components/ui/skeleton';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { EyeOpenIcon } from '@radix-ui/react-icons';

interface ToolProps {
    title: string;
    description: string;
    featured?: boolean;
    link?: string;
}

const Tool = (props: ToolProps) => {
  return (
    <Card className={styles.tool}> 
        {
            props.featured && <div className={styles.featuedBlob}/>
        }
        <div className={styles.tags}>
            <Badge className={styles.badge}>Freemium</Badge>
            <Badge className={styles.badge}>0 {" "}<EyeOpenIcon style={{marginLeft: 5}}/></Badge>
        </div>
        <div className={styles.toolFlex}>
            <img src={'https://cdn.logojoy.com/wp-content/uploads/20220329171728/socail-messenger-app-logo.jpg'} className={styles.logo} alt="App Logo" width={100} height={100}></img>
            <div className={styles.textWrapper}>
                <div className={styles.title}>
                    {props.title}
                </div>
                <p className={styles.description}>
                    {props.description}
                </p>
            </div>
        </div>
    </Card>
  )
}

export default Tool