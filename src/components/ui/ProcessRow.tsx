type ProcessRowType = {
  number: string;
  title: string;
  isLast?: boolean;
};

export const ProcessRow = ({
  number,
  title,
  isLast = false,
}: ProcessRowType) => {
  return (
    <div
      className={`flex gap-3 flex-col md:flex-row md:items-center ${
        isLast ? "border-y" : "border-t"
      }  border-border-primary py-4`}
    >
      <span className="font-medium text-text-primary transition-colors duration-300 ease-in-out">
        {" "}
        {number}
      </span>
      <h5 className="flex-1 md:text-center font-medium">{title}</h5>
    </div>
  );
};
