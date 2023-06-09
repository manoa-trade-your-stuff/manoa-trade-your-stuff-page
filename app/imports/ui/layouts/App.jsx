import React from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import { useTracker } from 'meteor/react-meteor-data';
import { Roles } from 'meteor/alanning:roles';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Landing from '../pages/Landing';
import NotFound from '../pages/NotFound';
import SignUp from '../pages/SignUp';
import SignOut from '../pages/SignOut';
import NavBar from '../components/NavBar';
import SignIn from '../pages/SignIn';
import NotAuthorized from '../pages/NotAuthorized';
import LoadingSpinner from '../components/LoadingSpinner';
/** Profile */
import UserProfile from '../pages/UserProfile';
import ListProfilesAdmin from '../pages/ListProfilesAdmin';
import AddProfile from '../pages/AddProfile';
import EditProfile from '../pages/EditProfile';

/** Item */
import ListItem from '../pages/ListItem';
import AddItem from '../pages/AddItem';
import ListItemAdmin from '../pages/ListItemAdmin';
import EditItem from '../pages/EditItem';
import ListItemUser from '../pages/ListItemUser';

/** Category */
import Category from '../pages/Category';
import Categories from '../pages/Categories';

/** Complaint */
// eslint-disable-next-line import/no-duplicates
import AddComplaints from '../pages/NotifyAdmin';

/** Notify Admin */
// eslint-disable-next-line import/no-duplicates
import NotifyAdmin from '../pages/NotifyAdmin';
import ListComplaintsAdmin from '../pages/ListComplaintsAdmin';

/** Top-level layout component for this application. Called in imports/startup/client/startup.jsx. */
const App = () => {
  const { ready } = useTracker(() => {
    const rdy = Roles.subscription.ready();
    return {
      ready: rdy,
    };
  });
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signout" element={<SignOut />} />
          <Route path="/home" element={<ProtectedRoute><Landing /></ProtectedRoute>} />
          <Route path="/notauthorized" element={<NotAuthorized />} />
          <Route path="*" element={<NotFound />} />

          <Route path="/listProfile" element={<ProtectedRoute><UserProfile /></ProtectedRoute>} />
          <Route path="/addProfile" element={<ProtectedRoute><AddProfile /></ProtectedRoute>} />
          <Route path="/editProfile/:_id" element={<ProtectedRoute><EditProfile /></ProtectedRoute>} />
          <Route path="/listProfileAdmin" element={<AdminProtectedRoute ready={ready}><ListProfilesAdmin /></AdminProtectedRoute>} />

          <Route path="/addItem" element={<ProtectedRoute><AddItem /></ProtectedRoute>} />
          <Route path="/listItem" element={<ProtectedRoute><ListItem /></ProtectedRoute>} />
          <Route path="/userListItem" element={<ProtectedRoute><ListItemUser /></ProtectedRoute>} />
          <Route path="/editItem/:_id" element={<ProtectedRoute><EditItem /></ProtectedRoute>} />
          <Route path="/listItemAdmin" element={<AdminProtectedRoute ready={ready}><ListItemAdmin /></AdminProtectedRoute>} />

          <Route path="/complaints" element={<ProtectedRoute><AddComplaints /></ProtectedRoute>} />

          <Route path="/categories" element={<ProtectedRoute><Categories /></ProtectedRoute>} />
          <Route path="/category/:category" element={<ProtectedRoute><Category /></ProtectedRoute>} />

          <Route path="/notify-admin" element={<NotifyAdmin />} />
          <Route path="/listComplaintsAdmin" element={<AdminProtectedRoute ready={ready}><ListComplaintsAdmin /></AdminProtectedRoute>} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

/*
 * ProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const ProtectedRoute = ({ children }) => {
  const isLogged = Meteor.userId() !== null;
  return isLogged ? children : <Navigate to="/signin" />;
};

/**
 * AdminProtectedRoute (see React Router v6 sample)
 * Checks for Meteor login and admin role before routing to the requested page, otherwise goes to signin page.
 * @param {any} { component: Component, ...rest }
 */
const AdminProtectedRoute = ({ ready, children }) => {
  const isLogged = Meteor.userId() !== null;
  if (!isLogged) {
    return <Navigate to="/signin" />;
  }
  if (!ready) {
    return <LoadingSpinner />;
  }
  const isAdmin = Roles.userIsInRole(Meteor.userId(), 'admin');
  return (isLogged && isAdmin) ? children : <Navigate to="/notauthorized" />;
};

// Require a component and location to be passed to each ProtectedRoute.
ProtectedRoute.propTypes = {
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

ProtectedRoute.defaultProps = {
  children: <Landing />,
};

// Require a component and location to be passed to each AdminProtectedRoute.
AdminProtectedRoute.propTypes = {
  ready: PropTypes.bool,
  children: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

AdminProtectedRoute.defaultProps = {
  ready: false,
  children: <Landing />,
};

export default App;
