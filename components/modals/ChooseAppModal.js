"use client";

import { X, Download, Apple, Smartphone } from "lucide-react";

export default function ChooseAppModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const apps = [
    {
      name: "iOS App",
      icon: Apple,
      description: "Download for iPhone & iPad",
      link: "https://apps.apple.com/in/app/ratnakar-securities/id...", // Update with actual link
      color: "bg-black hover:bg-gray-800",
      bgLight: "bg-black/5",
    },
    {
      name: "Android App",
      icon: Smartphone,
      description: "Download for Android devices",
      link: "https://play.google.com/store/apps/details?id=...", // Update with actual link
      color: "bg-green-600 hover:bg-green-700",
      bgLight: "bg-green-50",
    },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 z-[999] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-white">Choose Your App</h2>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-full p-2 transition-colors duration-200"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          <p className="text-gray-600 text-center mb-6">
            Download the Ratnakar Securities app for a seamless trading experience on the go.
          </p>

          <div className="space-y-4">
            {apps.map((app) => {
              const IconComponent = app.icon;
              return (
                <a
                  key={app.name}
                  href={app.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${app.bgLight} border-2 border-gray-200 rounded-xl p-4 transition-all duration-300 hover:border-red-600 hover:shadow-lg block`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`${app.color} text-white rounded-lg p-3 flex items-center justify-center`}>
                      <IconComponent className="h-6 w-6" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-gray-900">{app.name}</h3>
                      <p className="text-sm text-gray-600">{app.description}</p>
                    </div>
                    <div className="flex items-center justify-center h-10 w-10 rounded-full bg-red-600 text-white">
                      <Download className="h-5 w-5" />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <p className="text-sm text-blue-900 text-center">
              💡 <strong>Tip:</strong> You can also access our platform from any web browser.
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
          <button
            onClick={onClose}
            className="w-full py-2.5 text-center font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
