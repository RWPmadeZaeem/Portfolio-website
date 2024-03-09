function TimelineItem({ year, title, duration, details }) {
  return (
    <li className="timeline-item flex items-center py-4 px-4 rounded-md bg-white dark:bg-gray-800 relative">
      {/* Line track */}
      <div className="line absolute left-0 top-0 bottom-0 w-1 bg-gray-700 dark:bg-gray-500" />

      {/* Dot */}
      <div className="dot absolute left-[-9px] top-[14px] transform-y-[-50%] w-6 h-6 bg-gray-700 dark:bg-gray-500 rounded-full border-2 border-white" />

      {/* Content */}
      <div className="content flex items-start pl-8">
        {/* Year (darker color) */}
        <div className="year bg-gray-700 dark:bg-gray-500 text-stone-300 px-2 py-1 rounded-md text-xs md:text-sm mr-4">
          {year}
        </div>

        {/* Title and details */}
        <div className="flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-stone-300 mb-1">
            <span className="align-middle">{title}</span>
          </h3>

          {/* Duration below title */}
          {duration && (
            <span className="duration text-sm font-normal text-gray-500 dark:text-gray-300 mb-2">
              {duration}
            </span>
          )}

          <p className="text-base font-normal text-gray-500 dark:text-gray-300 leading-loose">
            {details}
          </p>
        </div>
      </div>
    </li>
  );
}

export default TimelineItem;