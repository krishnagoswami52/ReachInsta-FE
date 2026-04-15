import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { HelpCircle, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

const faqs = [
  {
    question: 'Is this connected to Instagram?',
    answer:
      'No, ReachInsta uses public competitor data only. We analyze publicly available information from Instagram profiles and reels without requiring any direct connection to your Instagram account.',
  },
  {
    question: 'Does ReachInsta auto post?',
    answer:
      'No, ReachInsta is an analytics and insights platform. We help you understand what works for your competitors, but we do not create or post content on your behalf.',
  },
  {
    question: 'Can you guarantee viral growth?',
    answer:
      'No, we provide data and insights to help you make better content decisions. While our data can significantly improve your content strategy, viral growth depends on many factors including content quality, timing, and audience engagement.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Yes, absolutely! You can cancel your subscription at any time from your account settings. There are no long-term commitments or cancellation fees.',
  },
  {
    question: 'Do you offer refunds?',
    answer:
      'As per our refund policy, monthly plans are eligible for refund requests within 7 days of initial purchase if product usage is minimal. Renewals are generally non-refundable. Contact support@reachinsta.com for refund requests.',
  },
  {
    question: 'How many competitors can I track?',
    answer:
      'It depends on your plan. Free users can track 5 competitors, Plus users can track 50, and Pro users can track up to 100 competitors simultaneously.',
  },
  {
    question: 'How often is the data updated?',
    answer:
      'Data fetches depend on your plan. Free users get 1 fetch per month, Plus users get 2 fetches, and Pro users get 4 fetches per month. Each fetch updates all your competitor data.',
  },
  {
    question: 'Is my data secure?',
    answer:
      'Yes, we take security seriously. All payments are processed securely via Paddle, and we are GDPR compliant. We never share your data with third parties.',
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

export default function FAQ() {
  return (
    <div className="min-h-screen pt-24" data-testid="faq-page">
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF4500]/10 text-[#FF4500] text-sm font-medium">
                <HelpCircle className="w-4 h-4" />
                Help Center
              </span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="font-outfit text-4xl sm:text-5xl font-bold tracking-tight mb-6"
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground"
            >
              Find answers to common questions about ReachInsta.
            </motion.p>
          </motion.div>

          {/* FAQ Accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border rounded-xl px-6 bg-surface"
                  data-testid={`faq-item-${index}`}
                >
                  <AccordionTrigger className="text-left font-medium py-6 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center mt-16 p-8 rounded-xl bg-surface border border-border"
          >
            <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
            <p className="text-muted-foreground mb-6">
              Can't find what you're looking for? Contact our support team.
            </p>
            <Link to="/contact" data-testid="faq-contact-link">
              <Button className="bg-[#FF4500] hover:bg-[#FF6347] text-white rounded-full px-6">
                Contact Support
                <ChevronRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
