# Contributing to Poshkit

Welcome! We're thrilled that you're interested in contributing to our project. Before you get started, please take a moment to review this README file as it contains important information about how to contribute to this project.

## Setup

To run the website locally, make sure you have Node.js and npm installed. Then, follow these steps:

1. Clone the repository using the `git clone` command.

```shell
git clone https://github.com/sumanbiswas7/poshkit.git
```

2. Install the dependencies by running `npm install`.

```shell
npm install
```

3. Start the development server by running `npm run dev`.

```shell
npm run dev
```

## Scripts

- npm run dev: Starts the development server.
- npm run build: Builds a static website in the storybook-static folder.
- npm run rollup: Compiles the package into the dist folder. Before running this command, make sure to delete all devDependencies and add the necessary peerDependencies.

> **Note**
> Make sure to run `npm run rollup` before publishing it to npmjs (npm publish). This will make sure you're publishing your latest changes.

## Deployment

If you want to deploy the website on Netlify, make sure to delete all `peerDependencies` from the package.json file. This ensures that all dependencies are included in the deployment package.

If you want to publish the project on npmjs, delete all `devDependencies` from the package.json file and add the necessary `peerDependencies`.

```json
  "peerDependencies": {
    "react": ">=16.8.0",
    "react-dom": ">=16.8.0"
  }
```

## Contributing Guidelines

We welcome all contributions, big or small. Before making any contributions, please take a moment to review our contributing guidelines:

1. Fork the project to your own repository.
2. Create a new branch with a descriptive name.
3. Make your changes and commit them.
4. Push your changes to your forked repository.
5. Submit a pull request to our repository with a description of your changes.

Wait for your changes to get merged

## Conclusion

Thank you for your interest in contributing to our project. We appreciate your help in making our project better. If you have any questions, please don't hesitate to contact.
