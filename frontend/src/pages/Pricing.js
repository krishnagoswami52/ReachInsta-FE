import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Sparkles, Zap, Crown } from 'lucide-react';
import { Button } from '../components/ui/button';

const plans = [
  {
    name: 'Free',
    price: '$0',
    period: '/month',
    description: 'Perfect for getting started',
    icon: Zap,
    features: [
      'Track 5 competitors',
      '7 day data retention',
      '1 fetch per month',
      'Basic analytics',
    ],
    cta: 'Start Free',
    variant: 'outline',
    dataPlan: 'free',
  },
  {
    name: 'Plus',
    price: '$49',
    period: '/month',
    description: 'For growing creators',
    icon: Sparkles,
    features: [
      'Track 50 competitors',
      '28 day data retention',
      '2 fetches per month',
      'AI insights',
      'Advanced analytics',
    ],
    cta: 'Choose Plus',
    variant: 'outline',
    dataPlan: 'plus',
  },
  {
    name: 'Pro',
    price: '$99',
    period: '/month',
    description: 'For serious creators & agencies',
    icon: Crown,
    popular: true,
    features: [
      'Track 100 competitors',
      '4 fetches per month',
      'Priority support',
      'CSV Export',
      'Full analytics',
      'AI insights',
    ],
    cta: 'Choose Pro',
    variant: 'default',
    dataPlan: 'pro',
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

export default function Pricing() {
  return (
    <div className="min-h-screen pt-24" data-testid="pricing-page">
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="text-center max-w-3xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF4500]/10 text-[#FF4500] text-sm font-medium">
                <Sparkles className="w-4 h-4" />
                Simple Pricing
              </span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              Choose Your <span className="text-[#FF4500]">Growth Plan</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              Start free and scale as you grow. No hidden fees, cancel anytime.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16 lg:pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8"
          >
            {plans.map((plan, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className={`relative p-8 rounded-2xl border ${
                  plan.popular
                    ? 'border-[#FF4500] bg-surface'
                    : 'border-border bg-surface'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1.5 rounded-full bg-[#FF4500] text-white text-xs font-semibold uppercase tracking-wider">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    plan.popular ? 'bg-[#FF4500]' : 'bg-[#FF4500]/10'
                  }`}>
                    <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-white' : 'text-[#FF4500]'}`} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground">{plan.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="font-outfit text-5xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-[#FF4500]" strokeWidth={1.5} />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/signup" data-testid={`pricing-cta-${plan.dataPlan}`}>
                  <Button
                    className={`w-full h-12 rounded-full font-medium ${
                      plan.popular
                        ? 'bg-[#FF4500] hover:bg-[#FF6347] text-white'
                        : ''
                    }`}
                    variant={plan.variant}
                    data-plan={plan.dataPlan}
                  >
                    {plan.cta}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          {/* Footer Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-sm text-muted-foreground mt-12"
          >
            All plans billed securely via Paddle. Cancel anytime.
          </motion.p>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="font-outfit text-2xl sm:text-3xl font-bold tracking-tight mb-4"
            >
              Have Questions?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground mb-6"
            >
              Check our frequently asked questions or contact our support team.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <Link to="/faq" data-testid="pricing-faq-link">
                <Button variant="outline" className="rounded-full px-6">
                  View FAQ
                </Button>
              </Link>
              <Link to="/contact" data-testid="pricing-contact-link">
                <Button variant="ghost" className="rounded-full px-6">
                  Contact Support
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
