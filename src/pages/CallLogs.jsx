import React, { useState } from 'react';
import { Search, ChevronDown, Phone, Play, FileText, Clock, CheckCircle2 } from 'lucide-react';

const CallLogs = () => {
  const [selectedCall, setSelectedCall] = useState(0);

  const calls = [
    { id: 0, phone: "+1 (555) 345-6789", date: "2025-12-16", time: "09:42 AM", duration: "5:23", status: "AI Resolved", outcome: "Quote Provided", type: "Screen", color: "text-green-500", bg: "bg-green-500/10" },
    { id: 1, phone: "+1 (555) 345-6789", date: "2025-12-16", time: "09:42 AM", duration: "5:23", status: "Warm Transfer", outcome: "Escalated to technician", type: "Software", color: "text-orange-500", bg: "bg-orange-500/10" },
    { id: 2, phone: "+1 (555) 345-6789", date: "2025-12-16", time: "09:42 AM", duration: "5:23", status: "Appointment", outcome: "Appointment Booked", type: "Battery", color: "text-blue-500", bg: "bg-blue-500/10" },
    { id: 3, phone: "+1 (555) 345-6789", date: "2025-12-16", time: "09:42 AM", duration: "0:20", status: "Dropped", outcome: "Call Dropped", type: "Unknown", color: "text-red-500", bg: "bg-red-500/10" },
  ];

  return (
    <div className="flex-1 bg-[#05070A] min-h-screen text-white p-8 overflow-hidden flex flex-col">
      {/* Top Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Call Logs & History</h1>
        <div className="flex items-center gap-4">
           {/* Replace with your avatar path */}
          <img src="https://i.ibb.co.com/yFLCtbLh/Avatar.png"  className="w-10 h-10 rounded-full border-2 border-slate-700" alt="User" />
        </div>
      </div>

      {/* Filters Bar */}
      <div className="flex gap-4 mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
          <input 
            type="text" 
            placeholder="Search by phone number, issue type..." 
            className="w-full bg-[#0B0E1E] border border-slate-800 rounded-lg py-2 pl-10 pr-4 text-sm outline-none focus:border-cyan-500"
          />
        </div>
        <FilterDropdown label="All Type" />
        <FilterDropdown label="All Issues" />
        <FilterDropdown label="Today" />
      </div>

      {/* Main Content Split View */}
      <div className="flex flex-1 gap-6 overflow-hidden">
        
        {/* Left: Call List */}
        <div className="w-1/2 bg-[#0B0E1E] border border-slate-800 rounded-xl overflow-y-auto custom-scrollbar">
          <div className="p-4 border-b border-slate-800">
            <h3 className="font-medium text-slate-300">Call List</h3>
          </div>
          {calls.map((call, index) => (
            <div 
              key={index}
              onClick={() => setSelectedCall(index)}
              className={`p-4 border-b border-slate-800 cursor-pointer transition-colors hover:bg-slate-900/50 ${selectedCall === index ? 'bg-blue-600/10 border-l-4 border-l-blue-500' : ''}`}
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-500 p-2 rounded-lg text-white">
                    <Phone size={16} />
                  </div>
                  <div>
                    <p className="font-medium text-sm">{call.phone}</p>
                    <p className="text-xs text-slate-500">{call.date} • {call.time}</p>
                  </div>
                </div>
                <span className={`text-[10px] px-2 py-0.5 rounded border ${call.color} ${call.bg} border-current`}>
                  {call.status}
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs text-slate-400 mt-3">
                <span className="flex items-center gap-1"><Clock size={12}/> {call.duration}</span>
                <span className="flex items-center gap-1"><CheckCircle2 size={12}/> {call.outcome}</span>
                <span className="bg-slate-800 px-2 py-0.5 rounded text-blue-400">{call.type}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Call Details */}
        <div className="w-1/2 bg-[#0B0E1E] border border-slate-800 rounded-xl flex flex-col">
          <div className="p-4 border-b border-slate-800">
            <h3 className="font-medium text-slate-300">Call Details</h3>
          </div>
          
          <div className="p-6 flex-1 overflow-y-auto custom-scrollbar">
            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-8">
              <DetailItem label="Phone Number" value="+1 (555) 123-4567" />
              <DetailItem label="Duration" value="4:32" />
              <DetailItem label="Date & Time" value="2025-12-16 10:45 AM" />
              <DetailItem label="Issue Type" value="Screen" />
              <div>
                <p className="text-slate-500 text-xs mb-1">Call Type</p>
                <span className="text-[10px] px-2 py-1 rounded border text-green-500 bg-green-500/10 border-green-500">AI Resolved</span>
              </div>
              <DetailItem label="Outcome" value="Quote provided" />
            </div>

            {/* Audio Button */}
            <button className="w-full bg-purple-600/20 hover:bg-purple-600/30 text-purple-400 py-3 rounded-xl flex items-center justify-center gap-2 mb-8 transition-colors border border-purple-600/30">
              <Play size={18} fill="currentColor" />
              <span className="font-medium">Play Audio Recording</span>
            </button>

            {/* Transcript Area */}
            <div className="flex items-center gap-2 mb-4 text-slate-300">
              <FileText size={18} className="text-blue-500" />
              <h4 className="font-medium">Conversation Transcript</h4>
            </div>
            
            <div className="bg-[#05070A] rounded-xl p-4 space-y-4 text-sm">
              <TranscriptLine role="AI Assistant" text="Thank you for calling UBreakiFix! How can I help you today?" isAI />
              <TranscriptLine role="Customer" text="Hi, my iPhone 13 screen is cracked. How much would it cost to repair?" />
              <TranscriptLine role="AI Assistant" text="I can help you with that! For an iPhone 13 screen repair, our price is $199. This includes parts, labor, and comes with a 90-day warranty. Would you like to book an appointment?" isAI />
              <TranscriptLine role="Customer" text="Yes, please! When are you available?" />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

// Internal Helper Components
const FilterDropdown = ({ label }) => (
  <button className="bg-[#0B0E1E] border border-slate-800 px-4 py-2 rounded-lg text-sm flex items-center gap-2 text-slate-400 hover:text-white transition-colors">
    {label} <ChevronDown size={14} />
  </button>
);

const DetailItem = ({ label, value }) => (
  <div>
    <p className="text-slate-500 text-xs mb-1">{label}</p>
    <p className="text-sm font-medium">{value}</p>
  </div>
);

const TranscriptLine = ({ role, text, isAI }) => (
  <div>
    <p className={`font-semibold text-xs mb-1 ${isAI ? 'text-green-500' : 'text-blue-500'}`}>{role}:</p>
    <p className="text-slate-400 leading-relaxed">{text}</p>
  </div>
);

export default CallLogs;