import React, {
  useState,
  useEffect
} from 'react';
import Cookies from 'js-cookie';
import {
  Box,
  Button,
  Link,
  Portal,
  Typography,
  makeStyles
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
    maxWidth: 600,
    position: 'fixed',
    bottom: 0,
    left: 0,
    margin: theme.spacing(3),
    padding: theme.spacing(3),
    outline: 'none',
    zIndex: 2000
  },
  action: {
    backgroundColor: theme.palette.common.white,
    color: 'black'
  }
}));

const CookiesNotification = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    Cookies.set('consent', 'true');
    setOpen(false);
  };

  useEffect(() => {
    // other code
    const consent = Cookies.get('consent');
    if (!consent) {
      setOpen(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!open) {
    return null;
  }

  return (
    <Portal>
      <div 
        className={classes.root} 
        style={{backgroundColor: 'black'}}>
        <Typography
          variant="body1"
          color="inherit"
        >
          We use cookies to ensure that we can offer you the best experience on our website. Read our privacy policy. 
          <Link
            component="a"
            color="inherit"
            underline="always"
            href= '/'
            target="_blank"
          >
            Privacy policy .
          </Link>
        </Typography>
        <Box
          mt={2}
          display="flex"
          justifyContent="flex-end"
        >
          <Button
            onClick={handleClose}
            variant="contained"
            className={classes.action}
            style={{backgroundColor: 'white'}}
          >
            Agree
          </Button>
        </Box>
      </div>
      }
    </Portal>
  );
};

export default CookiesNotification;
