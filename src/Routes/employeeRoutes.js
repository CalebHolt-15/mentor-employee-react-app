import EmployeeDashboard from "../Pages/Employee/EmployeeDashboard";
import { Home } from "../Pages/Home/Home";

export const employeeRoutes = [
    {
        path:'/',
        component: Home,
        exact:true
    },
    {
        path:'/employee',
        component: EmployeeDashboard,
        exact:true
    },
   
]