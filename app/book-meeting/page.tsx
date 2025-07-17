'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../navbar';
import Footer from '../footer';
import { format, isBefore, isSameDay, startOfToday } from 'date-fns';
import Image from "next/image";

const AVATAR = '/AARAMBH LOGO.png'; // Place a generic avatar in public/
const NAME = 'Aarambh Works';
const COMPANY = 'Aarmbh Works';
const TIMEZONE = 'UTC +05:30 New Delhi, Mumbai, Calcutta';

const getTimeSlots = () => {
  // 10:00 to 19:00 IST
  const slots = [];
  for (let h = 10; h <= 19; h++) {
    slots.push(`${h.toString().padStart(2, '0')}:00`);
    slots.push(`${h.toString().padStart(2, '0')}:30`);
  }
  return slots;
};

const timeSlots = getTimeSlots();

const today = startOfToday();

function getMonthDays(year: number, month: number) {
  const lastDay = new Date(year, month + 1, 0);
  const days = [];
  for (let d = 1; d <= lastDay.getDate(); d++) {
    days.push(new Date(year, month, d));
  }
  return days;
}

export default function BookMeeting() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date>(today);
  const [selectedTime, setSelectedTime] = useState('');
  const [duration] = useState('30');
  const [form, setForm] = useState({ name: '', email: '', company: '', meetingType: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());

  const days = getMonthDays(year, month);

  const handlePrevMonth = () => {
    if (month === 0) {
      setMonth(11);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };
  const handleNextMonth = () => {
    if (month === 11) {
      setMonth(0);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const handleDateClick = (date: Date) => {
    if (isBefore(date, today)) return;
    setSelectedDate(date);
    setSelectedTime('');
  };

  const handleTimeClick = (time: string) => {
    setSelectedTime(time);
    setTimeout(() => setStep(2), 400);
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = {
      access_key: "543d1d82-3f45-49b4-b1e8-a29491c6fe11", // <-- Replace with your Web3Forms access key
      subject: "New Meeting Booking from Aarambh Works",
      name: form.name,
      email: form.email,
      company: form.company,
      meetingType: form.meetingType,
      message: form.message,
      selectedDate: selectedDate.toISOString(),
      selectedTime,
      duration,
    };

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed");
      setIsSubmitting(false);
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setStep(1);
        setSelectedTime('');
        setForm({ name: '', email: '', company: '', meetingType: '', message: '' });
      }, 3000);
    } catch {
      setIsSubmitting(false);
      // Optionally show an error message
    }
  };

  // Helper to get current time in IST as minutes since midnight
  function getCurrentISTMinutes() {
    const now = new Date();
    // Convert to IST
    const utc = now.getTime() + now.getTimezoneOffset() * 60000;
    const ist = new Date(utc + 5.5 * 60 * 60000);
    return ist.getHours() * 60 + ist.getMinutes();
  }

  // Helper to get slot time in minutes since midnight
  function slotToMinutes(slot: string) {
    const [h, m] = slot.split(":");
    return parseInt(h) * 60 + parseInt(m);
  }

  return (
    <div className="min-h-screen bg-[#f5f8fa]">
      <Navbar />
      <div className="pt-32 pb-20 px-6 mx-auto 2xl:w-4/5 md:px-16">
        {/* Stepper */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="flex items-center justify-center mb-12"
        >
          <div className="flex items-center gap-8">
            <motion.div className="flex flex-col items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${step === 1 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>1</div>
              <span className="text-xs mt-2 text-gray-500">CHOOSE TIME</span>
            </motion.div>
            <motion.div className={`w-16 h-1 rounded-full ${step === 2 ? 'bg-blue-600' : 'bg-gray-200'}`} initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.3, duration: 0.5 }} style={{ transformOrigin: 'left' }} />
            <motion.div className="flex flex-col items-center" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300 ${step === 2 ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-500'}`}>2</div>
              <span className="text-xs mt-2 text-gray-500">YOUR INFO</span>
            </motion.div>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden bg-white/60 backdrop-blur-lg border border-white/30"
        >
          {/* Left: Calendar & Profile */}
          <motion.div
            className="md:w-1/2 bg-[#4a6173] text-white flex flex-col items-center py-10 px-6"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <Image
              src={AVATAR}
              alt="avatar"
              width={80}
              height={80}
              className="w-20 h-20 rounded-full mb-4 border-4 border-white shadow-lg object-cover"
              priority
            />
            <div className="text-lg font-semibold mb-1">{NAME} | {COMPANY}</div>
            <div className="text-base font-light mb-6">{format(selectedDate, 'MMMM yyyy')}</div>
            <div className="flex items-center justify-between w-full mb-2">
              <button onClick={handlePrevMonth} className="text-2xl px-2 hover:text-blue-200">&#60;</button>
              <div className="font-bold text-lg">{format(selectedDate, 'MMMM yyyy')}</div>
              <button onClick={handleNextMonth} className="text-2xl px-2 hover:text-blue-200">&#62;</button>
            </div>
            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1 w-full mb-4">
              {[
                "SUN",
                "MON",
                "TUE",
                "WED",
                "THU",
                "FRI",
                "SAT",
              ].map((d) => (
                <div key={d} className="text-xs text-blue-100 text-center mb-1">{d}</div>
              ))}
              {Array(days[0].getDay())
                .fill(null)
                .map((_, i) => (
                  <div key={i}></div>
                ))}
              {days.map((date, idx) => {
                const isPast = isBefore(date, today);
                const isSelected = isSameDay(date, selectedDate);
                return (
                  <motion.button
                    key={idx}
                    disabled={isPast}
                    onClick={() => handleDateClick(date)}
                    className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 transition-all duration-200
                      ${isSelected ? 'bg-white text-[#4a6173] font-bold shadow' : isPast ? 'text-blue-200 cursor-not-allowed' : 'hover:bg-blue-200/40'}`}
                    whileHover={!isPast ? { scale: 1.1 } : {}}
                    whileTap={!isPast ? { scale: 0.95 } : {}}
                  >
                    {date.getDate()}
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
          {/* Right: Time slots or Info form */}
          <motion.div
            className="md:w-1/2 bg-white flex flex-col p-8"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <AnimatePresence mode="wait">
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="mb-4">
                    <div className="text-sm font-semibold text-gray-700 mb-2">Meeting duration</div>
                    <div className="w-full bg-gray-100 rounded-lg h-10 flex items-center px-4 text-gray-700 font-medium mb-4">{duration} mins</div>
                    <div className="text-xs text-gray-500 mb-2">What time works best?</div>
                    <div className="text-xs text-blue-600 mb-4">{TIMEZONE}</div>
                  </div>
                  <div className="overflow-y-auto max-h-72 pr-2 custom-scrollbar">
                    {timeSlots.map((slot, idx) => {
                      // Disable slot if today and slot time has passed
                      let isDisabled = false;
                      if (isSameDay(selectedDate, today)) {
                        isDisabled = slotToMinutes(slot) <= getCurrentISTMinutes();
                      }
                      return (
                        <motion.button
                          key={slot}
                          onClick={() => !isDisabled && handleTimeClick(slot)}
                          className={`w-full py-3 mb-2 rounded-lg text-left px-4 font-medium border border-gray-200 transition-all duration-200 hover:bg-blue-50 hover:border-blue-400 focus:bg-blue-100 focus:outline-none ${selectedTime === slot ? 'bg-blue-600 text-white border-blue-600' : ''} ${isDisabled ? 'bg-gray-100 text-gray-400 cursor-not-allowed opacity-60' : ''}`}
                          whileHover={!isDisabled ? { scale: 1.04 } : {}}
                          whileTap={!isDisabled ? { scale: 0.97 } : {}}
                          disabled={isDisabled}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.05 * idx }}
                        >
                          {slot}
                        </motion.button>
                      );
                    })}
                  </div>
                </motion.div>
              )}
              {step === 2 && (
                <motion.form
                  key="step2"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.5 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-6"
                >
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email"
                    />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name *</label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your company name"
                    />
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Meeting Preference *</label>
                    <div className="flex gap-4">
                      <label className={`flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer transition-all duration-200 ${form.meetingType === 'zoom' ? 'border-blue-600 bg-blue-50' : 'border-gray-300 bg-white'}`}>
                        <input
                          type="radio"
                          name="meetingType"
                          value="zoom"
                          checked={form.meetingType === 'zoom'}
                          onChange={handleFormChange}
                          required
                          className="accent-blue-600"
                        />
                        <Image src="/ZOOM.png" alt="Zoom" width={24} height={24} className="w-6 h-6" />
                        <span>Zoom</span>
                      </label>
                      <label className={`flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer transition-all duration-200 ${form.meetingType === 'google-meet' ? 'border-green-600 bg-green-50' : 'border-gray-300 bg-white'}`}>
                        <input
                          type="radio"
                          name="meetingType"
                          value="google-meet"
                          checked={form.meetingType === 'google-meet'}
                          onChange={handleFormChange}
                          required
                          className="accent-green-600"
                        />
                        <Image src="/GOOGLEMEET.png" alt="Google Meet" width={24} height={24} className="w-6 h-6" />
                        <span>Google Meet</span>
                      </label>
                    </div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleFormChange}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Tell us about your project or any specific topics you'd like to discuss..."
                    />
                  </motion.div>
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {isSubmitting ? 'Booking...' : 'Book Meeting'}
                  </motion.button>
                </motion.form>
              )}
              {isSubmitted && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1.1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="text-center bg-green-50 p-12 rounded-2xl border-2 border-green-200 mt-4 shadow-lg"
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="text-green-600 text-5xl mb-2">✓</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Meeting Booked!</h3>
                  <p className="text-gray-600">Thank you for booking a meeting. Well be in touch soon!</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
} 
