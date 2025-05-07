import logo from "../assets/menu.svg";

const Header = () => {
  return (
    <header className="header">
      <img className="menu-icon" src={logo} alt="Menu Icon" />
      <div className="user-info">
        <div className="user-image">
          <img src="/avatar.png" alt="Avatar" />
          <div className="active-indicator" />
        </div>
        <div className="user-details">
          <p className="user-name">John Andre</p>
          <p className="location">Storfjord AS</p>
        </div>
      </div>
      <div className="language-selector">
        <span>Norsk Bokmal</span>
        <img src="https://flagcdn.com/w20/no.png" alt="Norway Flag" />
      </div>
    </header>
  );
};

export default Header;
