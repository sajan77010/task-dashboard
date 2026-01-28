import React, { useState } from 'react';
import { Bell, Camera } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('Profile');

  return (
    <div className="flex-1 bg-[#05070A] min-h-screen text-white p-8 overflow-y-auto">
      {/* Header */}
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-semibold">Settings</h1>
        <div className="flex items-center gap-4">
          <Bell className="text-slate-400 cursor-pointer" size={20} />
          <img 
            src="../../src/image/Avatar.png" 
            className="w-10 h-10 rounded-full border-2 border-slate-700" 
            alt="Profile" 
          />
        </div>
      </header>

      {/* Tab Navigation */}
      <div className="flex gap-10 border-b border-slate-800 mb-10">
        {['Profile', 'Password Settings'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`pb-4 text-lg font-medium transition-all relative ${
              activeTab === tab ? 'text-white' : 'text-slate-500'
            }`}
          >
            {tab}
            {activeTab === tab && (
              <div className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.5)]" />
            )}
          </button>
        ))}
      </div>

      {activeTab === 'Profile' ? <ProfileTab /> : <PasswordTab />}
    </div>
  );
};

// Profile Content Section
const ProfileTab = () => (
  <div className="max-w-2xl animate-in fade-in duration-500">
    <div className="mb-8">
      <h3 className="text-slate-400 text-sm mb-4">Profile Image</h3>
      <div className="flex items-center gap-6">
        <div className="relative group">
          <img 
            src="../../src/image/Avatar.png" 
            className="w-24 h-24 rounded-full border-2 border-slate-700 object-cover" 
            alt="User avatar" 
          />
          <div className="absolute inset-0 flex items-center justify-center bg-black/40 rounded-full opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
            <Camera size={20} />
          </div>
        </div>
        <button className="px-4 py-2 bg-[#0B0E1E] border border-slate-700 rounded-lg text-sm text-slate-300 hover:bg-slate-800 transition-all shadow-[0_0_15px_rgba(59,130,246,0.1)]">
          Edit Profile
        </button>
      </div>
    </div>

    {/* Profile Information List */}
    <div className="space-y-8 mt-10">
      <InfoRow label="Full Name:" value="Jane D." />
      <InfoRow label="Email:" value="jane@gmail.com" />
      <InfoRow label="Store Name:" value="Ubreakfix Store" />
      <InfoRow label="Store Address:" value="123 Main Street, New York, NY 10001" />
    </div>
  </div>
);

// Placeholder for Password Settings
const PasswordTab = () => (
  <div className="max-w-md space-y-6 animate-in fade-in duration-500">
    <div>
      <label className="block text-sm text-slate-400 mb-2">Current Password</label>
      <input type="password" underline className="w-full bg-[#0B0E1E] border border-slate-800 rounded-lg px-4 py-2 outline-none focus:border-blue-500 transition-all" />
    </div>
    <div>
      <label className="block text-sm text-slate-400 mb-2">New Password</label>
      <input type="password" underline className="w-full bg-[#0B0E1E] border border-slate-800 rounded-lg px-4 py-2 outline-none focus:border-blue-500 transition-all" />
    </div>
    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors">
      Update Password
    </button>
  </div>
);

// Reusable row for profile info
const InfoRow = ({ label, value }) => (
  <div className="flex border-b border-slate-800/50 pb-4">
    <p className="w-40 text-slate-400 text-sm font-medium">{label}</p>
    <p className="text-slate-200 text-sm">{value}</p>
  </div>
);

export default Settings;