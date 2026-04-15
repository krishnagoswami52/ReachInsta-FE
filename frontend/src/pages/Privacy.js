import { motion } from 'framer-motion';
import { Shield } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Privacy() {
  return (
    <div className="min-h-screen pt-24" data-testid="privacy-page">
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-[#FF4500]/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-[#FF4500]" strokeWidth={1.5} />
              </div>
              <div>
                <h1 className="font-outfit text-3xl font-bold tracking-tight">Privacy Policy</h1>
                <p className="text-sm text-muted-foreground">Last updated: January 2026</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-gray dark:prose-invert max-w-none"
          >
            <div className="space-y-8 text-muted-foreground leading-relaxed">
              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">1. Information We Collect</h2>
                <p>
                  We collect information to provide and improve our Service:
                </p>
                <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Email Collection</h3>
                <p>
                  We collect your email address when you create an account. This is used for account authentication, service communications, and optional marketing (with your consent).
                </p>
                <h3 className="text-lg font-medium text-foreground mt-4 mb-2">Usage Analytics</h3>
                <p>
                  We collect anonymized usage data including pages visited, features used, and time spent on the Service. This helps us improve user experience and optimize performance.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">2. Cookies and Tracking</h2>
                <p>
                  We use cookies and similar technologies to:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Maintain your session and preferences</li>
                  <li>Analyze traffic and usage patterns</li>
                  <li>Prevent fraud and enhance security</li>
                  <li>Personalize your experience</li>
                </ul>
                <p className="mt-3">
                  You can control cookies through your browser settings. Disabling cookies may affect Service functionality.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">3. Third-Party Processors</h2>
                <p>
                  We work with trusted third parties to operate our Service:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li><strong>Paddle:</strong> Payment processing and subscription management</li>
                  <li><strong>Analytics providers:</strong> Usage analysis and performance monitoring</li>
                  <li><strong>Cloud infrastructure:</strong> Data storage and service hosting</li>
                  <li><strong>Email services:</strong> Transactional and marketing communications</li>
                </ul>
                <p className="mt-3">
                  These processors are contractually obligated to protect your data and use it only for specified purposes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">4. Data Security</h2>
                <p>
                  We implement industry-standard security measures:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Access controls and authentication protocols</li>
                  <li>Secure data centers with physical security measures</li>
                </ul>
                <p className="mt-3">
                  While we strive to protect your data, no method of transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">5. Your Rights (GDPR)</h2>
                <p>
                  Under GDPR and similar regulations, you have the right to:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li><strong>Access:</strong> Request a copy of your personal data</li>
                  <li><strong>Rectification:</strong> Correct inaccurate personal data</li>
                  <li><strong>Erasure:</strong> Request deletion of your personal data</li>
                  <li><strong>Portability:</strong> Receive your data in a machine-readable format</li>
                  <li><strong>Objection:</strong> Object to processing of your personal data</li>
                  <li><strong>Restriction:</strong> Request restricted processing of your data</li>
                </ul>
                <p className="mt-3">
                  To exercise these rights, contact us at{' '}
                  <a href="mailto:support@reachinsta.com" className="text-[#FF4500] hover:underline">
                    support@reachinsta.com
                  </a>
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">6. Data Retention</h2>
                <p>
                  We retain your data for as long as your account is active or as needed to provide services. After account deletion, we may retain certain data:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>For 30 days in case you wish to reactivate your account</li>
                  <li>As required by law or regulatory obligations</li>
                  <li>For legitimate business purposes (in anonymized form)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">7. Children's Privacy</h2>
                <p>
                  Our Service is not intended for users under 18 years of age. We do not knowingly collect personal information from children. If we become aware that we have collected data from a child, we will delete it promptly.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">8. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy periodically. We will notify you of significant changes via email or through the Service. Continued use after changes constitutes acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">9. Contact Us</h2>
                <p>
                  For privacy-related inquiries, contact us at:{' '}
                  <a href="mailto:support@reachinsta.com" className="text-[#FF4500] hover:underline">
                    support@reachinsta.com
                  </a>
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
