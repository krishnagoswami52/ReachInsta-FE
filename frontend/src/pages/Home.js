import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';
import {
  Users, TrendingUp, BarChart3, Clock, Download, Sparkles, Upload, Target,
  Shield, Lock, Globe, XCircle, ChevronRight, Play
} from 'lucide-react';
import { Button } from '../components/ui/button';
import DashboardMockup from '../components/DashboardMockup';

const features = [
  { icon: Users, title: 'Competitor Tracking', desc: 'Track up to 100 Instagram competitors' },
  { icon: TrendingUp, title: 'Viral Reel Discovery', desc: 'See top performing reels instantly' },
  { icon: BarChart3, title: 'Engagement Analytics', desc: 'Views, likes, comments, engagement rates' },
  { icon: Clock, title: 'Duration Insights', desc: 'Know best reel lengths' },
  { icon: Target, title: 'Best Posting Times', desc: 'See when competitors win' },
  { icon: Download, title: 'CSV Export', desc: 'Download data instantly' },
  { icon: Sparkles, title: 'AI Insights', desc: 'Get patterns and recommendations' },
  { icon: Upload, title: 'Bulk Import', desc: 'CSV / TXT / Manual username upload' },
];

const steps = [
  { num: '01', title: 'Create Account', desc: 'Sign up in seconds with your email' },
  { num: '02', title: 'Add Competitors', desc: 'Import usernames manually or via CSV' },
  { num: '03', title: 'Fetch Analytics', desc: 'Get instant insights on their best content' },
  { num: '04', title: 'Grow Faster', desc: 'Apply learnings to your content strategy' },
];

const trustBadges = [
  { icon: Shield, text: 'Secure Payments' },
  { icon: Globe, text: 'Trusted by Creators' },
  { icon: Lock, text: 'GDPR Ready' },
  { icon: XCircle, text: 'Cancel Anytime' },
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

export default function Home() {
  return (
    <div className="min-h-screen" data-testid="home-page">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-transparent" />
          <div
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("https://images.pexels.com/photos/31650443/pexels-photo-31650443.jpeg")`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          />
          <div className="absolute inset-0 bg-background/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
              className="text-left"
            >
              <motion.div variants={fadeInUp} className="mb-6">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#FF4500]/10 text-[#FF4500] text-sm font-medium">
                  <Sparkles className="w-4 h-4" />
                  Competitor Intelligence for Instagram
                </span>
              </motion.div>

              <motion.h1
                variants={fadeInUp}
                className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-none mb-6"
              >
                Grow Faster on Instagram with{' '}
                <span className="text-[#FF4500]">Data</span>, Not Guesswork
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl"
              >
                Track competitors, discover viral reels, analyze trends, and build
                winning content strategies in minutes.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-wrap gap-4 mb-8">
                <Link to="/signup" data-testid="hero-cta-trial">
                  <Button
                    size="lg"
                    className="bg-[#FF4500] hover:bg-[#FF6347] text-white rounded-full px-8 h-12 text-base font-medium"
                  >
                    Start Free Trial
                    <ChevronRight className="w-5 h-5 ml-1" />
                  </Button>
                </Link>
                <Link to="/pricing" data-testid="hero-cta-pricing">
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full px-8 h-12 text-base font-medium"
                  >
                    <Play className="w-4 h-4 mr-2" />
                    View Pricing
                  </Button>
                </Link>
              </motion.div>

              {/* Trust Badges */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-wrap gap-4 md:gap-6"
              >
                {trustBadges.map((badge, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 text-muted-foreground"
                  >
                    <badge.icon className="w-4 h-4 text-[#FF4500]" strokeWidth={1.5} />
                    <span className="text-sm">{badge.text}</span>
                  </div>
                ))}
              </motion.div>
            </motion.div>

            {/* Right - Dashboard */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <DashboardMockup />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Marquee */}
      <section className="py-12 border-y border-border bg-surface">
        <Marquee speed={40} gradient={false} className="overflow-hidden">
          <div className="flex items-center gap-12 mx-6">
            {['Instagram', 'TikTok', 'YouTube', 'Twitter', 'Twitch', 'Facebook', 'LinkedIn', 'Pinterest'].map((brand) => (
              <span key={brand} className="text-2xl font-outfit font-bold text-muted-foreground/30 whitespace-nowrap">
                {brand}
              </span>
            ))}
          </div>
        </Marquee>
      </section>

      {/* Features Section */}
      <section className="py-20 lg:py-32" data-testid="features-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="text-[#FF4500] text-sm font-medium uppercase tracking-wider"
            >
              Features
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4 mb-6"
            >
              Everything You Need to Win
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-muted-foreground max-w-2xl mx-auto text-lg"
            >
              Powerful tools designed for Instagram creators who want to stay ahead
              of the competition.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group p-6 rounded-xl bg-surface border border-border hover:border-[#FF4500]/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-[#FF4500]/10 flex items-center justify-center mb-4 group-hover:bg-[#FF4500]/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-[#FF4500]" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 lg:py-32 bg-surface" data-testid="how-it-works-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeInUp}
              className="text-[#FF4500] text-sm font-medium uppercase tracking-wider"
            >
              How It Works
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-4"
            >
              Start Growing in 4 Simple Steps
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {steps.map((step, index) => (
              <motion.div key={index} variants={fadeInUp} className="relative">
                <div className="text-6xl font-outfit font-bold text-[#FF4500]/10 mb-4">
                  {step.num}
                </div>
                <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 w-1/2 h-px bg-border" />
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-32" data-testid="cta-section">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6"
            >
              Ready to Outsmart Your Competition?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto"
            >
              Join thousands of Instagram creators who use ReachInsta to discover
              winning content strategies.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-4">
              <Link to="/signup" data-testid="cta-start-free">
                <Button
                  size="lg"
                  className="bg-[#FF4500] hover:bg-[#FF6347] text-white rounded-full px-8 h-12 text-base"
                >
                  Start Free Trial
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
              <Link to="/contact" data-testid="cta-contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="rounded-full px-8 h-12 text-base"
                >
                  Talk to Sales
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
