
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { ChatInterface } from '@/components/ChatInterface';
import { LearningModules } from '@/components/LearningModules';
import { ProgressDashboard } from '@/components/ProgressDashboard';
import { CodeChallenges } from '@/components/CodeChallenges';
import { QuickActions } from '@/components/QuickActions';

const Index = () => {
  const [activeSection, setActiveSection] = useState('chat');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Welcome Section */}
        <div className="mb-8 animate-fade-in">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Welcome back, Developer! 👨‍💻
          </h1>
          <p className="text-lg text-gray-600">
            Your AI-powered coding mentor is ready to help you level up your skills.
          </p>
        </div>

        {/* Quick Actions */}
        <QuickActions setActiveSection={setActiveSection} />

        {/* Main Content Area */}
        <div className="grid lg:grid-cols-3 gap-8 mt-8">
          {/* Primary Content */}
          <div className="lg:col-span-2">
            {activeSection === 'chat' && <ChatInterface />}
            {activeSection === 'modules' && <LearningModules />}
            {activeSection === 'challenges' && <CodeChallenges />}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <ProgressDashboard />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
