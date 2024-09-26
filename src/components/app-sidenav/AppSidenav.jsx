import "./appsidenav.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons'; 


const DashboardSidenav = () => {
  return (
    <div className="app-sidenav">
      <div className="logo">GRASO</div>
      <ul>
        <li>
          <span>Dashboard</span>
        </li>
        <li>
          <span>Explore Properties</span>
        </li>
        <li>
          <span>Staking</span>
        </li>
        <li>
          <span>Add Properties</span>
        </li>
        <li>
          <span>Chat</span>
        </li>
        <li>
          <span>User Profile</span>
        </li>
        <li>
          <span>Blog</span>
        </li>
        <li>
          <span>Pages</span>
        </li>
        <li>
          <span>Authentication</span>
        </li>
        <li>
          <span>Miscellaneous</span>
        </li>
      </ul>
    </div>
  );
};

export default DashboardSidenav;
