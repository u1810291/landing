const OfferList = ({ text }: { text: string }) => {
  return (
    <li>
      <p className={`mb-1 text-base text-body-color dark:text-dark-6`}>{text}</p>
    </li>
  );
};

export default OfferList;
