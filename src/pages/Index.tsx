import React, { useState, useMemo } from 'react';
import { Search, Star, ArrowUp, Code, Github } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ToolCard } from '@/components/ToolCard';
import { ToolModal } from '@/components/ToolModal';
import { toolsData } from '@/data/toolsData';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTool, setSelectedTool] = useState<typeof toolsData[0] | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredTools = useMemo(() => {
    return toolsData.filter(tool => {
      const matchesSearch = tool.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tool.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tool.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || tool.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const categories = [...new Set(toolsData.map(tool => tool.category))];
  const featuredTools = toolsData.filter(tool => tool.featured).slice(0, 6);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getToolsForCategory = (category: string) => {
    if (category === 'all') return filteredTools;
    return filteredTools.filter(tool => tool.category === category);
  };

  const renderToolsGrid = (tools: typeof toolsData) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {tools.map((tool) => (
        <ToolCard 
          key={tool.id} 
          tool={tool} 
          onClick={() => setSelectedTool(tool)}
        />
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="relative z-10 container mx-auto px-4 pt-20 pb-32">
          <div className="text-center max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <Code className="h-12 w-12 text-blue-400 mr-3" />
              <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                DevTools Hub
              </h1>
            </div>
            <p className="text-xl text-slate-300 mb-8 leading-relaxed">
              Discover the ultimate collection of web development tools, frameworks, and resources. 
              From frontend libraries to backend services, find everything you need to build amazing web applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 text-lg">
                Explore Tools
              </Button>
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8 py-3 text-lg">
                <Github className="h-5 w-5 mr-2" />
                Contribute
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-4 -mt-16 relative z-20 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-400 mb-2">{toolsData.length}+</div>
              <div className="text-slate-300">Development Tools</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">{categories.length}</div>
              <div className="text-slate-300">Categories</div>
            </CardContent>
          </Card>
          <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700">
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-slate-300">Always Updated</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Featured Tools */}
      <div className="container mx-auto px-4 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white mb-4">Featured Tools</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Popular and trending tools that are shaping the future of web development
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {featuredTools.map((tool) => (
            <ToolCard 
              key={tool.id} 
              tool={tool} 
              onClick={() => setSelectedTool(tool)}
              featured
            />
          ))}
        </div>
      </div>

      {/* Search and Filter */}
      <div className="container mx-auto px-4 mb-8">
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Search className="absolute left-3 top-3 h-5 w-5 text-slate-400" />
            <Input
              placeholder="Search tools, frameworks, languages..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-12 bg-slate-800/50 border-slate-600 text-white placeholder:text-slate-400 h-12"
            />
          </div>
        </div>
      </div>

      {/* Category Tabs and Tools */}
      <div className="container mx-auto px-4 pb-16">
        <div className="max-w-7xl mx-auto">
          <Tabs value={selectedCategory} onValueChange={setSelectedCategory} className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 xl:grid-cols-8 bg-slate-800/50 mb-8 h-auto p-1">
              <TabsTrigger 
                value="all" 
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white text-slate-300 py-2"
              >
                All ({toolsData.length})
              </TabsTrigger>
              {categories.map((category) => {
                const categoryTools = toolsData.filter(tool => tool.category === category);
                return (
                  <TabsTrigger 
                    key={category}
                    value={category}
                    className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white text-slate-300 text-xs py-2 px-2"
                  >
                    {category.replace(' & ', ' ')} ({categoryTools.length})
                  </TabsTrigger>
                );
              })}
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-white">
                  All Tools
                  <span className="text-slate-400 ml-2">({filteredTools.length})</span>
                </h2>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                    <Star className="h-4 w-4 mr-2" />
                    Most Popular
                  </Button>
                </div>
              </div>
              
              {filteredTools.length === 0 ? (
                <div className="text-center py-16">
                  <div className="text-slate-400 text-lg mb-4">No tools found</div>
                  <p className="text-slate-500">Try adjusting your search terms or filters</p>
                </div>
              ) : (
                renderToolsGrid(filteredTools)
              )}
            </TabsContent>

            {categories.map((category) => {
              const categoryTools = getToolsForCategory(category);
              return (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold text-white">
                      {category}
                      <span className="text-slate-400 ml-2">({categoryTools.length})</span>
                    </h2>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm" className="text-slate-400 hover:text-white">
                        <Star className="h-4 w-4 mr-2" />
                        Most Popular
                      </Button>
                    </div>
                  </div>
                  
                  {categoryTools.length === 0 ? (
                    <div className="text-center py-16">
                      <div className="text-slate-400 text-lg mb-4">No tools found</div>
                      <p className="text-slate-500">Try adjusting your search terms</p>
                    </div>
                  ) : (
                    renderToolsGrid(categoryTools)
                  )}
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 z-50 rounded-full p-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg"
        >
          <ArrowUp className="h-5 w-5" />
        </Button>
      )}

      {/* Tool Modal */}
      {selectedTool && (
        <ToolModal 
          tool={selectedTool} 
          onClose={() => setSelectedTool(null)} 
        />
      )}
    </div>
  );
};

export default Index;