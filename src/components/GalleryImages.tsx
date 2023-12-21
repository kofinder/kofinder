import React from 'react';

import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import {
  Button,
  colors,
  MobileStepper,
  Paper,
  Typography,
  useTheme,
} from '@mui/material';
import { makeStyles } from 'tss-react/mui';
// import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';

const useStyles = makeStyles()((theme: any) => ({
  root: {
    maxWidth: 1024,
    maxHeight: 600,
    flexGrow: 1,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  contentImg: {
    width: '100%',
    height: '100%',
    flexGrow: 1,
    background: colors.grey[400],
  },
  img: {
    display: 'block',
    overflow: 'hidden',
    maxHeight: '100%',
    maxWidth: '100%',
    margin: 'auto',
  },
}));

export type IGalleryImage = {
  label: string;
  img: string;
};

type IParams = IDivParams & {
  images: IGalleryImage[];
  className?: string;
};

function GalleryImages(params: IParams) {
  const { images, className, ...props } = params;
  const { classes, cx } = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div {...props} className={cx(classes.root, className)}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>{images[activeStep].label}</Typography>
      </Paper>
      <div className={classes.contentImg}>
        <img
          className={classes.img}
          src={images[activeStep].img}
          alt={images[activeStep].label}
        />
      </div>

      <MobileStepper
        steps={maxSteps}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Próximo
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Anterior
          </Button>
        }
      />
    </div>
  );
}

export default GalleryImages;
