import React from "react";

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <main className="flex-1 flex items-center justify-center bg-background py-16 px-4">
        <div className="container max-w-2xl mx-auto">
          <div className="rounded-lg border bg-card p-8 shadow-lg">
            <h1 className="text-3xl font-bold mb-2">🛡️ Privacy Policy</h1>
            <p className="text-sm text-muted-foreground mb-1">
              <span className="font-semibold">Effective Date:</span> April 23, 2025
            </p>
            <p className="text-sm text-muted-foreground mb-6">
              <span className="font-semibold">Last Updated:</span> April 23, 2025
            </p>
            <p className="mb-4">
              We take your privacy seriously. This project is dedicated to helping TN Visa applicants learn from real experiences — and that only works if you feel safe sharing. We are committed to protecting your privacy and ensuring that your personal information is handled in a safe and responsible manner.
            </p>
            <h2 className="text-xl font-semibold mt-8 mb-2">What We Collect</h2>
            <ul className="list-disc list-inside mb-4">
              <li>TN visa experiences (e.g., job title, port of entry, outcome, category)</li>
              <li>Optional details (e.g., employer type, lawyer use, advice)</li>
              <li>Optional contact information (if you choose to provide it)</li>
              <li>You can choose to leave any question blank.</li>
            </ul>
            <h2 className="text-xl font-semibold mt-8 mb-2">How We Use Your Data</h2>
            <ul className="list-disc list-inside mb-4">
              <li>To identify patterns and trends in TN Visa applications</li>
              <li>To share anonymized insights that help others succeed</li>
              <li>To build tools and resources for the TN Visa community</li>
            </ul>
            <div className="mb-4">
              <p className="font-semibold">We will never:</p>
              <ul className="list-disc list-inside ml-5">
                <li>Share your personal information or contact details</li>
                <li>Sell your data</li>
                <li>Link responses to individuals or employers</li>
              </ul>
            </div>
            <h2 className="text-xl font-semibold mt-8 mb-2">Data Storage & Anonymity</h2>
            <ul className="list-disc list-inside mb-4">
              <li>Responses are collected through Google Forms and stored in a secure Google Sheet.</li>
              <li>We do not track who you are unless you voluntarily provide an email.</li>
              <li>All shared data will be anonymized before being published or made public.</li>
            </ul>
            <h2 className="text-xl font-semibold mt-8 mb-2">Contact & Removal</h2>
            <p>
              If you've submitted a response and would like it removed, please email us at{' '}
              <a href="mailto:hello@tnconnect.fyi" className="text-primary hover:underline">hello@tnconnect.fyi</a> and we'll delete it promptly — no questions asked.
            </p>
            <h2 className="text-xl font-semibold mt-8 mb-2">Other Information</h2>
            <p>
              We are always striving to improve your privacy and experience. If you have any questions about this Privacy Policy, please contact us.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
