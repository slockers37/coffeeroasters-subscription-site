const Sidebar = () => {
  return (
    <aside className="hidden w-64 desktop:block">
      <ul className="divide-y-2 divide-grey font-serif text-2xl">
        {[
          "Preferences",
          "Bean Type",
          "Quantity",
          "Grind Option",
          "Deliveries",
        ].map((item, index) => (
          <li
            key={index}
            className={`${
              index === 0 ? "pb-6" : "py-6"
            } text-dark-grey-blue opacity-40 hover:opacity-60`}
          >
            <span className="mr-6 text-dark-cyan">{`0${index + 1}`}</span>
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
