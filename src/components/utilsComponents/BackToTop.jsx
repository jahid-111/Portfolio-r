export default function BackToTop() {
  return (
    <button
      className="bg-gray-500 border-2 border-transparent hover:border-yellow-600 p-2 rounded-full transition-all duration-200"
      onClick={() => window.scrollTo({ top: 0, behavior: "auto" })}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 1024 1024"
      >
        <path
          fill="#f7b100"
          d="M572.235 205.282v600.365a30.118 30.118 0 1 1-60.235 0V205.282L292.382 438.633a28.913 28.913 0 0 1-42.646 0a33.43 33.43 0 0 1 0-45.236l271.058-288.045a28.913 28.913 0 0 1 42.647 0L834.5 393.397a33.43 33.43 0 0 1 0 45.176a28.913 28.913 0 0 1-42.647 0l-219.618-233.23z"
        />
      </svg>
    </button>
  );
}
