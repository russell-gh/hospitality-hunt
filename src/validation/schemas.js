import Joi from "joi";

const emailRegex = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
);
/* eslint-disable */
const phoneNumberRegex = new RegExp(
  /^(?:(?:\(?(?:0(?:0|11)\)?[\s-]?\(?|\+)44\)?[\s-]?(?:\(?0\)?[\s-]?)?)|(?:\(?0))(?:(?:\d{5}\)?[\s-]?\d{4,5})|(?:\d{4}\)?[\s-]?(?:\d{5}|\d{3}[\s-]?\d{3}))|(?:\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4})|(?:\d{2}\)?[\s-]?\d{4}[\s-]?\d{4}))(?:[\s-]?(?:x|ext\.?|\#)\d{3,4})?$/
);
/* eslint-enable */

export const addJob = {
  title: Joi.string().required(),
  contract: Joi.string().required(),
  postCode: Joi.string()
    .regex(/^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i)
    .required(),
  type: Joi.string().required(),
  salary: Joi.string().required(),
  email: Joi.string().regex(emailRegex).required().messages({
    "string.pattern.base": "Email doesn't match expected pattern.",
  }),
  phoneNumber: Joi.number().required(),
  description: Joi.string().min(10).max(2000).required(),
};

export const logIn = {
  email: Joi.string().min(5),
  password: Joi.string().min(5),
};

export const signUp = {
  email: Joi.string().regex(emailRegex).required().messages({
    "string.pattern.base": "Email doesn't match expected pattern.",
  }),
  password: Joi.required(),
  repeat_password: Joi.string().required().valid(Joi.ref("password")).messages({
    "any.only": "The two passwords do not match.",
    "any.required": "Password confirmation is required.",
  }),
};

export const createUserProfile = {
  firstName: Joi.string().min(3).max(30).required(),
  secondName: Joi.string().required(),
  phoneNumber: Joi.string().regex(phoneNumberRegex).required().messages({
    "string.pattern.base": "Phone number doesn't match expected pattern.",
  }),
  postCode: Joi.string()
    .regex(/^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i)
    .required(),
  experience: Joi.string().required(),
  contract: Joi.array().required(),
  position: Joi.array().required(),
  skills: Joi.string().required(),
  aboutYou: Joi.string().required(),
};

export const createBusinessProfile = {
  name: Joi.string().min(3).max(30).required(),
  phoneNumber: Joi.string().regex(phoneNumberRegex).required().messages({
    "string.pattern.base": "business number doesn't match expected pattern.",
  }),
  type: Joi.required(),
  details: Joi.string().required(),
};

export const userProfile = {
  id: Joi.required(),
  firstName: Joi.string().min(3).max(30).required(),
  secondName: Joi.string().required(),
  phoneNumber: Joi.string().regex(phoneNumberRegex).required(),
  postCode: Joi.string()
    .regex(/^[A-Z]{1,2}[0-9]{1,2} ?[0-9][A-Z]{2}$/i)
    .required(),
  experience: Joi.string().required(),
  contract: Joi.required(),
  position: Joi.required(),
  skills: Joi.string().required(),
  aboutYou: Joi.string().required(),
  image: Joi.required(),
};

export const businessProfile = {
  id: Joi.required(),
  name: Joi.string().min(3).max(30).required(),
  type: Joi.required(),
  phoneNumber: Joi.string().regex(phoneNumberRegex).required(),
  details: Joi.string().required(),
};
