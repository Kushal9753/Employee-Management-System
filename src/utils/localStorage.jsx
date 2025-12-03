
const employees = [
  {
    id: 1,
    firstName: "Amit",
    email: "e@e.com",
    password: "123",
    taskCount: {
      active: 3,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Prepare Weekly Report",
        description: "Create and submit weekly analysis report.",
        date: "2025-12-02",
        category: "Reporting"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Client Follow-up",
        description: "Email clients regarding project updates.",
        date: "2025-11-28",
        category: "Communication"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Update CRM",
        description: "Add new customer data into CRM system.",
        date: "2025-12-03",
        category: "Data Entry"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Submit Document",
        description: "Submit project documentation before deadline.",
        date: "2025-11-25",
        category: "Documentation"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Review Internal Tasks",
        description: "Check progress of team tasks.",
        date: "2025-12-04",
        category: "Management"
      }
    ]
  },

  {
    id: 2,
    firstName: "Rohit",
    email: "employee2@example.com",
    password: "123",
    taskCount: {
      active: 3,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Redesign Homepage Banner",
        description: "Create an attractive homepage banner.",
        date: "2025-12-01",
        category: "Design"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Fix UI Bugs",
        description: "Resolve all UI bugs reported by QA team.",
        date: "2025-11-29",
        category: "Development"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Update Style Guide",
        description: "Improve design system guidelines.",
        date: "2025-12-03",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Logo Update",
        description: "Update company logo in all files.",
        date: "2025-11-27",
        category: "Design"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Website Theme Check",
        description: "Check color consistency of website.",
        date: "2025-12-05",
        category: "Design"
      }
    ]
  },

  {
    id: 3,
    firstName: "Suresh",
    email: "employee3@example.com",
    password: "123",
    taskCount: {
      active: 3,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Database Clean-up",
        description: "Remove duplicate entries from database.",
        date: "2025-12-02",
        category: "Database"
      },
      {
        active: false,
        newTask: false,
        completed: true, 
        failed: false,
        title: "Optimize SQL Queries",
        description: "Improve performance of slow queries.",
        date: "2025-11-30",
        category: "Performance"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Backup Server",
        description: "Perform scheduled weekly backup.",
        date: "2025-12-04",
        category: "Maintenance"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Data Import",
        description: "Import data from legacy system.",
        date: "2025-11-26",
        category: "Database"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Monitor Logs",
        description: "Check logs for error spikes.",
        date: "2025-12-05",
        category: "Monitoring"
      }
    ]
  },

  {
    id: 4,
    firstName: "Priya",
    email: "employee4@example.com",
    password: "123",
    taskCount: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Prepare Presentation",
        description: "Create slideshow for client meeting.",
        date: "2025-12-01",
        category: "Presentation"
      },
      {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        title: "Collect Feedback",
        description: "Gather reviews from employees.",
        date: "2025-12-02",
        category: "Management"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Submit Invoice",
        description: "Submit invoice for November.",
        date: "2025-11-29",
        category: "Finance"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Organize Files",
        description: "Organize department files.",
        date: "2025-11-25",
        category: "Administration"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Check Inventory",
        description: "Check available office supplies.",
        date: "2025-12-03",
        category: "Inventory"
      }
    ]
  },

  {
    id: 5,
    firstName: "Neha",
    email: "employee5@example.com",
    password: "123",
    taskCount: {
      active: 3,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        active: true,
        newTask: true,
        completed: false,
        failed: false,
        title: "Test Payment Module",
        description: "Check all payment methods and flows.",
        date: "2025-12-02",
        category: "Testing"
      },
      {
        active: false,
        newTask: false,
        completed: true,
        failed: false,
        title: "Bug Verification",
        description: "Verify resolved bugs from dev team.",
        date: "2025-11-29",
        category: "QA"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "Write Test Cases",
        description: "Write test cases for new module.",
        date: "2025-12-03",
        category: "Documentation"
      },
      {
        active: false,
        newTask: false,
        completed: false,
        failed: true,
        title: "Load Testing",
        description: "Perform website load testing.",
        date: "2025-11-26",
        category: "Performance"
      },
      {
        active: true,
        newTask: false,
        completed: false,
        failed: false,
        title: "API Testing",
        description: "Test all login and auth APIs.",
        date: "2025-12-05",
        category: "API"
      }
    ]
  }
];


const admin = [
  {
    id: 1,
    email: "admin@example.com",
    password: "123"
  }
]


export const setLocalStorage = () =>{
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    
    return {employees, admin}
    
}