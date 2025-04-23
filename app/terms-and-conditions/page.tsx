import React from "react";

export default function TermsAndConditionsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <main className="flex-1 flex items-center justify-center bg-background py-16 px-4">
        <div className="container max-w-2xl mx-auto">
          <div className="rounded-lg border bg-card p-8 shadow-lg">
            <h1 className="text-3xl font-bold mb-2">📜 Terms of Use</h1>
            <p className="text-sm text-muted-foreground mb-6">
              Last updated: April 23, 2025
            </p>
            <p className="mb-4">
              By using this app or submitting your experience through our form, you agree to the following:
            </p>
            <ol className="list-decimal list-inside mb-4 space-y-6">
              <li>
                <span className="font-semibold">Use At Your Own Risk</span>
                <div className="mt-1 ml-4 text-base">
                  This project provides crowdsourced, peer-based information — it is not legal advice. Always consult an immigration lawyer or professional for personalized guidance.
                </div>
              </li>
              <li>
                <span className="font-semibold">Respectful Participation</span>
                <ul className="list-disc list-inside ml-8 mt-1 text-base">
                  <li>Share only your own experience.</li>
                  <li>Do not share false or misleading information.</li>
                  <li>Avoid naming individuals in a negative context.</li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">Content Use</span>
                <ul className="list-disc list-inside ml-8 mt-1 text-base">
                  <li>We reserve the right to:
                    <ul className="list-disc list-inside ml-6 mt-1">
                      <li>Summarize and share anonymized insights publicly (e.g. "Most successful TN applicants in this role used X port of entry")</li>
                      <li>Use aggregated data to improve the app and create helpful tools or guides</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-semibold">No Guarantees</span>
                <div className="mt-1 ml-4 text-base">
                  Every TN visa case is unique. What worked for one person may not work for another. We do not guarantee any specific outcome.
                </div>
              </li>
            </ol>
            <h2 className="text-xl font-semibold mt-8 mb-2">Questions?</h2>
            <p>
              Feel free to reach out at <a href="mailto:hello@tnconnect.fyi" className="text-primary hover:underline">hello@tnconnect.fyi</a> if you have any questions, privacy concerns, or ideas.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
