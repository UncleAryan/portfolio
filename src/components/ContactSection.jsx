import {
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactSection = () => {
    const { toast } = useToast();
    
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [formStatus, setFormStatus] = useState({
        submitting: false,
        success: false,
        error: false,
        message: "",
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData( (prev) => ({
            ...prev,
            [name]: value,
        }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault()

        setFormStatus({
            submitting: true,
            success: false,
            error: false,
            message: "",
        });

        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                {
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                }
            );

            const successMessage = "Thank you for your message. I will get back to you as soon as possible!";

            setFormStatus( {
                submitting: false,
                success: true,
                error: false,
                message: successMessage,
            });

            toast({
                title: "Message Sent Successfully!",
                description: successMessage,
            });
            
            setFormData({
                name: "",
                email: "",
                message: "",
            });
        } catch {
            const errorMessage = "Please try again at a later time. Sorry for the inconvenience.";

            setFormStatus( {
                submitting: false,
                success: false,
                error: true,
                message: errorMessage,
            });

            toast({
                title: "Message was NOT sent successfully.",
                description: errorMessage,
                variant: "destructive",
            });
        }
    };

    return (
        <section id='contact' className='py-24 px-4 relative bg-secondary/35'>
            <div className='container mx-auto max-w-5xl'>
                <h2 className='text-3xl md:text-4xl font-bold mb-4 text-center'>
                    Get In <span className='text-primary'> Touch </span> 
                </h2>
            
            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Feel free to reach out if you are a employer or want to collaborate/inquire.
                I am always open to discussing new oppertunities. 
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                    <div className="space-y-6 justify-center">
                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Mail className="h-6 w-6 text-primary" />
                            </div>
                            <div>
                                <h4 className="font-medium">Email</h4>
                                <a href="mailto:aryanpanchal1702@gmail.com"
                                   className="text-muted-foreground hover:text-primary transition-colors">
                                    aryanpanchal1702@gmail.com
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <Phone className="h-6 w-6 text-primary" />
                            </div>
                            <div className="px-11">
                                <h4 className="font-medium">Phone</h4>
                                <a href="tel:+12722800523"
                                   className="text-muted-foreground hover:text-primary transition-colors">
                                    +1 (272) 280-0523
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="p-3 rounded-full bg-primary/10">
                                <MapPin className="h-6 w-6 text-primary" />
                            </div>
                            <div className="px-11">
                                <h4 className="font-medium">Location</h4>
                                <a className="text-muted-foreground hover:text-primary transition-colors">
                                    Montvale, New Jersey
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="pt-8">
                        <h4 className="font-medium mb-4">Connect with Me</h4>
                        <div className="flex space-x-4 justify-center">
                            <a href="https://www.linkedin.com/in/aryan-panchal-84379a277/"
                               target="_blank">
                                <Linkedin />
                            </a>
                        </div>
                    </div>
            </div>
                    

                    <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="full-name" className="block text-sm font-medium mb-2">Full Name</label>
                                <input type="text" 
                                       id="name"
                                       name="name"
                                       value={formData.name}
                                       required
                                       className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                                       placeholder="Your First & Last Name Here..." 
                                       onChange={handleInputChange} />
                            </div>

                            <div>
                                <label htmlFor="email-address" className="block text-sm font-medium mb-2">Email Address</label>
                                <input type="email" 
                                       id="email"
                                       name="email"
                                       value={formData.email}
                                       required
                                       className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" 
                                       placeholder="Your Email Here..." 
                                       onChange={handleInputChange} />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                                <textarea 
                                       id="message"
                                       name="message"
                                       value={formData.message}
                                       required
                                       className="w-full h-64 px-4 py-6 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" 
                                       placeholder="Your Message Here..." 
                                       onChange={handleInputChange} />
                            </div>

                            <button type="submit" 
                                    disabled={formStatus.submitting}
                                    className="custom-button w-full flex items-center justify-center gap-2">
                                        {formStatus.submitting ? "Sending..." : "Send Message"}
                                        <Send size={16} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

