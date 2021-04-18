import Joi from 'joi';

export const ProfileSchema = Joi.object({
  firstName: Joi.string().trim().alphanum().min(3).max(50).required(),
  lastName: Joi.string().trim().alphanum().min(3).max(50).required(),
  quizAmount: Joi.number().integer().min(1).max(10).required(),
  quizCategory: Joi.string().trim().required(),
  quizDifficulty: Joi.string().trim().required(),
  quizType: Joi.string().trim().required(),
});
