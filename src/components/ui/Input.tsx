interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export function Input({ label, ...props }: InputProps) {
  return (
    <div>
      <label
        htmlFor={props.id}
        className="block mb-2 text-sm font-medium text-gray-300"
      >
        {label}
      </label>
      <input
        {...props}
        className="bg-gradient-to-l from-[#202020] placeholder:text-[#707070] to-[#161616] border border-[#2c2c2c] text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
      />
    </div>
  );
}
