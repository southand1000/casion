"use client";

import { Search, X, SlidersHorizontal } from "lucide-react";
import { useState } from "react";
import { cn } from "@/app/lib/utils";

interface SearchBarProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onFilterClick?: () => void;
  className?: string;
}

export default function SearchBar({
  placeholder = "すべてを検索...",
  value,
  onChange,
  onFilterClick,
  className,
}: SearchBarProps) {
  const [internalValue, setInternalValue] = useState("");

  const currentValue = value ?? internalValue;

  const handleChange = (text: string) => {
    if (value === undefined) {
      setInternalValue(text);
    }
    onChange?.(text);
  };

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-2xl border border-border bg-card px-4 py-3 shadow-sm transition-all",
        "focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20",
        className
      )}
    >
      <Search
        size={20}
        className="text-muted-foreground shrink-0"
      />

      <input
        value={currentValue}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
      />

      {currentValue && (
        <button
          onClick={() => handleChange("")}
          className="rounded-full p-1 hover:bg-muted transition"
        >
          <X size={18} />
        </button>
      )}

      <button
        onClick={onFilterClick}
        className="rounded-full p-2 hover:bg-muted transition"
      >
        <SlidersHorizontal size={18} />
      </button>
    </div>
  );
}