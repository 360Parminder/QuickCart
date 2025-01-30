import React, { useState } from "react";

const Policy = () => {
  const [activeSection, setActiveSection] = useState("privacy");

  const renderSection = () => {
    switch (activeSection) {
      case "privacy":
        return <PrivacyPolicy />;
      case "terms":
        return <TermsAndConditions />;
      case "return":
        return <ReturnRefundPolicy />;
      case "shipping":
        return <ShippingDeliveryPolicy />;
      default:
        return <PrivacyPolicy />;
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Website Policies</h1>
      <div className="flex justify-between gap-4 mb-8">
        <button
          onClick={() => setActiveSection("privacy")}
          className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
            activeSection === "privacy"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Privacy Policy
        </button>
        <button
          onClick={() => setActiveSection("terms")}
          className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
            activeSection === "terms"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Terms & Conditions
        </button>
        <button
          onClick={() => setActiveSection("return")}
          className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
            activeSection === "return"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Return & Refund
        </button>
        <button
          onClick={() => setActiveSection("shipping")}
          className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
            activeSection === "shipping"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Shipping & Delivery
        </button>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">{renderSection()}</div>
    </div>
  );
};

// Privacy Policy Component
const PrivacyPolicy = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">Privacy Policy</h2>
    <p className="mb-4">
      Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website.
    </p>
    <ul className="list-disc pl-6">
      <li>We collect information such as name, email, and payment details.</li>
      <li>We use cookies to enhance your browsing experience.</li>
      <li>We do not share your information with third parties without your consent.</li>
    </ul>
  </div>
);

// Terms and Conditions Component
const TermsAndConditions = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">Terms and Conditions</h2>
    <p className="mb-4">
      By using our website, you agree to the following terms and conditions:
    </p>
    <ul className="list-disc pl-6">
      <li>You must be at least 18 years old to use this website.</li>
      <li>You are responsible for maintaining the confidentiality of your account.</li>
      <li>We reserve the right to terminate accounts for violations of these terms.</li>
    </ul>
  </div>
);

// Return and Refund Policy Component
const ReturnRefundPolicy = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">Return & Refund Policy</h2>
    <p className="mb-4">
      We offer a 30-day return policy for most products. Please review the following guidelines:
    </p>
    <ul className="list-disc pl-6">
      <li>Items must be returned in their original condition.</li>
      <li>Refunds will be credit to original payment method in  within 5-7 business days.</li>
      <li>Shipping costs are non-refundable.</li>
    </ul>
  </div>
);

// Shipping and Delivery Policy Component
const ShippingDeliveryPolicy = () => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">Shipping & Delivery Policy</h2>
    <p className="mb-4">
      We aim to deliver your orders as quickly as possible. Here’s what you need to know:
    </p>
    <ul className="list-disc pl-6">
      <li>Standard shipping takes 3-5 business days.</li>
      <li>Express shipping is available for an additional fee.</li>
      <li>International shipping may take longer due to customs.</li>
    </ul>
  </div>
);

export default Policy;