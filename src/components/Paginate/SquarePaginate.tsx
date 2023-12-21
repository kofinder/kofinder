import React from 'react';
import ReactPaginate, { ReactPaginateProps } from 'react-paginate';

import clsx from 'clsx';
import { makeStyles } from 'tss-react/mui';
import { colors } from '@mui/material';
import { Box, Typography, Select, TextField, MenuItem } from '@mui/material'

const useStyles = makeStyles<void, 'activeLink'>()((theme: any, _params, classes) => ({
  root: {
    ...theme.typography.button,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    marginTop: 10
  },
  pageSizeOptions: {
    display: 'flex',
    gap: 20
  },
  pageSize: {
    display: 'flex',
    alignItems: 'center',
    gap: 8
  },
  inputs: {
    maxWidth: 70,
    minHeight: 40,
    
  },
  paginate: {
    listStyle: 'none',
    userSelect: 'none',
    display: 'flex',
    alignItems: 'center',
    gap: 10,
  },
  active: {
    // color: '#505050',
    // border: '1px solid #000000',
    // background: colors.blue[100]
  },
  activeLink: {
  },
  break: {},
  breakLink: {},
  disabled: {},
  next: {
    marginLeft: theme.spacing(1),
  },
  nextLink: {
    padding: theme.spacing(1),
    outline: 'none',
    cursor: 'pointer',
    border: '1px solid #bdbdbd',
    width: 40,
    height: 40,
    display: 'block',
    textAlign: 'center',
    borderRadius: 8,
    '&:hover': {
      backgroundColor: colors.blueGrey[50],
    },
  },
  page: {},
  pageLink: {
    color: theme.palette.text.secondary,
    border: '1px solid #bdbdbd',
    padding: theme.spacing(1),
    outline: 'none',
    cursor: 'pointer',
    width: 40,
    height: 40,
    borderRadius: 8,
    display: 'block',
    textAlign: 'center',
    '&:hover': {
      backgroundColor: colors.blueGrey[50],
      color: theme.palette.text.primary,
    },
    [`&.${classes.activeLink}`]: {
      backgroundColor: colors.blue[800],
      color: '#ffffff !important'
    },
  },
  previous: {
    marginRight: theme.spacing(1),
  },
  previousLink: {
    padding: theme.spacing(1),
    outline: 'none',
    cursor: 'pointer',
    border: '1px solid #bdbdbd',
    width: 40,
    height: 40,
    display: 'block',
    textAlign: 'center',
    borderRadius: 8,
    '&:hover': {
      backgroundColor: colors.blueGrey[50],
    },
  },
}));

interface IParams {
  className?: string;
  onPageChange(page: number): void;
  onRowChange(row: number): void;
  pageCount: number;
  pageRangeDisplayed?: number;
  reactPaginateProps?: ReactPaginateProps;
}

function SquarePaginate(props: IParams) {
  const {
    pageCount,
    pageRangeDisplayed = 5,
    onPageChange,
    onRowChange,
    className,
    reactPaginateProps,
    ...rest
  } = props;

  const { classes, cx } = useStyles();
  const [page, setPage] = React.useState<number>(0)
  const [row, setRow] = React.useState(10)

  const handlePage = (e: any) => {
    setPage(e.target.value)
  }

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') {
      onPageChange(page - 1)
    }
  }

  const handleRowChange = (e: any) => {
    setRow(e.target.value)
    onRowChange(e.target.value)
  }

  return (
   <Box className={cx(classes.root, className)} mt={3}> 
   <div className={classes.pageSizeOptions}>
    <div className={classes.pageSize}>
    <Typography>Row per page</Typography>
    <Select className={classes.inputs} sx={{height: 40}} value={row} onChange={handleRowChange}>
      <MenuItem value={10}>10</MenuItem>
      <MenuItem value={20}>20</MenuItem>
      <MenuItem value={30}>30</MenuItem>
      <MenuItem value={40}>40</MenuItem>
      <MenuItem value={50}>50</MenuItem>
    </Select>
    </div>
    <div className={classes.pageSize}>
    <Typography>Go to</Typography>
    <TextField 
      className={classes.inputs}  
      size='small' 
      value={page}
      onChange={handlePage}
      onKeyDown={handleKeyDown}

      />
    </div>
   </div>
    <ReactPaginate
      activeClassName={classes.active}
      activeLinkClassName={classes.activeLink}
      breakClassName={classes.break}
      breakLabel="..."
      breakLinkClassName={classes.breakLink}
      containerClassName={classes.paginate}
      disabledClassName={classes.disabled}
      marginPagesDisplayed={2}
      nextClassName={classes.next}
      nextLabel="&#8250;"
      nextLinkClassName={classes.nextLink}
      onPageChange={({ selected }) => onPageChange(selected)}
      pageClassName={classes.page}
      pageCount={pageCount}
      pageLinkClassName={classes.pageLink}
      pageRangeDisplayed={pageRangeDisplayed}
      previousClassName={classes.previous}
      previousLabel="&#8249;"
      previousLinkClassName={classes.previousLink}
      {...rest}
      {...reactPaginateProps}
    />
    </Box>
  );
}

export default SquarePaginate;
