import React, { useState, useEffect  } from "react";
import { useMutation } from '@apollo/client';
import * as Yup from 'yup';
import { Formik } from 'formik';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  FormControlLabel,
  Radio,
  Typography,
  Backdrop
} from '@material-ui/core';
import FiberManualRecord from "@material-ui/icons/FiberManualRecord";
import CircularProgress from '@material-ui/core/CircularProgress';

// layout for this page
import Admin from "layouts/Admin.js";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardAvatar from "components/Card/CardAvatar.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import ImageProfile from 'pages-sections/Admin-Sections/User/ImageProfile';

import radioStyles from "styles/jss/nextjs-material-kit/pages/componentsSections/basicsStyle.js";

import { CURRENT_USER_QUERY, useUser } from 'components/User'

const useStyles = makeStyles((theme) => ({
  ...radioStyles,
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0",
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
  },
  cardCategory: {
    textAlign: 'center'
  },
  cardTitle: {
    textAlign: 'center'
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff',
  }
}));



const UPDATE_USER_WITH_IMAGE_MUTATION = gql`
  mutation UPDATE_USER_MUTATION(
    $id: ID!
    $name: String!
    $gender: String!
    $email: String!
    $phone: String!
    $avatar: Upload
  ) {
    updateUser(
      id: $id
      data: { 
        name: $name
        gender: $gender
        email: $email
        phone: $phone
        avatar: $avatar
      }
    ) {
      id
      name
      gender
      email
      phone
      avatar
    }
  }
`;

const UPDATE_USER_WITHOUT_IMAGE_MUTATION = gql`
   mutation UPDATE_USER_MUTATION(
    $id: ID!
    $name: String!
    $gender: String!
    $email: String!
    $phone: String!
  ) {
    updateUser(
      id: $id
      data: { 
        name: $name
        gender: $gender
        email: $email
        phone: $phone
      }
    ) {
      id
      name
      gender
      email
      phone
    }
  }
`;


function UserProfile() {
  const classes = useStyles();
  
  const me = useUser();

  const [avatar, setAvatar] = useState();
  const [gender, setGender] = useState("male");

  const [UpdateWithoutImageUser, { loading: saveLoading1 }] = useMutation(UPDATE_USER_WITHOUT_IMAGE_MUTATION);
  const [UpdateWithImageUser, { loading: saveLoading2 }] = useMutation(UPDATE_USER_WITH_IMAGE_MUTATION);

  useEffect(()=>{
    if(me?.avatar) {
      setAvatar(me?.avatar?.publicUrl)
    }
    if(me?.gender) {
      setGender(me?.gender)
    }
  }, [me])

  console.log("----------------------------me", me)
  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={{
          name: me?.name || '',
          email: me?.email || '',
          phone: me?.phone || '',
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().max(255).required('Name invalid'),
          phone: Yup.string().max(255).required('Phone invalid'),
          email: Yup.string().email('E-Mail invalid').max(255).required('E-Mail invalid')
        })}
        onSubmit={async (values, {
          setErrors,
          setStatus,
          setSubmitting
        }) => {
          alert(typeof avatar)
          if (typeof avatar === 'string'){
            await UpdateWithoutImageUser({ 
              variables: { 
                id: me?.id,
                name: values.name,
                gender: gender,
                email: values.email,
                phone: values.phone
              },
              refetchQueries: [{ query: CURRENT_USER_QUERY }], 
            });
          } else {
            await UpdateWithImageUser({ 
              variables: { 
                id: me?.id,
                name: values.name,
                gender: gender,
                email: values.email,
                phone: values.phone,
                avatar: avatar
              },
              refetchQueries: [{ query: CURRENT_USER_QUERY }], 
            });
          }
        }}
      >
        {({
          errors,
          handleBlur,
          handleChange,
          handleSubmit,
          isSubmitting,
          touched,
          values
        }) => (
          <form
            noValidate
            className={classes.root}
            onSubmit={handleSubmit}
          >
            <GridContainer>
              <GridItem xs={12} sm={12} md={8}>
                <Card>
                  <CardHeader color="primary">
                    <h4 className={classes.cardTitleWhite}>Edit Profile</h4>
                    <p className={classes.cardCategoryWhite}>Complete your profile</p>
                  </CardHeader>
                  <CardBody>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={12}>
                        <Box display="flex" flexDirection="row">
                          <Box p={1} pl={0} mt={1}>
                            <Typography
                              color="textPrimary"
                              variant="body1"
                            >
                              Gender
                            </Typography>
                          </Box>
                          <Box p={1} >
                            <FormControlLabel
                              control={
                                <Radio
                                  checked={gender === "Male"}
                                  onChange={(ev)=>(setGender( ev.target.value))}
                                  value="Male"
                                  name="radio button male"
                                  aria-label="Male"
                                  icon={
                                    <FiberManualRecord className={classes.radioUnchecked} />
                                  }
                                  checkedIcon={
                                    <FiberManualRecord className={classes.radioChecked} />
                                  }
                                  classes={{
                                    checked: classes.radio,
                                    root: classes.radioRoot,
                                  }}
                                />
                              }
                              classes={{
                                label: classes.label,
                                root: classes.labelRoot,
                              }}
                              label="Male"
                            />
                          </Box>
                          <Box p={1} >
                            <FormControlLabel
                              control={
                                <Radio
                                  checked={gender === "Female"}
                                  onChange={(ev)=>(setGender( ev.target.value))}
                                  value="Female"
                                  name="radio button female"
                                  aria-label="Femail"
                                  icon={
                                    <FiberManualRecord className={classes.radioUnchecked} />
                                  }
                                  checkedIcon={
                                    <FiberManualRecord className={classes.radioChecked} />
                                  }
                                  classes={{
                                    checked: classes.radio,
                                    root: classes.radioRoot,
                                  }}
                                />
                              }
                              classes={{
                                label: classes.label,
                                root: classes.labelRoot,
                              }}
                              label="Female"
                            />
                          </Box>
                        </Box>
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                          error={Boolean(touched.name && errors.name)}
                          labelText="Name"
                          id="name"
                          name="name"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.name}
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                          error={Boolean(touched.email && errors.email)}
                          labelText="Email"
                          id="email"
                          name="email"
                          type="email"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.email}
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={6}>
                        <CustomInput
                          error={Boolean(touched.phone && errors.phone)}
                          labelText="Phone"
                          id="phone"
                          name="phone"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          value={values.phone}
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                    </GridContainer>
                    <GridContainer>
                      <GridItem xs={12} sm={12} md={4}>
                        <CustomInput
                          labelText="City"
                          id="city"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <CustomInput
                          labelText="Country"
                          id="country"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                      <GridItem xs={12} sm={12} md={4}>
                        <CustomInput
                          labelText="Postal Code"
                          id="postal-code"
                          formControlProps={{
                            fullWidth: true,
                          }}
                        />
                      </GridItem>
                    </GridContainer>
                   
                  </CardBody>
                  <CardFooter>
                    <Button type="submit" color="primary">Update Profile</Button>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Card profile>
                  <CardAvatar profile>
                    <ImageProfile nameKey="avatar" avatar={avatar} setAvatar={setAvatar} user={me}/>
                  </CardAvatar>
                  <CardBody profile>
                    <h6 className={classes.cardCategory}>{me?.name}</h6>
                    <h4 className={classes.cardTitle}>{me?.email}</h4>
                    <p className={classes.description}>
                     Upload JPG and PNG only and the avatar size is width = 130px and height = 130px.
                    </p>
                  </CardBody>
                </Card>
                
              </GridItem>
            </GridContainer>
          </form>
        )}
      </Formik>
      {
        (saveLoading1 || saveLoading2) && 
        <Backdrop className={classes.backdrop} open={(saveLoading1 || saveLoading2)} >
          <CircularProgress color="inherit" />
        </Backdrop>
      }
    </div>
  );
}

UserProfile.layout = Admin;

export default UserProfile;
