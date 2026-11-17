"use client";

import { useState } from "react";

type Tab = { label: string; content: React.ReactNode };
type TabsProps = { tabs: Tab[] };

export default function Tabs({ tabs }: TabsProps) {
  const [active, setActive] = useState<number>(0);

  return (
    <div>
      <div className="flex items-center gap-4 border-b" role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            role="tab"
            aria-selected={index === active}
            className="cursor-pointer"
            onClick={() => setActive(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div>{tabs[active].content}</div>
    </div>
  );
}
