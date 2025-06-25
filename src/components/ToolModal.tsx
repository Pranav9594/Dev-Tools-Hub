
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ExternalLink, Star, Download, Users, BookOpen, Code, Zap } from 'lucide-react';

interface Tool {
  id: string;
  name: string;
  description: string;
  detailedDescription: string;
  logo: string;
  category: string;
  difficulty: string;
  pricing: string;
  popularity: number;
  tags: string[];
  features: string[];
  usedBy: string[];
  officialUrl: string;
  documentationUrl: string;
  githubUrl?: string;
  installCommand?: string;
}

interface ToolModalProps {
  tool: Tool;
  onClose: () => void;
}

export const ToolModal: React.FC<ToolModalProps> = ({ tool, onClose }) => {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case 'beginner': return 'bg-green-500/20 text-green-300 border-green-500/30';
      case 'intermediate': return 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30';
      case 'advanced': return 'bg-red-500/20 text-red-300 border-red-500/30';
      default: return 'bg-slate-500/20 text-slate-300 border-slate-500/30';
    }
  };

  const getPricingColor = (pricing: string) => {
    switch (pricing.toLowerCase()) {
      case 'free': return 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30';
      case 'paid': return 'bg-blue-500/20 text-blue-300 border-blue-500/30';
      case 'freemium': return 'bg-purple-500/20 text-purple-300 border-purple-500/30';
      default: return 'bg-slate-500/20 text-slate-300 border-slate-500/30';
    }
  };

  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] bg-slate-900 border-slate-700 text-white overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start gap-4 mb-4">
            <img 
              src={tool.logo} 
              alt={`${tool.name} logo`}
              className="w-16 h-16 rounded-xl object-cover bg-white/10 p-2"
              onError={(e) => {
                e.currentTarget.src = `https://ui-avatars.com/api/?name=${tool.name}&background=random&color=fff`;
              }}
            />
            <div className="flex-1">
              <DialogTitle className="text-2xl text-white mb-2">{tool.name}</DialogTitle>
              <p className="text-slate-300 mb-4">{tool.description}</p>
              <div className="flex flex-wrap gap-2">
                <Badge className={`${getDifficultyColor(tool.difficulty)}`}>
                  {tool.difficulty}
                </Badge>
                <Badge className={`${getPricingColor(tool.pricing)}`}>
                  {tool.pricing}
                </Badge>
                <Badge className="bg-slate-700/50 text-slate-300">
                  <Users className="h-3 w-3 mr-1" />
                  {tool.popularity}% popular
                </Badge>
              </div>
            </div>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Detailed Description */}
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <BookOpen className="h-5 w-5 mr-2 text-blue-400" />
                About
              </h3>
              <p className="text-slate-300 leading-relaxed">{tool.detailedDescription}</p>
            </div>

            {/* Key Features */}
            <div>
              <h3 className="text-lg font-semibold mb-3 flex items-center">
                <Zap className="h-5 w-5 mr-2 text-yellow-400" />
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {tool.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Installation */}
            {tool.installCommand && (
              <div>
                <h3 className="text-lg font-semibold mb-3 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-green-400" />
                  Installation
                </h3>
                <div className="bg-slate-800 rounded-lg p-4 font-mono text-sm">
                  <code className="text-green-400">{tool.installCommand}</code>
                </div>
              </div>
            )}
          </div>

          <div className="space-y-6">
            {/* Quick Actions */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Actions</h3>
              <div className="space-y-2">
                <Button 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  onClick={() => window.open(tool.officialUrl, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Official Site
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full border-slate-600 text-slate-300 hover:bg-slate-800"
                  onClick={() => window.open(tool.documentationUrl, '_blank')}
                >
                  <BookOpen className="h-4 w-4 mr-2" />
                  Documentation
                </Button>
                {tool.githubUrl && (
                  <Button 
                    variant="outline" 
                    className="w-full border-slate-600 text-slate-300 hover:bg-slate-800"
                    onClick={() => window.open(tool.githubUrl, '_blank')}
                  >
                    <Star className="h-4 w-4 mr-2" />
                    GitHub Repository
                  </Button>
                )}
              </div>
            </div>

            {/* Tags */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary" className="bg-slate-700/50 text-slate-300">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Used By */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Popular Among</h3>
              <div className="space-y-2">
                {tool.usedBy.map((company, index) => (
                  <div key={index} className="text-slate-300 text-sm">
                    • {company}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
