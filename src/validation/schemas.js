import Joi from "joi";

export const signUp = {
  email: Joi.string().min(10),
  password: Joi.required(),
  repeat_password: Joi.any().valid(Joi.ref("password")).required(),
};

// export const login = {}
