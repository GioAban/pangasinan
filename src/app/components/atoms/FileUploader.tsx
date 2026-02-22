// components/atoms/FileUploader.tsx
interface FileUploaderProps {
  label: string;
  id: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FileUploader = ({ label, id, onChange }: FileUploaderProps) => {
  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="mb-2 ml-1 text-xs font-black uppercase tracking-widest text-slate-500"
      >
        {label}
      </label>
      <div className="group relative">
        <input
          type="file"
          id={id}
          className="hidden"
          onChange={onChange}
          name={id}
        />
        <label
          htmlFor={id}
          className="flex w-full cursor-pointer items-center justify-center rounded-xl border-2 border-dashed border-slate-200 p-4 transition-all group-hover:border-[#124D9B] group-hover:bg-blue-50/50"
        >
          <span className="text-sm font-bold text-slate-500 group-hover:text-[#124D9B]">
            Click to upload files
          </span>
        </label>
      </div>
    </div>
  );
};

export default FileUploader;
