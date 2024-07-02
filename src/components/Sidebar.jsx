import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faChartBar,
  faCog,
  faUser,
  faSignOutAlt,
  faQuestionCircle,
  faBars,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  return (
    <div
      className={`bg-secondary text-white flex flex-col ${
        isOpen ? "w-64" : "w-20"
      } transition-width duration-300`}
    >
      <div className="flex items-center justify-between p-4">
        {isOpen && <div className="text-2xl font-bold">Business Sync</div>}
        <button
          className="text-white focus:outline-none"
          onClick={toggleSidebar}
        >
          <FontAwesomeIcon icon={faBars} size="lg" />
        </button>
      </div>

      <nav className="flex-1">
        <a
          href="#"
          className={`flex items-center py-2.5 px-4 hover:bg-primary ${
            selectedItem === "home" ? "bg-primary" : ""
          }`}
          onClick={() => handleItemClick("home")}
        >
          <FontAwesomeIcon icon={faHome} className="mr-2" /> {isOpen && "Home"}
        </a>
        <a
          href="#"
          className={`flex items-center py-2.5 px-4 hover:bg-primary ${
            selectedItem === "dashboard" ? "bg-primary" : ""
          }`}
          onClick={() => handleItemClick("dashboard")}
        >
          <FontAwesomeIcon icon={faChartBar} className="mr-2" />{" "}
          {isOpen && "Dashboard"}
        </a>
        <a
          href="#"
          className={`flex items-center py-2.5 px-4 hover:bg-primary ${
            selectedItem === "settings" ? "bg-primary" : ""
          }`}
          onClick={() => handleItemClick("settings")}
        >
          <FontAwesomeIcon icon={faCog} className="mr-2" />{" "}
          {isOpen && "Configurações"}
        </a>
        <a
          href="#"
          className={`flex items-center py-2.5 px-4 hover:bg-primary ${
            selectedItem === "account" ? "bg-primary" : ""
          }`}
          onClick={() => handleItemClick("account")}
        >
          <FontAwesomeIcon icon={faUser} className="mr-2" /> {isOpen && "Conta"}
        </a>
      </nav>

      <div className="p-4">
        <a
          href="#"
          className="flex items-center py-2.5 px-4 text-red-400 hover:bg-slate-200 hover:text-black"
        >
          <FontAwesomeIcon icon={faSignOutAlt} className="mr-2" />{" "}
          {isOpen && "Sair"}
        </a>
        <a href="#" className="flex items-center py-2.5 px-4 hover:bg-primary">
          <FontAwesomeIcon icon={faQuestionCircle} className="mr-2" />{" "}
          {isOpen && "Ajuda"}
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
