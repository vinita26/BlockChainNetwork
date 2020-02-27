// @material-ui/icons
import Dashboard from "@material-ui/icons/Dashboard";
import Person from "@material-ui/icons/Person";
import Gavel from "@material-ui/icons/Gavel";
import Build from "@material-ui/icons/Build";
import Visibility from "@material-ui/icons/Visibility";
// core components/views for Admin layout
import Login from './views/Login.js';
import DashboardPage from "views/Dashboard/Dashboard.js";
import SupplierProfile from "views/SupplierProfile/SupplierProfile.js";
import OEMProfile from "views/OEMProfile/OEMProfile.js";
import RetailerProfile from "views/RetailerProfile/RetailerProfile.js";
import UserProfile from "views/UserProfile/UserProfile.js";

const dashboardRoutes = [
  // {
  //   path: "/login",
  //   name: "Login",
  //   icon: Login,
  //   component: Login,
  //   layout: "/admin"
  // },
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: Dashboard,
    component: DashboardPage,
    layout: "/admin"
  },
  {
    path: "/supplier",
    name: "Supplier Profile",
    icon: Gavel,
    component: SupplierProfile,
    layout: "/admin"
  },
  {
    path: "/oem",
    name: "OEM Profile",
    icon: Build,
    component: OEMProfile,
    layout: "/admin"
  },
  {
    path: "/retailer",
    name: "Retailer Profile",
    icon: Visibility,
    component: RetailerProfile,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: Person,
    component: UserProfile,
    layout: "/admin"
  }
];

export default dashboardRoutes;
