import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ChartSection: React.FC = () => {
  const priceData = [
    { month: 'Jan', price: 52, market: 48 },
    { month: 'Feb', price: 51, market: 47 },
    { month: 'Mar', price: 50, market: 46 },
    { month: 'Apr', price: 50, market: 45 },
    { month: 'May', price: 49, market: 44 },
    { month: 'Jun', price: 50, market: 42 }
  ];

  const volumeData = [
    { month: 'Jan', volume: 1200 },
    { month: 'Feb', volume: 1350 },
    { month: 'Mar', volume: 1100 },
    { month: 'Apr', volume: 1450 },
    { month: 'May', volume: 1600 },
    { month: 'Jun', volume: 1750 }
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Price Evolution vs Market Index Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Price Evolution vs Market Index</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 w-full">
              <svg viewBox="0 0 400 300" className="w-full h-full">
                {/* Y-axis with numbers */}
                <g>
                  <line x1="40" y1="20" x2="40" y2="260" stroke="#374151" strokeWidth="1"/>
                  {[60, 55, 50, 45, 40].map((value, i) => (
                    <g key={value}>
                      <line x1="35" y1={20 + i * 48} x2="40" y2={20 + i * 48} stroke="#374151" strokeWidth="1"/>
                      <text x="30" y={25 + i * 48} textAnchor="end" fontSize="10" fill="#374151">€{value}</text>
                    </g>
                  ))}
                </g>
                {/* X-axis */}
                <line x1="40" y1="260" x2="380" y2="260" stroke="#374151" strokeWidth="1"/>
                {/* Price line (blue) */}
                <polyline
                  fill="none"
                  stroke="#3B82F6"
                  strokeWidth="2"
                  points={priceData.map((d, i) => `${60 + i * 50},${260 - (d.price - 40) * 4.8}`).join(' ')}
                />
                {/* Market line (green) */}
                <polyline
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2"
                  points={priceData.map((d, i) => `${60 + i * 50},${260 - (d.market - 40) * 4.8}`).join(' ')}
                />
                {/* Data points */}
                {priceData.map((d, i) => (
                  <g key={i}>
                    <circle cx={60 + i * 50} cy={260 - (d.price - 40) * 4.8} r="3" fill="#3B82F6"/>
                    <circle cx={60 + i * 50} cy={260 - (d.market - 40) * 4.8} r="3" fill="#10B981"/>
                    <text x={60 + i * 50} y="280" textAnchor="middle" fontSize="10" fill="#374151">{d.month}</text>
                  </g>
                ))}
                {/* Legend */}
                <g>
                  <line x1="50" y1="15" x2="70" y2="15" stroke="#3B82F6" strokeWidth="2"/>
                  <text x="75" y="19" fontSize="12" fill="#374151">Current Price</text>
                  <line x1="180" y1="15" x2="200" y2="15" stroke="#10B981" strokeWidth="2"/>
                  <text x="205" y="19" fontSize="12" fill="#374151">Market Index</text>
                </g>
              </svg>
            </div>
          </CardContent>
        </Card>

        {/* Volume History Evolution Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Volume History Evolution</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80 w-full">
              <svg viewBox="0 0 400 300" className="w-full h-full">
                {/* Y-axis with numbers */}
                <g>
                  <line x1="40" y1="20" x2="40" y2="260" stroke="#374151" strokeWidth="1"/>
                  {[2000, 1750, 1500, 1250, 1000].map((value, i) => (
                    <g key={value}>
                      <line x1="35" y1={20 + i * 48} x2="40" y2={20 + i * 48} stroke="#374151" strokeWidth="1"/>
                      <text x="25" y={25 + i * 48} textAnchor="end" fontSize="10" fill="#374151">{value}</text>
                    </g>
                  ))}
                </g>
                {/* X-axis */}
                <line x1="40" y1="260" x2="380" y2="260" stroke="#374151" strokeWidth="1"/>
                {/* Volume line (purple) */}
                <polyline
                  fill="none"
                  stroke="#8B5CF6"
                  strokeWidth="2"
                  points={volumeData.map((d, i) => `${60 + i * 50},${260 - (d.volume - 1000) * 0.24}`).join(' ')}
                />
                {/* Data points */}
                {volumeData.map((d, i) => (
                  <g key={i}>
                    <circle cx={60 + i * 50} cy={260 - (d.volume - 1000) * 0.24} r="3" fill="#8B5CF6"/>
                    <text x={60 + i * 50} y="280" textAnchor="middle" fontSize="10" fill="#374151">{d.month}</text>
                  </g>
                ))}
                {/* Legend */}
                <g>
                  <line x1="50" y1="15" x2="70" y2="15" stroke="#8B5CF6" strokeWidth="2"/>
                  <text x="75" y="19" fontSize="12" fill="#374151">Volume (units)</text>
                </g>
              </svg>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <Button className="w-full sm:w-auto">Recalculate Market Index</Button>
    </div>
  );
};

export default ChartSection;