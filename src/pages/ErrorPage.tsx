import { Navbar } from "@/components/shared/Navbar";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center h-[calc(100vh_-_100px)]">
        {isRouteErrorResponse(error) ? (
          <div className="flex items-center">
            <p className="text-2xl font-semibold p-4 border-r border-white/30">
              404
            </p>
            <p className="p-4">This page doesn't exist.</p>
          </div>
        ) : (
          <p>An unespected error occured.</p>
        )}
      </div>
    </>
  );
};
