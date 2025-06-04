import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { TrendingUp, PieChart as PieChartIcon } from 'lucide-react';
import ChartSection from './ChartSection';

const PartsSection: React.FC = () => {
  const [selectedPart, setSelectedPart] = useState('pump-housing');

  const parts = [
    { value: 'pump-housing', label: 'Pump Housing' },
    { value: 'valve-assembly', label: 'Valve Assembly' },
    { value: 'motor-bracket', label: 'Motor Bracket' }
  ];

  const priceHistoryData = [
    { month: 'Jan', actualPrice: 42, shouldPrice: 38, volume: 120 },
    { month: 'Feb', actualPrice: 45, shouldPrice: 39, volume: 135 },
    { month: 'Mar', actualPrice: 43, shouldPrice: 37, volume: 110 },
    { month: 'Apr', actualPrice: 46, shouldPrice: 40, volume: 145 },
    { month: 'May', actualPrice: 44, shouldPrice: 38, volume: 125 },
    { month: 'Jun', actualPrice: 47, shouldPrice: 41, volume: 155 },
    { month: 'Jul', actualPrice: 45, shouldPrice: 39, volume: 130 },
    { month: 'Aug', actualPrice: 48, shouldPrice: 42, volume: 160 },
    { month: 'Sep', actualPrice: 46, shouldPrice: 40, volume: 140 },
    { month: 'Oct', actualPrice: 49, shouldPrice: 43, volume: 165 },
    { month: 'Nov', actualPrice: 47, shouldPrice: 41, volume: 150 },
    { month: 'Dec', actualPrice: 50, shouldPrice: 44, volume: 170 }
  ];

  const calculateSavings = () => {
    const currentAvg = priceHistoryData.reduce((sum, item) => sum + item.actualPrice, 0) / priceHistoryData.length;
    const shouldAvg = priceHistoryData.reduce((sum, item) => sum + item.shouldPrice, 0) / priceHistoryData.length;
    const monthlySavings = currentAvg - shouldAvg;
    const annualSavings = monthlySavings * 12;
    return { monthlySavings: monthlySavings.toFixed(2), annualSavings: annualSavings.toFixed(0) };
  };

  const savings = calculateSavings();

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Parts Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <Select value={selectedPart} onValueChange={setSelectedPart}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a part" />
            </SelectTrigger>
            <SelectContent>
              {parts.map(part => (
                <SelectItem key={part.value} value={part.value}>{part.label}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <ChartSection />

          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg border">
            <h4 className="font-semibold mb-2">Cost Analysis Conclusion (Prices & Volumes)</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Monthly overspend vs market index:</p>
                <p className="text-lg font-bold text-red-600">€{savings.monthlySavings}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Potential annual savings:</p>
                <p className="text-lg font-bold text-green-600">€{savings.annualSavings}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PartsSection;