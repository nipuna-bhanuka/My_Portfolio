import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  items = [
    { id: 1,
      name: 'Hardware Management System',
      image : '',
      description: 'This application is designed to centrally manage Qmatic applications across various devices, including Samsung Displays and printers. It provides users with the ability to remotely oversee and control all connected devices from a single interface. Admins can access device logs, modify settings, and perform tasks seamlessly.',
      technologies: ''
    },
    { id: 2,
      name: 'Performance Appraicial System',
      image : '',
      description: 'Implemented a user-friendly web application to measure the performance of employees in a company. Reviewers can easily evaluate and employees can get better idea of their performances through the system.',
      technologies: ''
    },
    { id: 3,
      name: 'HRM System',
      image : '',
      description: 'This is a simple web application which can easily manage employees, teams, departments and leave requests.',
      technologies: ''
    },
    { id: 4,
      name: 'Portpolio',
      image : '',
      description: 'Description for Item 2',
      technologies: ''
    },
    { id: 5,
      name: 'Smart Wheel Chair',
      image : '',
      description: 'This is a proposed solution for disabled persons to do their daily work by themselves. In 3 ways, the user can control the wheelchair by using buttons, using a mobile app and using voice commands. If any need, the user can inform others from the system easily. As well as a protection system was implemented for the chair',
      technologies: ''
    },
    { id: 6,
      name: 'Watering System',
      image : '',
      description: 'Description for Item 3',
      technologies: ''
    },
    { id: 7,
      name: 'Calculator',
      image : '',
      description: 'Description for Item 3',
      technologies: ''
    },
    { id: 8,
      name: 'Simple Book Storing System',
      image : '',
      description: 'Description for Item 3',
      technologies: ''
    }
  ];

  showAllItems = false;
  toggleAllItems() {
    this.showAllItems = !this.showAllItems;
  }

  getButtonText() {
    return this.showAllItems ? 'Show Less' : 'Show More';
  }

  constructor() { }

  ngOnInit(): void {}

}
