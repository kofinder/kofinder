import React, { useState } from 'react';
import { IMyButtonProps } from '@components/MyButton/MyButton';
import FilterListIcon from '@mui/icons-material/FilterList';
import { Grid, Button, GridProps, InputProps } from '@mui/material';

import { Search } from './components';
import { IFilterParams } from './components/Filter/Filter';
import useStyles from './styles';

type IParams = GridProps & {
  className?: string;
  filterComponent?: React.FC<IFilterParams>;
  onFilter?: (filters: string) => void;
  onSearch(value: string): void;
  inputProps?: InputProps;
  buttonProps?: IMyButtonProps;
  loadingSearch?: boolean;
};

function SearchBar(props: IParams) {
  const {
    onFilter,
    onSearch,
    className,
    inputProps,
    buttonProps,
    loadingSearch,
    filterComponent: Filter,
    ...rest
  } = props;

  const { classes, cx } = useStyles();

  const [openFilter, setOpenFilter] = useState(false);

  const handleFilterOpen = () => {
    setOpenFilter(true);
  };

  const handleFilterClose = () => {
    setOpenFilter(false);
  };

  return (
    <Grid
      {...rest}
      className={cx(classes.root, className)}
      container
      spacing={3}
    >
      <Grid item>
        {onSearch && (
          <Search
            className={classes.search}
            onSearch={onSearch}
            inputProps={inputProps}
            buttonProps={buttonProps}
            loadingSearch={loadingSearch}
          />
        )}
      </Grid>
      {!!Filter && onFilter && (
        <>
          <Grid item>
            <Button
              className={classes.filterButton}
              color="primary"
              onClick={handleFilterOpen}
              size="small"
              variant="outlined"
            >
              <FilterListIcon className={classes.filterIcon} /> Filters
            </Button>
          </Grid>

          <Filter
            onClose={handleFilterClose}
            onFilter={onFilter}
            open={openFilter}
          />
        </>
      )}
    </Grid>
  );
}

export default SearchBar;
