import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const ShortenUrlPage = () => {
    const { url } = useParams();

    useEffect(() => {
        if (url) {
            window.location.href = import.meta.env.VITE_BACKEND_URL + `/${url}`;
        }
    }, [url]);
    return (
    <div className="flex items-center justify-center h-screen bg-white">
      <p className="text-blue-600 text-xl font-semibold animate-pulse">
        Redirecting…
      </p>
    </div>
  );
}

export default ShortenUrlPage