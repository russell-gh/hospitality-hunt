import Joi from "joi";

export const signUp = { email: Joi.string().min(10), password: Joi.required() };

export const addJob = {
  jobtitle: Joi.string().required(),
  jobduration: Joi.string().required(),
  postcode: Joi.string()
    .regex(/^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i)
    .required(),
  businesssector: Joi.string().required(),
  salaryrange: Joi.string().required(),
  businessemail: Joi.string().required(),
  businessphone: Joi.number().required(),
  jobdescription: Joi.string().min(10).max(2000).required(),
};
