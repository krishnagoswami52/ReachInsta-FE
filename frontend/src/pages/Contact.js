import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';

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

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Frontend only - simulate submission
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-24" data-testid="contact-page">
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.span
                variants={fadeInUp}
                className="text-[#FF4500] text-sm font-medium uppercase tracking-wider"
              >
                Contact Us
              </motion.span>
              <motion.h1
                variants={fadeInUp}
                className="font-outfit text-4xl sm:text-5xl font-bold tracking-tight mt-4 mb-6"
              >
                Get in Touch
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg text-muted-foreground leading-relaxed mb-8"
              >
                Have a question or need help? We're here for you. Fill out the
                form and we'll get back to you as soon as possible.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex items-center gap-4 p-6 rounded-xl bg-surface border border-border"
              >
                <div className="w-12 h-12 rounded-xl bg-[#FF4500]/10 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-[#FF4500]" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-semibold">Email Support</p>
                  <a
                    href="mailto:support@reachinsta.com"
                    className="text-[#FF4500] hover:underline"
                  >
                    support@reachinsta.com
                  </a>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              {submitted ? (
                <div className="p-12 rounded-xl bg-surface border border-border text-center">
                  <div className="w-16 h-16 rounded-full bg-[#FF4500]/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-[#FF4500]" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-semibold mb-4">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thanks for reaching out. We'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="p-8 rounded-xl bg-surface border border-border space-y-6"
                  data-testid="contact-form"
                >
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        data-testid="contact-name-input"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        data-testid="contact-email-input"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company (optional)</Label>
                    <Input
                      id="company"
                      name="company"
                      placeholder="Your company"
                      value={formData.company}
                      onChange={handleChange}
                      data-testid="contact-company-input"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="How can we help?"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      data-testid="contact-message-input"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#FF4500] hover:bg-[#FF6347] text-white rounded-full h-12"
                    data-testid="contact-submit-btn"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
