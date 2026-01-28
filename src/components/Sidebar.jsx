import { LayoutDashboard, PhoneCall, Calendar, Settings, LogOut, Zap } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const SideBar = () => {
  const location = useLocation();
  
  const menuItems = [
    { name: 'Dashboard Overview', icon: <LayoutDashboard size={20} />, path: '/' },
    { name: 'Call Logs', icon: <PhoneCall size={20} />, path: '/calls' },
    { name: 'Appointments', icon: <Calendar size={20} />, path: '/appointments' },
    { name: 'Settings', icon: <Settings size={20} />, path: '/settings' },
  ];

  return (
    <div className="w-64 h-screen bg-[#0B0E1E] text-slate-400 flex flex-col border-r border-slate-800">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-cyan-400 p-2 rounded-lg text-black">
          <Zap fill="currentColor" size={24} />
        </div>
      </div>

      <nav className="flex-1 mt-4">
        {menuItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              className={`flex items-center gap-3 px-6 py-4 transition-all ${
                isActive 
                ? 'text-white border-l-4 border-cyan-400 bg-gradient-to-r from-cyan-400/10 to-transparent' 
                : 'hover:text-white'
              }`}
            >
              {item.icon}
              <span className="text-sm font-medium">{item.name}</span>
            </Link>
          );
        })}
      </nav>

      <button className="p-6 flex items-center gap-3 text-red-500 hover:bg-red-500/10 transition-colors">
        <LogOut size={20} />
        <span className="text-sm font-medium">Log Out</span>
      </button>
    </div>
  );
};

export default SideBar;