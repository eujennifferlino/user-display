const Sidebar = () => (
  <div className="w-64 bg-secondary text-white flex flex-col">
    <div className="p-4 text-center text-2xl font-bold">Business Sync</div>
    <nav className="flex-1">
      <a href="#" className="block py-2.5 px-4 hover:bg-primary">
        Dashboard
      </a>
      <a href="#" className="block py-2.5 px-4 hover:bg-primary">
        Insights
      </a>
    </nav>
    <div className="p-4">
      <a
        href="#"
        className="block py-2.5 px-4 text-red-400 hover:bg-slate-200 hover:text-black"
      >
        Sair
      </a>
      <a href="#" className="block py-2.5 px-4 hover:bg-primary">
        Ajuda
      </a>
    </div>
  </div>
);

export default Sidebar;
