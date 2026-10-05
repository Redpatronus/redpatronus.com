import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import { z } from "zod";
import { useEffect } from "react";
import { getRecaptchaToken, loadRecaptcha } from "@/lib/recaptcha";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  company: z.string().trim().min(1, "Company is required").max(100, "Company must be less than 100 characters"),
  email: z.string().trim().email("Please enter a valid email").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().max(30, "Phone must be less than 30 characters").optional(),
  message: z.string().trim().min(10, "Message must be at least 10 characters").max(2000, "Message must be less than 2000 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    loadRecaptcha().catch(() => {});
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((error) => {
        const field = error.path[0] as keyof ContactFormData;
        fieldErrors[field] = error.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setIsSubmitting(true);

    try {
      const recaptchaToken = await getRecaptchaToken("contact_form");
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/contact-form`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({ ...result.data, recaptchaToken }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setIsSubmitted(true);
      toast({
        title: t("contact.toast.successTitle"),
        description: t("contact.toast.successDesc"),
      });
    } catch (error) {
      toast({
        title: t("contact.toast.errorTitle"),
        description: t("contact.toast.errorDesc"),
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whyItems = [
    t("contact.whyItems.0"),
    t("contact.whyItems.1"),
    t("contact.whyItems.2"),
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us | Red Patronus - DORA Cybersecurity Consultation</title>
        <meta name="description" content="Contact Red Patronus for DORA-compliant cybersecurity solutions. Schedule a consultation with our enterprise security experts in Bratislava, Slovakia." />
        <link rel="canonical" href="https://redpatronus.com/contact" />
      </Helmet>
      <Layout>
        <section className="gradient-hero py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <span className="font-body text-sm font-semibold text-primary uppercase tracking-wider">
              {t("contact.heroLabel")}
            </span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6 text-balance">
              {t("contact.heroTitle")}
            </h1>
            <p className="font-body text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              {t("contact.heroSubtitle")}
            </p>
          </div>
        </section>

        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <h2 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-6">
                  {t("contact.getInTouch")}
                </h2>
                <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
                  {t("contact.getInTouchDesc")}
                </p>

                <div className="space-y-6 mb-10">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent rounded-lg">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-body font-semibold text-foreground mb-1">{t("contact.emailLabel")}</h3>
                      <a href="mailto:info@redpatronus.com" className="font-body text-muted-foreground hover:text-primary transition-colors">
                        info@redpatronus.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent rounded-lg">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-body font-semibold text-foreground mb-1">{t("contact.phoneLabel")}</h3>
                      <a href="tel:+421948446778" className="font-body text-muted-foreground hover:text-primary transition-colors">
                        +421 948 446 778
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent rounded-lg">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-body font-semibold text-foreground mb-1">{t("contact.locationLabel")}</h3>
                      <p className="font-body text-muted-foreground">
                        Lenardova 1147/12<br />
                        Bratislava 851 01<br />
                        Slovakia
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-accent rounded-lg">
                      <Clock className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-body font-semibold text-foreground mb-1">{t("contact.responseTimeLabel")}</h3>
                      <p className="font-body text-muted-foreground">
                        {t("contact.responseTimeValue")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-surface rounded-xl p-6 border border-border">
                  <h3 className="font-body text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
                    {t("contact.whyChoose")}
                  </h3>
                  <ul className="space-y-3">
                    {whyItems.map((item, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-5 w-5 text-trust-green" />
                        <span className="font-body text-sm text-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 lg:p-10 shadow-card border border-border">
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-trust-green-light rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="h-8 w-8 text-trust-green" />
                    </div>
                    <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                      {t("contact.messageReceived")}
                    </h3>
                    <p className="font-body text-muted-foreground mb-6">
                      {t("contact.messageReceivedDesc")}
                    </p>
                    <Button variant="outline" onClick={() => setIsSubmitted(false)}>
                      {t("contact.sendAnother")}
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="font-display text-2xl font-bold text-foreground mb-6">
                      {t("contact.requestConsultation")}
                    </h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">{t("contact.form.name")} *</Label>
                          <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Smith" className={errors.name ? "border-destructive" : ""} />
                          {errors.name && <p className="text-sm text-destructive">{errors.name}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="company">{t("contact.form.company")} *</Label>
                          <Input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Acme Corporation" className={errors.company ? "border-destructive" : ""} />
                          {errors.company && <p className="text-sm text-destructive">{errors.company}</p>}
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">{t("contact.form.businessEmail")} *</Label>
                          <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@acme.com" className={errors.email ? "border-destructive" : ""} />
                          {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">{t("contact.form.phone")}</Label>
                          <Input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+1 (234) 567-890" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">{t("contact.form.message")} *</Label>
                        <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="..." rows={5} className={errors.message ? "border-destructive" : ""} />
                        {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                      </div>

                      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? t("contact.form.sending") : (
                          <>
                            {t("contact.form.submit")}
                            <Send className="ml-2 h-4 w-4" />
                          </>
                        )}
                      </Button>

                      <p className="font-body text-sm text-muted-foreground text-center">
                        {t("contact.privacyNote")}
                      </p>
                      <p className="font-body text-xs text-muted-foreground text-center">
                        Protected by reCAPTCHA. Google{" "}
                        <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Privacy</a>
                        {" & "}
                        <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer" className="underline hover:text-primary">Terms</a>.
                      </p>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;
