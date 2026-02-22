"use client";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import FileUploader from "../atoms/FileUploader";
const ClientMessageForm = () => {
  return (
    <form className="flex w-full flex-col gap-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Input
          label="Full Name"
          name="name"
          id="name"
          placeholder="Juan Dela Cruz"
          required
        />
        <Input
          label="Email Address"
          type="email"
          name="email"
          id="email"
          placeholder="juan@example.com"
          required
        />
      </div>
      <TextArea
        label="Your Message"
        name="message"
        id="message"
        rows={5}
        placeholder="I'd like to ask about..."
        required
      />
      <FileUploader label="Attachments (Optional)" id="attachment" />
      <div className="mt-4">
        <Button variant="solid" className="w-full bg-blue-500 text-white">
          SEND MESSAGE
        </Button>
      </div>
    </form>
  );
};

export default ClientMessageForm;
