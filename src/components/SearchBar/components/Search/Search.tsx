import React from 'react';

import clsx from 'clsx';

import MyButton from '@components/MyButton';
import { IMyButtonProps } from '@components/MyButton/MyButton';
import SearchIcon from '@mui/icons-material/Search';
import { Paper, Input, InputProps } from '@mui/material';

import useStyles from './styles';

type IParams = IDivParams & {
  className?: string;
  onSearch(text: string): void;
  loadingSearch?: boolean;
  inputProps?: InputProps;
  buttonProps?: IMyButtonProps;
};

function Search(props: IParams) {
  const {
    onSearch,
    className,
    inputProps,
    loadingSearch,
    buttonProps,
    ...rest
  } = props;
  const [search, setSearch] = React.useState('');
  const { classes, cx } = useStyles();

  const handleSearch = () => {
    onSearch(search);
  };

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      onSearch(search)
    }
  }

  return (
    <div {...rest} className={cx(classes.root, className)}>
      <Paper className={classes.search} elevation={1}>
        <SearchIcon className={classes.searchIcon} />
        <Input
          className={classes.searchInput}
          disableUnderline
          placeholder="Search"
          disabled={loadingSearch}
          {...inputProps}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </Paper>
      <MyButton
        className={classes.searchButton}
        type="button"
        fullWidth={false}
        onClick={handleSearch}
        loading={loadingSearch}
        customColor="success"
        variant="contained"
        color="success"
        {...buttonProps}
      >
        {buttonProps?.children || 'Search'}
      </MyButton>
    </div>
  );
}

export default Search;
