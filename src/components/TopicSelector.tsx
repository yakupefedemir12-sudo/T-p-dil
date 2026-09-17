import React, { useState } from 'react';
import { TopicLesson } from '../types';
import { Search, Sparkles, Flame, CheckCircle2 } from 'lucide-react';

interface TopicSelectorProps {
  topics: TopicLesson[];
  activeTopicId: string;
  onSelectTopic: (topicId: string) => void;
  onOpenCustomTopic: () => void;
  completedTopicIds: string[];
}

export const TopicSelector: React.FC<TopicSelectorProps> = ({
  topics,
  activeTopicId,
  onSelectTopic,
  onOpenCustomTopic,
  completedTopicIds,
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredTopics = topics.filter((t) =>
    t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    t.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white border-b border-slate-200 py-3.5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3">
        
        {/* Search & Topic Selector Header */}
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative flex-1 md:w-64">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Konu veya bağlaç ara..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 text-xs bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-800 placeholder-slate-400"
            />
          </div>
          <button
            onClick={onOpenCustomTopic}
            className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-teal-700 bg-teal-50 hover:bg-teal-100 border border-teal-200 rounded-lg transition-colors"
          >
            <Sparkles className="w-3.5 h-3.5 text-teal-600" />
            <span>Farklı Bir Konu İste</span>
          </button>
        </div>

        {/* Topic Horizontal Scrollable Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-thin">
          {filteredTopics.map((topic) => {
            const isActive = topic.id === activeTopicId;
            const isCompleted = completedTopicIds.includes(topic.id);

            return (
              <button
                key={topic.id}
                id={`topic-tab-${topic.id}`}
                onClick={() => onSelectTopic(topic.id)}
                className={`shrink-0 flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-medium transition-all ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm ring-1 ring-slate-900'
                    : 'bg-slate-100 hover:bg-slate-200/80 text-slate-700 border border-slate-200/60'
                }`}
              >
                {isCompleted ? (
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                ) : (
                  <Flame className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-amber-400' : 'text-amber-500'}`} />
                )}
                <span>{topic.title}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded font-semibold ${
                    isActive ? 'bg-slate-800 text-teal-300' : 'bg-white text-slate-600 border border-slate-200'
                  }`}
                >
                  {topic.badge}
                </span>
              </button>
            );
          })}
        </div>

      </div>
    </div>
  );
};
