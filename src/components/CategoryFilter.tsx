
import React from 'react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onSelectCategory
}) => {
  return (
    <ScrollArea className="w-full">
      <div className="flex gap-2 pb-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={selectedCategory === category ? "default" : "ghost"}
            size="sm"
            onClick={() => onSelectCategory(category)}
            className={`
              whitespace-nowrap transition-all duration-200 
              ${selectedCategory === category 
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }
            `}
          >
            {category}
          </Button>
        ))}
      </div>
    </ScrollArea>
  );
};
