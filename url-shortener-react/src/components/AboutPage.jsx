import React from "react";
import { FaLink, FaShareAlt, FaEdit, FaChartLine } from "react-icons/fa";

const AboutPage = () => {
  const features = [
    {
      icon: <FaLink className="text-blue-500 text-4xl" />,
      title: "Simple URL Shortening",
      description:
        "Experience the ease of creating short, memorable URLs in just a few clicks. Our intuitive interface and quick setup process ensure you can start shortening URLs without any hassle.",
    },
    {
      icon: <FaShareAlt className="text-green-500 text-4xl" />,
      title: "Powerful Analytics",
      description:
        "Gain insights into your link performance with our comprehensive analytics dashboard. Track clicks, geographical data, and referral sources to optimize your marketing strategies.",
    },
    {
      icon: <FaEdit className="text-purple-500 text-4xl" />,
      title: "Enhanced Security",
      description:
        "Rest assured with our robust security measures. All shortened URLs are protected with advanced encryption, ensuring your data remains safe and secure.",
    },
    {
      icon: <FaChartLine className="text-red-500 text-4xl" />,
      title: "Fast and Reliable",
      description:
        "Enjoy lightning-fast redirects and high uptime with our reliable infrastructure. Your shortened URLs will always be available and responsive, ensuring a seamless experience for your users.",
    },
  ];

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gray-50 pt-10 lg:px-20 sm:px-10 px-5">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-xl p-10 mb-12 shadow-lg text-center">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4 italic">About LinkZip</h1>
        <p className="sm:text-lg text-gray-100 max-w-3xl mx-auto leading-relaxed">
          LinkZip simplifies URL shortening for efficient sharing. Easily generate, manage, and track your shortened links. Make your links memorable, trackable, and secure.
        </p>
      </div>

      {/* Features Section */}
      <div className="grid lg:grid-cols-2 gap-10">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="bg-white p-8 rounded-xl shadow-lg flex space-x-6 hover:scale-105 transition-transform duration-300"
          >
            <div className="flex-shrink-0">{feature.icon}</div>
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-2">{feature.title}</h2>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutPage;
