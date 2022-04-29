import { BrowserRouter, useRoutes } from "react-router-dom";
import { AuxProps } from "./interface";

const routes: any[] = [
    
]


const Route: React.FC<AuxProps> => (props):JSX.Element => {
    return useRoutes(routes)
}


const Routers: React.FC<AuxProps> = (props): JSX.Element => {
  return <BrowserRouter>
    <Route />
  </BrowserRouter>;
};

export default Routers;
