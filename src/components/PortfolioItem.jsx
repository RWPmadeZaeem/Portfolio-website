/* eslint-disable react/prop-types */
// ... (other imports and code)

function PortfolioItem({ title, imgUrl, stack, link }) {
    return (
      <div className="border-2 border-stone-900 dark:border-gray-700 rounded-md overflow-hidden">
        <img
          src={imgUrl}
          alt={`Portfolio - ${title}`}
          className="w-full h-36 md:h-48 object-cover cursor-pointer"
        />
        <div className="w-full p-4">
          <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold text-stone-900 dark:text-stone-300">
            {title}
          </h3>
          <p className="flex flex-wrap gap-2 flex-row items:center justify-start text-xs md:text-sm">
            {stack.map((item) => (
              <span
                key={item}
                className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 dark:border-gray-700 rounded-md"
              >
                {item}
              </span>
            ))}
          </p>
          {link && (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-800 dark:text-orange-300 mt-2 block"
            >
              Learn More
            </a>
          )}
        </div>
      </div>
    );
  }
  
  // ...
  
export default PortfolioItem;  