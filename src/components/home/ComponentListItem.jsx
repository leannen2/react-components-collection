import { Link } from "react-router-dom";

function ComponentListItem({ name, link, children }) {
  return (
    <div>
      <Link to={link}>{name}</Link>
      <ul>
        <li>{children}</li>
      </ul>
    </div>
  );
}

export default ComponentListItem;
