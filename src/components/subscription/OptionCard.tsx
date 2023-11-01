interface OptionCardProps {
  title: string;
  desc: string;
  isSelected?: boolean;
  onClick?: () => void;
}

const OptionCard = ({ title, desc, isSelected, onClick }: OptionCardProps) => {
  return (
    <div
      className={`${
        isSelected
          ? "bg-dark-cyan text-light-cream"
          : "bg-isabelline hover:bg-pale-orange"
      } space-y-2 rounded-md p-6 text-left tablet:h-64 tablet:space-y-6 tablet:px-6 tablet:pt-8 desktop:px-7`}
      onClick={onClick}
    >
      <h5 className="font-serif text-2xl">{title}</h5>
      <p className="tablet:max-w-[15rem]">{desc}</p>
    </div>
  );
};

export default OptionCard;
