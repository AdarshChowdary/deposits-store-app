"use client";

import axios from "axios";
import { useState, useEffect } from "react";
import UserLoader from "./UserLoader";

interface User {
  firstname: string;
  // Add other properties as needed
}

export default function UserWelcome() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      try {
        const response = await axios.get("/api/users");
        setUser(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error fetching user data");
        setLoading(false);
        console.error("Error fetching user:", error);
      }
    };

    fetchUser();
  }, []);

  return (
    <>
      {error && (
        <div className="p-4 bg-destructive shadow-md text-lg font-semibold text-white rounded-xl m-4">
          {error}
        </div>
      )}
      {loading && (
        <div className="p-4 bg-primary shadow-md text-lg font-semibold text-white rounded-xl m-4">
          <UserLoader />
        </div>
      )}
      {user && (
        <div className="p-4 bg-primary shadow-md text-md font-semibold text-white rounded-xl m-4">
          <h2>Welcome, {user.firstname}!</h2>
        </div>
      )}
    </>
  );
}
