import { Bell, Phone, Bot, ArrowRightLeft, CalendarCheck, PhoneMissed, Clock } from 'lucide-react';
// 1. Import Recharts components
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// 2. Define the data for the chart
const chartData = [
  { day: 'Mon', calls: 45 },
  { day: 'Tue', calls: 62 },
  { day: 'Wed', calls: 58 },
  { day: 'Thu', calls: 75 },
  { day: 'Fri', calls: 90 },
  { day: 'Sat', calls: 98 },
  { day: 'Sun', calls: 55 },
];

const DashBoard = () => {
  return (
    <div className="flex-1 bg-[#05070A] min-h-screen text-white p-8 overflow-y-auto">
      {/* Header */}
      <header className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-semibold">DashBoard Overview</h1>
        <div className="flex items-center gap-4">
          <Bell className="text-slate-400 cursor-pointer" size={20} />
          <img 
            src="../../src/image/Avatar.png" 
            className="w-10 h-10 rounded-full border-2 border-slate-700" 
            alt="Profile" 
          />
        </div>
      </header>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <StatCard title="Total Calls Today" value="127" change="+12%" icon={<Phone />} iconColor="bg-blue-500" />
        <StatCard title="AI-Handled Calls" value="98" change="+77%" icon={<Bot />} iconColor="bg-purple-500" />
        <StatCard title="Warm Transfer" value="23" change="+18%" icon={<ArrowRightLeft />} iconColor="bg-orange-500" />
        <StatCard title="Appointments Booked" value="34" change="+8%" icon={<CalendarCheck />} iconColor="bg-green-500" />
        <StatCard title="Missed/Failed Calls" value="6" change="-3%" icon={<PhoneMissed />} iconColor="bg-red-500" isNegative />
        <StatCard title="Avg Call Duration" value="3:42" change="+15%" icon={<Clock />} iconColor="bg-indigo-500" />
      </div>

      {/* 3. Replaced Placeholder with Live Recharts Component */}
      <div className="bg-[#0B0E1E] border border-slate-800 rounded-xl p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h3 className="text-lg font-medium">Call Trends - This Week</h3>
            <p className="text-slate-500 text-sm">Total: 472 calls</p>
          </div>
          <select className="bg-slate-800 border-none rounded-md px-3 py-1 text-sm outline-none">
            <option>This Week</option>
          </select>
        </div>
        
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorCalls" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#1E293B" />
              <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#64748B', fontSize: 12 }} 
                dy={10}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#64748B', fontSize: 12 }} 
                domain={[0, 100]}
              />
              <Tooltip 
                contentStyle={{ backgroundColor: '#0B0E1E', border: '1px solid #1E293B', borderRadius: '8px' }}
                itemStyle={{ color: '#3B82F6' }}
              />
              <Area 
                type="monotone" 
                dataKey="calls" 
                stroke="#3B82F6" 
                strokeWidth={3}
                fillOpacity={1} 
                fill="url(#colorCalls)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bottom Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <RecentActivity />
        <TopRequests />
      </div>
    </div>
  );
};


const StatCard = ({ title, value, change, icon, iconColor, isNegative }) => (
  <div className="bg-[#0B0E1E] border border-slate-800 p-6 rounded-xl flex justify-between items-start">
    <div>
      <p className="text-slate-500 text-sm mb-1">{title}</p>
      <h2 className="text-3xl font-bold mb-2">{value}</h2>
      <span className={`text-xs ${isNegative ? 'text-red-500' : 'text-green-500'}`}>{change}</span>
    </div>
    <div className={`${iconColor} p-2 rounded-lg`}>{icon}</div>
  </div>
);

const RecentActivity = () => (
  <div className="bg-[#0B0E1E] border border-slate-800 p-6 rounded-xl">
    <h3 className="text-lg font-medium mb-4">Recent Activity</h3>
    <div className="space-y-4">
      {[
        { text: "AI booked appointment for iPhone 13 screen repair", time: "2 min ago", color: "bg-green-500" },
        { text: "Warm transfer to technician - Software issue", time: "5 min ago", color: "bg-orange-500" },
        { text: "Quote provided for iPad battery replacement", time: "8 min ago", color: "bg-green-500" },
        { text: "Call dropped after 12 seconds", time: "15 min ago", color: "bg-red-500" },
      ].map((item, i) => (
        <div key={i} className="bg-slate-900/50 p-3 rounded-lg flex items-center gap-3">
          <div className={`w-2 h-2 rounded-full ${item.color}`} />
          <div>
            <p className="text-sm">{item.text}</p>
            <p className="text-xs text-slate-500">{item.time}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const TopRequests = () => (
    <div className="bg-[#0B0E1E] border border-slate-800 p-6 rounded-xl">
      <h3 className="text-lg font-medium mb-4">Top Repair Requests</h3>
      <div className="space-y-6">
        {[
          { label: "Screen Repair", val: 156, width: "w-[80%]" },
          { label: "Battery Replacement", val: 89, width: "w-[50%]" },
          { label: "Back Glass Repair", val: 67, width: "w-[35%]" },
          { label: "Software Issues", val: 45, width: "w-[25%]" },
        ].map((item, i) => (
          <div key={i}>
            <div className="flex justify-between text-sm mb-2">
              <span className="text-slate-400">{item.label}</span>
              <span>{item.val} requests</span>
            </div>
            <div className="w-full bg-slate-800 h-2 rounded-full">
              <div className={`${item.width} bg-cyan-400 h-full rounded-full shadow-[0_0_8px_rgba(34,211,238,0.6)]`} />
            </div>
          </div>
        ))}
      </div>
    </div>
);

export default DashBoard;