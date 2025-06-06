
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { MessageSquare, BookOpen, Code, Zap, Target, Brain } from 'lucide-react';

interface QuickActionsProps {
  setActiveSection: (section: string) => void;
}

export const QuickActions = ({ setActiveSection }: QuickActionsProps) => {
  const actions = [
    {
      icon: MessageSquare,
      title: 'Start Chat',
      description: 'Get instant help from AI',
      color: 'from-blue-500 to-blue-600',
      action: () => setActiveSection('chat')
    },
    {
      icon: BookOpen,
      title: 'Learning Path',
      description: 'Follow structured lessons',
      color: 'from-green-500 to-green-600',
      action: () => setActiveSection('modules')
    },
    {
      icon: Code,
      title: 'Code Challenge',
      description: 'Practice with problems',
      color: 'from-purple-500 to-purple-600',
      action: () => setActiveSection('challenges')
    },
    {
      icon: Brain,
      title: 'AI Review',
      description: 'Get code feedback',
      color: 'from-orange-500 to-orange-600',
      action: () => setActiveSection('chat')
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {actions.map((action, index) => (
        <Card 
          key={index}
          className="cursor-pointer hover:shadow-lg transition-all duration-200 hover:scale-105 group"
          onClick={action.action}
        >
          <CardContent className="p-6">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-200`}>
              <action.icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-gray-900 mb-1">{action.title}</h3>
            <p className="text-sm text-gray-600">{action.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};
