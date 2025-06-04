import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Shield, FileText, Target, Mail, Download } from 'lucide-react';

const DetailedNegotiationStrategy: React.FC = () => {
  const contractRisks = [
    {
      category: 'Price Escalation',
      risk: 'High',
      description: 'Current contract allows 8% annual price increases without market justification',
      mitigation: 'Propose market-index linked pricing with 3-5% cap'
    },
    {
      category: 'Volume Commitment',
      risk: 'Medium',
      description: 'Minimum order quantities may exceed actual demand by 15%',
      mitigation: 'Negotiate flexible volume bands with quarterly adjustments'
    },
    {
      category: 'Payment Terms',
      risk: 'Low',
      description: 'Current 30-day payment terms are industry standard',
      mitigation: 'Maintain current terms or negotiate 2% early payment discount'
    }
  ];

  const keyClausesToNegotiate = [
    {
      clause: 'Price Review Mechanism',
      current: 'Annual increase up to 8% at supplier discretion',
      proposed: 'Quarterly review based on material cost index + max 3% annual cap',
      impact: 'Potential 5% annual savings'
    },
    {
      clause: 'Force Majeure',
      current: 'Broad supplier protection, limited buyer recourse',
      proposed: 'Mutual protection with alternative sourcing rights',
      impact: 'Reduced supply risk exposure'
    },
    {
      clause: 'Quality Standards',
      current: 'General industry standards referenced',
      proposed: 'Specific KPIs with penalty/bonus structure',
      impact: 'Improved quality assurance'
    },
    {
      clause: 'Termination Rights',
      current: '12-month notice required',
      proposed: '6-month notice with performance-based early exit',
      impact: 'Increased flexibility'
    }
  ];

  const negotiationTactics = [
    {
      phase: 'Opening',
      tactic: 'Data-Driven Positioning',
      description: 'Present market analysis showing 12% price premium vs competitors',
      timing: 'First 15 minutes'
    },
    {
      phase: 'Exploration',
      tactic: 'Volume Leverage',
      description: 'Highlight 15% volume growth potential with competitive pricing',
      timing: 'Mid-discussion'
    },
    {
      phase: 'Bargaining',
      tactic: 'Phased Implementation',
      description: 'Propose gradual price reduction over 6 months to ease supplier transition',
      timing: 'When resistance encountered'
    },
    {
      phase: 'Closing',
      tactic: 'Win-Win Framework',
      description: 'Emphasize long-term partnership with performance incentives',
      timing: 'Final 20 minutes'
    }
  ];

  const getRiskColor = (risk: string) => {
    switch (risk.toLowerCase()) {
      case 'high': return 'bg-red-100 text-red-800';
      case 'medium': return 'bg-yellow-100 text-yellow-800';
      case 'low': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const handleExportPDF = () => {
    // Mock PDF export functionality
    alert('Exporting negotiation strategy to PDF...');
  };

  const handleSendEmail = () => {
    // Mock email functionality
    alert('Sending negotiation strategy via email...');
  };

  return (
    <Card className="mb-6">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Target className="h-5 w-5" />
          Detailed Negotiation Strategy & Contract Risk Analysis
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-8">
          {/* Contract Risk Analysis */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <AlertTriangle className="h-5 w-5 text-orange-500" />
              Contract Risk Analysis
            </h3>
            <div className="grid gap-4">
              {contractRisks.map((risk, idx) => (
                <Card key={idx} className="border-l-4 border-l-orange-400">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between mb-2">
                      <h4 className="font-medium">{risk.category}</h4>
                      <Badge className={getRiskColor(risk.risk)}>{risk.risk} Risk</Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{risk.description}</p>
                    <div className="bg-blue-50 p-2 rounded text-sm">
                      <strong>Mitigation:</strong> {risk.mitigation}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Key Clauses to Negotiate */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-500" />
              Key Contract Clauses to Negotiate
            </h3>
            <div className="space-y-4">
              {keyClausesToNegotiate.map((clause, idx) => (
                <Card key={idx}>
                  <CardContent className="p-4">
                    <h4 className="font-medium mb-3">{clause.clause}</h4>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm font-medium text-red-600 mb-1">Current Terms:</p>
                        <p className="text-sm text-gray-700">{clause.current}</p>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-green-600 mb-1">Proposed Terms:</p>
                        <p className="text-sm text-gray-700">{clause.proposed}</p>
                      </div>
                    </div>
                    <div className="mt-3 p-2 bg-green-50 rounded">
                      <p className="text-sm font-medium text-green-800">Expected Impact: {clause.impact}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Negotiation Tactics */}
          <div>
            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Shield className="h-5 w-5 text-purple-500" />
              Recommended Negotiation Tactics
            </h3>
            <div className="grid gap-4">
              {negotiationTactics.map((tactic, idx) => (
                <Card key={idx} className="border-l-4 border-l-purple-400">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium">{tactic.phase} Phase</h4>
                      <Badge variant="outline">{tactic.timing}</Badge>
                    </div>
                    <h5 className="font-medium text-purple-700 mb-2">{tactic.tactic}</h5>
                    <p className="text-sm text-gray-600">{tactic.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Strategic Summary */}
          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border">
            <h3 className="text-lg font-semibold mb-4">Strategic Negotiation Summary</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">Primary Objectives:</h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Reduce pricing by 8-12% through market alignment</li>
                  <li>• Implement flexible volume commitments</li>
                  <li>• Strengthen quality and performance metrics</li>
                  <li>• Improve contract flexibility and exit terms</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-2">Success Metrics:</h4>
                <ul className="text-sm space-y-1 text-gray-700">
                  <li>• Annual cost savings: €{(6.5 * 12).toFixed(0)}K+</li>
                  <li>• Risk reduction: 40% improvement</li>
                  <li>• Contract flexibility: 6-month terms</li>
                  <li>• Quality KPIs: 99.5% target</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Export Buttons */}
          <div className="flex gap-4 justify-center pt-6 border-t">
            <Button onClick={handleExportPDF} className="flex items-center gap-2">
              <Download className="h-4 w-4" />
              Export to PDF
            </Button>
            <Button onClick={handleSendEmail} variant="outline" className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              Send via Email
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DetailedNegotiationStrategy;