import Joi from "joi";
import { signUp } from "./schemas";
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

  if (valType === "createUserProfile") {
    const _joiInstance = Joi.object(createUserProfile);

    try {
      await _joiInstance.validateAsync(data);
      return true;
    } catch (error) {
      return error;
    }
  }
};
