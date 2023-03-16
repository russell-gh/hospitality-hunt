import Joi from "joi";
import { signUp, addJob } from "./schemas";

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

  if (valType === "addJob") {
    const _joiInstance = Joi.object(addJob);

    try {
      await _joiInstance.validateAsync(data);
      return true;
    } catch (error) {
      return error;
    }
  }
};
