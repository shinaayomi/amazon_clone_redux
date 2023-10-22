interface Props {
  amount: number;
}

const FormattedPrice = ({ amount }: Props) => {
  const formattedAmount = new Number(amount).toLocaleString("en-Us", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return formattedAmount;
};

export default FormattedPrice;
