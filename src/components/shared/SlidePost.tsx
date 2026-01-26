import { Link } from "react-router-dom";

type SlidePostProps = {
  text: string;
  paragraph: string;
  link?: string;
  linkText?: string;
};

export const SlidePost = ({ text, paragraph, link, linkText }: SlidePostProps) => {
  return (
    <div className="flex flex-col justify-between rounded-xl p-6 sm:p-4 bg-white min-w-[294px] sm:min-w-[380px] md:min-w-[450px] border h-full ">
      <div className="grid grid-cols-2 items-start">
        <div className="flex flex-col gap-2 text-left">
          <h3 className="text-xl font-bold text-gray-900">{text}</h3>
          <p className="text-sm text-gray-400 font-medium">
            {paragraph}
          </p>
        </div>
        {link && linkText && (
          <div className="flex items-start justify-end mt-4">
            <Link
              to={link}
              className="text-sm font-semibold text-gray-500 hover:text-gray-700 transition-colors duration-200 uppercase tracking-wide"
            >
              {linkText}
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SlidePost;
