import React from 'react';
import Button from '@material-ui/core/Button';
import { SnackbarProvider, useSnackbar } from 'notistack';

function MyApp({content,variant,showSnack,setShowSnack}) {
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = () => {
    enqueueSnackbar(content, { variant });
  };

  React.useEffect(() => {
    if (showSnack) {
      handleClickVariant()
    }
    setShowSnack(false)
  }, [showSnack])

  return (
    <>
    </>
  );
}

export default function SnackBar({content,variant,showSnack,setShowSnack}) {
  return (
    <SnackbarProvider maxSnack={3}>
      <MyApp content={content} variant={variant} showSnack={showSnack} setShowSnack={setShowSnack} />
    </SnackbarProvider>
  );
}