import React from "react";

function SharingSection() {
  return (
    <div>
      <div className="max-w-5xl mx-auto bg-white shadow rounded-2xl p-6">
        {/* Header */}
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-xl font-semibold">Web Design Fundamentals</h2>
            <p className="text-gray-600 mt-1 text-sm max-w-2xl">
              Learn the fundamentals of web design, including HTML, CSS, and
              responsive design principles. Develop the skills to create
              visually appealing and user-friendly websites.
            </p>
          </div>
          <button className="px-4 py-2 bg-black text-white rounded-lg text-sm hover:bg-gray-800">
            View Course
          </button>
        </div>

        {/* Images */}
        <div className="grid grid-cols-3 gap-4 mt-4">
          <img
            src="https://via.placeholder.com/300x200"
            alt="preview"
            className="rounded-lg object-cover"
          />
          <img
            src="https://via.placeholder.com/300x200"
            alt="preview"
            className="rounded-lg object-cover"
          />
          <img
            src="https://via.placeholder.com/300x200"
            alt="preview"
            className="rounded-lg object-cover"
          />
        </div>

        {/* Tags + Author */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex gap-2">
            <span className="px-3 py-1 text-xs bg-gray-100 rounded-lg">
              4 Weeks
            </span>
            <span className="px-3 py-1 text-xs bg-gray-100 rounded-lg">
              Beginner
            </span>
          </div>
          <p className="text-sm text-gray-600">By John Smith</p>
        </div>

        {/* Curriculum */}
        <div className="mt-6">
          <h3 className="font-semibold mb-3">Curriculum</h3>
          <div className="grid grid-cols-5 gap-4 text-center">
            {[
              { id: "01", title: "Introduction to HTML" },
              { id: "02", title: "Styling with CSS" },
              { id: "03", title: "Introduction to Responsive Design" },
              { id: "04", title: "Design Principles for Web" },
              { id: "05", title: "Building a Basic Website" },
            ].map((item) => (
              <div
                key={item.id}
                className="p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition"
              >
                <p className="text-lg font-bold">{item.id}</p>
                <p className="text-sm text-gray-600 mt-1">{item.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SharingSection;
