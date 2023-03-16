import Joi from "joi";

export const signUp = { email: Joi.string().min(10), password: Joi.required() };

// export const freelancerDetails = {
//   firstName: Joi.required().string().min(2),
//   surName: Joi.required().string().min(2),
//   email: Joi.required().min(5).max(32),
//   contactNumber: Joi.required().min(8).max(16),
//   experience: Joi.required(),
//   about: Joi.required().min(100).max(500),
// };

// export const login = {}
