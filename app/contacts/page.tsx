import Breadcrumb from "@/components/breadcrumb"
import ContactForm from "@/components/contact-form"

export default function ContactsPage() {
  return (
    <div className="pt-20">
      <Breadcrumb
        items={[
          { label: "Home", href: "/" },
          { label: "Contatti", href: "/contatti" },
        ]}
      />

      <ContactForm />
    </div>
  )
}
