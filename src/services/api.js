import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com';

// Get users data
export const getUsersData = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    return response.data;
  } catch (error) {
    console.error('Error fetching users data:', error);
    return [];
  }
};

// Get professionals data (using the same endpoint for demo purposes)
export const getProfessionalsData = async () => {
  try {
    const response = await axios.get(`${API_URL}/users`);
    // Modify the data to make it look like professionals data
    const professionals = response.data.map(user => ({
      ...user,
      profession: getRandomProfession(),
      experience: Math.floor(Math.random() * 10) + 1,
      rating: (Math.random() * 2 + 3).toFixed(1), // Random rating between 3 and 5
      projects: Math.floor(Math.random() * 20) + 1
    }));
    return professionals;
  } catch (error) {
    console.error('Error fetching professionals data:', error);
    return [];
  }
};

// Get random profession for demo data
const getRandomProfession = () => {
  const professions = [
    'Web Developer',
    'UI/UX Designer',
    'Data Scientist',
    'DevOps Engineer',
    'Mobile Developer',
    'Product Manager',
    'QA Engineer',
    'Backend Developer',
    'Frontend Developer',
    'Full Stack Developer'
  ];
  return professions[Math.floor(Math.random() * professions.length)];
};

// Get reports data
export const getReportsData = async () => {
  // Placeholder: returns mock data, update API endpoint as needed
  try {
    // Replace with your actual API endpoint
    // const response = await axios.get(`${API_URL}/reports`);
    // return response.data;
    // Mock data:
    return [
      { id: 1, title: 'Spam Report', status: 'Open', reporter: 'John Doe', date: '2023-10-01' },
      { id: 2, title: 'Abuse Report', status: 'Closed', reporter: 'Jane Smith', date: '2023-10-02' },
      { id: 3, title: 'Bug Report', status: 'Pending', reporter: 'Alice', date: '2023-10-03' },
    ];
  } catch (error) {
    console.error('Error fetching reports data:', error);
    return [];
  }
};

// Get complaints graph data
export const getComplaintsGraphData = async () => {
  // Placeholder: returns mock data, update API endpoint as needed
  try {
    // Replace with your actual API endpoint
    // const response = await axios.get(`${API_URL}/complaints-graph`);
    // return response.data;
    // Mock data:
    return [
      { month: 'Jan', complaints: 12, resolved: 8 },
      { month: 'Feb', complaints: 18, resolved: 15 },
      { month: 'Mar', complaints: 22, resolved: 20 },
      { month: 'Apr', complaints: 10, resolved: 7 },
      { month: 'May', complaints: 15, resolved: 12 },
      { month: 'Jun', complaints: 20, resolved: 18 },
    ];
  } catch (error) {
    console.error('Error fetching complaints graph data:', error);
    return [];
  }
};

// Get complaints data
export const getComplaintsData = async () => {
  // Placeholder: returns mock data, update API endpoint as needed
  try {
    // Replace with your actual API endpoint
    // const response = await axios.get(`${API_URL}/complaints`);
    // return response.data;
    // Mock data:
    return [
      { id: 1, subject: 'Late Response', status: 'Resolved', complainant: 'Bob', date: '2023-10-01' },
      { id: 2, subject: 'Rude Behavior', status: 'Open', complainant: 'Charlie', date: '2023-10-02' },
      { id: 3, subject: 'Service Delay', status: 'Pending', complainant: 'Eve', date: '2023-10-03' },
    ];
  } catch (error) {
    console.error('Error fetching complaints data:', error);
    return [];
  }
};

// Get stats data
export const getStatsData = async () => {
  try {
    const users = await getUsersData();
    const professionals = await getProfessionalsData();
    
    return {
      totalUsers: users.length,
      totalProfessionals: professionals.length,
      totalProjects: professionals.reduce((sum, pro) => sum + pro.projects, 0),
      totalRevenue: Math.floor(Math.random() * 100000) + 50000 // Random revenue between 50k and 150k
    };
  } catch (error) {
    console.error('Error fetching stats data:', error);
    return {
      totalUsers: 0,
      totalProfessionals: 0,
      totalProjects: 0,
      totalRevenue: 0
    };
  }
};

// Get chart data for users
export const getUserChartData = async () => {
  try {
    const users = await getUsersData();
    return users.slice(0, 6).map(user => ({
      name: user.name,
      value: Math.floor(Math.random() * 100) + 20
    }));
  } catch (error) {
    console.error('Error fetching user chart data:', error);
    return [];
  }
};

// Get chart data for professionals
export const getProfessionalsChartData = async () => {
  try {
    const professionals = await getProfessionalsData();
    return professionals.slice(0, 6).map(pro => ({
      name: pro.name,
      value: pro.projects
    }));
  } catch (error) {
    console.error('Error fetching professionals chart data:', error);
    return [];
  }
};

// Get payments data for line chart
export const getPaymentsData = async () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months.map(month => ({
    name: month,
    payments: Math.floor(Math.random() * 500) + 100
  }));
};

// Get revenue data for line chart
export const getRevenueData = async () => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months.map(month => ({
    name: month,
    revenue: Math.floor(Math.random() * 20000) + 5000
  }));
};

// Get report data for pie chart
export const getReportData = async () => {
  const totalReports = Math.floor(Math.random() * 100) + 50;
  const resolvedReports = Math.floor(Math.random() * totalReports);
  
  return [
    { name: 'Resolved', value: resolvedReports },
    { name: 'Pending', value: totalReports - resolvedReports }
  ];
};
