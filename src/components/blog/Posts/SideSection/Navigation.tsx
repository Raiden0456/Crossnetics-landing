import React from 'react';

// Define the TypeScript interface for the component props
interface NavigationProps {
  headers: {
    id: string;
    title: string;
  }[];
}

// The Navigation functional component
const Navigation: React.FC<NavigationProps> = ({ headers }) => {
  // State to keep track of which section is currently active
  const [activeSection, setActiveSection] = React.useState<string>('');

  // Function to scroll to a section when a navigation item is clicked
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      // Calculate the position to scroll to
      const headerHeight = 70; // Adjust this value based on your header's actual height in px
      const position = element.offsetTop - headerHeight;
  
      // Scroll to the calculated position smoothly
      window.scrollTo({
        top: position,
        behavior: 'smooth'
      });
    }
  };
  

  // useEffect hook to set up IntersectionObserver when component mounts
  React.useEffect(() => {
    // Creating an IntersectionObserver to detect which section is currently visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // If a section is intersecting (visible), set it as the active section
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      // Configuration for the observer: the margins around the observed elements
      { rootMargin: '-50% 0px -50% 0px' }
    );

    // Observing each header section
    headers.forEach((header) => {
      const element = document.getElementById(header.id);
      if (element) observer.observe(element);
    });

    // Cleanup function to disconnect the observer when component unmounts
    return () => observer.disconnect();
  }, [headers]); // Dependency array to re-run effect when headers change

  // Render the navigation component
  return (
    <div className="flex flex-col min-w-[250px] h-fit gap-y-4 p-6 rounded-[40px] bg-sky-50">
    {headers
      .filter((header) => header.title.trim() !== '') // Filter out headers with empty titles
      .map((header) => (
        <div
          key={header.id}
          onClick={() => scrollToSection(header.id)}
          className={`flex flex-row gap-x-2 rounded-lg items-start justify-start transition-all duration-300 cursor-pointer w-fit ${
            // Apply different styling if the section is active
            activeSection == header.id
              ? "text-white bg-blue-500 ml-px scale-105 p-2"
              : "text-gray-600 hover:scale-105"
          }`}
        >
          <p className="font-semibold text-sm leading-tight mt-0.5">
            {header.title}
          </p>
        </div>
    ))}
  </div>
  
  );
};

export default Navigation;
