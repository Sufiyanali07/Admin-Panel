import React from 'react'

const LogoutButton = () => {
  const handleLogout = () => {
    // Simulate logout functionality
    alert('You have been logged out!')
    // In a real application, you would clear tokens, cookies, and redirect to login page
  }

  return (
    <button
      onClick={handleLogout}
      className="flex items-center w-full px-4 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-red-100 hover:text-red-700 transition-colors"
    >
      <svg
        className="w-5 h-5 mr-3"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
      <span className="font-medium">Logout</span>
    </button>
  )
}

export default LogoutButton
