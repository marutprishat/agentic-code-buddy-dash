
import React, { useState } from 'react';
import { Header } from '@/components/Header';
import { ChatInterface } from '@/components/ChatInterface';
import { LearningModules } from '@/components/LearningModules';
import { ProgressDashboard } from '@/components/ProgressDashboard';
import { CodeChallenges } from '@/components/CodeChallenges';
import { QuickActions } from '@/components/QuickActions';
import { SettingsPage } from '@/components/SettingsPage';
import { AchievementsPage } from '@/components/AchievementsPage';

const Index = () => {
  const [activeSection, setActiveSection] = useState('chat');

  const renderMainContent = () => {
    switch (activeSection) {
      case 'chat':
        return <ChatInterface />;
      case 'modules':
        return <LearningModules />;
      case 'challenges':
        return <CodeChallenges />;
      case 'settings':
        return <SettingsPage />;
      case 'achievements':
        return <AchievementsPage />;
      default:
        return <ChatInterface />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {activeSection !== 'settings' && activeSection !== 'achievements' && (
          <>
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
          </>
        )}

        {/* Main Content Area */}
        {activeSection === 'settings' || activeSection === 'achievements' ? (
          renderMainContent()
        ) : (
          <div className="grid lg:grid-cols-3 gap-8 mt-8">
            {/* Primary Content */}
            <div className="lg:col-span-2">
              {renderMainContent()}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <ProgressDashboard />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Index;
