import { useState } from 'react';
import { Check, Phone, Mail, MapPin, Clock, CheckCircle, Send } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    details: '',
    contactMethod: 'email',
    budget: '',
    newsletter: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const benefits = [
    'Free site survey & consultation',
    'Custom design mockups',
    'Competitive pricing guaranteed',
    'Fast-track installation available',
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (formData.phone && !/^[\d\s\+\-()]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid UK phone number';
    }
    
    if (!formData.details.trim()) {
      newErrors.details = 'Please describe your project';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    toast({
      title: "Enquiry Submitted Successfully!",
      description: "Our team will contact you within 24 hours.",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-secondary mx-auto flex items-center justify-center mb-6 animate-scale-in">
              <CheckCircle className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Thank You for Your Enquiry!
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We've received your project details and our team will be in touch within 24 hours to discuss your requirements.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="btn-primary"
            >
              Submit Another Enquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-secondary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold tracking-wide uppercase mb-4">
            Start Your Project
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Ready to Protect <span className="text-gradient">Your Athletes?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Get a free consultation and custom quote for your venue
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 items-start">
          {/* Left Side - Info */}
          <div className={`lg:col-span-2 space-y-8 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div>
              <h3 className="text-2xl font-display font-bold text-foreground mb-6">
                Start Your Project Today
              </h3>
              
              {/* Benefits */}
              <div className="space-y-4 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <a href="tel:+441onal234567890" className="flex items-center gap-4 p-4 bg-card rounded-xl hover:bg-muted transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
                  <Phone className="w-5 h-5 text-secondary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Call us directly</div>
                  <div className="font-semibold text-foreground">01onal 234 567890</div>
                </div>
              </a>

              <a href="mailto:enquiries@safewalluk.com" className="flex items-center gap-4 p-4 bg-card rounded-xl hover:bg-muted transition-colors group">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:bg-secondary transition-colors">
                  <Mail className="w-5 h-5 text-secondary group-hover:text-white transition-colors" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email enquiries</div>
                  <div className="font-semibold text-foreground">enquiries@safewalluk.com</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-card rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Headquarters</div>
                  <div className="font-semibold text-foreground">Manchester, United Kingdom</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-card rounded-xl">
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Business hours</div>
                  <div className="font-semibold text-foreground">Mon-Fri: 8am - 6pm GMT</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <form onSubmit={handleSubmit} className="bg-card rounded-3xl p-8 md:p-10 shadow-premium">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`input-premium ${errors.name ? 'border-destructive' : ''}`}
                    placeholder="John Smith"
                  />
                  {errors.name && <p className="text-destructive text-sm mt-1">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email Address <span className="text-destructive">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`input-premium ${errors.email ? 'border-destructive' : ''}`}
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-destructive text-sm mt-1">{errors.email}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className={`input-premium ${errors.phone ? 'border-destructive' : ''}`}
                    placeholder="+44 123 456 7890"
                  />
                  {errors.phone && <p className="text-destructive text-sm mt-1">{errors.phone}</p>}
                </div>

                {/* Organisation */}
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Organisation / Club Name
                  </label>
                  <input
                    type="text"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleInputChange}
                    className="input-premium"
                    placeholder="Your Club FC"
                  />
                </div>

                {/* Budget */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Estimated Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="input-premium appearance-none bg-white cursor-pointer"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-10k">Under £10,000</option>
                    <option value="10k-25k">£10,000 - £25,000</option>
                    <option value="25k-50k">£25,000 - £50,000</option>
                    <option value="50k-100k">£50,000 - £100,000</option>
                    <option value="over-100k">Over £100,000</option>
                  </select>
                </div>

                {/* Project Details */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Project Details <span className="text-destructive">*</span>
                  </label>
                  <textarea
                    name="details"
                    value={formData.details}
                    onChange={handleInputChange}
                    rows={4}
                    className={`input-premium resize-none ${errors.details ? 'border-destructive' : ''}`}
                    placeholder="Tell us about your venue, requirements, and timeline..."
                  />
                  {errors.details && <p className="text-destructive text-sm mt-1">{errors.details}</p>}
                </div>

                {/* Contact Method */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-foreground mb-3">
                    Preferred Contact Method
                  </label>
                  <div className="flex flex-wrap gap-4">
                    {['email', 'phone', 'either'].map((method) => (
                      <label key={method} className="flex items-center gap-2 cursor-pointer">
                        <input
                          type="radio"
                          name="contactMethod"
                          value={method}
                          checked={formData.contactMethod === method}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-secondary focus:ring-secondary"
                        />
                        <span className="text-foreground capitalize">{method}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Newsletter */}
                <div className="md:col-span-2">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleInputChange}
                      className="w-5 h-5 text-secondary focus:ring-secondary rounded mt-0.5"
                    />
                    <span className="text-sm text-muted-foreground">
                      Send me SAFEWALL updates, case studies, and industry news
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="md:col-span-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Request Your Consultation
                      </>
                    )}
                  </button>
                  <p className="text-center text-sm text-muted-foreground mt-4">
                    We'll respond within 24 hours. Your information is secure and never shared.
                  </p>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
