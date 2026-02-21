import Container from "./container";

const Footer = () => {
  return (
    <footer className="mt-auto bg-[#124D9B] py-6 text-slate-50">
      <Container className="flex items-center justify-center">
        <p>
          Copyright &copy; {new Date().getFullYear()} Pangasinan Heritage. All
          rights reserved.
        </p>
      </Container>
    </footer>
  );
};
export default Footer;
