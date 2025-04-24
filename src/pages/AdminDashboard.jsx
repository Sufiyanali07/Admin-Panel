import Cards from '../components/Cards'
import UserBarChart from '../components/UserBarChart'
import WorkingProfessionalBarChart from '../components/WorkingProfessionalBarChart'
import PaymentsLineChart from '../components/PaymentsLineChart'
import RevenueLineChart from '../components/RevenueLineChart'
import DashboardReports from '../components/DashboardReports'
import UsersTable from '../components/UsersTable'
import ProfessionalsTable from '../components/ProfessionalsTable'
import ComplaintsGraph from '../components/ComplaintsGraph'

const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Dashboard Overview</h1>
      
      {/* Stats Cards */}
      <Cards />
      
      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <UserBarChart />
        <WorkingProfessionalBarChart />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PaymentsLineChart />
        <RevenueLineChart />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DashboardReports />
        <ComplaintsGraph />
      </div>
      
      {/* Tables Section */}
      <div className="space-y-6">
        <UsersTable />
        <ProfessionalsTable />
      </div>
    </div>
  )
}

export default AdminDashboard
