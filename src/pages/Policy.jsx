import React from 'react'

function Policy() {
  return (
    <div className="container mx-auto px-4 py-8 text-left">
      <h1 className="text-3xl font-bold text-center mb-6">Privacy Policy</h1>
      
      <section className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Effective Date: November 16, 2024</h2>
        
        <p className="mb-4">
          At <strong>MyNotes</strong>, we value your privacy. This Privacy Policy explains how we collect, use, and protect your personal information when you use our website and services ("Services").
        </p>

        <p className="mb-4">
          By using MyNotes, you agree to the terms of this Privacy Policy. If you do not agree, please do not use our Services.
        </p>

        <h3 className="text-xl font-semibold mt-6">1. Information We Collect</h3>
        <ul className="list-disc pl-6">
          <li><strong>Personal Information</strong>: When you sign up or log in, we collect your email address, password, and other registration details.</li>
          <li><strong>User Content</strong>: We collect the notes and content you create, save, or upload while using the Service.</li>
          <li><strong>Usage Data</strong>: We collect information automatically, such as IP addresses, browser types, and activity on the site.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">2. How We Use Your Information</h3>
        <ul className="list-disc pl-6">
          <li><strong>To Provide Services</strong>: To create and manage your account, store and access your notes, and enable access to your content.</li>
          <li><strong>Improvement of Services</strong>: To analyze how you use the site and improve functionality and user experience.</li>
          <li><strong>Security</strong>: To monitor for fraudulent activity and ensure the security of the Services.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">3. Data Sharing and Disclosure</h3>
        <ul className="list-disc pl-6">
          <li><strong>Service Providers</strong>: We may share your information with trusted third parties who assist in operating our Services, like hosting or email services.</li>
          <li><strong>Legal Requirements</strong>: We may disclose your information if required by law.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">4. Data Security</h3>
        <p className="mb-4">
          We implement reasonable security measures to protect your data, but we cannot guarantee complete security due to inherent risks in online data transmission.
        </p>

        <h3 className="text-xl font-semibold mt-6">5. Your Rights and Choices</h3>
        <ul className="list-disc pl-6">
          <li><strong>Access and Update</strong>: You can access and update your personal data via your account settings.</li>
          <li><strong>Account Deletion</strong>: You can delete your account by contacting us directly through our website's support page.</li>
          <li><strong>Opt-Out of Emails</strong>: You can opt-out of promotional emails at any time by clicking the unsubscribe link in the email.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-6">6. Changes to This Privacy Policy</h3>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. The updated policy will be posted here with the new effective date. Please review the policy periodically for any updates.
        </p>

        
      </section>
    </div>
  )
}

export default Policy