import { Box, createStyles, FormControl, MenuItem, Select, Typography, withStyles, WithStyles } from '@material-ui/core';
import * as React from 'react';
import { SelectPageValue } from './SelectPageValue';

const styles = () => createStyles({
  selectPageText: {
    marginRight: '1%'
  },
  explanationText: {
    marginTop: '8px'
  }
});

interface SelectPageProps {
  selectPage: string;
  selectPageValues: Array<SelectPageValue>;
  onSelectPageChange(value: string): void;
}

type SelectPagePropsStyles = SelectPageProps & WithStyles<typeof styles>;

function SelectPageComponent({ selectPage, selectPageValues, onSelectPageChange, classes }: SelectPagePropsStyles) {
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    onSelectPageChange(event.target.value as string);
  };

  const getSelectedPageExplanation = () => {
    const selectedPage = selectPageValues.filter(page => page.value === selectPage);
    return selectedPage.length > 0 ? selectedPage[0].explanation : '';
  }

  return (
    <Box>
      <Box display='flex' alignItems='center' className={selectPage}>
        <Typography variant='h6' className={classes.selectPageText}>Select a page to appear</Typography>
        <FormControl>
          <Select
            value={selectPage}
            onChange={handleChange}
            displayEmpty
          >
            {selectPageValues.map((selectPageValue: SelectPageValue) => <MenuItem value={selectPageValue.value}>{selectPageValue.displayName}</MenuItem>)}
          </Select>
        </FormControl>
      </Box>
      <Typography className={classes.explanationText}>{getSelectedPageExplanation()}</Typography>
    </Box>
  );
}

export const SelectPage = withStyles(styles)(SelectPageComponent);
