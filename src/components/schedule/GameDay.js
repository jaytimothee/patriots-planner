import React from "react";
import WeatherInfo from "./WeatherInfo";
import moment from 'moment'
import M from "materialize-css";

class GameDay extends React.Component {
  componentDidMount() {
    let collapsible = document.querySelectorAll(".collapsible");

    M.Collapsible.init(collapsible, {});
  }
  render() {
    const { games } = this.props;
    return (
      <div>
        <ul className="collapsible">
          {games.map((gm, i) => {
            return (
              <li>
                <div className="display collapsible-header">
                  <div className="heading">
                    <p className="grey-text">
                      <div>
                        {gm.home ? (
                          <img
                            className="img-size"
                            src={require(`./img/Patriots.png`)}
                            alt=""
                          />
                        ) : (
                          <img
                            className="img-size"
                            src={require(`./img/${gm.team}.png`)}
                            alt=""
                          />
                        )}
                      </div>
                      {gm.home ? "Patriots" :  gm.team}
                    </p>
                  </div>
                  <div className="heading">
                    {gm.time ? (
                      <p className="grey-text">{moment(gm.time.toDate()).format('MMMM Do YYYY')}</p>
                    ) : (
                      <p className="grey-text">TBD</p>
                    )}
                  </div>
                  <div className="heading">
                    <p className="grey-text">
                    <div>
                        {gm.home ? (
                          <img
                            className="img-size"
                            src={require(`./img/${gm.team}.png`)}
                            alt=""
                          />
                        ) : (
                          <img
                            className="img-size"
                            src={require(`./img/Patriots.png`)}
                            alt=""
                          />
                        )}
                      </div>
                      {gm.home == true ? gm.team : "Patriots"}
                    </p>
                  </div>
                </div>
                <div className="collapsible-body back-drop">
                  <WeatherInfo city={gm.city} />
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default GameDay;
