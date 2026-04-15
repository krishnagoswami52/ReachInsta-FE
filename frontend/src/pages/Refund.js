import { motion } from 'framer-motion';
import { RefreshCcw } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function Refund() {
  return (
    <div className="min-h-screen pt-24" data-testid="refund-page">
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
                <RefreshCcw className="w-6 h-6 text-[#FF4500]" strokeWidth={1.5} />
              </div>
              <div>
                <h1 className="font-outfit text-3xl font-bold tracking-tight">Refund Policy</h1>
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
              <section className="p-6 rounded-xl bg-surface border border-border">
                <h2 className="text-xl font-semibold text-foreground mb-4">Overview</h2>
                <p>
                  We want you to be satisfied with ReachInsta. This policy outlines the circumstances under which we offer refunds for our subscription plans.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">Monthly Plans - Initial Purchase</h2>
                <p>
                  Refund requests are accepted within <strong>7 days</strong> of your initial purchase if:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Product usage has been minimal (limited to basic account setup)</li>
                  <li>No significant data fetches have been performed</li>
                  <li>You have not exported any competitor data</li>
                </ul>
                <p className="mt-4">
                  To request a refund, email{' '}
                  <a href="mailto:support@reachinsta.com" className="text-[#FF4500] hover:underline">
                    support@reachinsta.com
                  </a>{' '}
                  with your account email and reason for the refund.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">Monthly Plans - Renewals</h2>
                <p>
                  Renewal payments are <strong>generally non-refundable</strong>. We recommend:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Setting a reminder before your renewal date</li>
                  <li>Cancelling your subscription if you no longer need the Service</li>
                  <li>Downgrading to a lower plan if your needs have changed</li>
                </ul>
                <p className="mt-4">
                  Exceptions may be made for billing errors or technical issues that prevented cancellation.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">How to Cancel</h2>
                <p>
                  To prevent unwanted charges, you can cancel your subscription at any time:
                </p>
                <ol className="list-decimal pl-6 mt-3 space-y-2">
                  <li>Log into your ReachInsta account</li>
                  <li>Go to Account Settings</li>
                  <li>Click on "Subscription"</li>
                  <li>Select "Cancel Subscription"</li>
                </ol>
                <p className="mt-4">
                  You will retain access to your plan features until the end of your current billing period.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">Refund Processing</h2>
                <p>
                  If your refund is approved:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Refunds are processed through Paddle, our payment processor</li>
                  <li>Processing typically takes 5-10 business days</li>
                  <li>Refunds are returned to the original payment method</li>
                  <li>You will receive email confirmation when the refund is processed</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-foreground mb-4">Exceptions</h2>
                <p>
                  Refunds will <strong>not</strong> be provided in cases of:
                </p>
                <ul className="list-disc pl-6 mt-3 space-y-2">
                  <li>Terms of Service violations</li>
                  <li>Fraudulent activity or abuse</li>
                  <li>Requests made after the 7-day window</li>
                  <li>Significant usage of premium features</li>
                </ul>
              </section>

              <section className="p-6 rounded-xl bg-[#FF4500]/10 border border-[#FF4500]/20">
                <h2 className="text-xl font-semibold text-foreground mb-4">Contact for Refunds</h2>
                <p className="text-foreground">
                  For all refund requests and billing inquiries, please contact:
                </p>
                <p className="mt-3">
                  <a 
                    href="mailto:support@reachinsta.com" 
                    className="text-[#FF4500] font-semibold text-lg hover:underline"
                  >
                    support@reachinsta.com
                  </a>
                </p>
                <p className="text-sm mt-2">
                  Please include your account email and order details in your message.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
