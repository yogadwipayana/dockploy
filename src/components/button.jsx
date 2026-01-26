export default function Button(text) {
    return (
        <button className="inline-flex items-center justify-center font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-blue-600 hover:bg-blue-700 text-white focus:ring-blue-500 text-sm px-4 py-2 disabled:opacity-60 disabled:cursor-not-allowed ">
            {text}
        </button>
    )
}