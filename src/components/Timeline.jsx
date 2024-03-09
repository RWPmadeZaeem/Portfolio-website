// Timeline Component
import timeline from '../data/timeline';
import TimelineItem from './TimelineItem';

function Timeline() {
  return (
    <div className="my-20">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold underline underline-offset-8 decoration-4 mb-5 text-stone-900 dark:text-stone-300">
          Timeline
        </h2>
      </div>
      <div className="flex flex-col md:flex-row justify-center">
        <ol className="w-full md:w-7/12 list-none">
          {timeline.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              duration={item.duration}
              details={item.details}
            />
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Timeline;
