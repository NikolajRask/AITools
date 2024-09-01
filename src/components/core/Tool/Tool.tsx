import { Card } from '@/components/ui/card'
import React from 'react'
import styles from './tool.module.scss'
import { Skeleton } from '@/components/ui/skeleton';

interface ToolProps {
    title: string;
    description: string;
    featured?: boolean;
}

const Tool = (props: ToolProps) => {
  return (
    <Card className={styles.tool}> 
        <Skeleton className={styles.logo}></Skeleton>
        <div>
            <div className={styles.title}>
                {props.title}
            </div>
            <p className={styles.description}>
                {props.description}
            </p>
        </div>
    </Card>
  )
}

export default Tool