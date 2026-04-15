import { motion } from 'framer-motion';
import { FileText } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Terms() {
  return (
    <div className="min-h-screen pt-24" data-testid="terms-page">
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
                <FileText className="w-6 h-6 text-[#FF4500]" strokeWidth={1.5} />
              </div>
              <div>
                <h1 className="font-outfit text-3xl font-bold tracking-tight">Terms of Service</h1>
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
                <h2 className="text-xl font-semibold text-foreground mb-4">1. Service Access</h2>
                <p>
                  By accessing and using ReachInsta ("Service"), you agree to be bound by these Terms of Service. The Service provides Instagram competitor analytics and insights tools. You must be at least 18 years old or have parental consent to use this Service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">2. Fair Usage Policy</h2>
                <p>
                  ReachInsta is designed for legitimate competitive analysis purposes. You agree to:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Use the Service only for lawful purposes and in accordance with these Terms</li>
                  <li>Not use the Service to harass, abuse, or harm other individuals</li>
                  <li>Not attempt to gain unauthorized access to any systems or networks</li>
                  <li>Not use automated scripts, bots, or tools to access the Service beyond normal usage</li>
                  <li>Not resell, redistribute, or sublicense access to the Service without permission</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">3. Subscription and Billing</h2>
                <p>
                  ReachInsta offers subscription-based pricing plans. By subscribing:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>You authorize us to charge your payment method on a recurring basis</li>
                  <li>Subscriptions automatically renew unless cancelled before the renewal date</li>
                  <li>Prices may change with 30 days notice; continued use constitutes acceptance</li>
                  <li>All payments are processed securely through Paddle, our payment processor</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">4. Cancellation</h2>
                <p>
                  You may cancel your subscription at any time through your account settings. Upon cancellation:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>You retain access until the end of your current billing period</li>
                  <li>No partial refunds are provided for unused time in the billing period</li>
                  <li>Your data may be retained for 30 days after cancellation</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">5. Limitation of Liability</h2>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>The Service is provided "as is" without warranties of any kind</li>
                  <li>We do not guarantee the accuracy, completeness, or usefulness of any information</li>
                  <li>We are not liable for any indirect, incidental, or consequential damages</li>
                  <li>Our total liability shall not exceed the amount paid by you in the last 12 months</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">6. Prohibited Activities</h2>
                <p>
                  You may not:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Violate any applicable laws or regulations</li>
                  <li>Infringe upon intellectual property rights of others</li>
                  <li>Attempt to reverse engineer or extract source code from the Service</li>
                  <li>Use the Service to collect data for purposes other than competitive analysis</li>
                  <li>Share account credentials with unauthorized users</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">7. Account Termination</h2>
                <p>
                  We reserve the right to suspend or terminate your account if:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>You violate these Terms of Service</li>
                  <li>Your payment method is declined or invalid</li>
                  <li>We detect fraudulent or abusive activity</li>
                  <li>Required by law or legal process</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">8. Contact</h2>
                <p>
                  For questions about these Terms, contact us at:{' '}
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
