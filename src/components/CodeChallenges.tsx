
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Code, Clock, Users, Trophy, Play, CheckCircle } from 'lucide-react';

export const CodeChallenges = () => {
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');

  const challenges = [
    {
      id: 1,
      title: 'Two Sum Problem',
      description: 'Find two numbers in an array that add up to a target sum',
      difficulty: 'Easy',
      category: 'Arrays',
      timeEstimate: '15 min',
      participants: 1200,
      completed: false,
      points: 100
    },
    {
      id: 2,
      title: 'Binary Tree Traversal',
      description: 'Implement in-order traversal of a binary tree',
      difficulty: 'Medium',
      category: 'Trees',
      timeEstimate: '30 min',
      participants: 800,
      completed: true,
      points: 250
    },
    {
      id: 3,
      title: 'Dynamic Programming - Fibonacci',
      description: 'Optimize the Fibonacci sequence using dynamic programming',
      difficulty: 'Medium',
      category: 'Dynamic Programming',
      timeEstimate: '25 min',
      participants: 650,
      completed: false,
      points: 300
    },
    {
      id: 4,
      title: 'Graph Shortest Path',
      description: 'Find the shortest path between two nodes in a graph',
      difficulty: 'Hard',
      category: 'Graphs',
      timeEstimate: '45 min',
      participants: 320,
      completed: false,
      points: 500
    }
  ];

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Easy': return 'bg-green-100 text-green-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Hard': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredChallenges = selectedDifficulty === 'all' 
    ? challenges 
    : challenges.filter(c => c.difficulty.toLowerCase() === selectedDifficulty);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-gray-900">Code Challenges</h2>
        <div className="flex items-center space-x-2">
          <Trophy className="h-5 w-5 text-yellow-600" />
          <span className="text-sm text-gray-600">1,150 points earned</span>
        </div>
      </div>

      <Tabs value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="easy">Easy</TabsTrigger>
          <TabsTrigger value="medium">Medium</TabsTrigger>
          <TabsTrigger value="hard">Hard</TabsTrigger>
        </TabsList>

        <TabsContent value={selectedDifficulty} className="mt-6">
          <div className="grid gap-4">
            {filteredChallenges.map((challenge) => (
              <Card key={challenge.id} className="hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        challenge.completed ? 'bg-green-100' : 'bg-blue-100'
                      }`}>
                        {challenge.completed ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <Code className="h-5 w-5 text-blue-600" />
                        )}
                      </div>
                      <div>
                        <CardTitle className="text-lg flex items-center space-x-2">
                          <span>{challenge.title}</span>
                          {challenge.completed && (
                            <CheckCircle className="h-4 w-4 text-green-600" />
                          )}
                        </CardTitle>
                        <p className="text-gray-600 text-sm mt-1">{challenge.description}</p>
                      </div>
                    </div>
                    <Button 
                      size="sm" 
                      className={challenge.completed ? 'bg-gray-600 hover:bg-gray-700' : 'bg-blue-600 hover:bg-blue-700'}
                    >
                      <Play className="h-4 w-4 mr-1" />
                      {challenge.completed ? 'Review' : 'Start'}
                    </Button>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <Badge className={getDifficultyColor(challenge.difficulty)}>
                        {challenge.difficulty}
                      </Badge>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{challenge.timeEstimate}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{challenge.participants}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Trophy className="h-4 w-4" />
                        <span>{challenge.points} pts</span>
                      </div>
                    </div>
                    <Badge variant="outline">{challenge.category}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      {/* Challenge Stats */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
        <CardContent className="p-6">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-purple-600">12</div>
              <div className="text-sm text-gray-600">Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-blue-600">8</div>
              <div className="text-sm text-gray-600">In Progress</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-600">85%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
