import React from 'react';
import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Box,
    IconButton,
    Typography,
  } from '@material-ui/core';
import { Close } from '@material-ui/icons';

const DeleteDialog = ({ dlgOpen, message, onSubmit, handleClose }) => {
   return (
     <Dialog open={dlgOpen} onClose={handleClose} maxWidth="sm" fullWidth> 
       <DialogTitle>Confirm the action</DialogTitle>
       <Box position="absolute" top={0} right={0}>
         <IconButton onClick={handleClose}>
           <Close />
         </IconButton>
       </Box>
       <DialogContent>
         <Typography>{message}</Typography>
       </DialogContent>
       <DialogActions>
         <Button color="primary" variant="contained" onClick={handleClose}>
           Cancel
         </Button>
         <Button
           color="secondary"
           variant="contained"
           onClick={() => {
             if (onSubmit) {
               onSubmit();
             }
             handleClose();
           }}
         >
           Confirm
         </Button>
       </DialogActions>
     </Dialog>
   );
 };

 export default DeleteDialog;