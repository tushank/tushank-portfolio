import { PropsWithChildren } from "react";
import { ScrollAnimation } from "./ScrollAnimation";

export default function Section({
  id, title, className, children
}: PropsWithChildren<{ id?: string; title: string; className?: string }>) {
  return (
    <section id={id} className={`py-12 sm:py-16 md:py-20 lg:py-24 relative ${className ?? ""}`}>
      <div className="container max-w-6xl mx-auto">
        <ScrollAnimation>
          <h2 className="section-title text-center sm:text-left gradient-text-accent">
            {title}
          </h2>
        </ScrollAnimation>
        <div className="mt-6 sm:mt-8 md:mt-10">{children}</div>
      </div>
    </section>
  );
}
