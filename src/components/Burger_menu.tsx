import pkg from 'react-burger-menu';
const { stack: Menu } = pkg;

import '../styles/Burger.css';
// Header sections
const header_sections = {
  sections: [
    {
      title: "Home",
      url: "/",
    },
    {
      title: "Software",
      url: "/software",
    },
    {
      title: "Security",
      url: "/security",
    },
    {
      title: "Community",
      url: "/community",
    },
  ],
};

// BurgerMenu component
const BurgerMenu = () => {
  return (
      <Menu
        right
      >
        {header_sections.sections.map((section, index) => (
          <a
            key={index}
            className="menu-item"
            href={section.url}
          >
            {section.title}
          </a>
        ))}
      </Menu>
  );
};

export default BurgerMenu;
