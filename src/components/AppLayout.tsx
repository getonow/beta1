import React from 'react';
import { useAppContext } from '@/contexts/AppContext';
import { useIsMobile } from '@/hooks/use-mobile';
import NegotiationStrategy from './NegotiationStrategy';
import PartsSection from './PartsSection';
import BenchmarkSection from './BenchmarkSection';
import DetailedNegotiationStrategy from './DetailedNegotiationStrategy';

const AppLayout: React.FC = () => {
  const { sidebarOpen, toggleSidebar } = useAppContext();
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            Negotiation Intelligence Platform
          </h1>
          <p className="text-gray-600 text-lg">
            AI-powered contract analysis and vendor benchmarking for strategic procurement decisions
          </p>
        </header>
        
        <div className="space-y-8">
          <NegotiationStrategy />
          <PartsSection />
          <BenchmarkSection />
          <DetailedNegotiationStrategy />
        </div>
      </div>
    </div>
  );
};

export default AppLayout;