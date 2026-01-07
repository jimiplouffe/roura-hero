import React from 'react';
import Header from './components/Header.tsx'; // Added .tsx extension
import Hero from './components/Hero';
import ChatWidget from './components/ChatWidget';
import BottomSection from './components/BottomSection';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <BottomSection />
      {/* The actual Widget Script Embed */}
      <ChatWidget />
    </div>
  );
}