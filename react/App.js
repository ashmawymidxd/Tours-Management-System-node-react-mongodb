import "./App.css";
import "./assets/mdb.min.css";
import { Route, Routes } from "react-router-dom";
import { UserContextProvider } from "./UserContext";

import {
  GestHome,
  GestAboute,
  GestToursPackages,
  GestToursPackage,
  GestEnquiry,
  GestPrivacyPolicy,
  GestTermsofUse,
  GestContactUs,
  LoginPage,
  RegisterPage,
  MyProfile,
  ChangePassword,
  MyTourHistory,
  IssueTickets,
  Dashboard,
  CreatePackage,
  ManagePackages,
  ManagePackage,
  ManageIssues,
  ManageEnquires,
  ManagePages,
  DeletePackage,
  ManageBooking,
  ManageBack,
  AddPackageReview,
} from "./pages";

import { GestLayout, DashboardLayout } from "./Layouts";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<GestLayout />}>
          <Route index element={<GestHome />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route path="/gest" element={<GestLayout />}>
          <Route index element={<GestHome />} />
          <Route path="/gest/home" element={<GestHome />} />
          <Route path="/gest/About" element={<GestAboute />} />
          <Route path="/gest/ToursPackages" element={<GestToursPackages />} />
          <Route path="/gest/PrivacyPolicy" element={<GestPrivacyPolicy />} />
          <Route path="/gest/TermsofUse" element={<GestTermsofUse />} />
          <Route path="/gest/ContactUs" element={<GestContactUs />} />
          <Route path="/gest/Package/:id" element={<GestToursPackage />} />
          <Route path="/gest/Enquiry" element={<GestEnquiry />} />
        </Route>

        <Route path="/user" element={<GestLayout />}>
          <Route path="/user/MyProfile" element={<MyProfile />} />
          <Route path="/user/ChangePassword" element={<ChangePassword />} />
          <Route path="/user/MyTourHistory" element={<MyTourHistory />} />
          <Route path="/user/IssueTickets" element={<IssueTickets />} />
          <Route
            path="/user/AddPackageReview/:id"
            element={<AddPackageReview />}
          />
        </Route>

        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard/Home" element={<Dashboard />} />
          <Route path="/dashboard/CreatePackage" element={<CreatePackage />} />
          <Route
            path="/dashboard/ManagePackages"
            element={<ManagePackages />}
          />
          <Route path="/dashboard/ManageBooking" element={<ManageBooking />} />
          <Route
            path="/dashboard/ManagePackage/:id"
            element={<ManagePackage />}
          />
          <Route path="/dashboard/ManageBack/:id" element={<ManageBack />} />
          <Route
            path="/dashboard/DeletePackage/:id"
            element={<DeletePackage />}
          />
          <Route path="/dashboard/ManageIssues" element={<ManageIssues />} />
          <Route
            path="/dashboard/ManageEnquires"
            element={<ManageEnquires />}
          />
          <Route path="/dashboard/ManagePages" element={<ManagePages />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
