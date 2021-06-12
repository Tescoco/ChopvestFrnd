import Skeleton from 'react-loading-skeleton';
import styles from "./SkeletonProductLoader.module.css"

export default function SkeletonProductLoader() {
    return (
        <div className={styles.container}>
          <div className={styles.containerInner}>
           <div className={styles.skeleton1Container}>
            <Skeleton className={styles.skeleton1} /> 
           </div>
            <Skeleton className={styles.skeleton2} />
          </div>
        </div>
    )
}

