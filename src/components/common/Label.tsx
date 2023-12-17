import { StrictPropsWithChildren } from '@/@types/common';

interface Props extends StrictPropsWithChildren {
  htmlFor: string;
}

export const Label = ({ htmlFor, children }: Props) => {
  return (
    <label
      htmlFor={htmlFor}
      className="block text-sm font-medium leading-6 text-gray-900"
    >
      {children}
    </label>
  );
};
