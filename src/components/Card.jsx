import React from "react";

// Helpers
import { formatDate } from "../utils/common";

const Card = ({
  section,
  subsection,
  title,
  imgURL,
  abstract,
  byline,
  updated_date
}) => {
  return (
    <div className="bg-neutral-200 rounded relative shadow-xl transition ease-in-out hover:scale-105">
      <img src={imgURL} alt={title} className="rounded-t h-[200px] w-full bg-cover" />
      <div className="p-3 h-[250px]">
        <div className="flex justify-end gap-3 text-sm">
          {section && (
            <div className="bg-neutral-400 rounded py-1 px-2">{section}</div>
          )}
          {subsection && (
            <div className="bg-neutral-400 rounded py-1 px-2">{subsection}</div>
          )}
        </div>
        <p className="text-lg font-semibold mt-2">{title}</p>
        <p className="text-sm mt-2">{abstract}</p>
        {/* show only one name and remove comma after name */}
        <p className="text-xs font-semibold absolute bottom-2">
          {byline && byline.split(" ").slice(0, 3).join(" ").replace(/,$/, "")}
        </p>
        <p className="text-xs absolute bottom-2 right-3 text-neutral-600">
          {formatDate(updated_date)}
        </p>
      </div>
    </div>
  );
};

export default Card;
