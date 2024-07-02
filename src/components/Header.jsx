import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

import PropTypes from "prop-types";

const Header = ({ search, setSearch }) => (
  <header className="bg-white shadow p-4 flex items-center justify-between">
    <div className="relative">
      <input
        type="text"
        className="p-2 pl-10 pr-4 border rounded w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-accent"
        placeholder="Busque um usuário..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <FontAwesomeIcon icon={faSearch} className="text-gray-400" />
      </div>
    </div>
    <button className="bg-primary text-white hover:bg-slate-200 hover:text-black px-4 py-2 rounded ml-4">
      Novo usuário
    </button>
  </header>
);

Header.propTypes = {
  search: PropTypes.string.isRequired,
  setSearch: PropTypes.func.isRequired,
};

export default Header;
