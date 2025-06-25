
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ExternalLink, Download, Users } from 'lucide-react';

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
  featured?: boolean;
  tags: string[];
  features: string[];
  usedBy: string[];
  officialUrl: string;
  documentationUrl: string;
  githubUrl?: string;
  installCommand?: string;
}

interface ToolCardProps {
  tool: Tool;
  onClick: () => void;
  featured?: boolean;
}

export const ToolCard: React.FC<ToolCardProps> = ({ tool, onClick, featured = false }) => {
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
    <Card 
      className={`
        group cursor-pointer transition-all duration-300 hover:scale-105 bg-slate-800/50 backdrop-blur-sm border-slate-700 hover:border-slate-600 hover:shadow-xl hover:shadow-purple-500/10
        ${featured ? 'ring-1 ring-purple-500/30' : ''}
      `}
      onClick={onClick}
    >
      <CardContent className="p-6">
        {featured && (
          <div className="flex items-center mb-3">
            <Star className="h-4 w-4 text-yellow-400 mr-1" />
            <span className="text-xs text-yellow-400 font-medium">Featured</span>
          </div>
        )}
        
        <div className="flex items-start gap-4 mb-4">
          <img 
            src={tool.logo} 
            alt={`${tool.name} logo`}
            className="w-12 h-12 rounded-lg object-cover bg-white/10 p-1"
            onError={(e) => {
              e.currentTarget.src = `https://ui-avatars.com/api/?name=${tool.name}&background=random&color=fff`;
            }}
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-white mb-1 group-hover:text-blue-400 transition-colors">
              {tool.name}
            </h3>
            <p className="text-sm text-slate-400 line-clamp-2">
              {tool.description}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          <Badge className={`text-xs ${getDifficultyColor(tool.difficulty)}`}>
            {tool.difficulty}
          </Badge>
          <Badge className={`text-xs ${getPricingColor(tool.pricing)}`}>
            {tool.pricing}
          </Badge>
        </div>

        <div className="flex flex-wrap gap-1 mb-4">
          {tool.tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs bg-slate-700/50 text-slate-300 hover:bg-slate-600/50">
              {tag}
            </Badge>
          ))}
          {tool.tags.length > 3 && (
            <Badge variant="secondary" className="text-xs bg-slate-700/50 text-slate-300">
              +{tool.tags.length - 3}
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between text-xs text-slate-400">
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3" />
            <span>{tool.popularity}% popular</span>
          </div>
          <div className="flex items-center gap-2">
            <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="opacity-0 group-hover:opacity-100 transition-opacity">View Details</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
