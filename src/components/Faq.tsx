import FaqData from "../data/FaqData.json";
import { QuestionAnswer } from "./ui/QuestionAnswer";

console.log(FaqData.length);

export const Faq = () => {
  return (
    <section className="relative flex flex-col gap-20 py-15 md:py-30 xl:py-40">
      <h2>FREQUENTLY ASKED QUESTIONS</h2>

      <div>
        {FaqData.map((entry, i) => (
          <QuestionAnswer
            key={i}
            question={entry.question}
            answer={entry.answer}
            isLast={FaqData.length === i + 1}
          />
        ))}
      </div>
    </section>
  );
};
