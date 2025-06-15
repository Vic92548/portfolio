
interface WorkFiltersProps {
    filters: Record<string, string>;
    activeFilter: string;
    setActiveFilter: (filter: string) => void;
}

const WorkFilters = ({ filters, activeFilter, setActiveFilter }: WorkFiltersProps) => {
    return (
        <div className="flex flex-wrap justify-center gap-2 mb-16 animate-fade-in delay-200">
          <div className="flex gap-1 p-1 bg-nordic-gray/10 dark:bg-border-dark/30 rounded-2xl border border-border backdrop-blur-sm">
            {Object.entries(filters).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setActiveFilter(key)}
                className={`px-6 py-3 text-sm font-medium rounded-xl transition-all duration-200 ${
                  activeFilter === key
                    ? 'bg-magic-blue text-white shadow-lg'
                    : 'text-muted-foreground hover:text-foreground hover:bg-background/80'
                }`}
              >
                {label}
              </button>
            ))}
          </div>
        </div>
    );
};

export default WorkFilters;
