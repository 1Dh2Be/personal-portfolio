import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

type QuestionAnswerType = {
  question: string;
  answer: string;
  isLast: boolean;
};

export const QuestionAnswer = ({
  question,
  answer,
  isLast,
}: QuestionAnswerType) => {
  const [seeAnswer, setSeeAnswer] = useState(false);

  return (
    <div
      className={cn(
        "cursor-pointer border-t border-l border-r p-5 border-border-primary",
        {
          "border-y": isLast,
        }
      )}
      onClick={() => setSeeAnswer(!seeAnswer)}
    >
      <div className="text-text-primary flex items-center justify-between">
        <h3 className="select-none capitalize text-lg md:text-2xl">
          {question}
        </h3>
        <Plus
          className={cn("shrink-0 transition-transform duration-300 rotate-0", {
            "rotate-45": seeAnswer,
          })}
        />
      </div>

      <AnimatePresence>
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{
            height: seeAnswer ? "auto" : 0,
            opacity: seeAnswer ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
          className={cn("text-text-secondary overflow-hidden")}
        >
          <p
            className={cn(
              "text-text-secondary text-lg pt-4 opacity-0 duration-200",
              {
                "opacity-100": seeAnswer,
              }
            )}
          >
            {answer}
          </p>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
