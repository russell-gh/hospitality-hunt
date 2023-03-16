import Joi from "joi";

export const signUp = {
  email: Joi.string().min(10),
  password: Joi.required(),
  repeat_password: Joi.string().required().valid(Joi.ref("password")).messages({
    "any.only": "The two passwords do not match.",
    "any.required": "Please confirm your password.",
  }),
};

// export const login = {}
