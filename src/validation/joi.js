import Joi from "joi";

import { signUp, addJob, logIn } from "./schemas";
import { freelancerDetails } from "./schemas";
import { createUserProfile } from "./schemas";

export const validate = async (valType, data) => {
  console.log(valType, data);

  if (valType === "signUp") {
    const _joiInstance = Joi.object(signUp);

    try {
      await _joiInstance.validateAsync(data);
      return true;
    } catch (error) {
      return error;
    }
  }
  let _joiInstance;
  if (valType === "addJob") {
    _joiInstance = Joi.object(addJob);
  }

  if (valType === "logIn") {
    _joiInstance = Joi.object(logIn);
  }

  if (valType === "createUserProfile") {
    _joiInstance = Joi.object(createUserProfile);
  }

  try {
    await _joiInstance.validateAsync(data);
    return true;
  } catch (error) {
    return error;
  }
};
