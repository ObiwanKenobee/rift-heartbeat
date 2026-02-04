import { motion } from 'framer-motion';
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const inquiryTypes = [
  { value: 'research', label: 'Research Partnership' },
  { value: 'investment', label: 'Investment' },
  { value: 'technology', label: 'Technology Partnership' },
  { value: 'government', label: 'Government/Policy' },
  { value: 'media', label: 'Media/Press' },
  { value: 'other', label: 'Other' },
];

const PartnershipForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    inquiry_type: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('partnership_inquiries')
        .insert([formData]);

      if (error) throw error;

      setIsSubmitted(true);
      toast.success('Your inquiry has been submitted successfully.');
    } catch (error) {
      console.error('Error submitting inquiry:', error);
      toast.error('Failed to submit inquiry. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section className="relative py-32 bg-card/30">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-2xl mx-auto text-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-gradient-heat flex items-center justify-center">
              <svg className="w-10 h-10 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-3xl font-serif mb-4">Thank You</h3>
            <p className="text-muted-foreground text-lg">
              Your inquiry has been received. We'll be in touch soon to explore how we can work together.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="partnership" className="relative py-32 bg-card/30">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary font-medium tracking-[0.3em] text-sm mb-4">
              JOIN THE NETWORK
            </p>
            <h2 className="text-4xl md:text-5xl font-serif mb-6">
              Partner With RIFTOS
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We're building the world's first region where energy, ecology, economy, and governance are designed as one system. Join us.
            </p>
            
            <div className="space-y-6">
              {[
                { title: 'Research Institutions', desc: 'Collaborate on climate adaptation science' },
                { title: 'Investors', desc: 'Participate in regenerative value exchange' },
                { title: 'Governments', desc: 'Build sovereign energy infrastructure' },
                { title: 'Technology Partners', desc: 'Deploy thermodynamic solutions' },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  className="flex gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-1 bg-gradient-heat rounded-full" />
                  <div>
                    <h4 className="font-medium text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="p-8 bg-background border border-border/50 rounded-sm"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Name *</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email *</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="you@organization.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Organization</label>
                <input
                  type="text"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your organization"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Inquiry Type *</label>
                <select
                  required
                  value={formData.inquiry_type}
                  onChange={(e) => setFormData({ ...formData, inquiry_type: e.target.value })}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-sm focus:outline-none focus:border-primary transition-colors"
                >
                  <option value="">Select type...</option>
                  {inquiryTypes.map((type) => (
                    <option key={type.value} value={type.value}>{type.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Message *</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-muted border border-border rounded-sm focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your interest in RIFTOS..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-gradient-heat text-primary-foreground font-medium rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
              </motion.button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default PartnershipForm;
