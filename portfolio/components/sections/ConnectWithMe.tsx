import { useState } from 'react';
import Image from 'next/image';

export default function ConnectWithMe() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{ success?: boolean; message?: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // In a real implementation, you'd handle the form submission to a backend service
      // For now, we'll simulate sending an email by opening the user's mail client
      const mailtoLink = `mailto:achuthkrishnakkunnath@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(formData.name)}&body=${encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`)}`;
      window.open(mailtoLink, '_blank');
      
      setSubmitStatus({ 
        success: true, 
        message: 'Your email client has been opened. Please send the email to complete your message.' 
      });
      
      // Reset form after successful submission
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({ 
        success: false, 
        message: 'Something went wrong. Please try again or contact directly via email.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-16 relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/contact_bg.jpg"
          alt="Contact Background"
          fill
          priority
          quality={90}
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl font-bold text-center mb-12 text-orange-400">Connect With Me</h2>
        
        <div className="max-w-3xl mx-auto bg-white/20 backdrop-blur-md rounded-lg shadow-lg p-8 border border-white/20">
          <p className="text-lg mb-6 text-center text-orange-500 font-medium">
            I'd love to hear from you! Whether you have a question, a project idea, or just want to say hello,
            feel free to drop me a message and I'll get back to you as soon as possible.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-orange-400 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white/30 border border-orange-200/50 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-white placeholder-orange-100/70"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-orange-400 mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-white/30 border border-orange-200/50 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-white placeholder-orange-100/70"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-orange-400 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-2 bg-white/30 border border-orange-200/50 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent text-white placeholder-orange-100/70"
                placeholder="Write your message here..."
              ></textarea>
            </div>
            
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-orange-500 text-white font-medium rounded-md shadow-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 transition-colors disabled:opacity-70 disabled:cursor-not-allowed relative overflow-hidden group"
              >
                <span className="relative z-10">{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                <span className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
            </div>
          </form>
          
          {submitStatus && (
            <div className={`mt-6 p-4 rounded-md ${submitStatus.success ? 'bg-green-500/30 text-green-100' : 'bg-red-500/30 text-red-100'}`}>
              {submitStatus.message}
            </div>
          )}
          
          <div className="mt-10 pt-6 border-t border-orange-300/20">
            <p className="text-center text-orange-400">
              Prefer to reach out directly? Email me at{' '}
              <a href="mailto:achuthkrishnakkunnath@gmail.com" className="text-orange-400 hover:text-orange-100 hover:underline">
                achuthkrishnakkunnath@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}