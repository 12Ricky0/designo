import ContactForm from "@/components/contact/contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return <ContactForm />;
}
