import { dateToYMD } from "../../../utilities/date";
import PropTypes from "prop-types";

import "./style.css";
export function Gist({ data: { owner, html_url, description, created_at } }) {
  return (
    <div className="gist">
      <div className="gist__user">
        <div className="user__avatar">
          <img src={owner.avatar_url} alt="git user" />
        </div>
        <div className="user__info">
          <a
            className="user__name"
            href={owner.html_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="user__name--limit">{owner.login}</span>
            <span>&rarr;</span>
          </a>
          <span>{dateToYMD(new Date(created_at))}</span>
        </div>
      </div>
      <div className="gist__desc">
        <a href={html_url} target="_blank" rel="noopener noreferrer">
          {description ? description : "No Discription Available"}
        </a>
      </div>
    </div>
  );
}
Gist.propTypes = {
  data: PropTypes.object,
};
