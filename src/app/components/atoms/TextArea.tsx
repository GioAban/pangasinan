// components/atoms/TextArea.tsx
import { TextareaHTMLAttributes } from "react";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

const TextArea = ({ label, id, ...props }: TextAreaProps) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="mb-2 ml-1 text-xs font-black uppercase tracking-widest text-slate-500"
      >
        {label}
      </label>
      <textarea
        id={id}
        className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50/50 px-5 py-4 font-medium text-slate-900 outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-[#124D9B] focus:bg-white focus:ring-4 focus:ring-[#124D9B]/10"
        {...props}
      />
    </div>
  );
};

export default TextArea;
