import React, { useState, useEffect, useRef } from 'react';
import {
  Grid,
  Box,
  Card,
  CardActionArea,
  CardContent,
  Fab,
  makeStyles
} from '@material-ui/core';
//Card
import Button from "components/CustomButtons/Button.js";

const useStyles = makeStyles((theme) => ({
  input : {
    display: 'none'
  },
  upload_button: {
    padding: '10px 15px',
    backgroundColor: "#952CAE",
    color: 'white',
    borderRadius: 5,
    textTransform: 'none',
    width: 150,
    '&:hover': {
      backgroundColor: '#3949ab'
    },
  },
}));

const ProductImage = ({ nameKey, image, setImage }) => {
  const classes = useStyles();
  const fileInput = useRef(null);
  const [mainState, setMainState] = useState("initial");
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    // other code  
    if(image) {
      setMainState("uploaded");
      setSelectedFile(image)
    }  
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [image]);

  const imageResetHandler = (event) => {
    setMainState("initial");
    setSelectedFile(null);
    setImage(null);
  };

  const handleUploadClick = (event) => {
    var file = event.target.files[0];
    const reader = new FileReader();
    // var url = reader.readAsDataURL(file);
    reader.readAsDataURL(file);
    reader.onloadend = function (e) {
      setSelectedFile([reader.result]);
    };
    setMainState("uploaded");
    setImage(event.target.files[0])
    console.log("----------------------", event.target.files[0])
  };

  return (
    <React.Fragment>
      <div>
        <Card className="Input Image" style={{boxShadow: 'unset', border: '2px dashed #21517A', height: 200}}>
        {
          (mainState === "initial") ?
            <React.Fragment>
              <CardContent>
                <Grid container justifyContent="center" alignItems="center">
                  <input
                    ref={fileInput} 
                    accept="image/*"
                    className={classes.input}
                    id={`${nameKey}`}
                    type="file"
                    onChange={handleUploadClick}
                  />
                  <label htmlFor={`${nameKey}`} style={{paddingTop: 55, cursor: 'pointer'}}>
                    Ziehen sie Ihr Bild <br /> hier hinein
                  </label>
                </Grid>
              </CardContent>
            </React.Fragment>
            :
            <></>
        }

        {
          (mainState === "uploaded") ?
            <React.Fragment>
              <CardActionArea onClick={()=>imageResetHandler()}>
                <img
                  width="100%"
                  height="200px"
                  className={classes.media}
                  style={{objectFit: 'cover'}}
                  src={selectedFile}
                  alt={nameKey}
                />
              </CardActionArea>
            </React.Fragment>
            :
            <></>
        }
        </Card>
        <Box style={{marginTop: 20, textAlign: 'center'}}>
          <Button 
            // className={classes.upload_button} 
            color="primary"
            onClick={()=> {
              if(fileInput.current)
                fileInput.current.click()
              else
                imageResetHandler()
            }} 
          >
            hinzufügen
          </Button>
        </Box>
      </div>
    </React.Fragment>
  );
}

export default ProductImage;