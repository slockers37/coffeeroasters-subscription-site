import SummaryText from "./SummaryText";

interface SummaryProps {
  selectedOptions: number[];
}

const Summary = ({ selectedOptions }: SummaryProps) => {
  return (
    <div className="space-y-2 rounded-md bg-outer-space px-6 py-8 text-light-cream tablet:px-10 tablet:py-7 desktop:px-16">
      <h5>Order Summary</h5>
      <SummaryText selectedOptions={selectedOptions} />
    </div>
  );
};

export default Summary;
