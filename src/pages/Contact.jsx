import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    whatsapp: "",
    email: "",
    city: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Validation logic
    if (name === "fullName") {
      // Only allow letters and spaces
      if (!/^[a-zA-Z\s]*$/.test(value)) return;
    }

    if (name === "mobile" || name === "whatsapp") {
      // Only allow numbers and max 10 digits
      if (!/^\d*$/.test(value) || value.length > 10) return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Additional validation before submit
    if (formData.mobile.length !== 10) {
      alert("❌ Mobile number must be exactly 10 digits");
      return;
    }

    if (formData.whatsapp && formData.whatsapp.length !== 10) {
      alert("❌ WhatsApp number must be exactly 10 digits");
      return;
    }

    const SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbyS3M8h1toZ8ZHP5py8ej7bQijtAQ96-bwYUibpZUvhMf7Z2kCYnsMSrGcDG2aIYhn1IA/exec";

    try {
      const form = new FormData();

      form.append("token", "GKITSOLUTIONS_SECRET_2025");
      form.append("fullName", formData.fullName);
      form.append("mobile", formData.mobile);
      form.append("whatsapp", formData.whatsapp);
      form.append("email", formData.email);
      form.append("city", formData.city);
      form.append("consent", formData.consent ? "Yes" : "No");

      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: form,
      });

      const result = await response.json();
      console.log("✅ Server response:", result);

      if (response.ok && result.status === 200) {
        alert("✅ Your request has been submitted successfully!");

        setFormData({
          fullName: "",
          mobile: "",
          whatsapp: "",
          email: "",
          city: "",
          consent: false,
        });
      } else {
        alert("❌ Error: " + result.message);
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      alert("Error submitting form. Please try again later.");
    }
  };

  return (
    <section className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-lg mx-auto ">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Get In <span className="text-cyan-400">Touch</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-slate-900/70 backdrop-blur-sm rounded-2xl shadow-xl shadow-cyan-500/20 p-8 md:p-12 border border-cyan-500/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Full Name <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-200 bg-slate-800 text-white hover:bg-slate-700"
              />
            </div>

            {/* Mobile Number */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Mobile Number <span className="text-red-400">*</span>
              </label>
              <input
                type="tel"
                name="mobile"
                placeholder="Enter 10 digit mobile number"
                value={formData.mobile}
                onChange={handleChange}
                required
                maxLength="10"
                pattern="\d{10}"
                className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-200 bg-slate-800 text-white hover:bg-slate-700"
              />
              <p className="text-xs text-gray-400 mt-1">Must be exactly 10 digits</p>
            </div>

            {/* WhatsApp Number */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                WhatsApp Number
              </label>
              <input
                type="tel"
                name="whatsapp"
                placeholder="Enter 10 digit WhatsApp number (optional)"
                value={formData.whatsapp}
                onChange={handleChange}
                maxLength="10"
                className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-200 bg-slate-800 text-white hover:bg-slate-700"
              />
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-200 bg-slate-800 text-white hover:bg-slate-700"
              />
            </div>

            {/* City */}
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                City <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="city"
                placeholder="Your City"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition duration-200 bg-slate-800 text-white hover:bg-slate-700"
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="w-full px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl shadow-lg shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/70 focus:outline-none focus:ring-4 focus:ring-cyan-300 transform hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-gray-400 mt-8">
          Your information is secure and will only be used to contact you regarding your inquiry.
        </p>
      </div>
    </section>
  );
};

export default ContactForm;
