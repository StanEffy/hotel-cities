import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { getAuthorizationStatus, getUser } from "../../selectors";
import PropTypes from "prop-types";
import { authStatus } from "../../store/reducers/user";

const MainHeader = (props) => {
  console.log(props);
  const {
    email,
    avatar_url: avatar,
    isAuthorizationRequired: authReq,
  } = props.userInfo.userInfo;
  console.log(avatar);
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            {/* <a className="header__logo-link header__logo-link--active">
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </a> */}
            <Link to={`/`} className="header__logo-link">
              <img
                className="header__logo"
                src="/img/logo.svg"
                alt="6 cities logo"
                width="81"
                height="41"
              />
            </Link>{" "}
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item user">
                <Link
                  to={`/favs`}
                  className="header__nav-link header__nav-link--profile"
                >
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                    {authReq === authStatus.AUTH && (
                      <img
                        className="header__avatar user__avatar"
                        src={avatar}
                        alt="user avatar"
                        width="20"
                        height="20"
                      />
                    )}
                  </div>
                  <span className="header__user-name user__name">
                    {authReq === authStatus.NO_AUTH ? `Sign In` : email}
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};
MainHeader.propTypes = {
  userInfo: PropTypes.object,
};
const mapStateToProps = (state) => ({
  userInfo: state.user,
});
export default connect(mapStateToProps)(MainHeader);
