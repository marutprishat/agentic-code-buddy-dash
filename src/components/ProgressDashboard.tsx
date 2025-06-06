
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Trophy, Target, Flame, Star, TrendingUp } from 'lucide-react';

export const ProgressDashboard = () => {
  const stats = [
    { label: 'Problems Solved', value: 47, total: 100, icon: Trophy, color: 'text-yellow-600' },
    { label: 'Learning Streak', value: 12, unit: 'days', icon: Flame, color: 'text-orange-600' },
    { label: 'Skill Level', value: 'Intermediate', icon: Star, color: 'text-purple-600' },
    { label: 'XP Points', value: 2840, icon: TrendingUp, color: 'text-green-600' }
  ];

  const recentAchievements = [
    { title: 'First React App', description: 'Completed your first React application', date: '2 days ago' },
    { title: 'Problem Solver', description: 'Solved 25 coding challenges', date: '1 week ago' },
    { title: 'JavaScript Master', description: 'Completed JavaScript fundamentals', date: '2 weeks ago' }
  ];

  const skillProgress = [
    { skill: 'JavaScript', level: 85, color: 'bg-yellow-500' },
    { skill: 'React', level: 70, color: 'bg-blue-500' },
    { skill: 'Node.js', level: 45, color: 'bg-green-500' },
    { skill: 'Python', level: 30, color: 'bg-purple-500' }
  ];

  return (
    <div className="space-y-6">
      {/* Stats Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Your Progress</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className={`mx-auto w-8 h-8 flex items-center justify-center mb-2 ${stat.color}`}>
                  <stat.icon className="h-5 w-5" />
                </div>
                <div className="text-lg font-bold text-gray-900">
                  {stat.value}{stat.unit && stat.unit}
                  {stat.total && typeof stat.value === 'number' && `/${stat.total}`}
                </div>
                <div className="text-xs text-gray-600">{stat.label}</div>
                {stat.total && typeof stat.value === 'number' && (
                  <Progress value={(stat.value / stat.total) * 100} className="h-1 mt-1" />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Skill Levels */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Skill Levels</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {skillProgress.map((skill, index) => (
              <div key={index}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">{skill.skill}</span>
                  <span className="text-sm text-gray-600">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`${skill.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Achievements */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Trophy className="h-5 w-5 mr-2 text-yellow-600" />
            Recent Achievements
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentAchievements.map((achievement, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                <div className="flex-1">
                  <h4 className="font-medium text-gray-900 text-sm">{achievement.title}</h4>
                  <p className="text-xs text-gray-600 mt-1">{achievement.description}</p>
                  <p className="text-xs text-gray-500 mt-1">{achievement.date}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Next Goal */}
      <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-blue-200">
        <CardHeader>
          <CardTitle className="text-lg flex items-center">
            <Target className="h-5 w-5 mr-2 text-blue-600" />
            Next Goal
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="text-sm font-medium text-gray-900 mb-2">
              Complete Node.js Module
            </div>
            <Progress value={20} className="mb-2" />
            <div className="text-xs text-gray-600">
              3 out of 15 lessons completed
            </div>
            <Badge className="mt-2 bg-blue-600 hover:bg-blue-700">
              Keep Going!
            </Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
