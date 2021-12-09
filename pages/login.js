import React, { useEffect } from "react";
import Router from "next/router";
import gql from 'graphql-tag';
import { useMutation } from '@apollo/client';
import Link from 'next/link';
// @material-ui/core components
import {
  Box,
  InputAdornment,
  Icon,
} from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Email from "@material-ui/icons/Email";

// core components
import HomeContainer from "components/HomeContainer";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";
import CardHeader from "components/Card/CardHeader.js";
import CardFooter from "components/Card/CardFooter.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import useForm from 'lib/useForm';
import { CURRENT_USER_QUERY, useUser } from 'components/User';
import ErrorMessage from 'components/ErrorMessage';

import styles from "styles/jss/nextjs-material-kit/pages/loginPage.js";


const SIGNIN_MUTATION = gql`
  mutation SIGNIN_MUTATION($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        code
        message
      }
    }
  }
`;


const useStyles = makeStyles(styles);

export default function LoginPage(props) {
  const classes = useStyles();
  const user = useUser();
  const { ...rest } = props;
  
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  
  const { inputs, handleChange, resetForm } = useForm({
    email: '',
    password: '',
  });

  const [signin, { data, loading }] = useMutation(SIGNIN_MUTATION, {
    variables: inputs,
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });
  async function handleSubmit(e) {
    e.preventDefault();
    const res = await signin();
    console.log(res);
    resetForm();
  }
  const error =
    data?.authenticateUserWithPassword.__typename ===
    'UserAuthenticationWithPasswordFailure'
      ? data?.authenticateUserWithPassword
      : undefined;
  
  useEffect(() => {
    // other code
    if(user) Router.push("/admin/dashboard");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  return (
    <div className={classes.pageHeader}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <Card className={classes[cardAnimaton]}>
              <form className={classes.form} onSubmit={handleSubmit}>
                <CardHeader color="primary" className={classes.cardHeader}>
                  <h4>Login</h4>
                  <div className={classes.socialLine}>
                    <Button
                      justIcon
                      href="#pablo"
                      target="_blank"
                      color="transparent"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className={"fab fa-twitter"} />
                    </Button>
                    <Button
                      justIcon
                      href="#pablo"
                      target="_blank"
                      color="transparent"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className={"fab fa-facebook"} />
                    </Button>
                    <Button
                      justIcon
                      href="#pablo"
                      target="_blank"
                      color="transparent"
                      onClick={(e) => e.preventDefault()}
                    >
                      <i className={"fab fa-google-plus-g"} />
                    </Button>
                  </div>
                </CardHeader>
                <p className={classes.divider}>Or Be Classical</p>
                <CardBody>
                  <CustomInput
                    required={true}
                    labelText="Email..."
                    type='email'
                    name='email'
                    value={inputs.email}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      type: "email",
                      endAdornment: (
                        <InputAdornment position="end">
                          <Email className={classes.inputIconsColor} />
                        </InputAdornment>
                      ),
                    }}
                    onChange={handleChange}
                  />
                  <CustomInput
                    required={true}
                    labelText="Password"
                    type='password'
                    name="password"
                    value={inputs.password}
                    formControlProps={{
                      fullWidth: true,
                    }}
                    inputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <Icon className={classes.inputIconsColor}>
                            lock_outline
                          </Icon>
                        </InputAdornment>
                      ),
                      autoComplete: "off",
                    }}
                    onChange={handleChange}
                  />
                </CardBody>
                <CardFooter className={classes.cardFooter}>
                  <Button 
                    type="submit"
                    simple 
                    color="primary" 
                    size="lg"
                    // onClick={()=>Router.push("/admin/dashboard")}
                  >
                    Login
                  </Button>
                </CardFooter>
              </form>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
