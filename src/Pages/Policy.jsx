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
    <div className="w-full h-full p-2 overflow-y-scroll" >
      <h1 className="text-3xl font-bold text-center mb-8">Website Policies</h1>
      <div className="flex justify-between gap-4 mb-8">
        <button
          onClick={() => setActiveSection("privacy")}
          className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
            activeSection === "privacy"
              ? "bg-[#7b2bff] text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Privacy Policy
        </button>
        <button
          onClick={() => setActiveSection("terms")}
          className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
            activeSection === "terms"
              ? "bg-[#7b2bff] text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Terms & Conditions
        </button>
        <button
          onClick={() => setActiveSection("return")}
          className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
            activeSection === "return"
              ? "bg-[#7b2bff] text-white"
              : "bg-gray-200 hover:bg-gray-300"
          }`}
        >
          Return & Refund
        </button>
        <button
          onClick={() => setActiveSection("shipping")}
          className={`flex-1 py-2 px-4 rounded-lg transition-colors ${
            activeSection === "shipping"
              ? "bg-[#7b2bff] text-white"
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
      This Privacy Policy explains how Quick Cart ("we", "our", "us") collects, uses, shares, protects, and processes your personal data through our website [Website Link] ("Platform"). By using this Platform, you agree to the terms of this Privacy Policy and the applicable laws of India. If you do not agree, please do not use our Platform.
    </p>

    <h3 className="text-xl font-semibold mt-4">1. Information We Collect</h3>
    <ul className="list-disc pl-6 mb-4">
      <li>Personal details such as name, date of birth, address, phone number, and email ID.</li>
      <li>Payment details, including bank account, credit/debit card information.</li>
      <li>Biometric data (if applicable and with consent).</li>
      <li>Usage data, including behavior, preferences, and interactions on the Platform.</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">2. How We Use Your Information</h3>
    <ul className="list-disc pl-6 mb-4">
      <li>To provide and improve our services.</li>
      <li>To process payments and transactions.</li>
      <li>To personalize user experiences and enhance customer support.</li>
      <li>To prevent fraud, enforce our policies, and comply with legal obligations.</li>
      <li>To communicate promotions, offers, and updates (with opt-out options).</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">3. Sharing of Information</h3>
    <ul className="list-disc pl-6 mb-4">
      <li>We may share your data with our corporate entities, affiliates, and business partners.</li>
      <li>We may disclose data to third-party service providers for order fulfillment, payments, and marketing.</li>
      <li>We may share information with government authorities as required by law.</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">4. Security Measures</h3>
    <p className="mb-4">
      We implement reasonable security measures to protect your personal data. However, data transmission over the internet is not completely secure, and users should take precautions to protect their login credentials.
    </p>

    <h3 className="text-xl font-semibold mt-4">5. Data Retention & Deletion</h3>
    <ul className="list-disc pl-6 mb-4">
      <li>You can delete your account via the settings on our Platform.</li>
      <li>Data may be retained for compliance, fraud prevention, or legal purposes.</li>
      <li>Anonymized data may be stored for analytical and research purposes.</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">6. Your Rights</h3>
    <ul className="list-disc pl-6 mb-4">
      <li>You can access, update, and correct your personal data.</li>
      <li>You may withdraw consent by contacting our Grievance Officer.</li>
      <li>Withdrawing consent may impact access to certain services.</li>
    </ul>

    <h3 className="text-xl font-semibold mt-4">7. Updates to Privacy Policy</h3>
    <p className="mb-4">
      We may update this Privacy Policy periodically. Significant changes will be communicated as required by law.
    </p>
    <h3 className="text-xl font-semibold mt-4">8. Contact Us</h3>
    <p className="mb-2">
     Email: yesask8@gmail.com
    </p>
    <p className="mb-4">
     Contact: +91 8779112732
    </p>
  </div>
);
// Terms and Conditions Component
const TermsAndConditions = () => (
  <div className="w-full h-full p-2 overflow-y-auto">
    <h2 className="text-2xl font-semibold mb-4">Terms and Conditions</h2>
    <p className="mb-4">
      This document is an electronic record in terms of the Information Technology Act, 2000 and rules thereunder as applicable, and the amended provisions pertaining to electronic records in various statutes as amended by the Information Technology Act, 2000. This electronic record is generated by a computer system and does not require any physical or digital signatures.
    </p>
    <p className="mb-4">
      This document is published in accordance with the provisions of Rule 3 (1) of the Information Technology (Intermediaries Guidelines) Rules, 2011, that require publishing the rules and regulations, privacy policy, and Terms of Use for access or usage of the domain name <strong>https://quickcart-store.vercel.app</strong> (“Website”), including the related mobile site and mobile application (hereinafter referred to as “Platform”).
    </p>
    <p className="mb-4">
      The Platform is owned by <strong>QuickCart</strong>, a company incorporated under the Companies Act, 1956, with its registered office at <strong>yesask8@gmail.com</strong> (hereinafter referred to as "Platform Owner", "we", "us", "our").
    </p>
    <p className="mb-4">
      Your use of the Platform, services, and tools are governed by the following terms and conditions ("Terms of Use") as applicable to the Platform, including the applicable policies which are incorporated herein by way of reference. If you transact on the Platform, you shall be subject to the policies that are applicable to the Platform for such transactions. By mere use of the Platform, you shall be contracting with the Platform Owner, and these terms and conditions, including the policies, constitute your binding obligations with the Platform Owner.
    </p>
    <p className="mb-4">
      These Terms of Use relate to your use of our website, goods (as applicable), or services (as applicable) (collectively, “Services”). Any terms and conditions proposed by you which are in addition to or which conflict with these Terms of Use are expressly rejected by the Platform Owner and shall be of no force or effect. These Terms of Use can be modified at any time without assigning any reason. It is your responsibility to periodically review these Terms of Use to stay informed of updates.
    </p>
    <p className="mb-4">
      For the purpose of these Terms of Use, wherever the context so requires, "you", “your”, or "user" shall mean any natural or legal person who has agreed to become a user/buyer on the Platform.
    </p>
    <p className="mb-4 font-semibold">
      ACCESSING, BROWSING, OR OTHERWISE USING THE PLATFORM INDICATES YOUR AGREEMENT TO ALL THE TERMS AND CONDITIONS UNDER THESE TERMS OF USE. SO, PLEASE READ THE TERMS OF USE CAREFULLY BEFORE PROCEEDING.
    </p>
    <p className="mb-4">
      The use of the Platform and/or availing of our Services is subject to the following Terms of Use:
    </p>
    <ul className="list-disc pl-6 mb-4">
      <li>
        To access and use the Services, you agree to provide true, accurate, and complete information to us during and after registration, and you shall be responsible for all acts done through the use of your registered account on the Platform.
      </li>
      <li>
        Neither we nor any third parties provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness, or suitability of the information and materials offered on this website or through the Services for any specific purpose. You acknowledge that such information and materials may contain inaccuracies or errors, and we expressly exclude liability for any such inaccuracies or errors to the fullest extent permitted by law.
      </li>
      <li>
        Your use of our Services and the Platform is solely and entirely at your own risk and discretion, for which we shall not be liable to you in any manner. You are required to independently assess and ensure that the Services meet your requirements.
      </li>
      <li>
        The contents of the Platform and the Services are proprietary to us and are licensed to us. You will not have any authority to claim any intellectual property rights, title, or interest in its contents. The contents include, but are not limited to, the design, layout, look, and graphics.
      </li>
      <li>
        You acknowledge that unauthorized use of the Platform and/or the Services may lead to action against you as per these Terms of Use and/or applicable laws.
      </li>
      <li>
        You agree to pay us the charges associated with availing the Services.
      </li>
      <li>
        You agree not to use the Platform and/or Services for any purpose that is unlawful, illegal, or forbidden by these Terms, or Indian or local laws that might apply to you.
      </li>
      <li>
        You agree and acknowledge that the website and the Services may contain links to other third-party websites. On accessing these links, you will be governed by the terms of use, privacy policy, and such other policies of such third-party websites. These links are provided for your convenience to provide further information.
      </li>
      <li>
        You understand that upon initiating a transaction for availing the Services, you are entering into a legally binding and enforceable contract with the Platform Owner for the Services.
      </li>
      <li>
        You shall indemnify and hold harmless the Platform Owner, its affiliates, group companies (as applicable), and their respective officers, directors, agents, and employees, from any claim or demand, or actions including reasonable attorneys’ fees, made by any third party or penalty imposed due to or arising out of your breach of these Terms of Use, Privacy Policy, and other Policies, or your violation of any law, rules, or regulations, or the rights (including infringement of intellectual property rights) of a third party.
      </li>
      <li>
        In no event will the Platform Owner be liable for any indirect, consequential, incidental, special, or punitive damages, including without limitation damages for loss of profits or revenues, business interruption, loss of business opportunities, loss of data, or loss of other economic interests, whether in contract, negligence, tort, or otherwise, arising from the use of or inability to use the Services, however caused and whether arising in contract, tort, negligence, warranty, or otherwise, exceed the amount paid by you for using the Services giving rise to the cause of action or Rupees One Hundred (Rs. 100), whichever is less.
      </li>
      <li>
        Notwithstanding anything contained in these Terms of Use, the parties shall not be liable for any failure to perform an obligation under these Terms if performance is prevented or delayed by a force majeure event.
      </li>
      <li>
        These Terms and any dispute or claim relating to it, or its enforceability, shall be governed by and construed in accordance with the laws of India.
      </li>
      <li>
        All disputes arising out of or in connection with these Terms shall be subject to the exclusive jurisdiction of the courts in <strong>Alwar, Rajasthan</strong>.
      </li>
    </ul>
    <p className="mb-4">
      All concerns or communications relating to these Terms must be communicated to us using the contact information provided on the Platform.
    </p>
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
      <li>Items must be returned in their original condition within 5-7 business days.</li>
      <li>Refunds will be credit to original payment method in within 5-7 business days.</li>
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
      <li>All products deliver within 1-2 days  </li>
    </ul>
  </div>
);

export default Policy;