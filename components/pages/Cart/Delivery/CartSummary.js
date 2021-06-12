import React from 'react'
import styles from "./CartSummary.module.css";

export default function CartSummary() {
    return (
        <div className={styles.container}>
          <div className={styles.containerInner}>
            <div className={styles.orderList}>
              <div className={styles.name}>
                 Pounded Yam And meat
              </div>
              <div className={styles.quantity}>
                x 1
              </div>
              <div className={styles.price}>
                ₦1200
              </div>
            </div>
            <div className={styles.orderList}>
              <div className={styles.name}>
                  fried rice with chicken
              </div>
              <div className={styles.quantity}>
                x 30
              </div>
              <div className={styles.price}>
                ₦120
              </div>
            </div>
            <div className={styles.orderList}>
              <div className={styles.name}>
                  fried rice with chicken
              </div>
              <div className={styles.quantity}>
                x 30
              </div>
              <div className={styles.price}>
                ₦120
              </div>
            </div>
            <div className={styles.orderList}>
              <div className={styles.name}>
                  fried rice with chicken
              </div>
              <div className={styles.quantity}>
                x 30
              </div>
              <div className={styles.price}>
                ₦120
              </div>
            </div>
            <div className={styles.orderList}>
              <div className={styles.name}>
                  fried rice with chicken
              </div>
              <div className={styles.quantity}>
                x 30
              </div>
              <div className={styles.price}>
                ₦120
              </div>
            </div>
            <div className={styles.orderList}>
              <div className={styles.delivery}>
                 Delivery
              </div>
              <div className={styles.price}>
                ₦20
              </div>
            </div>
            <div className={styles.orderList}>
              <div className={styles.delivery}>
                 Service Charges
              </div>
              <div className={styles.price}>
                ₦0
              </div>
            </div>
            <div className={styles.divider}>
             <div className={styles.dividerInner}>
            </div>
            </div>
            <div className={styles.orderList}>
              <div className={styles.Total}>
                 Total
              </div>
              <div style={{fontWeight:"bolder"}} className={styles.price}>
                ₦1340
              </div>
            </div>
          </div>
        </div>
    )
}