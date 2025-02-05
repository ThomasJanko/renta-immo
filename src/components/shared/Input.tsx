interface InputProps {
  value: number
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  unit: string
}

export default function Input({ value, handleChange, unit }: InputProps) {
  return (
    <div className="flex flex-row rounded-2xl border justify-center items-center border-gray-300 mt-1">
      <input
        type="number"
        min={0}
        className="p-3 w-[90%] rounded-l-xl focus:border-blue-500 no-arrows"
        value={value}
        onChange={(e) => handleChange(e)}
      />
      <span className="border-l border-gray-300  px-5 py-3"> {unit} </span>
    </div>
  )
}
