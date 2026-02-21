"use client";

import { useEffect, useState } from "react";

const getHashPath = () =>
  typeof window !== "undefined"
    ? decodeURIComponent(window.location.hash.replace("#", ""))
    : "";

const useHashPath = () => {
  const [hashPath, setHashPath] = useState("");

  useEffect(() => {
    const updateHash = () => {
      setHashPath(getHashPath());
    };

    updateHash(); // run once on mount
    window.addEventListener("hashchange", updateHash);

    return () => {
      window.removeEventListener("hashchange", updateHash);
    };
  }, []);

  return hashPath;
};

export default useHashPath;
