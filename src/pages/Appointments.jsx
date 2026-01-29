import React from 'react';
import { Bell, Calendar, CheckCircle, Clock, Copy, ChevronLeft, ChevronRight } from 'lucide-react';

const Appointments = () => {
  const appointmentData = Array(6).fill({
    name: "Jane.D",
    phone: "01960685765",
    email: "admin@gmail.com",
    device: "Apple/Iphone 13pro",
    repair: "Screen",
    date: "02/06/2026",
    slot: "1",
    time: "09:00"
  });

  return (
    <div className="flex-1 bg-[#05070A] min-h-screen text-white p-8 overflow-y-auto">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">Appointments</h1>
        <div className="flex items-center gap-4">
          <Bell className="text-slate-400 cursor-pointer" size={20} />
          <img 
            src="https://i.ibb.co.com/yFLCtbLh/Avatar.png" 
            className="w-10 h-10 rounded-full border-2 border-slate-700" 
            alt="Profile" 
          />
        </div>
      </header>

      {/* Top Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <SummaryCard 
          title="Total Booked" 
          value="34" 
          subtext="+8 this week" 
          icon={<Calendar size={18} className="text-blue-400" />} 
          subColor="text-green-500"
        />
        <SummaryCard 
          title="AI Booked" 
          value="28" 
          subtext="82% of total" 
          icon={<CheckCircle size={18} className="text-green-400" />} 
          subColor="text-slate-500"
        />
        <SummaryCard 
          title="Pending" 
          value="3" 
          subtext="Awaiting confirmation" 
          icon={<Clock size={18} className="text-yellow-500" />} 
          subColor="text-slate-500"
        />
      </div>

      {/* Booking Link Section */}
      <div className="bg-[#0B0E1E] border border-slate-800 rounded-xl p-6 mb-8">
        <p className="text-sm text-slate-400 mb-3">Booking Link</p>
        <div className="flex gap-2">
          <div className="flex-1 bg-[#05070A] border border-slate-800 rounded-lg px-4 py-3 text-slate-300 text-sm font-mono">
            https://techstore.com/book?id=store123
          </div>
          <button className="flex items-center gap-2 bg-[#0B0E1E] border border-slate-700 px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors">
            <Copy size={18} className="text-slate-300" />
            <span className="text-sm">Copy Link</span>
          </button>
        </div>
      </div>

      {/* Appointments Table */}
      <div className="bg-[#0B0E1E] border border-slate-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="text-slate-500 border-b border-slate-800">
              <tr>
                <th className="px-6 py-4 font-medium">Client Name</th>
                <th className="px-6 py-4 font-medium">Client Phone</th>
                <th className="px-6 py-4 font-medium">Client mail</th>
                <th className="px-6 py-4 font-medium">Device</th>
                <th className="px-6 py-4 font-medium">Repair Type</th>
                <th className="px-6 py-4 font-medium">Date</th>
                <th className="px-6 py-4 font-medium">Slot no</th>
                <th className="px-6 py-4 font-medium">Start Time</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/50">
              {appointmentData.map((row, i) => (
                <tr key={i} className="hover:bg-slate-900/30 transition-colors">
                  <td className="px-6 py-4 text-blue-400 underline cursor-pointer">{row.name}</td>
                  <td className="px-6 py-4 text-slate-300">{row.phone}</td>
                  <td className="px-6 py-4 text-slate-300">{row.email}</td>
                  <td className="px-6 py-4 text-slate-300">{row.device}</td>
                  <td className="px-6 py-4 text-slate-300">{row.repair}</td>
                  <td className="px-6 py-4 text-slate-300">{row.date}</td>
                  <td className="px-6 py-4 text-slate-300">{row.slot}</td>
                  <td className="px-6 py-4 text-slate-300">{row.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 p-6 border-t border-slate-800">
          <button className="p-1 text-slate-500 hover:text-white"><ChevronLeft size={20}/></button>
          {[1, 2, 3, 4, 5, '...', 11].map((page, i) => (
            <button 
              key={i} 
              className={`w-8 h-8 rounded-md text-xs flex items-center justify-center transition-colors ${page === 2 ? 'bg-blue-600 text-white' : 'text-slate-500 hover:bg-slate-800'}`}
            >
              {page}
            </button>
          ))}
          <button className="p-1 text-blue-500 hover:text-blue-400 flex items-center gap-1 text-xs">
            Next <ChevronRight size={20}/>
          </button>
        </div>
      </div>
    </div>
  );
};

const SummaryCard = ({ title, value, subtext, icon, subColor }) => (
  <div className="bg-[#0B0E1E] border border-slate-800 p-6 rounded-xl">
    <div className="flex items-center gap-2 text-slate-400 text-xs mb-4">
      {icon}
      <span>{title}</span>
    </div>
    <div className="flex flex-col gap-1">
      <span className="text-3xl font-bold">{value}</span>
      <span className={`text-xs ${subColor}`}>{subtext}</span>
    </div>
  </div>
);

export default Appointments;