import { subscriptionData } from "./data";

interface SummaryTextProps {
  selectedOptions: number[];
  isDialog?: boolean;
}

const SummaryText = ({
  selectedOptions,
  isDialog = false,
}: SummaryTextProps) => {
  return (
    <p
      className={`font-serif text-2xl ${
        isDialog
          ? "mb-2 mt-6 px-6 text-grey tablet:mt-14 tablet:px-14"
          : "text-light-cream"
      }`}
    >
      “I drink my coffee as{" "}
      <span className="text-dark-cyan">
        {selectedOptions[0] !== null ? (
          subscriptionData[0].options[selectedOptions[0]].title
        ) : (
          <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>
        )}
      </span>
      , with a{" "}
      <span className="text-dark-cyan">
        {selectedOptions[1] !== null ? (
          subscriptionData[1].options[selectedOptions[1]].title
        ) : (
          <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>
        )}
      </span>{" "}
      type of bean.{" "}
      <span className="text-dark-cyan">
        {selectedOptions[2] !== null ? (
          subscriptionData[2].options[selectedOptions[2]].title
        ) : (
          <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>
        )}
      </span>{" "}
      {selectedOptions[0] !== 0 && (
        <>
          ground ala{" "}
          <span className="text-dark-cyan">
            {selectedOptions[3] !== null ? (
              subscriptionData[3].options[selectedOptions[3]].title
            ) : (
              <u>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </u>
            )}
          </span>
        </>
      )}
      , sent to me{" "}
      <span className="text-dark-cyan">
        {selectedOptions[4] !== null ? (
          subscriptionData[4].options[selectedOptions[4]].title
        ) : (
          <u>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</u>
        )}
      </span>
      .”
    </p>
  );
};

export default SummaryText;
