import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      setLoading(true);
      const formData = new FormData();
      Object.keys(data).forEach((key) => formData.append(key, data[key]));

      const res = await fetch(
        "https://script.google.com/macros/s/AKfycbwxnL4H9osQzmabBdCGVgqUugZ86ZcjRJ9Uma1KAgzQE2udkuRG01_SY83cTQGP1gXEag/exec",
        {
          method: "POST",
          body: formData,
        }
      );

      console.log(res);
      toast.success("Message sent successfully!");
      reset();
    } catch (err) {
      toast.error("Failed to submit form. " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-24 pb-16 mt-16 bg-emerald-50" id="contact">
      <ToastContainer />
      <div className="text-center mb-8">
        <h1 className="inline-block bg-gray-200 py-2 px-6 rounded-lg text-3xl font-bold text-gray-800 shadow-md">
          Get in Touch
        </h1>
        <p className="mt-2 text-gray-600 text-lg">
          I’d love to hear from you! Whether you have a project or just want to
          say hello.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-start justify-between gap-10 max-w-6xl mx-auto px-4">
        {/* Contact Info */}
        <div className="lg:w-1/2 w-full space-y-4">
          <h2 className="text-xl font-semibold text-gray-800">
            Contact Information
          </h2>
          <ul className="text-gray-700 space-y-2">
            <li>
              <strong>Email:</strong> nimeshthakur009@gmail.com
            </li>
            <li>
              <strong>Phone:</strong> +91 9630916386, 9893697871
            </li>
            <li>
              <strong>Location:</strong> Bhopal, Madhya Pradesh, India
            </li>
            <li>
              <strong>LinkedIn:</strong>{" "}
              <a
                href="https://linkedin.com/in/nimesh-thakur-5976a127a"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer">
                linkedin.com/in/nimesh-thakur
              </a>
            </li>
            <li>
              <strong>GitHub:</strong>{" "}
              <a
                href="https://github.com/nimeshdev11"
                target="_blank"
                className="text-blue-600 hover:underline"
                rel="noopener noreferrer">
                github.com/nimeshthakur
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="lg:w-1/2 w-full bg-white p-6 rounded-xl shadow-md">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  First Name
                </label>
                <input
                  {...register("firstName", {
                    required: "First Name is required",
                  })}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="John"
                />
                {errors.firstName && (
                  <p className="text-red-500 text-sm">
                    {errors.firstName.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Last Name
                </label>
                <input
                  {...register("lastName", {
                    required: "Last Name is required",
                  })}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="Doe"
                />
                {errors.lastName && (
                  <p className="text-red-500 text-sm">
                    {errors.lastName.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="example@mail.com"
                />
                {errors.email && (
                  <p className="text-red-500 text-sm">{errors.email.message}</p>
                )}
              </div>
              <div>
                <label className="block font-medium text-gray-700 mb-1">
                  Phone
                </label>
                <input
                  type="tel"
                  {...register("phone", {
                    required: "Phone is required",
                    pattern: {
                      value: /^[0-9]{10,15}$/,
                      message: "Enter a valid phone number",
                    },
                  })}
                  className="w-full border border-gray-300 rounded px-3 py-2"
                  placeholder="+91 9876543210"
                />
                {errors.phone && (
                  <p className="text-red-500 text-sm">{errors.phone.message}</p>
                )}
              </div>
            </div>

            <div className="mt-4">
              <label className="block font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                {...register("message", { required: "Message is required" })}
                rows="4"
                className="w-full border border-gray-300 rounded px-3 py-2"
                placeholder="Your message..."></textarea>
              {errors.message && (
                <p className="text-red-500 text-sm">{errors.message.message}</p>
              )}
            </div>

            <div className="mt-6 text-center">
              <button
                type="submit"
                className="w-full md:w-1/2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded transition duration-300">
                {loading ? "Loading..." : "Send Message"}{" "}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
