
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Trophy, Target, Flame, Star, TrendingUp, ChevronRight, Award } from 'lucide-react';

export const ProgressDashboard = () => {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);
  const [expandedAchievement, setExpandedAchievement] = useState<number | null>(null);

  const stats = [
    { label: 'Problems Solved', value: 47, total: 100, icon: Trophy, color: 'text-yellow-600', bgGradient: 'from-yellow-100 to-orange-100' },
    { label: 'Learning Streak', value: 12, unit: 'days', icon: Flame, color: 'text-orange-600', bgGradient: 'from-orange-100 to-red-100' },
    { label: 'Skill Level', value: 'Intermediate', icon: Star, color: 'text-purple-600', bgGradient: 'from-purple-100 to-pink-100' },
    { label: 'XP Points', value: 2840, icon: TrendingUp, color: 'text-green-600', bgGradient: 'from-green-100 to-emerald-100' }
  ];

  const recentAchievements = [
    { title: 'First React App', description: 'Completed your first React application', date: '2 days ago', xp: 250, color: 'bg-blue-500' },
    { title: 'Problem Solver', description: 'Solved 25 coding challenges', date: '1 week ago', xp: 500, color: 'bg-green-500' },
    { title: 'JavaScript Master', description: 'Completed JavaScript fundamentals', date: '2 weeks ago', xp: 750, color: 'bg-yellow-500' }
  ];

  const skillProgress = [
    { skill: 'JavaScript', level: 85, color: 'bg-yellow-500', bgColor: 'bg-yellow-100' },
    { skill: 'React', level: 70, color: 'bg-blue-500', bgColor: 'bg-blue-100' },
    { skill: 'Node.js', level: 45, color: 'bg-green-500', bgColor: 'bg-green-100' },
    { skill: 'Python', level: 30, color: 'bg-purple-500', bgColor: 'bg-purple-100' }
  ];

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Stats Overview */}
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 border-b">
          <CardTitle className="text-lg flex items-center">
            <Trophy className="h-5 w-5 mr-2 text-blue-600" />
            Your Progress
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`relative p-4 rounded-lg bg-gradient-to-br ${stat.bgGradient} cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-lg ${
                  hoveredStat === index ? 'ring-2 ring-blue-400 ring-opacity-50' : ''
                }`}
                onMouseEnter={() => setHoveredStat(index)}
                onMouseLeave={() => setHoveredStat(null)}
              >
                <div className={`mx-auto w-10 h-10 flex items-center justify-center mb-3 ${stat.color} transform transition-transform duration-200 ${
                  hoveredStat === index ? 'scale-110' : ''
                }`}>
                  <stat.icon className={`h-6 w-6 transition-all duration-200 ${hoveredStat === index ? 'animate-pulse' : ''}`} />
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-gray-900 mb-1">
                    {stat.value}{stat.unit && stat.unit}
                    {stat.total && typeof stat.value === 'number' && `/${stat.total}`}
                  </div>
                  <div className="text-xs text-gray-600 mb-2">{stat.label}</div>
                  {stat.total && typeof stat.value === 'number' && (
                    <Progress value={(stat.value / stat.total) * 100} className="h-2" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Skill Levels */}
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
        <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50 border-b">
          <CardTitle className="text-lg flex items-center">
            <Star className="h-5 w-5 mr-2 text-indigo-600" />
            Skill Levels
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-5">
            {skillProgress.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-200">
                    {skill.skill}
                  </span>
                  <Badge className={`${skill.bgColor} text-gray-700 hover:scale-110 transition-transform duration-200`}>
                    {skill.level}%
                  </Badge>
                </div>
                <div className="relative">
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div 
                      className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out transform origin-left`}
                      style={{ 
                        width: `${skill.level}%`,
                        animation: `slide-in-right 1s ease-out ${index * 0.2}s both`
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Achievements */}
      <Card className="overflow-hidden hover:shadow-xl transition-all duration-300">
        <CardHeader className="bg-gradient-to-r from-yellow-50 to-orange-50 border-b">
          <CardTitle className="text-lg flex items-center">
            <Award className="h-5 w-5 mr-2 text-yellow-600" />
            Recent Achievements
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="space-y-3">
            {recentAchievements.map((achievement, index) => (
              <div 
                key={index} 
                className={`relative p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border cursor-pointer transform transition-all duration-300 hover:scale-102 hover:shadow-md group ${
                  expandedAchievement === index ? 'ring-2 ring-yellow-400 ring-opacity-50' : ''
                }`}
                onClick={() => setExpandedAchievement(expandedAchievement === index ? null : index)}
              >
                <div className="flex items-start space-x-4">
                  <div className={`w-3 h-3 ${achievement.color} rounded-full mt-2 animate-pulse`}></div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium text-gray-900 text-sm group-hover:text-blue-600 transition-colors duration-200">
                        {achievement.title}
                      </h4>
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-yellow-100 text-yellow-700 text-xs">
                          +{achievement.xp} XP
                        </Badge>
                        <ChevronRight className={`h-4 w-4 text-gray-400 transition-transform duration-200 ${
                          expandedAchievement === index ? 'rotate-90' : ''
                        }`} />
                      </div>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{achievement.description}</p>
                    <p className="text-xs text-gray-500 mt-1">{achievement.date}</p>
                    
                    {expandedAchievement === index && (
                      <div className="mt-3 p-3 bg-yellow-50 rounded-md animate-fade-in">
                        <p className="text-xs text-gray-700">
                          🎉 Congratulations! You've earned this achievement by demonstrating your coding skills.
                          Keep up the great work!
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Next Goal */}
      <Card className="bg-gradient-to-r from-blue-50 via-purple-50 to-blue-50 border-blue-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105">
        <CardHeader className="border-b border-blue-200">
          <CardTitle className="text-lg flex items-center">
            <Target className="h-5 w-5 mr-2 text-blue-600 animate-pulse" />
            Next Goal
            <div className="ml-auto">
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition-all duration-200">
                Start Learning
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="text-center">
            <div className="text-lg font-medium text-gray-900 mb-3">
              Complete Node.js Module
            </div>
            <div className="relative mb-3">
              <Progress value={20} className="h-3" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
            </div>
            <div className="text-sm text-gray-600 mb-4">
              3 out of 15 lessons completed
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Badge className="bg-blue-600 hover:bg-blue-700 text-white hover:scale-110 transition-all duration-200">
                🚀 Keep Going!
              </Badge>
              <Badge className="bg-green-100 text-green-700 hover:scale-110 transition-all duration-200">
                20% Complete
              </Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
