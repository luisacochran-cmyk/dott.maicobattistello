import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"

export default function ContactsPage() {
  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Contatti", href: "/contatti" },
        ]}
      />

      {/* Contact Form */}
      <ContactForm />
    </div>
  )
}
