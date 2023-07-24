# la_ferme

# Farm Management React App - Developer Readme

Welcome, developer! We're excited to have you work on building the Farm Management React App(la_ferme). This application aims to provide a simple solution for managing salary payments to workers and recording daily milk production on the farm. The app will be written in TypeScript, and we will be using local arrays to simulate a database.

## Prerequisites

Before you begin working on the project, please ensure you have the following installed on your development machine:

1. Node.js and npm (Node Package Manager) - Visit https://nodejs.org/ to download and install Node.js.

## Getting Started

To start developing the Farm Management React App, follow the steps below:

1. Fork the repository: Start by forking this repository to your GitHub account.

2. Clone the repository: Use the following command to clone the forked repository to your local machine:

```bash
[git clone https://github.com/your-username/farm-management-react-app.git](https://github.com/UsanaseD/la_ferme.git)
```

3. Navigate to the project directory:

```bash
cd la_ferme
```

4. Install dependencies: Use npm to install the required dependencies for the project.

```bash
npm install
```

## Project Structure

The project structure should look like this:

```
la_ferme/
la_ferme
  ├── src/
  │   ├── assets/
  │   │   ├── la ferme.png
  │   ├── components/
  │   │   ├── SalaryPaymentForm.tsx
  │   │   ├── SalaryPaymentTable.tsx
  │   │   ├── DailyMilkProductionForm.tsx
  │   │   ├──  DailyMilkProductionTable.tsx
  │   │   └── ...
  │   ├── types/
  │   │   ├── WorkerType.ts
  │   │   └── MilkProductionType.ts
  │   ├── utils/
  │   │   └── database.ts
  │   ├── App.tsx
  │   └── index.tsx
  ├── package.json
  ├── tsconfig.json
  ├── .gitignore
  ├── README.md
  └── ...
```

## Features

The Farm Management React App should have two main features:

### 1. Salary Payment Management

This feature will allow users to record salary payments to workers. Each payment should include the following information:

- Worker's name
- Salary amount paid
- Time recorded for the payment
- Type of worker (casual or monthly paid)
- Time of balance to be paid (if applicable)

Please create the necessary components and forms to add and display salary payment information.

### 2. Daily Milk Production

This feature will allow users to record daily milk production on the farm. Each entry should include the following information:

- Date of milk production
- Quantity of milk produced
- Additional details (if necessary)

Create the necessary components and forms to add and display milk production information.

## Data Storage

As mentioned earlier, we will use local arrays to act as a database. You can find a utility file `database.ts` inside the `utils` directory. Use this file to define and manage the arrays for storing salary payment and milk production data.

## TypeScript

Ensure that the entire project is written in TypeScript. Utilize type definitions to maintain type safety throughout the application.

## Development and Testing

During development, you are encouraged to use meaningful git commit messages and branch names to keep track of your work.

Once you have completed implementing the features, please test the application thoroughly to ensure it is functioning as expected. You may also write unit tests to cover critical functionality.

## Submission

Once you have completed the project, push your changes to your forked repository on GitHub. Then, create a pull request to the original repository. Include any relevant notes or instructions in the pull request description.

Feel free to reach out if you have any questions or need clarifications on the requirements. Good luck, and happy coding! 🚀

---

Note: the logo is in assets folder in case you need it, also, remember this is a UI offer, so we espect your most outstanding UI.
