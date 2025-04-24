import { useState, useEffect } from 'react'
import { getReportsData } from '../services/api'
import ReportDetailsModal from './ReportDetailsModal'

const ReportsTable = () => {
  const [reports, setReports] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [selectedReport, setSelectedReport] = useState(null)
  const [modalOpen, setModalOpen] = useState(false)

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const data = await getReportsData()
        setReports(data)
      } catch (error) {
        console.error('Error fetching reports:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchReports()
  }, [])

  const filteredReports = reports.filter(report =>
    report.title.toLowerCase().includes(search.toLowerCase()) ||
    report.status?.toLowerCase().includes(search.toLowerCase()) ||
    report.reporter?.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <h2 className="text-lg font-semibold text-gray-800">Reports</h2>
        <input
          type="text"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search reports..."
          className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <div className="overflow-x-auto">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-yellow-500"></div>
          </div>
        ) : (
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Title</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reporter</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredReports.map(report => (
                <tr key={report.id}>
                  <td className="px-6 py-4 whitespace-nowrap">{report.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{report.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{report.status}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{report.reporter}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{report.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      className="px-3 py-1 rounded bg-blue-500 text-white text-xs hover:bg-blue-600 transition"
                      onClick={() => { setSelectedReport(report); setModalOpen(true); }}
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
      <ReportDetailsModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        details={selectedReport}
      />
    </div>
  )
}

export default ReportsTable
