import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "../canvas";
import { SectionWrapper } from "../../hoc";
import { slideIn } from "../../utils/motion";
import { config } from "../../constants/config";
import { Header } from "../atoms/Header";

const INITIAL_STATE = Object.fromEntries(
  Object.keys(config.contact.form).map((input) => [input, ""])
);

// ✅ FINAL CREDENTIALS
const emailjsConfig = {
  serviceId: "service_cfra2nq",
  templateId: "template_15eg0zo", // Ensure this matches the ID in your Dashboard URL
  publicKey: "MA0Zgf_HS0ngsIhsD", // Corrected 'I' vs 'l' issue
};

const Contact = () => {
  const formRef = useRef<React.LegacyRef<HTMLFormElement> | undefined>();
  const [form, setForm] = useState(INITIAL_STATE);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | undefined
  ) => {
    if (e === undefined) return;
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement> | undefined) => {
    if (e === undefined) return;
    e.preventDefault();
    setLoading(true);

    // 1. Prepare the data payload
    const templateParams = {
      form_name: form.name,
      to_name: "Ujjwal Dhariwal",
      from_email: form.email,
      to_email: "ujjwaldhariwal0@gmail.com",
      message: form.message,
    };

    // 2. Send the email
    emailjs
      .send(
        emailjsConfig.serviceId,
        emailjsConfig.templateId,
        templateParams,
        emailjsConfig.publicKey
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");
          setForm(INITIAL_STATE);
        },
        (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          // Alert the specific error text from EmailJS
          alert(`Failed: ${error.text || "Check console for details."}`);
        }
      );
  };

  return (
    <div
      className={`flex flex-col-reverse gap-10 overflow-hidden xl:mt-12 xl:flex-row`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-[#100d25] p-8 rounded-2xl border border-[#232631] shadow-[0_0_15px_rgba(0,0,0,0.5)]"
      >
        <Header useMotion={false} {...config.contact} />

        <form
          // @ts-expect-error
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          {Object.keys(config.contact.form).map((input) => {
            const { span, placeholder } =
              config.contact.form[input as keyof typeof config.contact.form];
            const Component = input === "message" ? "textarea" : "input";

            return (
              <label key={input} className="flex flex-col">
                <span className="mb-4 font-medium text-white tracking-wide">{span}</span>
                <Component
                  type={input === "email" ? "email" : "text"}
                  name={input}
                  value={form[`${input}`]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  className="bg-[#050505] py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border border-[#333] font-medium focus:border-[#d2ff00] focus:shadow-[0_0_15px_rgba(210,255,0,0.3)] transition-all duration-300"
                  {...(input === "message" && { rows: 7 })}
                />
              </label>
            );
          })}
          
          <button
            type="submit"
            className="bg-[#d2ff00] py-3 px-8 rounded-xl outline-none w-fit text-black font-bold shadow-[0_0_10px_rgba(210,255,0,0.5)] hover:bg-white hover:scale-105 transition-all duration-300"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </motion.div>

      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");