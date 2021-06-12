import React from 'react';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import styles from "./AddAddress.module.css";
import Image from 'next/image'
import Link from 'next/link'
import Loading from '../utils/Loading';


function SimpleDialog({open}) {
  const [load, setLoad] = React.useState(false)

  const startLoading = () => {
    setLoad(true)
    setTimeout(() => {
      setLoad(false)
    }, 4000);
  }


  return (
    <>
    <Dialog  aria-labelledby="simple-dialog-title" open={open}>
         <div className={styles.addressMainDialog}>
           <div className={styles.imageBox}>
            <Image src="/img/location-svg.png" alt="location-svg" width={70} height={70} />
          </div>
          <div className={styles.content}>
           <div className={styles.contentInner}>
            We need your location to give you the best 
            result for meals around you.
           </div>
          </div>
          <Link href="/profile/create-address">
           <div onClick={startLoading} className={styles.CTA}>
            <div className={styles.CtaInner}>
              Continue
            </div>
          </div>
         </Link>
        </div>
    </Dialog>
    <Loading load={load} />
    </>
  );
}

SimpleDialog.propTypes = {
  open: PropTypes.bool.isRequired,
};

export default function AddAddress() {
  const [open, setOpen] = React.useState(false);
  //check if address in local storage
  React.useEffect(() => {
    if (localStorage.LGA == undefined) {
      setTimeout(() => {
      setOpen(true);
    }, 4000);
   }
  }, [])

  return (
      <SimpleDialog open={open} />
  );
}
