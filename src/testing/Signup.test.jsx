import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Signup from "../components/Signup";

test("Signup shows email label", () => {
  const { getByLabelText } = render(
    <Provider store={store}>
      <Signup />
    </Provider>
  );

  expect(getByLabelText("Email")).toBeInTheDocument();
});
