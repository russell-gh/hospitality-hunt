import Joi from 'joi';

export const signUp = { email: Joi.string().min(10), password: Joi.required() }

// export const login = {}

