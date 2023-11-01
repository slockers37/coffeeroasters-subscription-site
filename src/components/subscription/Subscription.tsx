import { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "./dialog";
import { subscriptionData } from "./data";
import OptionCard from "./OptionCard";
import Sidebar from "./Sidebar";
import Summary from "./Summary";
import SummaryText from "./SummaryText";

const Subscription = () => {
  const [selectedOptions, setSelectedOptions] = useState<number[]>(
    new Array(subscriptionData.length).fill(null),
  );

  return (
    <>
      <section className="mt-[7.5rem] desktop:flex desktop:gap-32">
        <Sidebar />
        <div>
          <Accordion type="multiple" className="space-y-20">
            {subscriptionData.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger
                  className="font-serif text-fluid-24-32 font-black disabled:opacity-50 tablet:text-fluid-32-40"
                  disabled={
                    item.q === "Want us to grind them?" &&
                    selectedOptions[0] === 0
                  }
                >
                  {item.q}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="grid grid-cols-1 gap-4 tablet:grid-cols-3 tablet:gap-2 desktop:gap-6">
                    {item.options.map((option, i) => (
                      <OptionCard
                        key={i}
                        title={option.title}
                        desc={option.desc}
                        isSelected={selectedOptions[index] === i}
                        onClick={() => {
                          const newSelectedOptions = [...selectedOptions];
                          newSelectedOptions[index] = i;
                          setSelectedOptions(newSelectedOptions);
                        }}
                      />
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-[7.5rem] flex flex-col">
            <Summary selectedOptions={selectedOptions} />
            <Dialog>
              <DialogTrigger>
                <button
                  className="mb-[7.5rem] mt-12 w-56 self-center rounded-md bg-dark-cyan px-8 py-4 font-serif text-lg text-light-cream hover:bg-sea-serpent desktop:self-end"
                  aria-label="call to action button"
                >
                  Create Your Plan
                </button>
              </DialogTrigger>
              <DialogContent className="rounded-md border-none bg-light-cream">
                <DialogTitle className="rounded-t-md bg-outer-space py-7 pl-6 font-serif text-3xl text-light-cream tablet:py-12 tablet:pl-14 tablet:text-4xl">
                  Order Summary
                </DialogTitle>
                <SummaryText
                  selectedOptions={selectedOptions}
                  isDialog={true}
                />
                <DialogDescription className="mb-6 px-6 text-dark-grey-blue/80 tablet:mb-12 tablet:px-14">
                  Is this correct? You can proceed to checkout or go back to
                  plan selection if something is off. Subscription discount
                  codes can also be redeemed at the checkout.
                </DialogDescription>
                <div className="mb-6 flex items-center justify-between gap-4 px-6 tablet:mb-14 tablet:px-14">
                  <p className="hidden font-serif text-2xl tablet:inline-block">
                    $14.00 / mo
                  </p>
                  <button className="hidden w-56 rounded-md bg-dark-cyan px-8 py-4 font-serif text-lg text-light-cream hover:bg-sea-serpent tablet:inline-block desktop:self-end">
                    Checkout
                  </button>
                  <button className="w-full rounded-md bg-dark-cyan px-6 py-4 font-serif text-lg text-light-cream hover:bg-sea-serpent tablet:hidden desktop:self-end">
                    Checkout - $14.00 / mo
                  </button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </section>
    </>
  );
};

export default Subscription;
