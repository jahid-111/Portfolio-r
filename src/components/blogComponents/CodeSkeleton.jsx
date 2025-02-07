import { useState } from "react";

export default function CodeSkeleton({ code }) {
  const [isCopy, setCopy] = useState(false);
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code).then(
      () => {
        console.log("Code copied to clipboard:", code);
        setCopy(true);

        setInterval(() => {
          setCopy(false);
        }, 3000);
      },
      (err) => {
        console.error("Failed to copy code:", err);
        setCopy(false);
      }
    );
  };

  return (
    <div className="relative my-2 pt-5 px-3 border-gray-400 border-[1px] rounded-md">
      <pre className="bg-gray-900 my-1 text-white p-4 rounded-md overflow-auto">
        <code>{code}</code>
        <div className="absolute right-2 top-0 text-gray-700">
          <button
            className="mx-auto px-2 hover:bg-gray-500 rounded-sm"
            onClick={copyToClipboard}
          >
            {isCopy ? "Copied" : "Copy"}
          </button>
        </div>
      </pre>
    </div>
  );
}
