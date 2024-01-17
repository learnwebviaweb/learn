export const npmBook =
  [
    {
      "category": "npm",
      "chid": 1,
      "title": "Introduction to npm",
      "sections": [
        {
          "secid": 1,
          "subtitle": "What is npm?",
          "paragraphs": [
            {
              "paraid": 1,
              "text": "The Node Package Manager (npm) is a package manager and registory for the JavaScript programming language, and it is the default package manager for the Node.js runtime environment. Initially released in 2010, npm also provides command-line tools to allow developers to install, update, and manage software packages (referred to as \"modules\" or \"packages\") that can be used in their projects. These packages can include anything from libraries and frameworks to development tools and utilities. Here are some key features of npm:"
            },
            {
              "paraid": 1,
              "text": "<ol><li><strong>Dependency Management</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Allows easy management of project dependencies, specifying which versions of a package your project is compatible with.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"2\"><li><strong>Version Control</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Utilizes semantic versioning to help manage changes and updates to packages.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"3\"><li><strong>Modularity</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Encourages a modular approach to application development, as you can easily include just the packages you need.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"4\"><li><strong>Community</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Possesses a large and active community that contributes to a wide variety of open-source packages available to everyone.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"5\"><li><strong>Scripting</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Provides a way to automate many tasks using npm scripts.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"6\"><li><strong>Security</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Offers features like package auditing and two-factor authentication to enhance security.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"7\"><li><strong>Private Packages and Organizations</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Allows you to create private packages and organizations, providing a way to restrict package access to authorized users.</ul>"
            },
            {
              "paraid": 1,
              "text": "By using npm, developers can tap into a vast repository of existing solutions, increasing development speed and reducing the need to \"reinvent the wheel\" for common tasks and functionalities."
            }
          ]
        },
        // {
        //   "secid": 2,
        //   "subtitle": "npm Ecosystem",
        //   "paragraphs": [
        //     {
        //       "paraid": 1,
        //       "text": "npm ecosystem is a comprehensive suite of tools, services, and libraries centered around the npm package manager, designed to streamline the development process for JavaScript and Node.js projects. Below are the key components that make up the npm ecosystem:"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ol><li><strong>npm CLI (Command-Line Interface)</strong></li></ol>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul><li><strong>Core Functions</strong></li></ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul>Allows users to install, update, and manage packages.</ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul><li><strong>Additional Features</strong></li></ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul>Supports tasks like running scripts, creating new packages, and interacting with the npm registry.</ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ol start=\"2\"><li><strong>npm Registry</strong></li></ol>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul><li><strong>Public Registry</strong></li></ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul>A vast, open-source database where packages are published and made available to the public.</ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul><li><strong>Private Registry</strong></li></ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul>Provides the option to create private packages for specific projects or organizations.</ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul><li><strong>Scoped Packages</strong></li></ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul>Allows authors to create packages under a namespace to avoid naming collisions.</ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ol start=\"3\"><li><strong>`<code>package.json</code>` File</strong></li></ol>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul><li><strong>Dependency Management</strong></li></ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul>Lists project dependencies and their versions.</ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul><li><strong>Metadata</strong></li></ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul>Contains project metadata such as name, version, and description.</ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul><li><strong>Scripts</strong></li></ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul>Defines custom npm scripts to automate various tasks.</ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ol start=\"4\"><li><strong>`<code>node_modules</code>` Directory</strong></li></ol>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul><li><strong>Local Storage</strong></li></ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul>Directory where npm installs the packages for a specific project.</ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul><li><strong>Dependency Resolution</strong></li></ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul>Handles multiple versions of the same package for different projects.</ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ol start=\"5\"><li><strong>Semantic Versioning (SemVer)</strong></li></ol>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul><li><strong>Version Control</strong></li></ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul>A versioning scheme followed by npm to manage package versions.</ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul><li><strong>Ranges</strong></li></ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul>Allows developers to specify ranges of acceptable versions for dependencies.</ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ol start=\"6\"><li><strong>npm Organizations and Teams</strong></li></ol>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul><li><strong>Organizations</strong></li></ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul>Allows multiple users to manage packages under a single namespace.</ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul><li><strong>Teams</strong></li></ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul>Subsets of organization members focused on specific packages or projects.</ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul><li><strong>Access Control</strong></li></ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul>Provides fine-grained control over package access and permissions.</ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ol start=\"7\"><li><strong>npm Enterprise</strong></li></ol>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul><li><strong>Self-Hosted Registry:</strong></li></ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul>An enterprise-level solution that enables organizations to host their own npm registry.</ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul><li><strong>Advanced Security</strong></li></ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul>Includes additional security features like single sign-on (SSO) and higher-level auditing.</ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ol start=\"8\"><li><strong>npm Scripts</strong></li></ol>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul><li><strong>Task Automation</strong></li></ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul>Provides a way to automate repetitive tasks like testing, building, and deployment.</ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ol start=\"9\"><li><strong>Security Features</strong></li></ol>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul><li><strong>Package Auditing</strong></li></ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul>Checks for vulnerabilities in your project's dependencies.</ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul><li><strong>Two-Factor Authentication (2FA)</strong></li></ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul>Adds an extra layer of security for package publishing and modifications.</ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ol start=\"10\"><li><strong>Community</strong></li></ol>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul><li><strong>Open Source</strong></li></ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul>A large, vibrant community of open-source developers contributes to the npm ecosystem.</ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul><li><strong>Third-Party Services</strong></li></ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "<ul><ul>Numerous services and tools have been built around npm, such as CI/CD tools, code quality checkers, and alternative package managers like Yarn.</ul></ul>"
        //     },
        //     {
        //       "paraid": 1,
        //       "text": "By understanding these components and how they interact, developers can make the most of the robust and flexible npm ecosystem for both individual projects and large-scale applications."
        //     }
        //   ]
        // },
        {
          "secid": 2,
          "subtitle": "Installation Steps for Various Operating Systems",
          "paragraphs": [
            {
              "paraid": 1,
              "text": "Installing Node.js and npm involves different procedures depending on the operating system you're using. Below are the installation guides for Windows, macOS, and Linux."
            },
            {
              "paraid": 1,
              "text": "<ol><li><strong>Windows</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Via Installer</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>Go to the <a href=\"https://nodejs.org/en\">Node.js website</a>.</li></ul></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>Download the Windows Installer (`<code>.msi</code>` file) for the version you want.</li></ul></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>Run the installer and follow the on-screen instructions to install Node.js and npm.</li></ul></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Via Chocolatey</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>Open Command Prompt as an administrator.</li></ul></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>Install both Node.js and npm by running:</li></ul></ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_1_1_1",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "CMD",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "7.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"2\"><li><strong>macOS</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Via Installer</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>Go to the <a href=\"https://nodejs.org/en\">Node.js website</a>.</li></ul></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>Download the macOS Installer (`<code>.pkg</code>` file) for the version you want.</li></ul></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>Run the installer and follow the on-screen instructions.</li></ul></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Via Homebrew</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>Open a terminal.</li></ul></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>To install both Node.js and npm, run:</li></ul></ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_1_1_2",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "7.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"3\"><li><strong>Linux (Ubuntu)</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Via Package Manager</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>Open a terminal.</li></ul></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>To update package list, run:</li></ul></ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_1_1_3",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "7.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>To install Node.js, run:</li></ul></ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_1_1_4",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "7.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>To install npm, run:</li></ul></ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_1_1_5",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "7.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Via NVM (Node Version Manager)</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>Open a terminal.</li></ul></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>To install NVM, run:</li></ul></ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_1_1_6",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "7.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>To add NVM to your shell session, run:</li></ul></ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_1_1_7",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "7.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><ul><li>To install Node.js and npm, run:</li></ul></ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_1_1_8",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "7.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"4\"><li><strong>Verification</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>After installation, you should verify that both Node.js and npm are correctly installed:</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>Open a Windows Command Prompt, a macOS terminal, or a Linux terminal.</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>To check the installed version of Node.js, run:</li></ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_1_1_9",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>To check the installed version of npm, run:</li></ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_1_1_10",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>If both commands return version numbers, the installation was successful.</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"5\"><li><strong>Troubleshooting</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>If you encounter any issues, refer to the installation documentation on the <a href=\"https://nodejs.org/en\">Node.js website</a> or consult community forums for troubleshooting tips.</ul>"
            },
            {
              "paraid": 1,
              "text": "Remember, the methods above may vary slightly depending on your OS version and system configurations. Always refer to the most current documentation for the most up-to-date information."
            }
          ]
        }
      ]
    },
    {
      "category": "npm",
      "chid": 2,
      "title": "Your First npm Package",
      "sections": [
        {
          "secid": 1,
          "subtitle": "Initializing a New Project",
          "paragraphs": [
            {
              "paraid": 1,
              "text": "Initializing a new project with Node.js and npm involves creating a new directory and setting up a package.json file to manage your project's dependencies and scripts. Here's a step-by-step guide on how to do this:"
            },
            {
              "paraid": 1,
              "text": "<ol><li><strong>Create a Project Directory</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>First, you'll need to create a new directory to hold your project. Navigate to the location where you want to create this directory and run:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_1_1",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul>Then navigate into your newly created directory:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_1_2",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"2\"><li><strong>Initialize a `<code>package.json</code>` File</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>The `<code>package.json</code>` file serves as the manifest for your project, containing metadata, dependencies, and custom scripts. To create a `<code>package.json</code> file, run:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_1_3",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul>You will be prompted to answer several questions to set up the initial `<code>package.json</code>` file:</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>name</code>`</strong>: The name of your project (lowercase, no spaces).</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>version</code>`</strong>: The initial project version (usually starts at 1.0.0).</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>description</code>`</strong>: A short description of your project.</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>main</code>`</strong>: The entry point of your project (usually index.js).</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>scripts</code>`</strong>: Custom scripts to automate tasks.</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>author</code>`</strong>: Your name or the name of the project author.</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>license</code>`</strong>: The license for the project (common choices are MIT, GPL, Apache, etc.).</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul>You can skip any question by hitting `<code>Enter</code>`. You can also use the `<code>-y</code>` flag to automatically populate the `<code>package.json</code>` with default values:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_1_4",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"3\"><li>`<code>Review the `<code>package.json</code>` File</code>`<strong></strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>After running `<code>npm init</code>`, you should see a new `<code>package.json</code>` file in your project directory. Open this file to review its contents, which should look similar to:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_1_5",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul>You can manually edit this file to update metadata, dependencies, or scripts as your project evolves.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"4\"><li><strong>Create Your Entry Point File (Optional)</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>If your entry point is `<code>index.js</code>` (the default), create this file in your project directory:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_1_6",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul>Or simply create it using your text editor of choice.</ul>"
            },
            {
              "paraid": 1,
              "text": "You've now successfully initialized a new Node.js project with npm! You can start adding your code, installing other dependencies, and defining custom scripts as needed."
            }
          ]
        },
        {
          "secid": 2,
          "subtitle": "\"package.json\" Explained",
          "paragraphs": [
            {
              "paraid": 1,
              "text": "The `<code>package.json</code>` file serves as the manifest for your Node.js project, containing essential metadata, dependencies, scripts, and configurations. Below is a breakdown of the various key-value pairs you may find in a `<code>package.json</code>` file, explaining what each section is used for:"
            },
            {
              "paraid": 1,
              "text": "<ol><li><strong>Metadata Fields</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>name</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>The name of your project. It should be lowercase and one word, and may contain hyphens (`<code>-</code>`) and underscores (`<code>_</code>`). This is a required field.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_1",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>version</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>The version number for your package, usually following semantic versioning (SemVer). This is also a required field.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_2",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>description</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>A short description of your project.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_3",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>main</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>The entry point of your project. Node.js will look for this file when your package is imported.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_4",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>author</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>The name of the author or an object containing `<code>name</code>`, `<code>email</code>`, and `<code>url</code>` fields.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_5",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul>or</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_6",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>license</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>The license type for the project.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_7",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>repository</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Information about the project repository, usually specifying the type and URL.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_8",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"2\"><li><strong>Dependency Fields</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>dependencies</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Specifies the packages that your project depends on to run. These will be installed by running `<code>npm install package-name</code>` without any arguments.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_9",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>devDependencies</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Specifies development-only dependencies, which are not required in the production or testing environment. These will be installed by running `<code>npm install package-name --save-dev</code>`.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_10",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>peerDependencies</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Specifies the packages that are expected to be installed by the end-user and tell the user that this package is compatible with a particular version of an npm package. It will be used when you publish your own packages.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_11",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>optionalDependencies</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Specifies optional dependencies that the project can use but does not require.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_12",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"3\"><li><strong>Script Fields</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>scripts</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Specifies a set of command-line scripts that can be run with `<code>npm run script_name</code>`.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_13",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"4\"><li><strong>Configuration and Miscellaneous Fields</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>engines</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Specifies which versions of Node.js your project is compatible with.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_14",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>private</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>If set to `<code>true</code>`, prevents the package from being accidentally published to npm.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_15",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>keywords</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>An array of strings that describe the project, aiding package discoverability.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_16",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>homepage</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>The URL to the project homepage.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_17",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>bugs</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>The URL to the project's issue tracker.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_18",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>bundledDependencies</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>An array of package names that should be bundled when publishing the package.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_2_19",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "These are some of the most commonly used fields in `<code>package.json</code>`. Depending on your project needs, you may use other fields for more advanced configurations."
            }
          ]
        },
        {
          "secid": 3,
          "subtitle": "Installing Your First Package",
          "paragraphs": [
            {
              "paraid": 1,
              "text": "Installing your first npm package is an exciting step in the journey of developing with Node.js. This process allows you to leverage the rich ecosystem of npm packages that can save you time and effort when building your projects. Below are the steps for installing your first npm package."
            },
            {
              "paraid": 1,
              "text": "After you have created a project directory and initialized a `<code>package.json</code>` file inside the directory, follow these steps:"
            },
            {
              "paraid": 1,
              "text": "<ol><li><strong>Choose a Package to Install</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Decide which npm package you'd like to install. As an example, let's install the widely-used `<code>express</code>` package, a web framework for Node.js.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"2\"><li><strong>Install the Package</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Run the following command in your terminal to install the package:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_3_1",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul>Alternatively, you can use the shorthand:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_3_2",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"3\"><li><strong>Verify Installation</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>After running the above command, two things should happen:</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>The `<code>node_modules</code>` directory will be created in your project folder. This is where npm installs all the packages for your project.</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>The `<code>dependencies</code>` field in your `<code>package.json</code>` file will be updated to include the package you just installed:</li></ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_3_3",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul>You can verify that the package was installed successfully by running:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_3_4",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul>This should display the installed version of the `<code>express</code>` package.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"4\"><li><strong>Use the Package in Your Code</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Now that the package is installed, you can use it in your project. Create a new JavaScript file or open an existing one, then import the package.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul>For example, create a file named `<code>app.js</code>` and add the following code to use `<code>express</code>`:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_3_5",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JS",
                "exampleTitle": "",
                "codeLangs": "ts",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul>Run your `<code>app.js</code>` file:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_2_3_6",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul>Visit `<code>http://localhost:3000/</code>` in your web browser, and you should see the message \"Hello, World!\"</ul>"
            },
            {
              "paraid": 1,
              "text": "You have successfully installed your first npm package and used it in your Node.js project! You can continue this process to install other packages that fit the needs of your project. Just remember that every time you install a new package, it will be added to your `<code>package.json</code>` file, making it easy to keep track of your project's dependencies."
            }
          ]
        }
      ]
    },
    {
      "category": "npm",
      "chid": 3,
      "title": "npm CLI Basics",
      "sections": [
        {
          "secid": 1,
          "subtitle": "Common Commands",
          "paragraphs": [
            {
              "paraid": 1,
              "text": "npm comes with a variety of commands that help you manage packages and perform other tasks related to project management. Here are some common npm commands that you'll find useful:"
            },
            {
              "paraid": 1,
              "text": "<ol><li><strong>Basic Commands</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>npm init</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_3_1_1",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Initialize a new project and create a `<code>package.json</code>` file. Use the `<code>-y</code>` flag to automatically populate the `<code>package.json</code>` with default values.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>npm install</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Install all the dependencies listed in `<code>package.json</code>`.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_3_1_2",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>npm install &lt;package_name&gt;</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Install a specific package and add it to the `<code>dependencies</code>` in `<code>package.json</code>`.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_3_1_3",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>npm install &lt;package_name&gt; --save-dev</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Install a package and add it to the `<code>devDependencies</code>` in `<code>package.json</code>`</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_3_1_4",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>npm uninstall &lt;package_name&gt;</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Uninstall a package and remove it from `<code>package.json</code>`.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_3_1_5",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"2\"><li><strong>Updating and Checking Packages</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>npm update</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Update all packages listed in `<code>package.json</code>` to the latest version.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_3_1_6",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>npm outdated</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Check for outdated packages.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_3_1_7",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>npm ls</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>List installed packages and their dependencies. It is the same as `<code>npm list</code>`.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_3_1_8",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"3\"><li><strong>Script and Run Commands</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>npm run &lt;script_name&gt;</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Run a script defined in `<code>package.json</code>`.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_3_1_9",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>npm test</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Run the test script defined in `<code>package.json</code>`.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_3_1_10",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"4\"><li><strong>Global Operations</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>npm install -g &lt;package_name&gt;</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Install a package globally on your system. Usually used for CLI tools and other system utilities.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_3_1_11",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>npm list -g --depth=0</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>List globally installed packages. The `<code>--depth</code>` option specifies the level of dependency to be displayed. `<code>npm list --depth=0</code>` will show you the top-level packages, the ones you've explicitly installed and listed in your package.json file. `<code>npm list --depth=1</code>` will show the top-level packages and their immediate dependencies.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_3_1_12",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"5\"><li><strong>Miscellaneous</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>npm search &lt;query&gt;</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Search for packages in the npm registry.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_3_1_13",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>npm cache clean --force</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Clear the npm cache, can be helpful when encountering package installation errors.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_3_1_14",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>npm init &lt;initializer&gt;</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Create a new package or application with the aid of a package initializer. For example, to use the `<code>create-react-app</code>` initializer:</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_3_1_15",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>npm view &lt;package_name&gt; versions</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Show all available versions of a specific package.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_3_1_16",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "These are some of the most commonly used npm commands. Understanding these commands will make you more proficient at managing Node.js packages and projects."
            }
          ]
        },
        {
          "secid": 2,
          "subtitle": "CLI Flags and Options",
          "paragraphs": [
            {
              "paraid": 1,
              "text": "Command Line Interface (CLI) flags and options in npm provide additional control over command behavior, enabling more fine-grained adjustments and functionalities. Below are some commonly used npm CLI flags and options:"
            },
            {
              "paraid": 1,
              "text": "<ol><li><strong>General Flags</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>-h</code>` or `<code>--help</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Display help information for the command.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_3_2_1",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>-v</code>` or `<code>--version</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Display the version number of npm.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_3_2_2",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>--json</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Display output in JSON format, useful for parsing the output programmatically.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_3_2_3",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"2\"><li><strong>Install Flags</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>-g</code>` or `<code>--global</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul> Install package globally, usually for system utilities or CLI tools.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_3_2_4",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>--save</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Deprecated flag, but was historically used to save a package to `<code>dependencies</code>` in `<code>package.json</code>`.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_3_2_5",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>--save-dev</code>` or `<code>-D</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Save the package as a development-only dependency in `<code>package.json</code>`.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_3_2_6",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>--no-save</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Install a package without saving it in `<code>package.json</code>`.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_3_2_7",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>--save-exact</code>` or `<code>-E</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Save the exact version of the installed package in `<code>package.json</code>`, without the `<code>^</code>` or `<code>~</code>` prefix.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_3_2_8",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"3\"><li><strong>Uninstall Flags</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>-g</code>` or `<code>--global</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Uninstall a globally installed package.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_3_2_9",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"4\"><li><strong>List Flags</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>--depth</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Specify the depth of the dependency tree to display when using `<code>npm ls</code>`.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_3_2_10",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>--prod</code>` or `<code>--production</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Show only production dependencies.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_3_2_11",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>--dev</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Show only development dependencies.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_3_2_12",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"5\"><li><strong>Update Flags</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>-g</code>` or `<code>--global</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Update global packages.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_3_2_13",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>--depth</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Specify the depth for dependency updates.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_3_2_14",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"6\"><li><strong>Script Flags</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>--silent</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Run npm script silently, suppressing npm-specific messages in the output.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_3_2_15",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"7\"><li><strong>Cache Flags</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>--force</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Forcibly clear the npm cache.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_3_2_16",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "These flags and options make it easier to control the behavior of npm commands, and understanding them will help you become more proficient in Node.js development."
            }
          ]
        }
      ]
    },
    {
      "category": "npm",
      "chid": 4,
      "title": "Dependency Management",
      "sections": [
        {
          "secid": 1,
          "subtitle": "Types of Dependencies",
          "paragraphs": [
            {
              "paraid": 1,
              "text": "In the npm ecosystem, dependencies are categorized into various types to help manage them better. Each type serves a specific purpose and impacts how and when the package will be installed or used. Here are the common types of dependencies you'll encounter in a `<code>package.json</code>` file:"
            },
            {
              "paraid": 1,
              "text": "<ol><li><strong>`<code>dependencies</code>`</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>These are the packages your project needs to run. When someone installs your package, these dependencies will be installed automatically.</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_4_1_1",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"2\"><li><strong>`<code>devDependencies</code>`</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>These are the packages needed for development purposes but not required for running the application in production. They are not installed when your package is installed as a dependency in another project.</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_4_1_2",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"3\"><li><strong>`<code>peerDependencies</code>`</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>These are packages that your project hooks into, or modifies, in the host project. Peer dependencies are expected to be installed by the user and are not installed automatically.</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_4_1_3",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"4\"><li><strong>`<code>optionalDependencies</code>`</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>These dependencies are optional. If they fail to install, the overall installation process will still succeed.</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_4_1_4",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"5\"><li><strong>`<code>bundledDependencies</code>`</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>These are an array of package names that will be bundled when publishing the package. They are included in the package that will be distributed.</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_4_1_5",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "Understanding these types of dependencies helps you manage your project's needs more effectively. Depending on the project's requirements, you can specify the most appropriate type of dependency to ensure that your application runs as expected and facilitates the development process.</ul>"
            }
          ]
        },
        {
          "secid": 2,
          "subtitle": "The \"node_modules\" Directory",
          "paragraphs": [
            {
              "paraid": 1,
              "text": "The `<code>node_modules</code>` directory is a crucial part of any Node.js project that uses npm for dependency management. This folder is created automatically when you run `<code>npm install</code>` for the first time and is populated with all the packages that your project depends on, either directly or indirectly."
            },
            {
              "paraid": 1,
              "text": "<ol><li><strong>Structure</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>The `<code>node_modules</code>` directory consists of folders, each named after an installed package. Inside each folder, you'll find the package's own code, as well as its own `<code>package.json</code>` file and potentially its own `<code>node_modules</code>` directory, depending on whether or not the package has its dependencies.</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_4_2_1",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"2\"><li><strong>Purpose</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Isolation</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>The `<code>node_modules</code>` directory allows each project to have its own isolated environment. This means different projects can use different versions of the same package without conflict.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Ease of Use</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Developers don't have to worry about dependency management most of the time. They declare what they need in `<code>package.json</code>`, and npm takes care of fetching and updating packages in `<code>node_modules</code>`.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Versioning</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Each package within `<code>node_modules</code>` includes a specific version that's compatible with your project, as defined in your `<code>package.json</code>` or its lock file.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"3\"><li><strong>Common Practices</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Ignore from Version Control</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>It's a common practice to add `<code>node_modules</code>` to `<code>.gitignore</code>` (or equivalent for other version control systems) so that it's not checked into version control. The idea is that `<code>package.json</code>` and the lock file (like `<code>package-lock.json</code>` or `<code>yarn.lock</code>`) are the source of truth for reconstructing `<code>node_modules</code>`.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Manual Manipulation</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Although it's possible to manually add or remove packages inside `<code>node_modules</code>`, it's generally discouraged because it can lead to version conflicts and other issues that are hard to debug.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Global vs Local</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Packages can be installed either locally in a project's `<code>node_modules</code>` directory or globally in a centralized location. Local installations are preferred for project-specific dependencies to ensure compatibility and isolation.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"4\"><li><strong>Maintenance</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Corrupted `<code>node_modules</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>If something goes wrong with your installed packages, deleting the `<code>node_modules</code>` directory and the `<code>package-lock.json</code>` file, and then running `<code>npm install</code>`, often fixes the issue.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Outdated Packages:</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Use `<code>npm outdated</code>` to check for outdated packages and `<code>npm update</code>` to update them.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Security</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>You can run `<code>npm audit</code>` to check your project for vulnerabilities. `<code>npm audit fix</code>` will attempt to automatically fix known vulnerabilities from the current project's dependencies.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Optimization</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>In some cases, `<code>node_modules</code>` can get quite large. Tools like `<code>npm prune</code>` can remove unnecessary packages, and others like webpack can help minimize the client-side packages that get sent to the browser.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "Understanding the `<code>node_modules</code>` directory is essential for effective Node.js development, as it's an integral part of the dependency management process."
            }
          ]
        },
        {
          "secid": 3,
          "subtitle": "Semantic Versioning (SemVer)",
          "paragraphs": [
            {
              "paraid": 1,
              "text": "Semantic Versioning, often abbreviated as SemVer, is a versioning scheme for software that aims to convey meaning about the underlying changes with each new release. It is commonly used in various programming languages and ecosystems, including the Node.js and npm community. SemVer is defined as a three-part string: `<code>MAJOR.MINOR.PATCH</code>`, each of which is an integer. Here's how it breaks down:"
            },
            {
              "paraid": 1,
              "text": "<ol><li><strong>Version Format</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>MAJOR</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Indicates incompatible changes that require the user to change something about their setup. Updating the major version usually implies that there's a breaking change.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>MINOR</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Adds new features but does not break any existing functionality.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>PATCH</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Introduces fixes to existing features, with no intended side effects.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>For example, in the version number `<code>2.3.4</code>`:</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>`<code>2</code>` is the MAJOR version</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>`<code>3</code>` is the MINOR version</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>`<code>4</code>` is the PATCH version</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"2\"><li><strong>Additional Labels and Metadata</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>SemVer also allows for additional labels and build metadata:</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Pre-release version</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Marked by appending hyphen and identifier like `<code>alpha</code>`, `<code>beta</code>`, etc., e.g., `<code>1.0.0-alpha.1</code>`, `<code>1.0.0-beta.2</code>`.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Build metadata</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Marked by appending a plus and build info, e.g., `<code>1.0.0-alpha.1+001</code>`.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"3\"><li><strong>When to Change Which Number?</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Patch</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Increment this when you make backward-compatible bug fixes, e.g., `<code>1.2.5</code>` -> `<code>1.2.6</code>`.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Minor</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Increment this when you add functionality in a backward-compatible manner, e.g., `<code>1.5.6</code>` -> `<code>1.6.0</code>`, meanwhile reset patch number to `<code>0</code>`.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Major</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Increment this when you make incompatible API changes, e.g., `<code>1.6.5</code>` -> `<code>2.0.0</code>`, meanwhile reset both minor number and patch number to `<code>0</code>`.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"4\"><li><strong>Why SemVer is Important in npm?</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Predictability</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Knowing the type of changes between versions (breaking, new features, or fixes) helps developers understand the risk involved in upgrading a package.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Dependency Resolution:</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>npm uses SemVer to understand compatibility between different packages. It helps npm to resolve the dependency tree effectively.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Ease of Update:</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Using commands like `<code>npm outdated</code>` and `<code>npm update</code>`, developers can manage package versions more conveniently.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Compatibility</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Developers can specify a range of acceptable versions in `<code>package.json</code>` using symbols like `<code>^</code>`, `<code>~</code>`, or `<code>>=</code>`, based on SemVer.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>`<code>^1.0.0</code>`: Compatible with version 1.0.0, and all minor/patch versions greater than this.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>`<code>~1.0.0</code>`: Compatible with version 1.0.0, and all patch versions greater than this.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>`<code>>=1.0.0</code>`: Compatible with version 1.0.0 and above.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "Understanding Semantic Versioning will help you better manage package dependencies, assess the impact of updating packages, and maintain compatibility across different systems. It has become a best practice in software development and is widely adopted in the open-source community."
            }
          ]
        }
      ]
    },
    {
      "category": "npm",
      "chid": 5,
      "title": "Package Management",
      "sections": [
        {
          "secid": 1,
          "subtitle": "Updating Packages",
          "paragraphs": [
            {
              "paraid": 1,
              "text": "Updating packages in a Node.js project is a common task, especially considering the fast-paced development of the JavaScript ecosystem. Keeping your packages up-to-date is important for getting bug fixes, performance improvements, and new features. However, updating packages should be done carefully to avoid breaking your application. Here's how to effectively update packages using npm:"
            },
            {
              "paraid": 1,
              "text": "<ol><li><strong>Checking for Outdated Packages</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Before updating, it's a good idea to check which packages are outdated. Run the following command to see a list:</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_5_1_1",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul>This command will show you a table indicating the `<code>Current</code>`, `<code>Wanted</code>`, and `<code>Latest</code>` versions for each package.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>Current</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>The version currently installed.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>Wanted</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>The maximum version that satisfies the SemVer range defined in your package.json.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>`<code>Latest</code>`</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>The latest version of the package available on the registry.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"2\"><li><strong>Update Strategies</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Patch and Minor Updates</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>To update to the latest patch or minor versions (according to SemVer) for all packages, you can run:</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_5_1_2",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul>For a specific package:</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_5_1_3",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Major Updates</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Major updates potentially contain breaking changes. You'll need to manually change the version in your `<code>package.json</code>` or use npm's install command to update to a new major version:</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_5_1_4",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Global Packages</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>To update global packages, you can use:</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_5_1_5",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"3\"><li><strong>Using `<code>npm-check-updates</code>`</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>For a more automated approach, you can use a utility like `<code>npm-check-updates</code>` to update your `<code>package.json</code>` file:</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>Install `<code>npm-check-updates</code>` globally:</li></ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_5_1_6",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>Run it to see outdated packages:</li></ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_5_1_7",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>Update your `<code>package.json</code>` to match the latest versions:</li></ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_5_1_8",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>Finally, run `<code>npm install</code>` to update your `<code>node_modules</code>`:</li></ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_5_1_9",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"4\"><li><strong>Best Practices</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Read Release Notes:</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Always read the release notes for breaking changes before updating, especially for major versions.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Use Version Control</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Make sure to commit your current state to version control like Git before updating. This allows you to roll back if something breaks.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Run Tests</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>If you have an automated test suite, run it to ensure your updates didn't break anything.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Review Deprecations</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Some updates might deprecate features you are using, so it's a good practice to check for deprecation warnings.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Lock File</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Commit the updated `<code>package-lock.json</code>` to ensure that other developers and your deployment environment use the same versions.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Security</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Use `<code>npm audit</code>` to check for vulnerabilities in your updated packages.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "By taking a thoughtful approach to updating packages, you can ensure that you reap the benefits of the latest versions without sacrificing the stability of your project."
            }
          ]
        },
        {
          "secid": 2,
          "subtitle": "Deleting Packages",
          "paragraphs": [
            {
              "paraid": 1,
              "text": "Deleting or uninstalling packages in a Node.js project is a fairly straightforward process, but it's important to understand the nuances to avoid potential issues. Here's how you can manage the removal of npm packages effectively:"
            },
            {
              "paraid": 1,
              "text": "<ol><li><strong>Uninstalling Local Packages</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Single Package</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>To uninstall a package that is installed locally in your project, navigate to your project's root directory and run:</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_5_2_1",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul>This will remove the package from the `<code>node_modules</code>` directory and also update your `<code>package.json</code>` and `<code>package-lock.json</code>` files.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Multiple Packages</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>To uninstall multiple packages at once, you can list them all in a single command:</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_5_2_2",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"2\"><li><strong>Uninstalling Global Packages</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>To uninstall packages that are installed globally on your system, use the `<code>-g</code>` flag:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_5_2_3",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"3\"><li><strong>Cleaning Up package.json</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>When you uninstall a package using `<code>npm uninstall</code>`, npm also removes the reference from the `<code>dependencies</code>` or `<code>devDependencies</code>` section in your `<code>package.json</code>` file. If you manually remove a package from `<code>node_modules</code>` (not recommended), you should also manually update your `<code>package.json</code>` file.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"4\"><li><strong>Removing Unused Packages</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Over time, you might install packages that you no longer use. These unused dependencies can bloat your project and even introduce security risks. To identify unused packages, you can use tools like `<code>depcheck</code>`:</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>Install `<code>depcheck</code>`</li></ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_5_2_4",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>Navigate to your project root and run:</li></ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_5_2_5",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul>This will provide a list of unused dependencies that you can then remove manually using npm uninstall.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"5\"><li><strong>Best Practices</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Version Control</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Always commit your current state to version control like Git before making changes. This lets you roll back in case of problems.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Run Tests</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>After uninstalling packages, run any existing tests to make sure that the remaining code still works as expected.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Check for Deprecations and Peer Dependencies</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Sometimes, removing one package may affect another package that relies on it as a peer dependency. Always read the console output when you uninstall packages to catch such warnings.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Review Project</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>After uninstalling, do a quick review of your project to make sure everything is in order. Check if any other parts of your codebase were relying on the removed package.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Update Lock File</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Your package lock file (`<code>package-lock.json</code>`) should be updated automatically when you uninstall packages. Commit this file to version control.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Security</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>After removal, it's often good to run `<code>npm audit</code>` to check for vulnerabilities in your remaining packages.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "By following these guidelines and best practices, you can keep your Node.js projects lean and secure."
            }
          ]
        },
        {
          "secid": 3,
          "subtitle": "Handling Deprecated Packages",
          "paragraphs": [
            {
              "paraid": 1,
              "text": "Handling deprecated packages is an important aspect of maintaining a healthy codebase. Deprecated packages may not be maintained actively, may contain security vulnerabilities, or could be incompatible with newer technologies. Here's a guide on how to identify and deal with deprecated packages in your npm projects:"
            },
            {
              "paraid": 1,
              "text": "<ol><li><strong>Identifying Deprecated Packages</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>npm Warnings</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Whenever you install or update packages, npm will warn you about deprecated packages in the console output.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_5_3_1",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>npm outdated</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Running `<code>npm outdated</code>` will also indicate deprecated packages in the list of outdated packages.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>npm ls</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Use this command to list all installed packages, including nested dependencies. Deprecated packages are usually marked.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_5_3_2",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Auditing Tools</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Some third-party auditing or monitoring tools can alert you when you're using deprecated or vulnerable packages.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"2\"><li><strong>Removing Deprecated Packages</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Uninstall</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Use `<code>npm uninstall package-name</code>` to remove the deprecated package.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_5_3_3",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Install Replacement</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Install the alternative package as suggested in the deprecation message or your research.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Update `<code>package.json</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_5_3_4",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Ensure your `<code>package.json</code>` and `<code>package-lock.json</code>` files are updated to reflect this change.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"3\"><li><strong>Best Practices</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Plan the Migration</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Before removing a deprecated package, evaluate your options and plan the migration. Consider your project's requirements and how much effort the migration will take.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Test in Isolation</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Test the replacement package in a separate branch or a test environment before integrating it into your main codebase.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Update Code</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Replace all instances where the deprecated package is used with the new package, and make the necessary code adjustments.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Run Tests</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Ensure that all your tests pass and manually test key areas of your application.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Peer Review</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Have team members review the changes to catch any potential issues.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Monitor</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>After replacing a deprecated package, monitor your application closely to ensure everything is working as expected.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Version Control:</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Make sure to use version control to track these changes. This makes it easier to roll back if something goes wrong.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Documentation</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Update any project documentation to reflect the changes made and any new dependencies.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Regular Audits</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Regularly run `<code>npm audit</code>` or use automated tools to keep track of deprecated or vulnerable packages.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "By proactively dealing with deprecated packages, you minimize the risks associated with using unmaintained or insecure code, thereby contributing to the long-term stability and health of your project."
            }
          ]
        }
      ]
    },
    {
      "category": "npm",
      "chid": 6,
      "title": "Scripting with npm",
      "sections": [
        {
          "secid": 1,
          "subtitle": "\"npm run\" Explained",
          "paragraphs": [
            {
              "paraid": 1,
              "text": "The `<code>npm run</code>` command is a powerful tool that enables you to execute scripts defined in the `<code>scripts</code>` section of your `<code>package.json</code>` file. These scripts can be custom commands you create to automate various tasks within your Node.js project, such as building, testing, or deploying your application. Understanding how to use `<code>npm run</code>` can significantly improve your development workflow."
            },
            {
              "paraid": 1,
              "text": "<ol><li><strong>The `<code>scripts</code>` Section in `<code>package.json</code>`</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>In a standard Node.js project, the `<code>package.json</code>` file can contain a `<code>scripts</code>` section where you can define named scripts. Here's a simple example:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_6_1_1",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"2\"><li><strong>Running Scripts</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>To run one of the scripts, use the `<code>npm run</code>` command followed by the name of the script:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_6_1_2",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul>In the example above, running `<code>npm run start</code>` would execute the command `<code>node app.js</code>`.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"3\"><li><strong>Predefined Scripts</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>npm recognizes a set of predefined scripts that correspond to specific lifecycle events:</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>prepublish</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Run before the package is packed and published.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>start</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Run to start the application.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>test</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Run the test suite.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>postinstall</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Run after the package is installed.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul>These predefined scripts can be run without the `<code>run</code>` keyword. For example, instead of `<code>npm run start</code>`, you can simply use `<code>npm start</code>`.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"3\"><li><strong>Pre and Post Hooks</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>You can define scripts to run before (`<code>pre</code>`) or after (`<code>post</code>`) a given script. For example, if you have a script named `<code>build</code>`, you can define:</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>prebuild</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Executes before `<code>build</code>`.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>postbuild</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Executes after `<code>build</code>`.</ul></ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_6_1_3",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul>When you run `<code>npm run build</code>`, npm will automatically execute `<code>prebuild</code>`, `<code>build</code>`, and then `<code>postbuild</code>` in sequence.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"4\"><li><strong>Script Arguments</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>You can pass arguments to your npm scripts by appending them after `<code>--</code>`. For example:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_6_1_4",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul>Here, `<code>--mode=production</code>` would be passed as an argument to the `<code>webpack</code>` command defined in the `<code>build</code>` script.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"5\"><li><strong>Environment Variables</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>When you execute a script with `<code>npm run</code>`, npm provides a set of environment variables related to your project and package. These can be accessed within your scripts. For example:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_6_1_5",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul>In the script, you can access `<code>MY_VAR</code>` using `<code>process.env.MY_VAR</code>`.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"6\"><li><strong>Cross-platform Scripts</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Not all command-line commands are available on every OS. Libraries like `<code>cross-env</code>` allow you to write scripts that work on Windows, macOS, and Linux. For example:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_6_1_6",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul>In `<code>app.js</code>`, you could access `<code>process.env.NODE_ENV</code>`, which would be `<code>production</code>`.</ul>"
            },
            {
              "paraid": 1,
              "text": "Understanding `<code>npm run</code>` allows you to unlock a key aspect of Node.js development, providing a powerful way to automate tasks and manage your project."
            }
          ]
        },
        {
          "secid": 2,
          "subtitle": "Pre and Post Scripts",
          "paragraphs": [
            {
              "paraid": 1,
              "text": "The concept of pre and post scripts in npm adds a level of automation and organization to your development workflow. These scripts are executed before (`<code>pre</code>`) and after (`<code>post</code>`) a specified npm script, allowing you to chain multiple commands and tasks together in a predictable manner."
            },
            {
              "paraid": 1,
              "text": "<ol><li><strong>How Pre and Post Scripts Work</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>When you run an npm script, npm automatically looks for any corresponding `<code>pre</code>' and `<code>post</code>` scripts and runs them in the sequence: `<code>pre</code>`, main script, `<code>post</code>`.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul>For instance, let's say your `<code>package.json</code>` contains the following scripts:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_6_2_1",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul>When you execute `<code>npm run build</code>`, npm will:</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>First run `<code>prebuild</code>`, cleaning up old build files.</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>Then run the main `<code>build</code>` script, executing Webpack.</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li>Finally, run `<code>postbuild</code>`, indicating that the build has completed.</li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"2\"><li><strong>Use Cases for Pre and Post Scripts</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Here are some common use cases where pre and post scripts can be very useful:</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Cleanup</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Use a `<code>prebuild</code>` script to delete old build files before creating a new build.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Validation</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Run tests or linters before the main script to ensure that only valid code gets processed.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Setting Environment Variables</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Use a `<code>prestart</code>` script to set up required environment variables before running the application.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Database Operations</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>You could use `<code>pre</code>` and `<code>post</code>` hooks to handle database migrations, seeding, etc.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Deployment</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Use a `<code>postinstall</code>` script to automatically perform tasks like minification or other build steps after npm installs packages.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"3\"><li><strong>Chain Multiple Scripts</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>You can also chain multiple commands within a single npm script using `<code>&&</code>`, `<code>||</code>`, or `<code>;</code>`, depending on your shell. However, `<code>pre</code>` and `<code>post</code>` scripts provide a more readable and maintainable approach, especially for more complex sequences.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"4\"><li><strong>Example: Using with Tests</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>You can set up a `<code>pretest</code>` script to initialize a test database, a `<code>test</code>` script to run your tests, and a `<code>posttest</code>` script to tear down the test database.</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_6_2_2",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"5\"><li><strong>Cross-platform Considerations</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>The commands in your npm scripts might rely on shell-specific syntax, making them less portable across different platforms. Libraries like `<code>cross-env</code>` can be used to write cross-platform npm scripts.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"6\"><li><strong>Debugging</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>If something goes wrong, you can debug npm scripts by setting the `<code>--loglevel</code>` flag to get more detailed logs:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_6_2_3",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"7\"><li><strong>Best Practices</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Documentation</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Comment your `<code>package.json</code>` or maintain a README to explain what each script does, especially if you have complex pre and post scripts.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Version Control</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Always commit related `<code>pre</code>`, main, and `<code>post</code>` scripts together to keep behavior consistent across environments.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Atomicity</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Make each script do one thing well. If a script gets too complex, it might be a sign that you should break it into smaller scripts.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Error Handling:</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Ensure your scripts exit with the correct status code so that npm knows whether the script succeeded or failed.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "Understanding and utilizing npm's pre and post scripts effectively can streamline your development workflow and make your project more maintainable."
            }
          ]
        },
        {
          "secid": 3,
          "subtitle": "Scripting Use Cases",
          "paragraphs": [
            {
              "paraid": 1,
              "text": "Using npm scripts in your development process can significantly streamline your workflow. Here's a breakdown of some common use cases where npm scripts shine:"
            },
            {
              "paraid": 1,
              "text": "<ol><li><strong>Project Initialization</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>You often need to set up databases, generate API keys, or configure environment variables when starting a project. An `<code>init</code>` script can handle these tasks.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul>Example `<code>package.json</code>`:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_6_3_1",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"2\"><li><strong>Building and Compilation</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Transpiling source code, bundling assets, and other build-related tasks can be automated with npm scripts.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul>Example `<code>package.json</code>`:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_6_3_2",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"3\"><li><strong>Running Development Servers</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>For web development, npm scripts can start development servers, hot-reload your changes, or even open a browser window to your local environment.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul>Example `<code>package.json</code>`:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_6_3_3",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"4\"><li><strong>Code Quality Checks</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Linters and formatters can be run as npm scripts to ensure code quality.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul>Example `<code>package.json</code>`:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_6_3_4",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"5\"><li><strong>Running Tests</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Running unit tests, integration tests, or end-to-end tests can be set up as npm scripts.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul>Example `<code>package.json</code>`:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_6_3_5",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"6\"><li><strong>Pre and Post Hooks</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>You can use pre and post hooks to perform actions before or after a particular script.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul>Example `<code>package.json</code>`:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_6_3_6",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"7\"><li><strong>Database Operations</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Database migrations, seeding, and other database operations can be handled through npm scripts.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul>Example `<code>package.json</code>`:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_6_3_7",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"8\"><li><strong>Deployment</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Scripts to deploy your application to different environments can also be managed with npm.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul>Example `<code>package.json</code>`:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_6_3_8",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"9\"><li><strong>Custom Utility Scripts</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Sometimes you may have project-specific tasks like generating documentation, creating components, or updating translations. These can also be set up as npm scripts.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul>Example `<code>package.json</code>`:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_6_3_9",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"10\"><li><strong>Chaining and Composing Scripts</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>For complex tasks, you can chain multiple npm scripts together.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul>Example `<code>package.json</code>`:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_6_3_10",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "By leveraging npm scripts for these use cases, you make the project easier to understand and contribute to, ensure that everyone is using the same set of tools in the same way, and can even make your project easier to set up on CI/CD platforms."
            },
          ]
        }
      ]
    },
    {
      "category": "npm",
      "chid": 7,
      "title": "Global vs Local Packages",
      "sections": [
        {
          "secid": 1,
          "subtitle": "When to Use Global Packages",
          "paragraphs": [
            {
              "paraid": 1,
              "text": "Global packages in npm are generally used for development tools that can be used across multiple projects. However, it's crucial to understand when and why to use them, as misuse could lead to versioning conflicts and other issues. Here are some scenarios where using global packages makes sense:"
            },
            {
              "paraid": 1,
              "text": "<ol><li><strong>Command-Line Utilities</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Global packages are often used for command-line utilities that can be run from the shell. For example, code formatters, project generators, and task runners like Prettier, Create React App, and Gulp can be installed globally.</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_7_1_1",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"2\"><li><strong>Development Tools</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Tools that help with development but are not directly tied to any specific project are also candidates for global installation. Examples include debugging tools, monitoring tools, and live-reload utilities.</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_7_1_2",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"3\"><li><strong>Shared Utilities</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>If you have a utility package that's frequently used across multiple projects and its version doesn't change often, you could install it globally. However, this use case is rare and should be approached cautiously.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"4\"><li><strong>System-Wide Configuration</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Some packages may be used for configuring system settings or for utilities that extend system functionality. These are generally installed globally.</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_7_1_3",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"5\"><li><strong>One-Time Setup</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Packages that are needed for one-off tasks like bootstrapping a new machine with required global utilities can also be installed globally.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"6\"><li><strong>Version Management Tools</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Although Node.js itself is typically installed globally, many developers also use version management tools like n or nvm to switch between different Node.js versions, and these are installed globally.</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_7_1_4",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"7\"><li><strong>Peer Dependencies</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>In some cases, globally installed packages may serve as peer dependencies for local packages. However, this pattern is generally discouraged in favor of local installations to ensure project portability.</ul>"
            },
            {
              "paraid": 1,
              "text": "Global packages can be useful, but they should be used judiciously. Whenever possible, prefer local installations to ensure that your project is fully portable and that its dependencies are clearly defined."
            }
          ]
        },
        {
          "secid": 2,
          "subtitle": "When to Use Local Packages",
          "paragraphs": [
            {
              "paraid": 1,
              "text": "Using local packages in npm refers to the practice of installing a package from a local path on your filesystem, rather than from the npm registry. This is particularly useful in several scenarios:"
            },
            {
              "paraid": 1,
              "text": "<ol><li><strong>Use Cases</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Development and Testing</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>If you're developing a package and you want to test it within a real project before publishing it to the npm registry, you can install it from a local path. This allows you to test changes in real-time without going through the publish-install cycle.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Private or Internal Packages</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>If you have a package that you don't want to publish to the public npm registry (e.g., an internal library that's only used within your organization), you can host it locally or within your private network and install it from there.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Modifications and Custom Fixes</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>If you're using a third-party package that you need to modify, perhaps to fix a bug, adjust functionality, or add features specific to your project, you might clone it, make your changes, and then install it from your local filesystem.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Dependency Control and Security</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>If you want to ensure that your project uses a specific version of a package, and you're concerned about potential changes or deletions leading to problems (or you want to avoid potential security issues from upstream changes), you might opt to store and install dependencies locally.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"2\"><li><strong>How to Use Local Packages</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>You can install a local package using npm by pointing to the local path of the package directory:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_7_2_1",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul>Or, if you're using relative paths:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_7_2_2",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "BASH",
                "exampleTitle": "",
                "codeLangs": "bash",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ul>In your `<code>package.json</code>`, this will add an entry with a file descriptor to the `<code>dependencies</code>` field:</ul>"
            },
            {
              "paraid": 8,
              "text": "",
              "codeConfig": {
                "codeid": "npm_7_2_3",
                "exampleid": "",
                "codeOutput": false,
                "exampleOutput": false,
                "codeTitle": "JSON",
                "exampleTitle": "",
                "codeLangs": "json",
                "exampleLangs": "",
                "codeSource": "",
                "exampleSource": "",
                "marginLeft": "2.5rem"
              }
            },
            {
              "paraid": 1,
              "text": "<ol start=\"3\"><li><strong>Things to Consider</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Versioning</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Local packages won't automatically update the version number in your project's `<code>package.json</code>`. If you make updates to the local package, you'll need to update the version number manually and ensure your main project points to the correct version, if necessary.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Dependency Replication</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>If your project relies on continuous integration or needs to be set up on multiple systems, you need a strategy for replicating local packages, as simply running `<code>npm install</code>` won't fetch packages located on your local filesystem.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>Path Management</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Be aware of absolute vs. relative paths when pointing to local packages, especially when working across different environments or systems.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul><li><strong>`<code>npm link</code>`</strong></li></ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>For local package development, consider using `<code>npm link</code>`, which creates a symbolic link from a global folder to your local package, allowing you to develop while immediately seeing the changes in any project you link it to.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "Local packages are a powerful feature when used appropriately, especially for development, customization, and testing. However, they come with their own set of challenges and should be managed carefully, especially in a team environment."
            }
          ]
        }
      ]
    },
    {
      "category": "npm",
      "chid": 8,
      "title": "Using npm in Web Front-End Projects",
      "sections": [
        {
          "secid": 1,
          "subtitle": "npm and Web Development",
          "paragraphs": [
            {
              "paraid": 1,
              "text": "npm is an indispensable tool in modern web development. It manages dependencies for your project and offers powerful features to streamline various development tasks. Here's an overview of how npm is used in web development:"
            },
            {
              "paraid": 1,
              "text": "<ol><li><strong>Dependency Management</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>npm allows you to manage libraries and frameworks that your web application depends on. For instance:</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ol><li><strong>Front-end Libraries</strong></li></ol></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>You can install front-end libraries like React, Angular, or Vue.js using npm. This makes it easy to keep them updated and manage their versions.</ul></ul>"
            },  
            {
              "paraid": 1,
              "text": "<ul><ol start=\"2\"><li><strong>CSS Frameworks</strong></li></ol></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>npm can manage front-end frameworks like Bootstrap or Tailwind CSS, including their JavaScript components.</ul></ul>"
            },  
            {
              "paraid": 1,
              "text": "<ul><ol start=\"3\"><li><strong>Utility Libraries</strong></li></ol></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Libraries like Lodash or Moment.js can be easily added to your project, ensuring you have access to helpful utility functions.</ul></ul>"
            },  
            {
              "paraid": 1,
              "text": "<ol start=\"2\"><li><strong>Development Tools</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>npm is a gateway to a multitude of development tools that help improve productivity and code quality:</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ol><li><strong>Build Tools</strong></li></ol></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Tools like Webpack, Parcel, or Rollup can be installed and run using npm. They help in bundling your assets, transpiling ES6 code, managing CSS preprocessors, and more.</ul></ul>"
            },  
            {
              "paraid": 1,
              "text": "<ul><ol start=\"2\"><li><strong>Task Runners</strong></li></ol></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>npm can run task runners like Gulp or Grunt, which automate routine tasks like minification, compilation, image optimization, etc.</ul></ul>"
            },  
            {
              "paraid": 1,
              "text": "<ul><ol start=\"3\"><li><strong>Linters and Formatters</strong></li></ol></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Tools like ESLint, TSLint, Prettier, and Stylelint can be installed and configured to maintain code quality and consistency.</ul></ul>"
            },  
            {
              "paraid": 1,
              "text": "<ol start=\"3\"><li><strong>Server-Side Development</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>npm isn't just for client-side code. It's also used for server-side development with Node.js:</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ol><li><strong>Frameworks</strong></li></ol></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Express.js, Koa, or Hapi can be installed to create RESTful APIs or serve web pages.</ul></ul>"
            },  
            {
              "paraid": 1,
              "text": "<ul><ol start=\"2\"><li><strong>Database Drivers</strong></li></ol></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Packages for interacting with databases like MongoDB, PostgreSQL, or MySQL can be installed to integrate your application with a database.</ul></ul>"
            },  
            {
              "paraid": 1,
              "text": "<ul><ol start=\"3\"><li><strong>Authentication</strong></li></ol></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Packages like Passport.js, bcrypt.js, or jsonwebtoken help manage authentication and security in your web applications.</ul></ul>"
            },  
            {
              "paraid": 1,
              "text": "<ol start=\"4\"><li><strong>Command Line Utilities</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>npm can install various CLI utilities that can generate boilerplate code, run development servers, or automate other tasks:</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ol><li><strong>Create-React-App</strong></li></ol></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Initializes a new React project with no build configuration.</ul></ul>"
            },  
            {
              "paraid": 1,
              "text": "<ul><ol start=\"2\"><li><strong>Angular CLI</strong></li></ol></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Provides a command-line interface for Angular applications.</ul></ul>"
            },  
            {
              "paraid": 1,
              "text": "<ul><ol start=\"3\"><li><strong>Vue CLI</strong></li></ol></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Standard tooling for Vue.js development.</ul></ul>"
            },  
            {
              "paraid": 1,
              "text": "npm is integral to web development as it serves as a package manager for JavaScript, streamlining the process of managing project dependencies. It provides a vast ecosystem of packages, simplifying tasks, and promoting code reuse. npm facilitates consistency across development environments, supports version control for stable builds, and integrates seamlessly into the build process and CI/CD pipelines, enhancing productivity and collaboration in web development projects."
            }
          ]
        },
        {
          "secid": 2,
          "subtitle": "Task Runners and Build Tools",
          "paragraphs": [
            {
              "paraid": 1,
              "text": "Task runners and build tools are essential components of modern web development, helping automate repetitive tasks, optimize code, and manage dependencies. npm itself can be used as a basic task runner, but there are also specialized tools available. Below are some popular options and how they work."
            },
            {
              "paraid": 1,
              "text": "<ol><li><strong>npm Scripts</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>npm has a built-in feature for running tasks, defined in the `<code>scripts</code>` field of your `<code>package.json</code>` file. Although not as feature-rich as dedicated task runners, npm scripts are easy to use and often sufficient for simple projects.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ol><li><strong>Basic Usage</strong></li></ol></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Define a `<code>scripts</code>` field in your `<code>package.json</code>` and then run `<code>npm run [script-name]</code>`.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ol start=\"2\"><li><strong>Common Tasks</strong></li></ol></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Build, test, and start servers.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ol start=\"3\"><li><strong>Lifecycle Scripts</strong></li></ol></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Pre- and post-hooks like `<code>preinstall</code>`, `<code>postinstall</code>`.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"2\"><li><strong>Gulp</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Gulp is a popular task runner that uses a code-over-configuration approach, making it highly flexible.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ol><li><strong>Stream-based</strong></li></ol></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Gulp uses Node.js streams, making it fast and efficient.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ol start=\"2\"><li><strong>API</strong></li></ol></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Simple API with methods like `<code>src()</code>`, `<code>dest()</code>`, `<code>watch()</code>`, and `<code>task()</code>`.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ol start=\"3\"><li><strong>Plugins</strong></li></ol></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Extensive ecosystem with plugins for linting, live reloading, compiling, etc.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"3\"><li><strong>Grunt</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Grunt is another widely used task runner that focuses on configuration over code.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ol><li><strong>Configuration</strong></li></ol></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>All tasks are configured in a `<code>Gruntfile</code>`.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ol start=\"2\"><li><strong>Plugins</strong></li></ol></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Wide array of community plugins for various tasks.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ol start=\"3\"><li><strong>Custom Tasks</strong></li></ol></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Write custom tasks using JavaScript.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"4\"><li><strong>Webpack</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>While primarily a module bundler for JavaScript, Webpack can perform many of the same tasks as Gulp and Grunt.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ol><li><strong>Loaders and Plugins</strong></li></ol></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Use loaders for pre-processing and plugins for additional functionality.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ol start=\"2\"><li><strong>Dev Server</strong></li></ol></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Includes a development server with hot module replacement.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ol start=\"3\"><li><strong>Optimization</strong></li></ol></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Built-in code splitting and tree shaking.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"5\"><li><strong>Rollup</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Rollup is a module bundler for JavaScript focused on simplicity and performance, Rollup is particularly well-suited for building libraries.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ol><li><strong>ES Modules</strong></li></ol></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Designed with ES modules in mind.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ol start=\"2\"><li><strong>Tree Shaking</strong></li></ol></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Efficiently eliminates dead code.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ol start=\"3\"><li><strong>Plugins</strong></li></ol></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Supports plugins for extensibility.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ol start=\"6\"><li><strong>Parcel</strong></li></ol>"
            },
            {
              "paraid": 1,
              "text": "<ul>Parcel aims to be a fast, zero-configuration web application bundler.</ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ol><li><strong>Zero Configuration</strong></li></ol></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Out-of-the-box support for many web technologies.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ol start=\"2\"><li><strong>Fast</strong></li></ol></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Utilizes multiple CPU cores and comes with a built-in development server.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ol start=\"3\"><li><strong>Automatic Optimization</strong></li></ol></ul>"
            },
            {
              "paraid": 1,
              "text": "<ul><ul>Performs tree-shaking and minifying your JavaScript, CSS, and HTML, resizing and optimizing images, etc.</ul></ul>"
            },
            {
              "paraid": 1,
              "text": "Understanding the differences between these tools can help you choose the one that best suits your project’s needs, improving both your development workflow and the quality of your code."
            }
          ]
        }
      ]
    }
  ];
