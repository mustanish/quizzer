import React from 'react';
import { withStyles, WithStyles } from '@material-ui/core/styles';
import { Typography, Grid, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import { joiResolver } from '@hookform/resolvers/joi';
import { useHistory } from 'react-router-dom';

import FormSelect from 'components/select';
import FormInput from 'components/input';
import { Profile } from './User.slice';
import { ProfileSchema } from 'schemas/Profile';
import { setProfile } from './User.slice';
import { RootState } from 'redux/rootReducer';
import { createProfile } from 'apis/Profile.api';
import data from 'data.json';

import styles from './User.styles';

const ProfileComponent: React.FC<Props> = (prop) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { profile } = useSelector((state: RootState) => state.user);

  const { handleSubmit, errors, control } = useForm<Profile>({
    defaultValues: { ...profile },
    resolver: joiResolver(ProfileSchema),
  });

  const onSubmit = (data: Profile) => {
    createProfile(data);
    dispatch(setProfile(data));
    history.push('/play');
  };

  return (
    <React.Fragment>
      <Typography component="h1" variant="h4" align="center">
        Player Profile
      </Typography>
      <form className={prop.classes.form} onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <FormInput
              name="firstName"
              label="First Name"
              type="text"
              required={true}
              errmsg={errors.firstName?.message}
              control={control}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormInput
              name="lastName"
              label="Last Name"
              type="text"
              required={true}
              errmsg={errors.lastName?.message}
              control={control}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormInput
              name="quizAmount"
              label="No Of Questions"
              type="number"
              required={true}
              errmsg={errors.quizAmount?.message}
              control={control}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormSelect
              name="quizCategory"
              label="Select Category"
              required={true}
              items={data.categories}
              errmsg={errors.quizCategory?.message}
              control={control}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormSelect
              name="quizDifficulty"
              label="Select Difficulty"
              required={true}
              items={data.diffculties}
              errmsg={errors.quizDifficulty?.message}
              control={control}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormSelect
              name="quizType"
              label="Select Type"
              required={true}
              items={data.types}
              errmsg={errors.quizType?.message}
              control={control}
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          variant="contained"
          fullWidth
          color="primary"
          className={prop.classes.submit}
        >
          {' '}
          Get Questions{' '}
        </Button>
      </form>
    </React.Fragment>
  );
};

interface Props extends WithStyles<typeof styles> {}

export default withStyles(styles)(ProfileComponent);
