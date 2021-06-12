import SkeletonProductLoader from "../../helper/SkeletonProductLoader"
import styles from "./ProductcontentSkeleton.module.css"

export default function ProductContent() {
    return (
        <div className={styles.container}>
          <div className={styles.containerInner}>
             <SkeletonProductLoader />
             <SkeletonProductLoader />
             <SkeletonProductLoader />
             <SkeletonProductLoader /> 
             <SkeletonProductLoader />
             <SkeletonProductLoader />
             <SkeletonProductLoader />
             <SkeletonProductLoader />
             <SkeletonProductLoader />
             <SkeletonProductLoader />
             <SkeletonProductLoader />
          </div>
        </div>
    )
}

