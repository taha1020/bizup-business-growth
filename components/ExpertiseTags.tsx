"use client";

import { useState } from "react";

type ExpertiseTagsProps = {
  items: string[];
};

export default function ExpertiseTags({
  items,
}: ExpertiseTagsProps) {
  const [activeItem, setActiveItem] = useState<string | null>(
    null
  );

  return (
    <div className="expertise-tags">
      {items.map((item) => {
        const isActive = activeItem === item;

        return (
          <button
            key={item}
            type="button"
            className={`expertise-tag ${
              isActive ? "expertise-tag-active" : ""
            }`}
            onClick={() =>
              setActiveItem(
                isActive ? null : item
              )
            }
          >
            <span className="expertise-tag-text">
              {item}
            </span>

            <span className="expertise-tag-glow" />
          </button>
        );
      })}
    </div>
  );
}