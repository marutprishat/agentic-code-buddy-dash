
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Trophy, Star, Award, Target, Zap, Code, BookOpen, CheckCircle } from 'lucide-react';

export const AchievementsPage = () => {
  const achievements = [
    {
      id: 1,
      title: 'First Steps',
      description: 'Complete your first coding challenge',
      icon: Target,
      earned: true,
      earnedDate: '2024-01-15',
      points: 50,
    },
    {
      id: 2,
      title: 'Learning Streak',
      description: 'Study for 7 consecutive days',
      icon: Zap,
      earned: true,
      earnedDate: '2024-01-22',
      points: 100,
    },
    {
      id: 3,
      title: 'Code Master',
      description: 'Complete 10 coding challenges',
      icon: Code,
      earned: false,
      progress: 6,
      total: 10,
      points: 200,
    },
    {
      id: 4,
      title: 'Knowledge Seeker',
      description: 'Complete all beginner modules',
      icon: BookOpen,
      earned: false,
      progress: 4,
      total: 6,
      points: 150,
    },
    {
      id: 5,
      title: 'Perfect Score',
      description: 'Get 100% on a challenge',
      icon: Star,
      earned: true,
      earnedDate: '2024-01-20',
      points: 75,
    },
    {
      id: 6,
      title: 'Dedication',
      description: 'Study for 30 consecutive days',
      icon: Award,
      earned: false,
      progress: 12,
      total: 30,
      points: 300,
    },
  ];

  const leaderboard = [
    { rank: 1, name: 'Alex Chen', points: 2850, avatar: '👨‍💻' },
    { rank: 2, name: 'Sarah Kim', points: 2720, avatar: '👩‍💻' },
    { rank: 3, name: 'Mike Johnson', points: 2650, avatar: '🧑‍💻' },
    { rank: 4, name: 'You', points: 1275, avatar: '👤', isCurrentUser: true },
    { rank: 5, name: 'Emma Davis', points: 1180, avatar: '👩‍💻' },
    { rank: 6, name: 'James Wilson', points: 1050, avatar: '👨‍💻' },
  ];

  const totalPoints = achievements
    .filter(a => a.earned)
    .reduce((sum, a) => sum + a.points, 0);

  const earnedAchievements = achievements.filter(a => a.earned).length;

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
            <Trophy className="h-8 w-8 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Achievements & Leaderboard</h1>
        <p className="text-gray-600">Track your progress and compete with other learners</p>
      </div>

      {/* Stats Overview */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-blue-600 mb-2">{totalPoints}</div>
            <div className="text-gray-600">Total Points</div>
          </CardContent>
        </Card>
        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-green-600 mb-2">{earnedAchievements}</div>
            <div className="text-gray-600">Achievements Earned</div>
          </CardContent>
        </Card>
        <Card className="text-center hover:shadow-lg transition-shadow">
          <CardContent className="pt-6">
            <div className="text-3xl font-bold text-purple-600 mb-2">#4</div>
            <div className="text-gray-600">Global Rank</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Achievements */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Achievements</h2>
          <div className="space-y-4">
            {achievements.map((achievement) => (
              <Card 
                key={achievement.id} 
                className={`transition-all duration-200 hover:shadow-md ${
                  achievement.earned 
                    ? 'border-green-200 bg-green-50/50' 
                    : 'hover:border-gray-300'
                }`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      achievement.earned 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-gray-100 text-gray-400'
                    }`}>
                      <achievement.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                        {achievement.earned && <CheckCircle className="h-4 w-4 text-green-600" />}
                        <Badge variant={achievement.earned ? 'default' : 'secondary'}>
                          {achievement.points} pts
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{achievement.description}</p>
                      {achievement.earned ? (
                        <p className="text-xs text-green-600">
                          Earned on {new Date(achievement.earnedDate).toLocaleDateString()}
                        </p>
                      ) : achievement.progress !== undefined ? (
                        <div className="space-y-1">
                          <div className="flex justify-between text-xs text-gray-500">
                            <span>Progress</span>
                            <span>{achievement.progress}/{achievement.total}</span>
                          </div>
                          <Progress 
                            value={(achievement.progress / achievement.total) * 100} 
                            className="h-2"
                          />
                        </div>
                      ) : (
                        <p className="text-xs text-gray-500">Not started</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leaderboard */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Leaderboard</h2>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-yellow-500" />
                <span>Top Learners</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="space-y-0">
                {leaderboard.map((user) => (
                  <div 
                    key={user.rank}
                    className={`flex items-center justify-between p-4 border-b last:border-b-0 hover:bg-gray-50 transition-colors ${
                      user.isCurrentUser ? 'bg-blue-50 border-blue-200' : ''
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                        user.rank === 1 ? 'bg-yellow-100 text-yellow-800' :
                        user.rank === 2 ? 'bg-gray-100 text-gray-800' :
                        user.rank === 3 ? 'bg-orange-100 text-orange-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {user.rank <= 3 ? (
                          user.rank === 1 ? '🥇' :
                          user.rank === 2 ? '🥈' : '🥉'
                        ) : user.rank}
                      </div>
                      <div className="text-2xl">{user.avatar}</div>
                      <div>
                        <div className={`font-medium ${user.isCurrentUser ? 'text-blue-900' : 'text-gray-900'}`}>
                          {user.name}
                        </div>
                        {user.isCurrentUser && (
                          <div className="text-xs text-blue-600">Your rank</div>
                        )}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-gray-900">{user.points.toLocaleString()}</div>
                      <div className="text-xs text-gray-500">points</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};
