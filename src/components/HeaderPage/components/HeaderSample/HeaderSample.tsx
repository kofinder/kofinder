import React from 'react';
import { Upload as ImportIcon, Download as ExportIcon } from 'react-feather';

import AddIcon from '@mui/icons-material/AddIcCallOutlined';
import { Box, Button, Grid, Typography, ButtonProps } from '@mui/material';
import { makeStyles } from 'tss-react/mui';

const useStyles = makeStyles()(() => ({
  buttonExport: {
    marginLeft: 10,
  },
  rightAlign: {
    textAlign: 'right',
  },
}));

type IParams = {
  title: string;
  topic?: string;
  rightButtonTitle?: string;
  rightButtonProps?: ButtonProps;
  importExport?: boolean;
  onClick?: () => void;
};

const HeaderSample: React.FC<IParams> = (props) => {
  const {
    title,
    topic,
    rightButtonProps,
    rightButtonTitle,
    importExport,
    onClick,
  } = props;
  const { classes } = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item xs={6} md={8}>
        {!!topic && (
          <Typography component="h2" gutterBottom variant="overline">
            {topic}
          </Typography>
        )}
        <Typography component="h1" variant="h3">
          {title}
        </Typography>

        {importExport && (
          <Box marginTop={2}>
            <Button startIcon={<ImportIcon size={18} />}>Import</Button>
            <Button
              startIcon={<ExportIcon size={18} />}
              className={classes.buttonExport}
            >
              Export
            </Button>
          </Box>
        )}
      </Grid>
      {!!rightButtonTitle && (
        <Grid item xs={6} md={4} className={classes.rightAlign}>
          <Button
            onClick={onClick}
            color="primary"
            variant="contained"
            startIcon={<AddIcon />}
            {...rightButtonProps}
          >
            {rightButtonTitle}
          </Button>
        </Grid>
      )}
    </Grid>
  );
};

export default HeaderSample;
