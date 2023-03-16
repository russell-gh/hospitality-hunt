import Joi from "joi";
import { signUp, logIn } from "./schemas";

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
  if (valType === "logIn") {
    const _joiInstance = Joi.object(logIn);

    try {
      await _joiInstance.validateAsync(data);
      return true;
    } catch (error) {
      return error;
    }
  }
};
