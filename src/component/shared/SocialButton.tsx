import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaFileAlt, FaPaperPlane } from "react-icons/fa";
import 'animate.css';
const SocialButton = () => {
  return (
    <div>
      <div className="flex space-x-4 z-30">
        {/* Resume Button */}
        <Link
          href={
            "https://drive.google.com/file/d/1eD1CcAvWcwbmgzRBYwre7MFCDYpQ27JM/view?usp=sharing"
          }
          target="_blank"
          className="z-30 animate__animated animate__bounce"
        >
          <Button className="flex items-center px-5 py-5 text-xl text-white bg-[#3c91b2] rounded-lg cursor-pointer shadow-md hover:bg-[#317a91] transition">
            <FaFileAlt className="mr-2" />
            Resume
          </Button>
        </Link>

        {/* Contact Button */}
        <Link href={"/contact"} className="z-30 animate__animated animate__bounce">
          <Button className="flex items-center px-5 py-5 text-xl  cursor-pointer text-[#3c91b2] border-2 border-[#3c91b2] rounded-lg shadow-md hover:bg-[#f0f9ff] transition">
            <FaPaperPlane className="mr-2" />
            Contact
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SocialButton;
