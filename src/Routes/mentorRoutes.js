import { Home } from "../Pages/Home/Home.js";
import  MentorDashboard  from "../Pages/Mentor/MentorDashboard";

export const mentorRoutes = [
    {
        path:'/',
        component: Home,
        exact:true
    },
    {
        path:'/mentor',
        component: MentorDashboard,
        exact:true
    },
   
]