import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Send, FileText, CreditCard } from 'lucide-react';

const NegotiationStrategy: React.FC = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState<Array<{role: string, content: string}>>([]);
  const [showDashboard, setShowDashboard] = useState(false);

  const handleSendMessage = () => {
    if (!message.trim()) return;
    
    setChatHistory(prev => [...prev, 
      { role: 'user', content: message },
      { role: 'ai', content: 'Analyzing contract data... Based on your vendor Nordic Injection, I see potential savings of 15% through volume commitments and payment term adjustments. Risk level: Medium.' }
    ]);
    setMessage('');
    setShowDashboard(true);
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CreditCard className="h-5 w-5" />
          Negotiation Strategy AI Agent
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="Ask about negotiation strategies, contract analysis, or risk assessment..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            />
            <Button onClick={handleSendMessage}>
              <Send className="h-4 w-4" />
            </Button>
          </div>
          
          {chatHistory.length > 0 && (
            <div className="max-h-40 overflow-y-auto space-y-2">
              {chatHistory.map((msg, idx) => (
                <div key={idx} className={`p-2 rounded ${msg.role === 'user' ? 'bg-blue-50 ml-8' : 'bg-gray-50 mr-8'}`}>
                  <span className="text-sm font-medium">{msg.role === 'user' ? 'You:' : 'AI:'}</span>
                  <p className="text-sm">{msg.content}</p>
                </div>
              ))}
            </div>
          )}
          
          {showDashboard && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800">Potential Savings</h4>
                <p className="text-2xl font-bold text-green-600">€12,500</p>
                <Badge variant="secondary">15% reduction</Badge>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800">Risk Level</h4>
                <p className="text-lg font-bold text-yellow-600">Medium</p>
                <Badge variant="outline">Contract flexibility</Badge>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800">Leverage Points</h4>
                <p className="text-sm">Volume commitments, Payment terms</p>
                <Badge variant="default">2 identified</Badge>
              </div>
            </div>
          )}
          
          {showDashboard && (
            <div className="flex gap-2 mt-4">
              <Button variant="outline" size="sm">
                <FileText className="h-4 w-4 mr-2" />
                Generate Prep Deck
              </Button>
              <Button variant="outline" size="sm">
                <CreditCard className="h-4 w-4 mr-2" />
                Create Cheat Sheet
              </Button>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default NegotiationStrategy;