import React, { useEffect, useState } from 'react';

const EmployeeDetails = () => {
  const [employee, setEmployee] = useState(null);

  // Simulating an API call
  const fetchEmployeeData = async () => {
    // Simulated API response
    const response = [
      {
        id: 1,
        name: 'P.H.S.Daminda',
        designation: 'Chief Information Officer',
        division: 'DMD',
        department: 'SIT',
        recruitmentDate: '1993-01-01',
        basicSalary: '500,000',
        permanentDate: '1994-01-01',
        presentGrade: 'Grade A',
        retirementDate: '2023-10-31',
        basisOfEmployment: 'CDL Permanent',
      },
      {
        id: 2,
        name: 'J. Doe',
        designation: 'Senior Engineer',
        division: 'ENG',
        department: 'Development',
        recruitmentDate: '2005-06-15',
        basicSalary: '350,000',
        permanentDate: '2006-07-20',
        presentGrade: 'Grade B',
        retirementDate: '2030-12-31',
        basisOfEmployment: 'Full-Time',
      },
    ];

    // Simulate fetching the first employee
    const selectedEmployee = response.find((emp) => emp.id === 1);
    setEmployee(selectedEmployee);
  };

  useEffect(() => {
    fetchEmployeeData();
  }, []);

  if (!employee) {
    return <p>Loading employee data...</p>;
  }

  return (
    <div className="bg-white shadow p-4 rounded">
      <h2 className="text-lg font-bold text-gray-700 mb-4">(A) PERSONAL DATA</h2>
      <ul className="space-y-2">
        <li>
          <strong>Name:</strong> {employee.name}
        </li>
        <li>
          <strong>Designation:</strong> {employee.designation}
        </li>
        <li>
          <strong>Division:</strong> {employee.division}
        </li>
        <li>
          <strong>Department:</strong> {employee.department}
        </li>
        <li>
          <strong>Recruitment Date:</strong> {employee.recruitmentDate}
        </li>
        <li>
          <strong>Basic Salary:</strong> {employee.basicSalary}
        </li>
        <li>
          <strong>Permanent Date:</strong> {employee.permanentDate}
        </li>
        <li>
          <strong>Present Grade:</strong> {employee.presentGrade}
        </li>
        <li>
          <strong>Retirement Date:</strong> {employee.retirementDate}
        </li>
        <li>
          <strong>Basis Of Employment:</strong> {employee.basisOfEmployment}
        </li>
      </ul>
    </div>
  );
};

export default EmployeeDetails;
