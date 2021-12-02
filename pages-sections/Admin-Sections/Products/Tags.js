import React from "react";
import { 
  TextField
} from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

import ErrorMessage from './ErrorMessage';

export const ALL_TAGS_QUERY = gql`
  query {
    allTags {
      id
      name
    }
  }
`

export default function Tags({setTags}) {

  const { data, error, loading } = useQuery(ALL_TAGS_QUERY);
  if (loading) return <p>...Loading</p>;
  if (error) return <ErrorMessage error={error} />;

  return (
    <Autocomplete
      multiple
      id="tags-standard"
      options={data?.allTags}
      getOptionLabel={(option) => option.name}
      defaultValue={[]}
      onChange={(event, value) => setTags(value)} 
      renderInput={(params) => (
        <TextField
          {...params}
          variant="standard"
          label="Tags"
          placeholder="Tags"
        />
      )}
    />
  );
}
