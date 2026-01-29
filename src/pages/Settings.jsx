import React, { useState } from 'react';
import { Bell, Camera, SquarePen } from 'lucide-react';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('Profile');
  const [isEditing, setIsEditing] = useState(false);

  // Function to handle the toggle
  const handleEditToggle = () => setIsEditing(true);
  const handleSave = () => setIsEditing(false);

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
            onClick={() => {
              setActiveTab(tab);
              setIsEditing(false); // Reset editing when switching tabs
            }}
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

      {activeTab === 'Profile' ? (
        <ProfileTab isEditing={isEditing} onEdit={handleEditToggle} onSave={handleSave} />
      ) : (
        <PasswordTab />
      )}
    </div>
  );
};

const ProfileTab = ({ isEditing, onEdit, onSave }) => {
  // If editing mode is ON, show the form with inputs and the large Green Save button
  if (isEditing) {
    return (
      <div className="max-w-4xl animate-in fade-in duration-500">
        <div className="mb-8">
          <h3 className="text-slate-400 text-sm mb-4">Profile Image</h3>
          <div className="relative w-24 h-24">
            <img 
              src="../../src/image/Avatar.png" 
              className="w-24 h-24 rounded-full border-2 border-slate-700 object-cover" 
              alt="User avatar" 
            />
            {/* The small edit icon on the avatar from your image */}
            <div className="absolute bottom-0 right-0 bg-[#1e293b] p-1.5 rounded-lg border border-slate-600 shadow-lg cursor-pointer">
              <SquarePen size={16} className="text-blue-400" />
            </div>
          </div>
        </div>

        {/* Input Grid matching your image layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mt-10">
          <EditInput label="Full Name" defaultValue="Jane D." />
          <EditInput label="Email" defaultValue="jane@gmail.com" />
          <EditInput label="Store Name" defaultValue="Ubreakfix Store" />
          <EditInput label="Store Address" defaultValue="123 Main Street, New York" />
        </div>

        {/* The Large Green Save Button */}
        <div className="mt-16 flex justify-center">
          <button 
            onClick={onSave}
            className="w-full max-w-md bg-[#00C853] hover:bg-[#00E676] text-black font-bold py-4 rounded-2xl text-xl transition-all shadow-[0_0_20px_rgba(0,200,83,0.3)]"
          >
            Save
          </button>
        </div>
      </div>
    );
  }

  // Default View (View Only)
  return (
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
          </div>
          <button 
            onClick={onEdit}
            className="px-4 py-2 bg-[#0B0E1E] border border-slate-700 rounded-lg text-sm text-slate-300 hover:bg-slate-800 transition-all shadow-[0_0_15px_rgba(59,130,246,0.1)]"
          >
            Edit Profile
          </button>
        </div>
      </div>

      <div className="space-y-8 mt-10">
        <InfoRow label="Full Name:" value="Jane D." />
        <InfoRow label="Email:" value="jane@gmail.com" />
        <InfoRow label="Store Name:" value="Ubreakfix Store" />
        <InfoRow label="Store Address:" value="123 Main Street, New York, NY 10001" />
      </div>
    </div>
  );
};

// Helper components for clean code
const EditInput = ({ label, defaultValue }) => (
  <div className="flex flex-col gap-2">
    <label className="text-slate-100 font-medium">{label}</label>
    <input 
      type="text" 
      defaultValue={defaultValue}
      className="bg-[#0B1224] border border-slate-800 rounded-xl px-4 py-3 text-slate-300 outline-none focus:border-blue-500 transition-all"
    />
  </div>
);

const InfoRow = ({ label, value }) => (
  <div className="flex border-b border-slate-800/50 pb-4">
    <p className="w-40 text-slate-400 text-sm font-medium">{label}</p>
    <p className="text-slate-200 text-sm">{value}</p>
  </div>
);

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

export default Settings;