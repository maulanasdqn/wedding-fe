import type { FC, ReactElement } from "react";

export const RootLoading: FC = (): ReactElement => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      {/* Container */}
      <div className="relative w-24 h-24">
        {/* Bar 1 */}
        <div className="absolute w-1 h-full bg-red-600 left-0 animate-draw-line"></div>
        {/* Bar 2 */}
        <div className="absolute w-1 h-full bg-red-600 left-4 animate-draw-line delay-100"></div>
        {/* Bar 3 */}
        <div className="absolute w-1 h-full bg-red-600 left-8 animate-draw-line delay-200"></div>
        {/* Bar 4 */}
        <div className="absolute w-1 h-full bg-red-600 left-12 animate-draw-line delay-300"></div>
      </div>
    </div>
  );
};
