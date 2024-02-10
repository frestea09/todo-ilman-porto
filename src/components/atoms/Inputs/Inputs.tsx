type typeInput = {
  nameInputsComponents?: string;
  labelInputs: string;
};
export const Inpust = ({ nameInputsComponents, labelInputs }: typeInput) => {
  return <input name={nameInputsComponents} />;
};
