
import { useState } from 'react';
import MinimalLayout from '@/components/layout/MinimalLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Normally would send this data to a server
    console.log("Form submitted:", formData);
    
    toast({
      title: "Message Sent",
      description: "Thank you for your message. We'll get back to you shortly.",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <MinimalLayout>
      <div className="fixed inset-0 bg-black -z-10" />
      <div className="w-full min-h-screen pb-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col items-start mb-8">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 font-sans uppercase tracking-wider text-white">
              Contact Us
            </h1>
            <p className="text-lg text-white/80 mb-6 max-w-3xl">
              Get in touch with our team for inquiries about our fabrics, custom design services, or to schedule a consultation.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
              {/* Contact Form */}
              <div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-3">
                    <label htmlFor="name" className="block text-sm font-medium text-white/80">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                      className="bg-black/40 border-white/20 text-white placeholder:text-white/50 focus:border-[#ffe066]/70"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label htmlFor="email" className="block text-sm font-medium text-white/80">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your email address"
                      required
                      className="bg-black/40 border-white/20 text-white placeholder:text-white/50 focus:border-[#ffe066]/70"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label htmlFor="subject" className="block text-sm font-medium text-white/80">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject of your inquiry"
                      required
                      className="bg-black/40 border-white/20 text-white placeholder:text-white/50 focus:border-[#ffe066]/70"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <label htmlFor="message" className="block text-sm font-medium text-white/80">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your message"
                      required
                      rows={6}
                      className="bg-black/40 border-white/20 text-white placeholder:text-white/50 focus:border-[#ffe066]/70 resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="bg-[#ffe066] text-black hover:bg-[#ffe066]/90 w-full"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold mb-4">Visit Our Studio</h3>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-[#ffe066]/20 text-[#ffe066] flex items-center justify-center mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">Address</h4>
                        <p className="text-white/80">123 Fabric Lane</p>
                        <p className="text-white/80">Textile City, TX 12345</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-[#ffe066]/20 text-[#ffe066] flex items-center justify-center mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">Phone</h4>
                        <p className="text-white/80">(555) 123-4567</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="h-10 w-10 rounded-full bg-[#ffe066]/20 text-[#ffe066] flex items-center justify-center mr-3 flex-shrink-0">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="font-bold">Email</h4>
                        <p className="text-white/80">info@formalfactory.com</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-black/40 backdrop-blur-sm p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold mb-4">Studio Hours</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-white/80">Monday - Friday</span>
                      <span>10:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">Saturday</span>
                      <span>11:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/80">Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-white/60">
                    * Custom consultations are by appointment only.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm p-6 rounded-lg border border-[#ffe066]/20">
                  <h3 className="text-xl font-bold mb-2">Schedule a Consultation</h3>
                  <p className="text-white/80 mb-4">
                    Ready to bring your vision to life? Schedule a personalized consultation with our design team.
                  </p>
                  <Button className="bg-[#ffe066] text-black hover:bg-[#ffe066]/90 w-full">
                    Book an Appointment
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MinimalLayout>
  );
};

export default Contact;
