import Image from "next/image"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "This platform helped me find a company that had successfully sponsored TN Visas before. I applied and got approved in just 3 weeks!",
      author: "Maria Rodriguez",
      role: "Systems Analyst from Mexico",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "Sharing my experience was easy, and I love knowing that I'm helping others navigate the complex TN Visa process.",
      author: "David Chen",
      role: "Management Consultant from Canada",
      avatar: "/placeholder.svg?height=80&width=80",
    },
    {
      quote:
        "The data on processing times and success rates helped me set realistic expectations and prepare properly for my interview.",
      author: "Sarah Johnson",
      role: "Scientific Technician from Canada",
      avatar: "/placeholder.svg?height=80&width=80",
    },
  ]

  return (
    <section id="testimonials" className="bg-muted py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Success stories from our community</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Hear from professionals who have successfully navigated the TN Visa process with our help.
          </p>
        </div>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-4 h-20 w-20 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="mb-4 italic text-muted-foreground">"{testimonial.quote}"</p>
                <div className="mt-auto">
                  <p className="font-medium">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

