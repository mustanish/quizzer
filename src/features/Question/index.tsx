import React, { useEffect } from 'react';
import { isEmpty } from 'lodash';
import { useDispatch, useSelector } from 'react-redux';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

import { RootState } from 'redux/rootReducer';
import { listQuestions } from './Question.slice';
import styles from './Question.style';

const QuestionComponnent: React.FC<Props> = (prop) => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state: RootState) => state.user);
  const { questions } = useSelector((state: RootState) => state.question);

  const [value, setValue] = React.useState('female');
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = Object.keys(questions);

  useEffect(() => {
    if (!isEmpty(profile) && 'quizAmount' in profile) dispatch(listQuestions(profile));
  }, [dispatch, profile]);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <React.Fragment>
      <Stepper activeStep={activeStep} className={prop.classes.stepper}>
        {steps.length > 0 &&
          steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
      </Stepper>

      {steps.length > 0 &&
        Object.values(questions).map(({ question, options }, key) => {
          return (
            <RadioGroup
              key={key}
              value={value}
              onChange={handleChange}
              style={{
                display: activeStep === key ? 'block' : 'none',
              }}
            >
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography variant="h6" gutterBottom>
                    {question}
                  </Typography>
                </Grid>
                {options.map((option, index) => {
                  return (
                    <Grid key={index} item xs={6}>
                      <FormControlLabel
                        value={option}
                        control={<Radio color="primary" />}
                        label={option}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </RadioGroup>
          );
        })}

      {steps.length > 0 && (
        <div className={prop.classes.buttons}>
          {activeStep !== 0 && (
            <Button onClick={handleBack} className={prop.classes.button}>
              Back
            </Button>
          )}
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            className={prop.classes.button}
          >
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </div>
      )}
    </React.Fragment>
  );
};

interface Props extends WithStyles<typeof styles> {}

export default withStyles(styles)(QuestionComponnent);
