import { Settings } from "lucide-react";

export const Blog = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex items-center">
        <div className="p-4 border-r border-white/30">
          <Settings className="w-10 h-10" />
        </div>
        <p className="p-4">
          The page is under construction. <br />
          <span className="text-sm text-textColor">
            We will notify you when it's done, stay tuned!
          </span>
        </p>
      </div>
    </div>
  );
};
