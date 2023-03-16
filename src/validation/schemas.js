import Joi from "joi";

export const signUp = { email: Joi.string().min(10), password: Joi.required() };

export const createUserProfile = {
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  phone: Joi.string().regex(
    /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/
  ),
  postcode: Joi.string().regex(/^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i),
  experience: Joi.string(),
  contract: Joi.string(),
  position: Joi.string(),
  skills: Joi.string(),
  aboutyou: Joi.string(),
};

// export const login = {}
