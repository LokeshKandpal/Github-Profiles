import { Github } from "lucide-react";

function Header() {
  return (
    <header className="bg-gray-50 border-b border-gray-200 shadow-sm" style={{
      fontFamily: 'Helvetica Neue, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen-Sans, Ubuntu, Cantarell, Helvetica Neue, sans-serif'
    }}>
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-center space-x-3">
          <div className="bg-gray-900 p-2.5 rounded-full">
            <Github className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-medium text-gray-900 tracking-tight">
            GitHub Profile Viewer
          </h1>
        </div>
      </div>
    </header>
  );
}

export default Header;