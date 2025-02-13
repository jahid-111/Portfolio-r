import { useState } from "react";
import emailjs from "emailjs-com";

const SendMail = () => {
  const [formData, setFormData] = useState({
    to_name: "Support Team", // Default recipient name
    from_name: "",
    user_email: "",
    subject: "",
    location: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSendMail = async (e) => {
    e.preventDefault();

    // Check if required fields are filled
    const requiredFields = ["from_name", "user_email", "message"];
    const missingFields = requiredFields.filter((field) => !formData[field]);

    if (missingFields.length > 0) {
      setStatus({
        type: "error",
        message: `Please fill in all required fields: ${missingFields
          .map((field) =>
            field === "from_name"
              ? "name"
              : field === "user_email"
              ? "email"
              : field
          )
          .join(", ")}`,
      });
      return;
    }

    if (!validateEmail(formData.user_email)) {
      setStatus({
        type: "error",
        message: "Please enter a valid email address.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    // Prepare EmailJS template parameters
    // const templateParams = {
    //   to_name: formData.to_name,
    //   from_name: formData.from_name,
    //   reply_to: formData.user_email, //op
    //   subject: formData.subject,
    //   location: formData.location,
    //   company: formData.company,
    //   message: `${formData.message}\n\nContact Details:\nEmail: ${
    //     formData.user_email
    //   }\nCompany: ${formData.company || "N/A"}\nLocation: ${
    //     formData.location || "N/A"
    //   }\nSubject: ${formData.subject || "N/A"}`,
    // };

    const templateParams = {
      to_name: formData.to_name,
      from_name: formData.from_name,
      reply_to: formData.user_email,
      subject: formData.subject,
      location: formData.location,
      company: formData.company,
      message: formData.message, // Only the message text
    };

    try {
      // Make sure these environment variables are defined in your .env file
      const serviceId = import.meta.env.VITE_APP_EMAIL_SERVICE_ID;
      const templateId = import.meta.env.VITE_APP_EMAIL_TEMPLATE_ID;
      const userId = import.meta.env.VITE_APP_EMAIL_USER_ID;

      if (!serviceId || !templateId || !userId) {
        throw new Error("Email service configuration is missing");
      }

      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        userId
      );

      console.log("Email sent successfully!", response);
      setStatus({ type: "success", message: "Email sent successfully!" });
      setFormData({
        to_name: "Portfolio",
        from_name: "",
        user_email: "",
        subject: "",
        location: "",
        company: "",
        message: "",
      });
    } catch (error) {
      console.error("Email sending error", error);
      setStatus({
        type: "error",
        message: "Error sending email. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-6 min-h-screen">
      <div className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-center">Contact Us</h1>
        {status && (
          <div
            className={`mb-4 text-center text-sm ${
              status.type === "success" ? "text-green-500" : "text-red-500"
            }`}
          >
            {status.message}
          </div>
        )}
        <form onSubmit={handleSendMail}>
          <div className="mb-4">
            <label
              htmlFor="from_name"
              className="block text-gray-400 font-medium mb-2"
            >
              Your Name *
            </label>
            <input
              type="text"
              id="from_name"
              placeholder="Enter your name"
              value={formData.from_name}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              disabled={isSubmitting}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="user_email"
              className="block text-gray-400 font-medium mb-2"
            >
              Your Email *
            </label>
            <input
              type="email"
              id="user_email"
              placeholder="Enter your email"
              value={formData.user_email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              disabled={isSubmitting}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="subject"
              className="block text-gray-400 font-medium mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              placeholder="Enter subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              disabled={isSubmitting}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="company"
              className="block text-gray-400 font-medium mb-2"
            >
              Company
            </label>
            <input
              type="text"
              id="company"
              placeholder="Enter your company (optional)"
              value={formData.company}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              disabled={isSubmitting}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="location"
              className="block text-gray-400 font-medium mb-2"
            >
              Location
            </label>
            <input
              type="text"
              id="location"
              placeholder="Enter your location (optional)"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              disabled={isSubmitting}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block font-medium mb-2">
              Message *
            </label>
            <textarea
              id="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
              rows="5"
              disabled={isSubmitting}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 transition"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SendMail;
