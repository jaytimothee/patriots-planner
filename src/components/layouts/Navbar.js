import React from "react";
import { Link } from "react-router-dom";
import SignedInLinks from "./SignedInLinks";
import SignedOutLinks from "./SignedOutLinks";
import { connect } from "react-redux";

const Navbar = props => {
  const { auth, profile } = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;
  return (
    <div>
      <nav className="nav-wrapper grey darken-2">
        <div className="container">
          <Link to="/" className="brand-logo">
            Patriots Planner
          </Link>
          {links}
        </div>
      </nav>
    </div>
  );
};

const mapPropsToState = state => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile
  };
};

export default connect(mapPropsToState)(Navbar);
