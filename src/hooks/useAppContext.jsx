import { useContext } from "react";
import { AppContext } from "~context/AppContext.jsx";

export const useAppContext = () => {
  const app = useContext(AppContext);

  return app;
};

export default useAppContext;
