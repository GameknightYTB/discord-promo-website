import { serverLogo, serverName } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="py-10 bg-discord-dark border-t border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center">
              <img src={serverLogo} alt="Server Logo" className="h-10 w-10 mr-3" />
              <span className="text-xl font-bold">{serverName}</span>
            </div>
            <p className="text-discord-lightGray mt-2">© {new Date().getFullYear()} {serverName}. All rights reserved.</p>
          </div>
          
          <div className="flex flex-wrap gap-6">
            <a href="#" className="text-discord-lightGray hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-discord-lightGray hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="text-discord-lightGray hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-discord-lightGray">
          <p>{serverName} is not affiliated with Discord Inc. Discord is a trademark of Discord Inc.</p>
        </div>
      </div>
    </footer>
  );
}
