import React from "react";
// @material-ui/core components
import { 
  Tooltip,
  IconButton 
} from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';

import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import DeleteDialog from "components/DeleteDialog";

const DELETE_PRODUCT_MUTATION = gql`
  mutation DELETE_PRODUCT_MUTATION($id: ID!) {
    deleteProduct(id: $id) {
      id
      name
    }
  }
`;

function update(cache, payload) {
  cache.evict(cache.identify(payload.data.deleteProduct));
}

export default function DeleteProduct({ id }) {
  const [open, setOpen] = React.useState(false)
  const [deleteProduct, { error, loading }] = useMutation(
    DELETE_PRODUCT_MUTATION,
    {
      variables: {
        id,
      },
      update,
    }
  );

  return (
    <>
      <Tooltip title="Delete">
        <IconButton 
          aria-label="delete"
          onClick={() => setOpen(true) }
        >
          <ClearIcon style={{color: "#F44336"}} />
        </IconButton>
      </Tooltip>
      <DeleteDialog 
        dlgOpen={open}
        message={"Are you sure you want to delete this Item ?"}
        onSubmit={()=>deleteProduct()}
        handleClose={()=>setOpen(false)}
      />
    </>
  );
}
