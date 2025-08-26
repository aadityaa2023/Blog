import Link from "next/link";

function TechpostLogo() {
  return (
    <div className="flex items-center font-extrabold font-montserrat text-xl lg:text-2xl select-none">
      
      <Link href="/" className="flex items-center space-x-1">
        <span className="uppercase text-white bg-black px-2 py-1 rounded-l-md transition-colors duration-300 hover:bg-orange-500 hover:text-black">
          Post
        </span>
      
        <span className="uppercase text-black bg-orange-500 px-2 py-1 rounded-r-md transition-colors duration-300 hover:bg-black hover:text-orange-500">
          Hub
        </span>
      </Link>
    </div>
  );
}

export default TechpostLogo;
