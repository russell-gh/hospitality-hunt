import Joi from "joi";

export const addJob = {
  title: Joi.string().required(),
  contract: Joi.string().required(),
  postCode: Joi.string()
    .regex(/^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i)
    .required(),
  type: Joi.string().required(),
  salary: Joi.string().required(),
  email: Joi.string().required(),
  phoneNumber: Joi.number().required(),
  description: Joi.string().min(10).max(2000).required(),
};

export const logIn = { email: Joi.string().min(10), password: Joi.required() };

export const signUp = {
  email: Joi.string().min(10).required(),
  password: Joi.required(),
  repeat_password: Joi.string().required().valid(Joi.ref("password")).messages({
    "any.only": "The two passwords do not match.",
    "any.required": "Password confirmation is required.",
  }),
};

// export const freelancerDetails = {
//   firstName: Joi.required().string().min(2),
//   surName: Joi.required().string().min(2),
//   email: Joi.required().min(5).max(32),
//   contactNumber: Joi.required().min(8).max(16),
//   experience: Joi.required(),
//   about: Joi.required().min(100).max(500),
// };

export const createUserProfile = {
  firstName: Joi.string().min(3).max(30).required(),
  lastName: Joi.string().required(),
  phoneNumber: Joi.string()
    .regex(
      /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/
    )
    .required()
    .messages({
      "string.pattern.base": "Phone number doesn't match expected pattern.",
    }),

  postcode: Joi.string()
    .regex(/^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i)
    .required(),
  experience: Joi.string().required(),
  contract: Joi.string().required(),
  position: Joi.string().required(),
  skills: Joi.string().required(),
  aboutYou: Joi.string().required(),
};

// export const login = {}

export const userProfile = {
  firstName: Joi.string().min(3).max(30).required(),
  lastName: Joi.string().required(),
  phoneNumber: Joi.string()
    .regex(
      /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/
    )
    .required(),
  postcode: Joi.string()
    .regex(/^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i)
    .required(),
  experience: Joi.string().required(),
  contract: Joi.string().required(),
  position: Joi.string().required(),
  skills: Joi.string().required(),
  aboutYou: Joi.string().required(),
};
