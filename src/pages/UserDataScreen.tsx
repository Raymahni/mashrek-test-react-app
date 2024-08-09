import React, { useEffect, useState } from "react";
import { retrieveUsername } from "../utils/Secured";

const UserDataScreen: React.FC = () => {
  const [username, setUsername] = useState<string | null>(null);

  useEffect(() => {
    const storedUsername = retrieveUsername();
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-base font-medium mr-2">Stored Username:</h1>
      {username ? (
        <p className="text-sm font-medium mt-1 ">{username}</p>
      ) : (
        <p style={{ fontSize: 14, fontStyle: "italic", color: "gray" }}>
          No username stored.
        </p>
      )}
    </div>
  );
};
export default UserDataScreen;
