const Footer = () => {
  return (
    <footer className="bg-white shadow-[0_-4px_10px_rgba(0,0,0,0.20)] mt-auto py-4 text-center">
      <p className="text-gray-600">{new Date().getFullYear()} MyApp. All rights reserved.</p>
    </footer>
  );
};

export default Footer;