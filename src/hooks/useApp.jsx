import { useContext } from 'react';
import { AppContext } from '~context/AppContext.jsx';

export const useApp = () => {
  const app = useContext(AppContext);

  return app;
};

export default useApp;
