import React, { useState, useEffect } from 'react';
import {
  Grid,
  makeStyles
} from '@material-ui/core';

//Card
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";

const useStyles = makeStyles((theme) => ({
  input : {
    display: 'none'
  },
}));

const ImageProfile = ({ nameKey, avatar, setAvatar, user }) => {
  const classes = useStyles();
  const [mainState, setMainState] = useState("initial");
  const [selectedFile, setSelectedFile] = useState(null);

  const fileInput = React.useRef(null);

  useEffect(() => {
    // other code    
    if(avatar) {
      setMainState("uploaded");
      setSelectedFile(avatar)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [avatar]);

  const imageResetHandler = (event) => {
    setMainState("initial");
    setSelectedFile(null);
    setAvatar(null)
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
    setAvatar(event.target.files[0])
  };

  return (
    <React.Fragment>
      <div>
        <Card className="Input Image" style={{boxShadow: 'unset', borderRadius: '50%', height: '130px'}}>
        {
          (mainState === "initial") 
          ?
            <React.Fragment>
              <CardContent>
                <Grid container justify="center" alignItems="center">
                  <input
                    ref={fileInput} 
                    accept="image/*"
                    className={classes.input}
                    id={`${nameKey}`}
                    type="file"
                    onChange={handleUploadClick}
                  />
                  <label htmlFor={`${nameKey}`} style={{ cursor: 'pointer', textAlign: 'center', paddingTop: '20px'}}>
                    Select your picture into here
                  </label>
                </Grid>
              </CardContent>
            </React.Fragment>
          :
            <></>
        }
        {
          (mainState === "uploaded") 
          ?
            <React.Fragment>
              <CardActionArea onClick={imageResetHandler}>
                <img
                  width="130px"
                  height="130px"
                  className={classes.media}
                  style={{objectFit: 'cover', width: '130px', height: '130px'}}
                  src={selectedFile}
                  alt={nameKey}
                />
              </CardActionArea>
            </React.Fragment>
          :
            <></>
        }
        </Card>
      </div>
    </React.Fragment>
  );
}

export default ImageProfile;