import { Link } from "react-router-dom";

function ComponentListItem({ name, link, children }) {
  return (
    <div>
      <Link to={link} style={{ fontSize: "15px" }}>
        {name}
      </Link>
      <ul>
        <li>{children}</li>
      </ul>
    </div>
  );
}

export default ComponentListItem;
