import React from "react";
import Router from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import {
  ButtonGroup,
  Button,
  Box,
} from "@material-ui/core";
import styles from "styles/jss/nextjs-material-kit/components/headerStyle.js";
import useTranslation from 'hooks/useTranslation';

const useStyles = makeStyles(styles);

export default function Header(props) {
  const classes = useStyles();
  const { t } = useTranslation();
  return (
    <Box className="gradient-box">
      <Box className={classes.gradientSignBox}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          <Box>
            <img src="/img/buttons/user_btn.png" />
          </Box>
          <Box>
            <ButtonGroup style={{color: '#FFFFFF'}} variant="text" aria-label="text button group">
              <Button className={classes.authButton} onClick={()=>Router.push("/login")}>{t('login')}</Button>
              <Button className={classes.authButton}>{t('signUp')}</Button>
            </ButtonGroup>
          </Box>
        </Box>    
      </Box>
    </Box>
  );
}
