import {
  Box,
  Button,
  createStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  withStyles,
  WithStyles
} from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { Link } from 'entities';
import * as React from 'react';
import { useState } from 'react';

const styles = () => createStyles({
  table: {
    marginTop: '1%',
    width: '30%'
  },
  header: {
    fontWeight: 'bold'
  },
});

interface LinkTableProps {
  links: Array<Link>;
  onDelete(id: number): void;
  onAdd(newUrl: string): void;
}

type LinkTablePropsStyles = LinkTableProps & WithStyles<typeof styles>;

function LinkTableComponent({ links, onDelete, onAdd, classes }: LinkTablePropsStyles) {
  const [newUrl, setNewUrl] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  const sortedLinks = links.sort((prevLink, nextLink) => prevLink.url.localeCompare(nextLink.url));

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onAddNewUrl();
    }
  };

  const onAddNewUrl = () => {
    if (newUrl.includes(' ') || newUrl === '') {
      setError(true);
    } else {
      onAdd(newUrl);
      setNewUrl('');
      setError(false);
    }
  };

  return (
    <Box>
      <Typography variant='h6'>Manage the links where the extension is enable</Typography>
      <TableContainer component={Paper} className={classes.table}>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell className={classes.header}>Link</TableCell>
              <TableCell className={classes.header}>Options</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedLinks.map(link => (
              <TableRow key={link.id} hover={true}>
                <TableCell>{link.url}</TableCell>
                <TableCell>
                  <Button variant='contained' color='secondary' onClick={() => onDelete(link.id!)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
            <TableRow>
              <TableCell>
                <TextField
                  value={newUrl}
                  onChange={event => setNewUrl(event.target.value)}
                  onKeyDown={onKeyDown}
                  id='new-url-input'
                  placeholder='Insert new URL here'
                  fullWidth
                />
                {error && <Alert severity="error">The new link can't be empty or have white spaces.</Alert>}
              </TableCell>
              <TableCell>
                <Button variant='contained' color='primary' onClick={onAddNewUrl}>
                  Add new URL
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
    
  );
}

export const LinkTable = withStyles(styles)(LinkTableComponent);
