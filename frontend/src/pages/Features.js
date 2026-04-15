import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Users, TrendingUp, BarChart3, Clock, Download, Sparkles, Upload, Target,
  ChevronRight, CheckCircle2, Zap
} from 'lucide-react';
import { Button } from '../components/ui/button';

const features = [
  {
    icon: Users,
    title: 'Competitor Tracking',
    desc: 'Track up to 100 Instagram competitors and monitor their content performance in real-time.',
    benefits: ['Monitor unlimited reels', 'Track follower growth', 'Content frequency analysis'],
  },
  {
    icon: TrendingUp,
    title: 'Viral Reel Discovery',
    desc: 'Instantly discover the top performing reels from your competitors before they go viral.',
    benefits: ['Trending content alerts', 'Engagement velocity tracking', 'Content pattern recognition'],
  },
  {
    icon: BarChart3,
    title: 'Engagement Analytics',
    desc: 'Deep dive into views, likes, comments, and engagement rates with detailed breakdowns.',
    benefits: ['Real-time metrics', 'Historical comparisons', 'Benchmark analysis'],
  },
  {
    icon: Clock,
    title: 'Duration Insights',
    desc: 'Understand which reel lengths perform best in your niche for maximum engagement.',
    benefits: ['Optimal duration suggestions', 'Performance by length', 'Niche-specific data'],
  },
  {
    icon: Target,
    title: 'Best Posting Times',
    desc: 'See exactly when your competitors post their most successful content.',
    benefits: ['Hourly breakdown', 'Day-of-week analysis', 'Time zone optimization'],
  },
  {
    icon: Download,
    title: 'CSV Export',
    desc: 'Download all your competitor data instantly for offline analysis and reporting.',
    benefits: ['Full data export', 'Custom date ranges', 'Multiple formats'],
  },
  {
    icon: Sparkles,
    title: 'AI Insights',
    desc: 'Get AI-powered patterns and recommendations to improve your content strategy.',
    benefits: ['Content suggestions', 'Trend predictions', 'Engagement optimization'],
  },
  {
    icon: Upload,
    title: 'Bulk Import',
    desc: 'Import competitors via CSV, TXT, or manual username upload for quick setup.',
    benefits: ['CSV/TXT support', 'Batch processing', 'One-click import'],
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

export default function Features() {
  return (
    <div className="min-h-screen pt-24" data-testid="features-page">
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
                <Zap className="w-4 h-4" />
                Powerful Features
              </span>
            </motion.div>
            <motion.h1
              variants={fadeInUp}
              className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
            >
              Everything You Need to{' '}
              <span className="text-[#FF4500]">Win on Instagram</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              From competitor tracking to AI-powered insights, ReachInsta gives you
              the complete toolkit to dominate your niche.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="group p-8 rounded-xl bg-background border border-border hover:border-[#FF4500]/30 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl bg-[#FF4500]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#FF4500]/20 transition-colors">
                    <feature.icon className="w-7 h-7 text-[#FF4500]" strokeWidth={1.5} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-xl mb-3">{feature.title}</h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{feature.desc}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-[#FF4500]" strokeWidth={1.5} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-32">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2
              variants={fadeInUp}
              className="font-outfit text-3xl sm:text-4xl font-bold tracking-tight mb-6"
            >
              Ready to Start Growing?
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground mb-8"
            >
              Try ReachInsta free and see the difference data makes.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/signup" data-testid="features-cta">
                <Button
                  size="lg"
                  className="bg-[#FF4500] hover:bg-[#FF6347] text-white rounded-full px-8 h-12 text-base"
                >
                  Start Free Trial
                  <ChevronRight className="w-5 h-5 ml-1" />
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
