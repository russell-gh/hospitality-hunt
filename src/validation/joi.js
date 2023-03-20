import Joi from "joi";

import { signUp, addJob, logIn } from "./schemas";
import { freelancerDetails } from "./schemas";
import { createUserProfile } from "./schemas";
import { userProfile } from "./schemas";

export const validate = async (valType, data) => {
  console.log(valType, data);

  let _joiInstance;

  if (valType === "signUp") {
    _joiInstance = Joi.object(signUp);
  } else if (valType === "addJob") {
    _joiInstance = Joi.object(addJob);
  } else if (valType === "logIn") {
    _joiInstance = Joi.object(logIn);
  } else if (valType === "createUserProfile") {
    _joiInstance = Joi.object(createUserProfile);
  }

  if (valType === "userProfile") {
    _joiInstance = Joi.object(userProfile);
  }

  try {
    await _joiInstance.validateAsync(data, { abortEarly: false });
    return true;
  } catch (error) {
    const errorsMod = {};
    error.details.forEach((e) => {
      errorsMod[e.context.key] = e.message;
    });

    return errorsMod;
  }
};
