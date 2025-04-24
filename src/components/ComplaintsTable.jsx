import { useState, useEffect } from 'react'
import { getComplaintsData } from '../services/api'
import ComplaintDetailsModal from './ComplaintDetailsModal'

const ComplaintsTable = () => {
  const [complaints, setComplaints] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [selectedComplaint, setSelectedComplaint] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const fetchComplaints = async () => {
      try {
        const data = await getComplaintsData()
        setComplaints(data)
      } catch (error) {
        console.error('Error fetching complaints:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchComplaints()
  }, [])

  const filteredComplaints = complaints.filter(complaint =>
    complaint.subject.toLowerCase().includes(search.toLowerCase()) ||
    complaint.status?.toLowerCase().includes(search.toLowerCase()) ||
    complaint.complainant?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h2 className="text-lg font-semibold text-gray-800">Complaints</h2>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search complaints..."
          className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
        />
      </div>
      <div className="overflow-x-auto">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-red-500"></div>
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Complainant</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredComplaints.map(complaint => (
                <tr key={complaint.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{complaint.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{complaint.subject}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{complaint.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{complaint.complainant}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{complaint.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      className="px-3 py-1 rounded bg-blue-500 text-white text-xs hover:bg-blue-600 transition"
                      onClick={() => { setSelectedComplaint(complaint); setModalOpen(true); }}
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <ComplaintDetailsModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        details={selectedComplaint}
      />
    </div>
  )
}

export default ComplaintsTable
