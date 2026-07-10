"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import Container from "@/components/common/Container";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "How can I contact support?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Curabitur blandit tempus porttitor.",
  },
  {
    question: "Do you offer refunds?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nulla vitae elit libero.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean lacinia bibendum nulla sed consectetur. Cras justo odio, dapibus ac facilisis in.",
  },
  {
    question: "Do you have a free trial?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.",
  },
  {
    question: "Can I cancel anytime?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porta sem malesuada magna mollis euismod. Donec ullamcorper nulla non metus auctor fringilla.",
  },
  {
    question: "How fast is customer support?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas faucibus mollis interdum. Sed posuere consectetur est at lobortis.",
  },
  {
    question: "Do you support international customers?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Aenean eu leo quam.",
  },
  {
    question: "How do I get started?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras mattis consectetur purus sit amet fermentum. Integer posuere erat a ante venenatis dapibus.",
  },
];

export default function FAQSection() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="">
      <Container>
        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
            Frequently Asked Questions
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-base text-muted-foreground">
            Find answers to the most commonly asked questions about our
            services.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="h-fit overflow-hidden rounded-lg bg-white shadow-card transition-all duration-300"
            >
              <button
                onClick={() => toggle(index)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left"
              >
                <h3 className="flex-1 text-xl font-medium text-foreground">
                  {faq.question}
                </h3>

                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white transition-all duration-300">
                  {active === index ? (
                    <Minus className="h-5 w-5 text-foreground" />
                  ) : (
                    <Plus className="h-5 w-5 text-foreground" />
                  )}
                </div>
              </button>

              <div
                className={`grid overflow-hidden transition-all duration-500 ease-in-out ${
                  active === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-border px-6 pt-5 pb-6 leading-7 text-muted-foreground">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}