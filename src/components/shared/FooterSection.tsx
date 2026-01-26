import React from "react";

export type FooterSectionProps = {
  title: string;
  links: string[];
};

export const FooterSection: React.FC<FooterSectionProps> = ({
  title,
  links,
}) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <ul className="space-y-2 text-gray-600">
        {links.map((link, index) => (
          <li key={index}>
            <a href="#" className="hover:text-gray-900 transition-colors">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterSection;