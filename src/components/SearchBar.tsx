import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Search,
  ChevronDown,
  Home,
  MapPin,
  Banknote,
  BedDouble,
  Landmark,
  SlidersHorizontal,
  X,
  Ruler,
  CalendarClock,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

interface FilterOption {
  value: string;
  label: string;
}

interface FilterConfig {
  id: string;
  label: string;
  icon: React.ElementType;
  placeholder: string;
  options: FilterOption[];
}

const primaryFilters: FilterConfig[] = [
  {
    id: "type",
    label: "Property Type",
    icon: Home,
    placeholder: "All Types",
    options: [
      { value: "house-lot", label: "House & Lot" },
      { value: "townhouse", label: "Townhouse" },
      { value: "duplex", label: "Duplex" },
      { value: "single-attached", label: "Single-Attached" },
      { value: "rowhouse", label: "Rowhouse" },
    ],
  },
  {
    id: "location",
    label: "Location",
    icon: MapPin,
    placeholder: "All Locations",
    options: [
      { value: "cavite", label: "Cavite" },
      { value: "laguna", label: "Laguna" },
      { value: "batangas", label: "Batangas" },
      { value: "rizal", label: "Rizal" },
      { value: "quezon", label: "Quezon Province" },
    ],
  },
  {
    id: "price",
    label: "Price Range",
    icon: Banknote,
    placeholder: "Any Price",
    options: [
      { value: "under-1.5m", label: "Under ₱1.5M" },
      { value: "1.5m-2m", label: "₱1.5M – ₱2M" },
      { value: "2m-3m", label: "₱2M – ₱3M" },
      { value: "3m-5m", label: "₱3M – ₱5M" },
      { value: "5m-plus", label: "₱5M and above" },
    ],
  },
  {
    id: "bedrooms",
    label: "Bedrooms",
    icon: BedDouble,
    placeholder: "Any",
    options: [
      { value: "1", label: "1 Bedroom" },
      { value: "2", label: "2 Bedrooms" },
      { value: "3", label: "3 Bedrooms" },
      { value: "4+", label: "4+ Bedrooms" },
    ],
  },
];

const advancedFilters: FilterConfig[] = [
  {
    id: "financing",
    label: "Financing",
    icon: Landmark,
    placeholder: "All Options",
    options: [
      { value: "pagibig", label: "PAG-IBIG" },
      { value: "bank", label: "Bank Financing" },
      { value: "inhouse", label: "In-House Financing" },
      { value: "cash", label: "Cash / Spot" },
    ],
  },
  {
    id: "lot-area",
    label: "Lot Area",
    icon: Ruler,
    placeholder: "Any Size",
    options: [
      { value: "under-50", label: "Under 50 sqm" },
      { value: "50-80", label: "50 – 80 sqm" },
      { value: "80-120", label: "80 – 120 sqm" },
      { value: "120-plus", label: "120+ sqm" },
    ],
  },
  {
    id: "status",
    label: "Status",
    icon: CalendarClock,
    placeholder: "Any Status",
    options: [
      { value: "rfo", label: "Ready for Occupancy" },
      { value: "pre-selling", label: "Pre-Selling" },
      { value: "under-construction", label: "Under Construction" },
    ],
  },
  {
    id: "features",
    label: "Features",
    icon: ShieldCheck,
    placeholder: "Any Feature",
    options: [
      { value: "gated", label: "Gated Community" },
      { value: "clubhouse", label: "With Clubhouse" },
      { value: "playground", label: "With Playground" },
      { value: "carport", label: "With Carport" },
      { value: "garden", label: "With Garden" },
    ],
  },
];

function Dropdown({
  filter,
  value,
  onChange,
  isOpen,
  onToggle,
  dropUp = false,
}: {
  filter: FilterConfig;
  value: string;
  onChange: (id: string, val: string) => void;
  isOpen: boolean;
  onToggle: () => void;
  dropUp?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const Icon = filter.icon;
  const selectedLabel = filter.options.find((o) => o.value === value)?.label;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen && ref.current && !ref.current.contains(e.target as Node)) {
        onToggle();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onToggle]);

  return (
    <div className={`search-dropdown ${isOpen ? "search-dropdown--open" : ""}`} ref={ref}>
      <button className="search-dropdown__trigger" onClick={onToggle} type="button">
        <div className="search-dropdown__trigger-left">
          <Icon size={16} className="search-dropdown__icon" />
          <div className="search-dropdown__text">
            <span className="search-dropdown__label">{filter.label}</span>
            <span className={`search-dropdown__value ${selectedLabel ? "search-dropdown__value--active" : ""}`}>
              {selectedLabel || filter.placeholder}
            </span>
          </div>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] as const }}
        >
          <ChevronDown size={14} className="search-dropdown__chevron" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`search-dropdown__menu ${dropUp ? "search-dropdown__menu--up" : ""}`}
            initial={{ opacity: 0, y: dropUp ? 8 : -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: dropUp ? 8 : -8, scale: 0.97 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] as const }}
          >
            {value && (
              <button
                className="search-dropdown__option search-dropdown__option--clear"
                onClick={() => {
                  onChange(filter.id, "");
                  onToggle();
                }}
                type="button"
              >
                <X size={13} />
                <span>Clear selection</span>
              </button>
            )}
            {filter.options.map((option) => (
              <button
                key={option.value}
                className={`search-dropdown__option ${value === option.value ? "search-dropdown__option--selected" : ""}`}
                onClick={() => {
                  onChange(filter.id, option.value);
                  onToggle();
                }}
                type="button"
              >
                <span>{option.label}</span>
                {value === option.value && (
                  <motion.div
                    className="search-dropdown__check"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  />
                )}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function SearchBar() {
  const [filters, setFilters] = useState<Record<string, string>>({});
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showAdvanced, setShowAdvanced] = useState(false);

  const activeCount = Object.values(filters).filter(Boolean).length;

  const handleChange = useCallback((id: string, val: string) => {
    setFilters((prev) => ({ ...prev, [id]: val }));
  }, []);

  const toggleDropdown = useCallback((id: string) => {
    setOpenDropdown((prev) => (prev === id ? null : id));
  }, []);

  const handleSearch = () => {
    const active = Object.entries(filters).filter(([, v]) => v);
    if (active.length === 0) {
      const el = document.getElementById("properties");
      el?.scrollIntoView({ behavior: "smooth" });
    } else {
      console.log("Search with filters:", Object.fromEntries(active));
      const el = document.getElementById("properties");
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleClearAll = () => {
    setFilters({});
    setOpenDropdown(null);
  };

  return (
    <div className="search-bar-wrapper">
      <motion.div
        className="search-bar"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 1.2, ease: [0.22, 1, 0.36, 1] as const }}
      >
        <div className="search-bar__main">
          <div className="search-bar__filters">
            {primaryFilters.map((filter) => (
              <Dropdown
                key={filter.id}
                filter={filter}
                value={filters[filter.id] || ""}
                onChange={handleChange}
                isOpen={openDropdown === filter.id}
                onToggle={() => toggleDropdown(filter.id)}
              />
            ))}
          </div>

          <div className="search-bar__actions">
            <motion.button
              className="search-bar__search-btn"
              onClick={handleSearch}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              type="button"
            >
              <Search size={18} />
              <span>Search</span>
            </motion.button>
          </div>
        </div>

        <div className="search-bar__toolbar">
          <button
            className={`search-bar__advanced-toggle ${showAdvanced ? "search-bar__advanced-toggle--active" : ""}`}
            onClick={() => {
              setShowAdvanced(!showAdvanced);
              setOpenDropdown(null);
            }}
            type="button"
          >
            <SlidersHorizontal size={14} />
            <span>Advanced Filters</span>
            <motion.div
              animate={{ rotate: showAdvanced ? 180 : 0 }}
              transition={{ duration: 0.25 }}
            >
              <ChevronDown size={13} />
            </motion.div>
          </button>

          {activeCount > 0 && (
            <motion.button
              className="search-bar__clear"
              onClick={handleClearAll}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              type="button"
            >
              <Sparkles size={13} />
              <span>{activeCount} filter{activeCount > 1 ? "s" : ""} active</span>
              <X size={13} />
            </motion.button>
          )}
        </div>

        <AnimatePresence>
          {showAdvanced && (
            <motion.div
              className="search-bar__advanced"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <div className="search-bar__advanced-inner">
                <div className="search-bar__advanced-filters">
                  {advancedFilters.map((filter) => (
                    <Dropdown
                      key={filter.id}
                      filter={filter}
                      value={filters[filter.id] || ""}
                      onChange={handleChange}
                      isOpen={openDropdown === filter.id}
                      onToggle={() => toggleDropdown(filter.id)}
                      dropUp
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
