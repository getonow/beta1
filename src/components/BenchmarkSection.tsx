import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Mail, Phone, User, Send, MessageSquare, PieChart as PieChartIcon } from 'lucide-react';

interface Vendor {
  id: string;
  name: string;
  price: number;
  representative: string;
  email: string;
  phone: string;
  isCurrent?: boolean;
}

const BenchmarkSection: React.FC = () => {
  const [selectedVendors, setSelectedVendors] = useState<string[]>([]);
  const [chatMessage, setChatMessage] = useState('');
  const [aiInsights, setAiInsights] = useState<string[]>([]);

  const vendors: Vendor[] = [
    {
      id: 'nordic',
      name: 'Nordic Injection',
      price: 50,
      representative: 'Lars Andersen',
      email: 'lars.andersen@nordic-injection.com',
      phone: '+45 1234 5678',
      isCurrent: true
    },
    {
      id: 'mediterranean',
      name: 'Mediterranean Molding',
      price: 45,
      representative: 'Maria Rodriguez',
      email: 'maria.rodriguez@medmolding.es',
      phone: '+34 987 654 321'
    },
    {
      id: 'autoplast',
      name: 'AutoPlast UK Ltd.',
      price: 42,
      representative: 'James Wilson',
      email: 'james.wilson@autoplast.co.uk',
      phone: '+44 20 7123 4567'
    },
    {
      id: 'polytech',
      name: 'PolyTech Plastics Ltd.',
      price: 47,
      representative: 'Sarah Johnson',
      email: 'sarah.johnson@polytech-plastics.com',
      phone: '+1 555 123 4567'
    }
  ];

  const costBreakdownData = [
    { name: 'Material', value: 60, color: '#8884d8' },
    { name: 'Labor', value: 25, color: '#82ca9d' },
    { name: 'Overhead', value: 15, color: '#ffc658' }
  ];

  const handleVendorSelection = (vendorId: string, checked: boolean) => {
    setSelectedVendors(prev => 
      checked 
        ? [...prev, vendorId]
        : prev.filter(id => id !== vendorId)
    );
  };

  const handleRequestQuote = () => {
    if (selectedVendors.length === 0) return;
    
    const selectedVendorNames = vendors
      .filter(v => selectedVendors.includes(v.id))
      .map(v => v.name)
      .join(', ');
    
    alert(`Quote request sent to: ${selectedVendorNames}`);
  };

  const handleAiInsight = () => {
    if (!chatMessage.trim()) return;
    
    const insights = [
      `Based on your query about "${chatMessage}", I recommend focusing on AutoPlast UK Ltd. They offer the best price at €42 with strong quality ratings.`,
      'Key negotiation points: Volume discounts available with Mediterranean Molding, and PolyTech offers flexible payment terms.',
      'Risk assessment: Nordic Injection has the highest price but established relationship. Consider gradual transition to lower-cost suppliers.'
    ];
    
    setAiInsights(insights);
    setChatMessage('');
  };

  const bestPrice = Math.min(...vendors.map(v => v.price));
  const currentVendor = vendors.find(v => v.isCurrent);
  const potentialSavings = currentVendor ? currentVendor.price - bestPrice : 0;

  const PieChart = ({ data }: { data: any[] }) => (
    <div className="space-y-2">
      <h4 className="text-sm font-medium flex items-center gap-1">
        <PieChartIcon className="h-4 w-4" />
        Cost Breakdown
      </h4>
      <div className="space-y-2">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div 
              className="w-4 h-4 rounded" 
              style={{ backgroundColor: item.color }}
            />
            <span className="text-sm">{item.name}: {item.value}%</span>
          </div>
        ))}
      </div>
    </div>
  );

  const BarChart = ({ data }: { data: Vendor[] }) => (
    <div className="space-y-2">
      <h4 className="text-sm font-medium">Vendor Benchmark</h4>
      <div className="space-y-2">
        {data.map((item, idx) => (
          <div key={idx} className="flex items-center gap-2">
            <div className="w-24 text-xs">{(item.name || '').split(' ')[0]}</div>
            <div className="flex-1 bg-gray-200 rounded h-6 relative">
              <div 
                className="bg-yellow-500 h-full rounded" 
                style={{ width: `${(item.price / 55) * 100}%` }}
              />
              <span className="absolute right-2 top-0 text-xs leading-6">€{item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <User className="h-5 w-5" />
          Vendor Benchmark & Insights
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div className="grid gap-4">
            {vendors.map((vendor) => (
              <div key={vendor.id} className={`p-4 border rounded-lg ${vendor.isCurrent ? 'bg-blue-50 border-blue-200' : 'bg-white'}`}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Checkbox
                      checked={selectedVendors.includes(vendor.id)}
                      onCheckedChange={(checked) => handleVendorSelection(vendor.id, !!checked)}
                    />
                    <div>
                      <h4 className="font-semibold flex items-center gap-2">
                        {vendor.name}
                        {vendor.isCurrent && <Badge variant="default">Current</Badge>}
                        {vendor.price === bestPrice && <Badge variant="secondary">Best Price</Badge>}
                      </h4>
                      <p className="text-2xl font-bold text-green-600">€{vendor.price}</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    {vendor.representative}
                  </div>
                  <div className="flex items-center gap-1">
                    <Mail className="h-4 w-4" />
                    {vendor.email}
                  </div>
                  <div className="flex items-center gap-1">
                    <Phone className="h-4 w-4" />
                    {vendor.phone}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            <Button 
              onClick={handleRequestQuote}
              disabled={selectedVendors.length === 0}
              className="flex items-center gap-2"
            >
              <Mail className="h-4 w-4" />
              Request Quote via Email
            </Button>
            <span className="text-sm text-gray-500 self-center">
              {selectedVendors.length} vendor(s) selected
            </span>
          </div>

          <Card className="bg-gradient-to-r from-purple-50 to-pink-50">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                AI Negotiation Insights
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <Input
                    placeholder="Ask about vendor comparison, negotiation strategy, or pricing analysis..."
                    value={chatMessage}
                    onChange={(e) => setChatMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleAiInsight()}
                  />
                  <Button onClick={handleAiInsight}>
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                
                {aiInsights.length > 0 && (
                  <div className="space-y-2">
                    {aiInsights.map((insight, idx) => (
                      <div key={idx} className="bg-white p-3 rounded border-l-4 border-purple-400">
                        <p className="text-sm">{insight}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <PieChart data={costBreakdownData} />
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <BarChart data={vendors} />
              </CardContent>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border">
            <h3 className="font-bold text-lg mb-4">Negotiation Target Analysis</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <p className="text-sm text-gray-600">Current Price (Nordic Injection)</p>
                <p className="text-2xl font-bold">€{currentVendor?.price}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Best Market Price</p>
                <p className="text-2xl font-bold text-green-600">€{bestPrice}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Potential Savings per Unit</p>
                <p className="text-2xl font-bold text-blue-600">€{potentialSavings}</p>
              </div>
            </div>
            
            <div className="bg-white p-4 rounded border">
              <h4 className="font-semibold mb-2">Recommended Negotiation Target:</h4>
              <p className="text-sm mb-2">
                Based on market analysis and volume data, target a <strong>€{((currentVendor?.price || 0) - (potentialSavings * 0.7)).toFixed(1)}</strong> price point 
                (€{(potentialSavings * 0.7).toFixed(1)} savings) as a realistic negotiation goal with Nordic Injection.
              </p>
              <p className="text-sm text-gray-600">
                This represents a {((potentialSavings * 0.7) / (currentVendor?.price || 1) * 100).toFixed(1)}% reduction 
                while maintaining supplier relationship stability. Volume trends support this pricing strategy.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BenchmarkSection;