import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function Message() {
  return (
    <section className="mt-12 px-4 flex flex-col items-center gap-10">
      {/* Card Layanan */}
      <div className="card w-full max-w-md bg-white shadow-md rounded-2xl">
        <div className="card-body">
          <h2 className="text-center font-bold text-lg mb-4">
            HIMTI Klinik Komputer
          </h2>

          {/* Service */}
          <div className="flex items-center gap-3 mt-2">
            <div className="w-5 h-5 rounded-full bg-orange-200" />
            <div>
              <h3 className="font-bold">Service</h3>
              <p className="text-sm text-gray-500">Laptop</p>
            </div>
          </div>

          {/* Upgrade */}
          <div className="flex items-center gap-3 mt-4">
            <div className="w-5 h-5 rounded-full bg-orange-200" />
            <div>
              <h3 className="font-bold">Upgrade</h3>
              <p className="text-sm text-gray-500">Software dan Hardware</p>
            </div>
          </div>

          {/* Pembuatan */}
          <div className="flex items-center gap-3 mt-4">
            <div className="w-5 h-5 rounded-full bg-orange-200" />
            <div>
              <h3 className="font-bold">Pembuatan</h3>
              <p className="text-sm text-gray-500">
                Website, Mobile App dan CV
              </p>
            </div>
          </div>

          {/* Logo */}
          <div className="flex justify-center mt-6">
            <img
              src="./images/himti-logo.png"
              alt="HIMTI"
              className="w-32 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Card Form */}
      <div className="card w-full max-w-md bg-white shadow-md rounded-2xl">
        <div className="card-body">
          <label className="form-control w-full">
            <span className="label-text">Merek Laptop</span>
            <input
              type="text"
              placeholder=""
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full mt-3">
            <span className="label-text">Type Laptop</span>
            <input
              type="text"
              placeholder=""
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full mt-3">
            <span className="label-text">No. HP</span>
            <input
              type="text"
              placeholder=""
              className="input input-bordered w-full"
            />
          </label>

          <label className="form-control w-full mt-3">
            <span className="label-text">Detail Kerusakan</span>
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder=""
            />
          </label>

          <p className="mt-4 text-xs text-blue-600">
            Untuk dapat berkomunikasi langsung dengan admin klinik bisa langsung klik tombol di bawah ini. Terima kasih!
          </p>

          <div className="mt-4 flex justify-center">
            <a
              href="https://wa.me/6281234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg flex items-center justify-center"
            >
              <FaWhatsapp size={28} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Message;
