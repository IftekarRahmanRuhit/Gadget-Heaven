

const Contact = () => {
  return (
    <div className="w-4/5 mx-auto">
        <div className="max-w-4xl mx-auto p-6 bg-gradient-to-r from-purple-400 via-purple-400 to-purple-400 shadow-md rounded-md mt-10">
      <h2 className="text-2xl font-semibold mb-8 text-gray-800 ">Send Your Feedback</h2>
      <form className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-bold text-gray-700">Your Name</label>
            <input
              type="text"
              placeholder="Enter your name..."
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-purple-100"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700">Your Email</label>
            <input
              type="email"
              placeholder="Enter your email address..."
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-purple-100"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700">Your Phone Number</label>
            <input
              type="tel"
              placeholder="Enter your phone number..."
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-purple-100"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700">Subject</label>
            <select className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-purple-100">
              <option>Product Quality Issues</option>
              <option>Service Feedback</option>
              <option>Delivery Complaints</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700">Description</label>
          <textarea
            placeholder="Enter your description..."
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-purple-500 focus:border-purple-500 bg-purple-100"
            rows="4"
          ></textarea>
        </div>

        <div className="flex flex-col items-center">
          <div className="border-dashed border-2 border-gray-500 p-6 rounded-md w-full md:w-1/2 flex items-center justify-center">
            <label className="cursor-pointer">
              <span className="text-gray-800 font-semibold">Upload photo</span>
              <input type="file" className="hidden" />
            </label>
          </div>
          <p className="text-xs text-gray-800 mt-2">
            - Image size can be maximum 500kb<br />
            - Please ensure you meet the Community Guidelines before uploading your review
          </p>
        </div>

<div className="text-right mt-3">
<button
          type="submit"
          className="w-full md:w-auto px-6 py-2 mt-4 bg-purple-600 text-white font-medium rounded-md hover:bg-purple-500 focus:outline-none "
        >
          Submit 
        </button>
</div>
      </form>
    </div>
    </div>
  )
}

export default Contact
