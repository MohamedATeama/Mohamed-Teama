import { motion } from "framer-motion";
import { Mail, MapPin, Send, MessageSquare, Loader2Icon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

export const ContactSection = () => {
  const [status, setStatus] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.target;
    emailjs
      .sendForm(
        "service_qs2blmv",
        "template_67bl62o",
        form as HTMLFormElement,
        "-RTMzhioyPWHOBonA",
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus("success");
          toast({
            title: "Message sent!",
            description: "Thanks for reaching out. I'll get back to you soon!",
          });
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          console.error(error.text);
          setStatus("error");
        },
      );
  };

  return (
    <section id="contact" className="py-24 relative bg-card/30">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm mb-4 block">
            // contact
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I'm always open to
            discussing new opportunities and ideas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-4">Get in touch</h3>
              <p className="text-muted-foreground">
                I'm currently available for freelance work and full-time
                positions. If you have a project that needs some creative work,
                let me know!
              </p>
            </div>

            <div className="space-y-4">
              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card/50"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a
                    href="mailto:hello@alexchen.dev"
                    className="font-medium hover:text-primary transition-colors"
                  >
                    mohammed.teama789@gmail.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card/50"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Location</div>
                  <span className="font-medium">Cairo, Egypt</span>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ x: 4 }}
                className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card/50"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">
                    Response time
                  </div>
                  <span className="font-medium">Within 24 hours</span>
                </div>
              </motion.div>
            </div>

            {/* Terminal decoration */}
            <div className="p-4 rounded-lg bg-card border border-border font-mono text-sm hidden lg:block">
              <div className="flex gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-destructive/70" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <span className="w-3 h-3 rounded-full bg-green-500/70" />
              </div>
              <code className="text-muted-foreground">
                <span className="text-primary">$</span> send_message --to
                Mohamed
                <br />
                <span className="text-green-400">✓ Connection established</span>
                <br />
                <span className="text-green-400">
                  ✓ Ready to receive your message
                </span>
              </code>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-border bg-card/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                placeholder="John Doe"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-border bg-card/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-3 rounded-lg border border-border bg-card/50 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none"
                placeholder="Tell me about your project..."
              />
            </div>

            <Button type="submit" variant="hero" size="lg" className="w-full">
              {status === "sending" ? (
                <span className="flex items-center gap-2">
                  <Loader2Icon className="animate-spin w-4 h-4" />
                  Sending...
                </span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};
