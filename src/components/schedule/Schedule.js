import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import GameDay from "./GameDay";
import { Redirect } from "react-router-dom";
import "./schedule.css";

class Schedule extends React.Component {
  render() {
    const { auth, games } = this.props;
    if (!games) return <p>no games</p>;
    if (!auth.uid) return <Redirect to="/signin" />;
    return (
      <div className="container">
        <GameDay games={games} key={games}></GameDay>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    games: state.firestore.ordered.schedule,
    auth: state.firebase.auth
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([{ collection: "schedule", orderBy: ['time', 'asc'] }])
)(Schedule);
