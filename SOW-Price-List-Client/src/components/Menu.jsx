import {
  FcViewDetails,
  FcBusinessman,
  FcMindMap,
  FcRules,
  FcCurrencyExchange,
  FcHighPriority,
  FcVip,
  FcServices,
  FcBusinessContact,
  FcList,
  FcImport,
  FcBrokenLink,
} from "react-icons/fc";

const Menu = () => {
  return (
    <nav className="menu-wrapper">
      <div className="title">Menu</div>
      <div className="menu-items">
        {[
          {
            disabled: false,
            active: false,
            menu: "Invoices",
            icon: <FcViewDetails />,
          },
          {
            disabled: false,
            active: false,
            menu: "Customers",
            icon: <FcBusinessman />,
          },
          {
            disabled: false,
            active: false,
            menu: "My Business",
            icon: <FcMindMap />,
          },
          {
            disabled: false,
            active: false,
            menu: "Invoice Journal",
            icon: <FcRules />,
          },
          {
            disabled: false,
            active: true,
            menu: "Price List",
            icon: <FcCurrencyExchange />,
          },
          {
            disabled: false,
            active: false,
            menu: "Multiple Invoicing",
            icon: <FcList />,
          },
          {
            disabled: false,
            active: false,
            menu: "Unpaid Invoices",
            icon: <FcHighPriority />,
          },
          { disabled: false, active: false, menu: "Offer", icon: <FcVip /> },
          {
            disabled: true,
            active: false,
            menu: "Inventory Control",
            icon: <FcServices />,
          },
          {
            disabled: true,
            active: false,
            menu: "Member Invoicing",
            icon: <FcBusinessContact />,
          },
          {
            disabled: false,
            active: false,
            menu: "Import/Export",
            icon: <FcImport />,
          },
          {
            disabled: false,
            active: false,
            menu: "Log out",
            icon: <FcBrokenLink />,
          },
        ].map(({ menu, icon, active, disabled }) => {
          return (
            <div
              className={`${disabled ? "disabled" : ""} ${
                active ? "active" : ""
              } menu-item`}
              key={menu}
            >
              <div className="menu-icon">{icon}</div>
              <div className="menu">{menu}</div>
            </div>
          );
        })}
      </div>
    </nav>
  );
};

export default Menu;
