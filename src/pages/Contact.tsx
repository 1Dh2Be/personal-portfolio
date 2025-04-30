import { Container } from "@/utils/Container";
import { Button } from "@/components/ui/Button";
import { Form, Formik, FormikHelpers } from "formik";
import { useState } from "react";

interface FormValues {
  name: string;
  email: string;
  message: string;
}

const initialValues: FormValues = {
  name: "",
  email: "",
  message: "",
};

const inputStyles = {
  base: "px-4 py-3 rounded-lg bg-transparent border border-border-primary focus:outline-none focus:ring-2 focus:ring-text-primary text-text-primary placeholder:text-text-secondary/50",
} as const;

const textareaStyles = {
  base: `${inputStyles.base} resize-none`,
} as const;

export const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleSubmit = async (
    values: FormValues,
    { resetForm }: FormikHelpers<FormValues>
  ) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "2b531d4c-7849-48b3-8be5-c99befe96717",
          name: values.name,
          email: values.email,
          message: values.message,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setShowSuccess(true);
        resetForm();
      } else {
        setShowError(true);
      }
    } catch (error) {
      setShowError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container className="relative z-[5] min-h-screen py-5 mobile-md:py-10 bg-bg-primary theme-transition rounded-b-4xl">
      <div className="flex flex-col gap-16 mobile-md:py-10 md:py-0">
        {/* Header */}
        <div className="w-full">
          <div className="flex flex-col gap-4">
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-text-primary">
              Let's Connect
            </h2>
            <p className="text-text-secondary text-xl max-w-2xl">
              Have a project in mind or just want to chat? I'd love to hear from
              you. Fill out the form below or reach out through social media.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="flex flex-col gap-8">
            <Formik initialValues={initialValues} onSubmit={handleSubmit}>
              {({ values, handleChange }) => (
                <Form className="flex flex-col gap-6">
                  <label className="flex flex-col gap-2">
                    <span className="text-text-primary font-medium">Name</span>
                    <input
                      type="text"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      required
                      className={inputStyles.base}
                      placeholder="Your name"
                    />
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="text-text-primary font-medium">Email</span>
                    <input
                      type="email"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      required
                      className={inputStyles.base}
                      placeholder="your@email.com"
                    />
                  </label>

                  <label className="flex flex-col gap-2">
                    <span className="text-text-primary font-medium">
                      Message
                    </span>
                    <textarea
                      name="message"
                      value={values.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={textareaStyles.base}
                      placeholder="Tell me about job opportunities, potential collaborations, or project ideas..."
                    />
                  </label>

                  <Button
                    type="submit"
                    size="xl"
                    className="w-full mt-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </Form>
              )}
            </Formik>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-semibold text-text-primary">
                Other Ways to Connect
              </h2>
              <div className="flex flex-col gap-4 w-fit">
                <a
                  href="mailto:mimounb1597@gmail.com"
                  className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <path
                      d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  mimounb1597@gmail.com
                </a>
                <a
                  href="https://github.com/1Dh2Be"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <path
                      d="M9 19C4 20.5 4 16.5 2 16M16 22V18.13C16.0375 17.6532 15.9731 17.1738 15.811 16.7238C15.6489 16.2738 15.3929 15.8634 15.06 15.52C18.2 15.17 21.5 13.98 21.5 8.52C21.4997 7.12383 20.9627 5.7812 20 4.77C20.4559 3.54851 20.4236 2.19835 19.91 1C19.91 1 18.73 0.650001 16 2.48C13.708 1.85882 11.292 1.85882 9 2.48C6.27 0.650001 5.09 1 5.09 1C4.57638 2.19835 4.54414 3.54851 5 4.77C4.03013 5.7887 3.49252 7.14346 3.5 8.55C3.5 13.97 6.8 15.16 9.94 15.55C9.611 15.89 9.35726 16.2954 9.19531 16.7399C9.03335 17.1844 8.96681 17.6581 9 18.13V22"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/mimoun-atmani/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-text-secondary hover:text-text-primary transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                  >
                    <path
                      d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 9H2V21H6V9Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="text-2xl font-semibold text-text-primary">
                Current Status
              </h2>
              <p className="text-text-secondary max-w-[600px]">
                I'm actively seeking full time opportunities while remaining
                open to freelance projects. Whether you need a website, web
                application, or have an interesting development challenge, I'm
                here to help bring your vision to life. Let's connect and
                discuss how I can contribute to your team or project.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {showSuccess && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-bg-primary p-6 rounded-lg shadow-lg max-w-md w-full mx-4 border border-border-primary">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-text-primary">
                Success!
              </h3>
              <button
                onClick={() => setShowSuccess(false)}
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <p className="text-text-secondary">
              Your message has been sent successfully!
            </p>
          </div>
        </div>
      )}

      {/* Error Modal */}
      {showError && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-bg-primary p-6 rounded-lg shadow-lg max-w-md w-full mx-4 border border-border-primary">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold text-text-primary">Error</h3>
              <button
                onClick={() => setShowError(false)}
                className="text-text-secondary hover:text-text-primary transition-colors"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <path
                    d="M18 6L6 18M6 6L18 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <p className="text-text-secondary">
              Failed to send message. Please try again.
            </p>
          </div>
        </div>
      )}
    </Container>
  );
};
