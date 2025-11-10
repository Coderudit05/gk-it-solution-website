import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    mobile: "",
    whatsapp: "",
    email: "",
    city: "",
    address: "",
    serviceType: "",
    preferredDate: "",
    preferredTime: "",
    details: "",
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    // why use map here ?
    // because we want to update the specific field in the formData object based on the input's name attribute
    // So one by one it will check the name attribute of the input field and update the corresponding value in the formData state

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value, // iska matlab agar checkbox hai to checked value lo warna value lo value ka matlab yaha hai ke jo bhi user ne input kiya hai wo lo and set kar do
    }));
  };

  // ...existing code...

  // ...existing code...

  const handleSubmit = async (e) => {
    e.preventDefault();

    const SCRIPT_URL =
      "https://script.google.com/macros/s/AKfycbyS3M8h1toZ8ZHP5py8ej7bQijtAQ96-bwYUibpZUvhMf7Z2kCYnsMSrGcDG2aIYhn1IA/exec"; // ✅ Updated URL

    try {
      // Create FormData object (to handle cross-origin safely)
      const form = new FormData();

      form.append("token", "GKITSOLUTIONS_SECRET_2025");
      form.append("fullName", formData.fullName);
      form.append("mobile", formData.mobile);
      form.append("whatsapp", formData.whatsapp);
      form.append("email", formData.email);
      form.append("city", formData.city);
      form.append("address", formData.address);
      form.append("serviceType", formData.serviceType);
      form.append("preferredDate", formData.preferredDate);
      form.append("preferredTime", formData.preferredTime);
      form.append("details", formData.details);
      form.append("consent", formData.consent ? "Yes" : "No");

      // Send to Apps Script (REMOVED no-cors mode)
      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: form,
      });

      // Now we can read the response!
      const result = await response.json();
      console.log("✅ Server response:", result);

      if (response.ok && result.status === 200) {
        alert("✅ Your request has been submitted successfully!");

        // Reset form
        setFormData({
          fullName: "",
          mobile: "",
          whatsapp: "",
          email: "",
          city: "",
          address: "",
          serviceType: "",
          preferredDate: "",
          preferredTime: "",
          details: "",
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

  // ...existing code...

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Form Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Name and Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="mobile"
                  placeholder="Enter your mobile number"
                  value={formData.mobile}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-white"
                />
              </div>
            </div>

            {/* WhatsApp and Email */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  WhatsApp Number
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  placeholder="Enter WhatsApp number "
                  value={formData.whatsapp}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-white"
                />
              </div>
            </div>

            {/* City and Service Type */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  placeholder="Your City"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Type of Service <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="serviceType"
                  placeholder="e.g. CCTV Installation"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-white"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Address <span className="text-red-500">*</span>
              </label>
              <textarea
                name="address"
                rows="2"
                placeholder="Street, Locality, Landmark"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-white resize-none"
              />
            </div>

            {/* Preferred Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Date
                </label>
                <input
                  type="date"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Time
                </label>
                <input
                  type="time"
                  name="preferredTime"
                  value={formData.preferredTime}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-white"
                />
              </div>
            </div>

            {/* Additional Details */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Additional Details
              </label>
              <textarea
                name="details"
                rows="4"
                placeholder="Tell us more about your requirements..."
                value={formData.details}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 bg-gray-50 hover:bg-white resize-none"
              />
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start space-x-3 bg-blue-50 p-4 rounded-lg border border-blue-100">
              <input
                type="checkbox"
                name="consent"
                id="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="h-5 w-5 text-blue-600 border-gray-300 rounded focus:ring-2 focus:ring-blue-500 mt-0.5"
                required
              />
              <label htmlFor="consent" className="text-sm text-gray-700 leading-relaxed">
                I agree to be contacted for service updates, offers, and promotional communications. <span className="text-red-500">*</span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="w-full md:w-auto px-10 py-4 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300 transform hover:scale-105 transition-all duration-300 ease-in-out"
                style={{
                  background: 'linear-gradient(to right, rgb(37, 99, 235), rgb(29, 78, 216))'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'linear-gradient(to right, rgb(29, 78, 216), rgb(30, 64, 175))'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'linear-gradient(to right, rgb(37, 99, 235), rgb(29, 78, 216))'}
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>

        {/* Footer Note */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Your information is secure and will only be used to contact you regarding your inquiry.
        </p>
      </div>
    </section>
  );
};

export default ContactForm;
