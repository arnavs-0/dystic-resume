import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from '@material-ui/core/LinearProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import InputLabel from '@material-ui/core/InputLabel';
import { Styles } from "@material-ui/core/styles/withStyles";

function LinearProgressWithLabel(props) {
  const StyledLinearProgress = withStyles({
    colorPrimary: {
      backgroundColor: '#ede6e6',
    },
    barColorPrimary: {
      backgroundColor: '#F4B2B0',
    },
  })(LinearProgress);
  return (
    <div className="ml-5 mt-3 block">
      <div className="mr-3 bg-gray-800 inline text-white text-xs px-3 py-1 rounded-lg mt-8 cursor-default select-none">
        {props.label}
      </div>
      <Box display="flex" alignItems="center">
        <Box width="100%" mr={1}>
          <StyledLinearProgress variant="determinate" {...props} />
        </Box>
        <Box minWidth={35}>
          <Typography variant="body2" color="textSecondary" className="mr-4">
            {`${props.value}%`}
          </Typography>
        </Box>
      </Box>
    </div>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
});

export default function SkillBar(props) {
  const classes = useStyles();
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress >= props.percent ? props.percent : prevProgress + 1,
      );
    }, 40);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={classes.root}>
      <LinearProgressWithLabel value={progress} label={props.label} />
    </div>
  );
}
