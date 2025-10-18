import { PropsWithChildren } from "react";
import { ScrollAnimation } from "./ScrollAnimation";

export default function Section({
  id, title, className, children
}: PropsWithChildren<{ id?: string; title: string; className?: string }>) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className ?? ""}`}>
      <div className="container max-w-5xl mx-auto px-4">
        <ScrollAnimation>
          <h2 className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 gradient-text">
            {title}
          </h2>
        </ScrollAnimation>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
