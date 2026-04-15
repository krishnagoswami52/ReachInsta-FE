import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Target, Lightbulb, Users, Heart, ChevronRight } from 'lucide-react';
import { Button } from '../components/ui/button';

const values = [
  {
    icon: Target,
    title: 'Data-Driven',
    desc: 'We believe decisions should be based on real data, not guesswork.',
  },
  {
    icon: Lightbulb,
    title: 'Creator-First',
    desc: 'Every feature we build is designed with creators in mind.',
  },
  {
    icon: Users,
    title: 'Community',
    desc: 'We grow when our creators grow. Your success is our success.',
  },
  {
    icon: Heart,
    title: 'Transparency',
    desc: 'No hidden fees, no surprises. What you see is what you get.',
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

export default function About() {
  return (
    <div className="min-h-screen pt-24" data-testid="about-page">
      {/* Hero */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-3xl"
          >
            <motion.span
              variants={fadeInUp}
              className="text-[#FF4500] text-sm font-medium uppercase tracking-wider"
            >
              About Us
            </motion.span>
            <motion.h1
              variants={fadeInUp}
              className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mt-4 mb-6"
            >
              Built by Creators, <span className="text-[#FF4500]">for Creators</span>
            </motion.h1>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              ReachInsta was built after years of Instagram growth experience. We
              realized creators waste hours manually researching competitors.
              ReachInsta automates this process and gives every creator access to
              elite growth intelligence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.span
                variants={fadeInUp}
                className="text-[#FF4500] text-sm font-medium uppercase tracking-wider"
              >
                Our Story
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="font-outfit text-3xl sm:text-4xl font-bold tracking-tight mt-4 mb-6"
              >
                The Problem We Solved
              </motion.h2>
              <motion.div variants={fadeInUp} className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  We spent countless hours manually tracking competitors, scrolling
                  through profiles, noting down engagement metrics, and trying to
                  figure out what makes content go viral.
                </p>
                <p>
                  The process was exhausting, time-consuming, and often
                  inconsistent. We knew there had to be a better way.
                </p>
                <p>
                  That's why we built ReachInsta — a tool that automates competitor
                  research and delivers actionable insights in minutes, not hours.
                </p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-[#FF4500]/20 to-transparent p-8 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-outfit font-bold text-[#FF4500] mb-4">10K+</div>
                  <p className="text-lg text-muted-foreground">Creators Trust ReachInsta</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 lg:py-24">
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
              Our Values
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="font-outfit text-3xl sm:text-4xl font-bold tracking-tight mt-4"
            >
              What We Stand For
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-[#FF4500]/10 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-[#FF4500]" strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-surface">
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
              Join the ReachInsta Community
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="text-lg text-muted-foreground mb-8"
            >
              Start your journey to Instagram growth today.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Link to="/signup" data-testid="about-cta">
                <Button
                  size="lg"
                  className="bg-[#FF4500] hover:bg-[#FF6347] text-white rounded-full px-8 h-12 text-base"
                >
                  Get Started Free
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
