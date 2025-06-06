
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, Clock, Star, Play } from 'lucide-react';

export const LearningModules = () => {
  const modules = [
    {
      id: 1,
      title: 'JavaScript Fundamentals',
      description: 'Master the core concepts of JavaScript programming',
      progress: 75,
      duration: '4 hours',
      difficulty: 'Beginner',
      rating: 4.8,
      lessons: 12,
      color: 'bg-yellow-500'
    },
    {
      id: 2,
      title: 'React Development',
      description: 'Build modern web applications with React',
      progress: 45,
      duration: '6 hours',
      difficulty: 'Intermediate',
      rating: 4.9,
      lessons: 18,
      color: 'bg-blue-500'
    },
    {
      id: 3,
      title: 'Node.js Backend',
      description: 'Create powerful server-side applications',
      progress: 20,
      duration: '8 hours',
      difficulty: 'Intermediate',
      rating: 4.7,
      lessons: 24,
      color: 'bg-green-500'
    },
    {
      id: 4,
      title: 'Database Design',
      description: 'Learn SQL and database optimization',
      progress: 0,
      duration: '5 hours',
      difficulty: 'Advanced',
      rating: 4.6,
      lessons: 15,
      color: 'bg-purple-500'
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Learning Modules</h2>
        <Button variant="outline">
          <BookOpen className="h-4 w-4 mr-2" />
          Browse All
        </Button>
      </div>

      <div className="grid gap-6">
        {modules.map((module) => (
          <Card key={module.id} className="hover:shadow-lg transition-shadow duration-200">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 ${module.color} rounded-lg flex items-center justify-center`}>
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">{module.title}</CardTitle>
                    <p className="text-gray-600 text-sm mt-1">{module.description}</p>
                  </div>
                </div>
                <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                  <Play className="h-4 w-4 mr-1" />
                  {module.progress > 0 ? 'Continue' : 'Start'}
                </Button>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                {/* Progress */}
                <div>
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">Progress</span>
                    <span className="font-medium">{module.progress}%</span>
                  </div>
                  <Progress value={module.progress} className="h-2" />
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{module.duration}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <BookOpen className="h-4 w-4" />
                      <span>{module.lessons} lessons</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span>{module.rating}</span>
                    </div>
                  </div>
                  <Badge className={getDifficultyColor(module.difficulty)}>
                    {module.difficulty}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
