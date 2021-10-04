import { useEffect, useState } from "react";
const Route = ({ path, children }) => {
  // this exist only to update our current path
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  // we want to run one time so: [] (on the startup/render of the component )
  useEffect(() => {
    const onLocationChange = () => {
      console.log("location change", currentPath);
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener("popstate", onLocationChange);
    return () => {
      window.removeEventListener("popstate", onLocationChange);
    };
  }, []);
  return currentPath === path ? children : null;
};
export default Route;
