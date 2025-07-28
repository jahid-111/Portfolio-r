import { useEffect, useState } from "react";

const DynamicForm = ({ keyProps }) => {
  const [formData, setFormData] = useState({});
  const [fields, setFields] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeField, setActiveField] = useState(null);
console.log(keyProps[0])
  useEffect(() => {
    if (keyProps?.length > 0) {
      setFields(
        keyProps
          .filter((key) => key !== "_id")
          .map((key) => ({
            id: Date.now() + Math.random(),
            label: key,
            type: "text",
            options: [],
          }))
      );
    }
  }, [keyProps]);

  console.log(keyProps)

  const handleFieldChange = (id, event) => {
    const { name, value } = event.target;
    setFields(
      fields.map((field) =>
        field.id === id ? { ...field, [name]: value } : field
      )
    );
  };

  const handleValueChange = (field, value) => {
    if (field.label) {
      setFormData((prev) => ({ ...prev, [field.label]: value }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted:", formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 h-screen overflow-y-scroll">
      <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2">
          <h2 className="text-2xl font-bold text-white">Dynamic Form</h2>
          <p className="text-blue-100 mt-2">Fill in the required information</p>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            {fields.map((field) => (
              <div
                key={field.id}
                className={`bg-white rounded-xl border transition-all duration-200 ${
                  activeField === field.id
                    ? "shadow-lg border-blue-400"
                    : "shadow-sm hover:shadow-md border-gray-200"
                }`}
              >
                <div className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <label
                      htmlFor={`field-${field.id}`}
                      className="text-sm font-medium text-gray-700 uppercase tracking-wide"
                    >
                      {field.label}
                    </label>
                    <select
                      name="type"
                      className="text-sm border-2 rounded-lg px-3 py-1.5 text-gray-700 bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
                      value={field.type}
                      onChange={(e) => handleFieldChange(field.id, e)}
                    >
                      <option value="text">Text</option>
                      <option value="number">Number</option>
                      <option value="email">Email</option>
                      <option value="tel">Phone</option>
                      <option value="date">Date</option>
                      <option value="url">URL</option>
                    </select>
                  </div>
                  <textarea
                    id={`field-${field.id}`}
                    rows="2"
                    className="w-full rounded-lg border-2 border-gray-200 p-3 text-gray-700 focus:border-blue-400 focus:ring focus:ring-blue-200 focus:ring-opacity-50 transition-colors duration-200"
                    value={formData[field.label] || ""}
                    onChange={(e) => handleValueChange(field, e.target.value)}
                    onFocus={() => setActiveField(field.id)}
                    onBlur={() => setActiveField(null)}
                    placeholder={`Enter ${field.label.toLowerCase()}...`}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-center justify-between">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-3 rounded-lg text-white font-medium transition-all duration-200 ${
                isSubmitting
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 hover:shadow-lg"
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Submit Form"
              )}
            </button>
          </div>
        </form>

        <div className="border-t bg-gray-50 p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Live Preview
          </h3>
          <div className="bg-white rounded-lg border border-gray-200 p-4 overflow-auto">
            {Object.keys(formData).length > 0 ? (
              <pre className="text-sm text-gray-700 whitespace-pre-wrap">
                {JSON.stringify(formData, null, 2)
                  .split("\n")
                  .map((line, i) => (
                    <span key={i} className="block">
                      {line.includes(":") ? (
                        <>
                          <span className="text-blue-600 font-semibold">
                            {line.split(":")[0]}
                          </span>
                          {":" + line.split(":")[1]}
                        </>
                      ) : (
                        line
                      )}
                    </span>
                  ))}
              </pre>
            ) : (
              <p className="text-gray-500 italic">No data entered yet</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicForm;
