import React from 'react';

import {
  LabelDisplayedRowsArgs,
  TablePagination,
  TablePaginationProps,
} from '@mui/material';

type IParams = TablePaginationProps & {
  component?: string;
};

const FooterPagination: React.FC<IParams> = (props) => {

  const renderLabelDisplayedRows = (paginationInfo: LabelDisplayedRowsArgs) => {
    console.log(paginationInfo);
    return `${paginationInfo.from}-${paginationInfo.to} from ${paginationInfo.count}`;
  };

  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25]}
      labelRowsPerPage="lines per page"
      labelDisplayedRows={renderLabelDisplayedRows}
      {...props}
    />
  );
};

FooterPagination.defaultProps = {
  component: 'div',
};

export default FooterPagination;
