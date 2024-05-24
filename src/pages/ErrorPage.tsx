import { Navbar } from "@/components/shared/Navbar";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <Navbar />
      <div>
        <p>
          {isRouteErrorResponse(error)
            ? "This page doesnot exist"
            : "An unespected error occured "}
        </p>
      </div>
    </>
  );
};
