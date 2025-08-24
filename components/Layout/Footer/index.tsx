import Link from "next/link";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-gray-300 dark:border-gray-700 text-start">
      <p className="text-xl lg:text-2xl font-montserrat font-extrabold uppercase">
       
      </p>
      <p className="mt-2 text-sm">
        <span className="font-semibold mr-2"></span>
        <Link
          href="#"
          target="_blank"
          className="text-blue-600 dark:text-blue-400 underline link"
        >
        
        </Link>
      </p>
      
    </footer>
  );
}

export default Footer;
