"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { 
  Select, 
  SelectContent, 
  SelectGroup, 
  SelectItem, 
  SelectLabel, 
  SelectTrigger, 
  SelectValue
} from '@/components/ui/select';

import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from 'react-icons/fa';
import { motion } from "framer-motion";

const info = [
  { icon: <FaPhoneAlt />, title: 'Phone', description: "+1 (385) 436 7585" },
  { icon: <FaEnvelope />, title: 'Email', description: "anastasiiavolosevych@gmail.com" },
  { icon: <FaMapMarkedAlt />, title: 'Address', description: "Utah, US" }
];

const Contact = () => {
  const [status, setStatus] = useState("");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (value) => {
    setFormData({ ...formData, service: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("https://formspree.io/f/mqaedbbd", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setStatus(response.ok ? "Message sent successfully!" : "Error sending message.");

      if (response.ok) {
        setFormData({ firstName: "", lastName: "", email: "", phone: "", service: "", message: "" });
      }
    } catch (error) {
      setStatus("Error sending message.");
      console.error("Error:", error);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' } }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Contact Form */}
          <div className="xl:w-[70%] order-2 xl:order-none">
            <form 
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-white/60">
                Looking for a skilled web developer to bring your vision to life? 
                Whether you need a stunning website, seamless functionality, 
                or a complete revamp, I’m here to help.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" name="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} required />
                <Input type="text" name="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} required />
                <Input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required />
                <Input type="text" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
              </div>

              {/* Service Selection */}
              <Select onValueChange={handleServiceChange}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="Web Development">Web Development</SelectItem>
                    <SelectItem value="Back End Development">Back End Development</SelectItem>
                    <SelectItem value="SEO Optimization">SEO Optimization</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              
              {/* Hidden input to send selected service value */}
              <input type="hidden" name="service" value={formData.service} />

              <Textarea 
                className="h-[200px]" 
                name="message" 
                placeholder="Type your message here."
                value={formData.message}
                onChange={handleChange}
                required
              />

              <Button type="submit" size="md" className="max-w-40">Send Message</Button>
              <p className="text-white/60">{status}</p>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-lg flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
