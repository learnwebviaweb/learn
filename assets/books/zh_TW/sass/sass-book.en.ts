export const sassBook =
[
  {
    "category": "sass",
    "chid": 1,
    "title": "Introduction to SASS",
    "sections": [
      {
        "secid": 1,
        "subtitle": "Why SASS?",
        "paragraphs": [
          {
            "paraid": 1,
            "text": "SASS (Syntactically Awesome Style Sheets) is a popular CSS preprocessor that offers a more dynamic and maintainable approach to styling web pages compared to using vanilla CSS. Here are some key reasons why many developers prefer to use SASS:"
          },
          {
            "paraid": 1,
            "text": "<ol><li><strong>Enhanced Features</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Variables</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>SASS allows you to use variables, making it easier to manage and reuse values like colors, font sizes, and margins.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Nesting</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>SASS provides a clean and easy-to-follow syntax for nesting CSS selectors, thereby reducing repetition and making the codebase easier to navigate.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Mixins</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Reusable blocks of code can be defined and reused throughout the project, allowing for cleaner and more modular code.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Functions</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>SASS comes with built-in functions for manipulating colors, strings, and numbers, as well as the ability to create custom functions.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Conditionals and Loops</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>SASS supports `<code>@if</code>`, `<code>@for</code>`, `<code>@each</code>`, and `<code>@while</code>` directives, enabling you to add logic and iteration into your stylesheets.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ol start=\"2\"><li><strong>Modularity and Organization</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Partial Files and Imports</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>SASS allows you to split your stylesheets into partial files and import them into a main file, aiding in code organization and maintenance.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Inheritance and Placeholders</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>SASS's `<code>@extend</code>` feature allows for code to be reused across multiple selectors, reducing redundancy.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Namespaces and Modules</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>SASS 1.23.0 and onwards support modules and namespaces, offering more modularity and encapsulation of your code.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ol start=\"3\"><li><strong>Maintainability and Scalability</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>DRY Code</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Features like variables, mixins, and functions help in writing DRY (Don't Repeat Yourself) code, which is easier to maintain and scale.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Modular Approach</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Using partials, you can break down stylesheets into logical components, making it easier to manage large codebases and collaborate with team members.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Community Support and Documentation</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>SASS has been around for a long time and has a strong community and extensive documentation, which makes learning and troubleshooting easier.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ol start=\"4\"><li><strong>Compatibility and Tooling</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Compatibility</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>SASS compiles down to standard CSS, ensuring compatibility across browsers.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Tooling</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>There are various build tools and task runners like Gulp, Webpack, and Grunt that integrate easily with SASS to streamline the development workflow.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Developer Tools</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Many text editors and IDEs offer SASS support and extensions, including syntax highlighting, auto-compilation, and linting, enhancing the development experience.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ol start=\"5\"><li><strong>Improved Workflow</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Live Reloading and Source Maps</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Modern development server tools offer features like live reloading and source maps, which can be used in conjunction with SASS to improve the development workflow.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Community Contributions</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>There are numerous open-source libraries and frameworks built with SASS, like Bootstrap and Foundation, that can expedite the development process.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "For these reasons, SASS remains a popular choice among developers for styling web applications. Its feature-rich nature, combined with excellent tooling and community support, make it an excellent option for any project, from simple websites to complex web applications."
          }
        ]
      },
      {
        "secid": 2,
        "subtitle": "SASS Syntax vs. SCSS Syntax",
        "paragraphs": [
          {
            "paraid": 1,
            "text": "SASS (Syntactically Awesome Style Sheets) and SCSS (Sassy CSS) are both preprocessor scripting languages that are interpreted into Cascading Style Sheets (CSS). They both belong to the SASS preprocessor but differ in their syntax and writing style. Here's how they differ and what they have in common:"
          },
          {
            "paraid": 1,
            "text": "<ol><li><strong>SASS (Indented Syntax)</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Syntax</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>SASS uses a syntax that is quite different from CSS. It relies on indentation rather than braces to delimit code blocks, and it doesn't use semicolons to terminate statements.</ul></ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_1_2_1",
              "exampleid": "",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SASS Syntax",
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
            "text": "<ul><ul><li><strong>Whitespace Sensitive</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Because it relies on indentation to define code blocks, SASS is whitespace-sensitive.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Older</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>The indented syntax is the older syntax for SASS. While it's not being deprecated, it's less commonly used today than SCSS.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Simplicity</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>The SASS syntax is generally considered to be simpler and cleaner for writing code, but this can be a matter of personal preference.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ol start=\"2\"><li><strong>SCSS (Sassy CSS)</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Syntax</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>SCSS uses a syntax almost identical to CSS. It uses braces to delimit code blocks and semicolons to terminate statements.</ul></ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_1_2_2",
              "exampleid": "",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS Syntax",
              "exampleTitle": "",
              "codeLangs": "scss",
              "exampleLangs": "",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>CSS-Compatible</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>SCSS is fully compatible with CSS, which means that you can rename a `<code>.css</code>` file to `<code>.scss</code>` and it will compile correctly.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Newer</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>SCSS is the newer syntax introduced in SASS 3, and it is the one more commonly used today.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Richer</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>SCSS supports all the features of SASS, but because it's so similar to CSS, it's generally easier for developers to learn and integrate into projects.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ol start=\"3\"><li><strong>Common Points Between SASS Syntax and SCSS Syntax</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Features</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Both SASS and SCSS offer variables, nested rules, mixins, functions, imports, and other powerful features that make writing CSS more efficient and maintainable.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Output</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Both compile down to the same CSS output.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Community and Ecosystem</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Both are part of the same SASS ecosystem, supported by the same community, and can make use of the same frameworks and tools.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Preprocessing</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Both need to be compiled by a SASS compiler into CSS.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ol start=\"4\"><li><strong>Which to Use?</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>SASS Syntax</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>If you prefer a clean, indentation-based syntax and don't mind deviating from the CSS style, you might opt for SASS.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>SCSS Syntax</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>If you prefer a syntax that is more similar to CSS, or you're integrating SASS into a project that already uses CSS, SCSS is the better choice.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "In summary, the choice between SASS and SCSS comes down largely to personal preference and project requirements. Both offer the same underlying capabilities; it's just a matter of which syntax you find more comfortable or appropriate for your project. In this tutorial, we adopt SCSS syntax."
          }
        ]
      },
      {
        "secid": 3,
        "subtitle": "Setting Up SASS Development Environment",
        "paragraphs": [
          {
            "paraid": 1,
            "text": "Setting up a SASS development environment involves a few essential steps to ensure a smooth and efficient workflow. Below is a guide to help you set up your SASS development environment from scratch:"
          },
          {
            "paraid": 1,
            "text": "<ol><li><strong>Required Software</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Text Editor</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>You'll need a text editor to write your code. Examples include Visual Studio Code, Sublime Text, or Atom.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Node.js and npm</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Node.js is required for using various build tools and the SASS compiler. npm is the Node.js package manager.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ol start=\"2\"><li><strong>Installing Node.js and npm</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Download Node.js</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Visit the <a href=\"https://nodejs.org/en\">Node.js website</a> and download the installer for your operating system. The npm package manager comes bundled with Node.js.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Installation</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Run the installer and follow the instructions to install Node.js and npm.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Verification</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Open your terminal and run the following commands to verify the installations:</ul></ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_1_3_1",
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
            "text": "<ul><ul>If installed correctly, this should display the version numbers for Node.js and npm.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ol start=\"3\"><li><strong>Installing SASS Compiler</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Install the SASS package</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Open the terminal and run the following command:</ul></ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_1_3_2",
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
            "text": "<ul><ul><li><strong>Verify SASS Installation</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>To ensure SASS has been installed correctly, run:</ul></ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_1_3_3",
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
            "text": "<ul><ul>This should display the installed SASS version.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ol start=\"4\"><li><strong>IDE Setup</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Install a SASS Extension</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>If you're using Visual Studio Code, you can install the \"Live SASS Compiler\" extension to automatically compile your SASS files upon saving.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Configure Build Tools</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>For more advanced workflows, you can configure a task runner like Gulp or a module bundler like Webpack to compile, prefix, and minify your CSS.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ol start=\"5\"><li><strong>Directory Structure</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li>Create a well-organized directory structure to manage your SASS files. A commonly used structure might look like:</li></ul></ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_1_3_4",
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
            "text": "<ul><ul>In the example:</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><ul><li><strong>src/scss</strong>: This is where all your SASS files will reside.</li></ul></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><ul><li><strong>dist/css</strong>: This is where the compiled CSS will be output.</li></ul></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ol start=\"6\"><li><strong>Start Writing SASS</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Create Your Main SASS File</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Inside the `<code>scss</code>` directory, create your `<code>main.scss</code>` file. This is where you'll import all your SASS partials.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Compile</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>To manually compile your SASS into CSS, you can use the following command:</ul></ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_1_3_5",
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
            "text": "<ul><ul><li><strong>Watch for Changes</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>To automatically compile your SASS files whenever you make changes, run the following command:</ul></ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_1_3_6",
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
            "text": "<ol start=\"7\"><li><strong>Automate Tasks with Gulp or Webpack (Optional)</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li>You can use a task runner like Gulp or a module bundler like Webpack to automate the compilation process, along with other tasks like autoprefixing, minification, etc.</li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "By following these steps, you should have a functioning SASS development environment. This will set the foundation for you to write scalable and maintainable stylesheets."
          }
        ]
      }
    ]
  },
  {
    "category": "sass",
    "chid": 2,
    "title": "SASS Basics",
    "sections": [
      {
        "secid": 1,
        "subtitle": "Values and Types",
        "paragraphs": [
          {
            "paraid": 1,
            "text": "In SASS, values are the fundamental parts that can be manipulated and assigned to variables. SASS supports several types of values that are analogous to those in other programming languages. These values can be used in various expressions, functions, and directives within your SASS files. Here are some of the primary types of values in SASS:"
          },
          {
            "paraid": 1,
            "text": "<ol><li><strong>Numbers</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>Numbers can be integers or floating-point numbers, and they may be associated with units like pixels (`<code>px</code>`), ems (`<code>em</code>`), rems (`<code>rem</code>`), percentages (`<code>%</code>`), etc.</ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul></ul></ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_2_1_1",
              "exampleid": "",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "",
              "codeLangs": "scss",
              "exampleLangs": "",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"2\"><li><strong>Strings</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>Strings are sequences of characters, which can be either quoted or unquoted.</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_2_1_2",
              "exampleid": "",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "",
              "codeLangs": "scss",
              "exampleLangs": "",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"3\"><li><strong>Colors</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>SASS understands standard CSS color notations like named colors, hex values, `<code>rgba()</code>`, `<code>hsla()</code>`, etc.</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_2_1_3",
              "exampleid": "",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "",
              "codeLangs": "scss",
              "exampleLangs": "",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"4\"><li><strong>Booleans</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>Boolean values can either be `<code>true</code>` or `<code>false</code>`.</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_2_1_4",
              "exampleid": "",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "",
              "codeLangs": "scss",
              "exampleLangs": "",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"5\"><li><strong>Null</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>The `<code>null</code>` value represents the absence of a value or a \"void.\"</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_2_1_5",
              "exampleid": "",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "",
              "codeLangs": "scss",
              "exampleLangs": "",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"6\"><li><strong>Lists</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>Lists are ordered arrangements of values separated by either spaces or commas. Lists can be single or multidimensional.</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_2_1_6",
              "exampleid": "",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "",
              "codeLangs": "scss",
              "exampleLangs": "",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"7\"><li><strong>Maps</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>Maps are similar to objects in JavaScript and dictionaries in Python. They hold key-value pairs.</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_2_1_7",
              "exampleid": "",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "",
              "codeLangs": "scss",
              "exampleLangs": "",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"8\"><li><strong>`<code>!default<code>` Flag</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>This flag allows you to assign a value to a variable only if it hasn't already been assigned.</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_2_1_8",
              "exampleid": "",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "",
              "codeLangs": "scss",
              "exampleLangs": "",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "Understanding these different types of values in SASS is fundamental to being proficient in the language and allows you to use its full power to create maintainable and efficient stylesheets."
          }
        ]
      },
      {
        "secid": 2,
        "subtitle": "Variables and Scope",
        "paragraphs": [
          {
            "paraid": 1,
            "text": "In SASS, variables are used to store values that can be reused throughout your stylesheet. Variables in SASS start with a dollar sign (`<code>$</code>`) followed by the variable name."
          },
          {
            "paraid": 1,
            "text": "<ol><li><strong>Basic Syntax</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>Here is how you define and use a SASS variable:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_2_2_1",
              "exampleid": "sass_2_2_1_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ul>In the example above, `<code>$font-size</code>` and `<code>$font-family</code>` are variables that store values used in the stylesheet.</ul>"
          },
          {
            "paraid": 1,
            "text": "<ol start=\"2\"><li><strong>Scope</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>The scope of a variable determines where it can be accessed or modified within your SASS code. SASS has two types of variable scopes:</ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Global Scope</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>A variable declared outside any block of code is available globally throughout the entire SASS file and any files imported into it.</ul></ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_2_2_2",
              "exampleid": "sass_2_2_2_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ul><ul>In this case, `<code>$global-variable</code>` is accessible throughout the file and can be used inside any code block.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Local Scope</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>A variable declared inside a block of code, such as a function, mixin, or selector, is locally scoped and not available outside that block.</ul></ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_2_2_3",
              "exampleid": "sass_2_2_3_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Here, `<code>$local-variable</code>` is only available within the `<code>.element</code>` block.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Global vs. Local Variables</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>If you declare a variable with the same name in both local and global scopes, the local variable will take precedence in its scope.</ul></ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_2_2_4",
              "exampleid": "sass_2_2_4_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong></strong>`<code>!global</code>` Flag</li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>You can change the value of a global variable from within a local scope by using the `<code>!global</code>` flag.</ul></ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_2_2_5",
              "exampleid": "sass_2_2_5_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "5rem"
            }
          },
          {
            "paraid": 1,
            "text": "Understanding variables and their scope are crucial for writing clean, maintainable SASS code. Proper use of scope can help you manage your styles effectively and avoid unexpected behaviors."
          }
        ]
      },
      {
        "secid": 3,
        "subtitle": "Interpolation",
        "paragraphs": [
          {
            "paraid": 1,
            "text": "In SASS, interpolation is the process of injecting values dynamically into strings or property names. This is done using the `<code>#{}</code>` syntax. Interpolation is particularly useful for dynamically generating class names, URLs, or any other string values within your stylesheet."
          },
          {
            "paraid": 1,
            "text": "<ol><li><strong>Interpolation Using Variables</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>For example, consider a SASS variable $color that you want to include in a class name:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_2_3_1",
              "exampleid": "sass_2_3_1_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"2\"><li><strong>Interpolation Using Expressions</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>You can interpolate not just simple variables but also more complex SASS expressions:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_2_3_2",
              "exampleid": "sass_2_3_2_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"3\"><li><strong>Conditional Interpolation</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>Interpolation can also be combined with conditional logic for more complex scenarios:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_2_3_3",
              "exampleid": "sass_2_3_3_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"4\"><li><strong>Interpolation in Class Names and Property Names</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>SASS allows you to interpolate property names as well, which is useful for writing browser-specific prefixes or other variations:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_2_3_4",
              "exampleid": "sass_2_3_4_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"5\"><li><strong>Interpolation in URLs and Strings</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>You can also use interpolation within URLs or any other string values:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_2_3_5",
              "exampleid": "sass_2_3_5_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "Understanding how to use interpolation effectively can greatly increase your ability to write DRY, readable, and maintainable SASS code."
          }
        ]
      },
      {
        "secid": 4,
        "subtitle": "Operators",
        "paragraphs": [
          {
            "paraid": 1,
            "text": "SASS supports a variety of operators that allow for more dynamic and flexible stylesheets. These operators can perform calculations, manipulate strings, or facilitate conditional logic. Here are the key types of operators you'll often encounter in SASS:"
          },
          {
            "paraid": 1,
            "text": "<ol><li><strong>Arithmetic Operators</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>Arithmetic operators include addition (`<code>+</code>`), subtraction (`<code>-</code>`), multiplication (`<code>*</code>`), division (`<code>/</code>`), and modulo (`<code>%</code>`).</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_2_4_1",
              "exampleid": "sass_2_4_1_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ul>Note: The division operator `<code>/</code>` will be depreciated and be removed in a future version. You can use `<code>math.div()</code>` instead.</ul>"
          },
          {
            "paraid": 1,
            "text": "<ol start=\"2\"><li><strong>String Operators</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>SASS also supports string concatenation using the `<code>+</code>` operator.</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_2_4_2",
              "exampleid": "",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "",
              "codeLangs": "scss",
              "exampleLangs": "",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"3\"><li><strong>Relational Operators</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>These are used for comparisons and return a Boolean (`<code>true</code>` or `<code>false</code>`). They include less than (`<code>&lt;</code>`), greater than (`<code>&gt;</code>), less than or equal to (`<code>&lt;=</code>`), and greater than or equal to (`<code>&gt;=</code>`).</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_2_4_3",
              "exampleid": "",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "",
              "codeLangs": "scss",
              "exampleLangs": "",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"4\"><li><strong>Equality Operators</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>Equality (`<code>==</code>`) and inequality (`<code>!=</code>`) operators compare two expressions for strict equality or inequality.</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_2_4_4",
              "exampleid": "",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "",
              "codeLangs": "scss",
              "exampleLangs": "",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"5\"><li><strong>Logical Operators</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>Logical operators include `<code>and</code>`, `<code>or</code>`, and `<code>not</code>`. These are typically used in conditional statements.</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_2_4_5",
              "exampleid": "",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "",
              "codeLangs": "scss",
              "exampleLangs": "",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "Understanding how to use these operators in SASS can greatly enhance your ability to write dynamic, maintainable, and robust styles."
          }
        ]
      },
      {
        "secid": 5,
        "subtitle": "Loops and Conditionals",
        "paragraphs": [
          {
            "paraid": 1,
            "text": "SASS provides built-in support for control directives like loops and conditionals, which allow you to dynamically generate CSS rules and styles. This can be incredibly useful for reducing repetition, improving maintainability, and generating complex layouts with minimal code."
          },
          {
            "paraid": 1,
            "text": "<ol><li><strong>Loops</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>SASS supports various types of loops, such as `<code>@for</code>`, `<code>@each</code>`, and `<code>@while</code>`.</ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>`<code>@for</code>` Loop</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>The `<code>@for</code>` loop is used to iterate a specific number of times. For example, you can use it to generate a series of classes for different font sizes:</ul></ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_2_5_1",
              "exampleid": "sass_2_5_1_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>`<code>@each</code>` Loop</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>The `<code>@each</code>` loop iterates over a list or map. For example:</ul></ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_2_5_2",
              "exampleid": "sass_2_5_2_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>`<code>@while</code>` Loop</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>The `<code>@while</code>` loop is less common but can be useful for more complex iterations where you need to control the condition manually:</ul></ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_2_5_3",
              "exampleid": "sass_2_5_3_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"2\"><li><strong>Conditionals</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>SASS supports conditionals using `<code>@if</code>`, `<code>@else if</code>`, and `<code>@else</code>`.</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_2_5_4",
              "exampleid": "sass_2_5_4_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ul>This example will produce different button styles based on the value of the `<code>$theme</code>` variable.</ul>"
          },
          {
            "paraid": 1,
            "text": "In summary, SASS's loop and conditional features offer a robust way to dynamically generate styles and introduce basic logic into your stylesheets. When used wisely, these features can greatly improve the maintainability and reusability of your code."
          }
        ]
      }
    ]
  },
  {
    "category": "sass",
    "chid": 3,
    "title": "SASS Features",
    "sections": [
      {
        "secid": 1,
        "subtitle": "Nesting",
        "paragraphs": [
          {
            "paraid": 1,
            "text": "In SASS, nesting is a way to write more organized and clear CSS by mimicking the natural hierarchy of your HTML. Nesting allows you to nest one selector within another, providing a visual hierarchy that can make your SASS files easier to read and maintain."
          },
          {
            "paraid": 1,
            "text": "<ol><li><strong>Basic Nesting</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>The simplest form of nesting is including one set of CSS rules within another. In the generated CSS, the inner rule's selector is appended to the outer rule's selector.</ul>"
          },
          {
            "paraid": 1,
            "text": "<ul>Here's a basic example in SASS:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_1_1",
              "exampleid": "sass_3_1_1_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"2\"><li><strong>Parent Selector (`<code>&</code>`)</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>The `<code>&</code>` symbol is used to refer to the parent selector within nested rules. This is particularly useful for pseudo-classes like `<code>:hover</code>`.</ul>"
          },
          {
            "paraid": 1,
            "text": "<ul>For example:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_1_2",
              "exampleid": "sass_3_1_2_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"3\"><li><strong>Nested Properties</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>SASS allows you to nest certain CSS property definitions within another, thereby reducing the need to repeat the shared part of the property names. This is commonly used for properties like `<code>font</code>` and `<code>border</code>`.</ul>"
          },
          {
            "paraid": 1,
            "text": "<ul>For example:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_1_3",
              "exampleid": "sass_3_1_3_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"4\"><li><strong>Nesting with Media Queries</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>You can also nest media queries:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_1_4",
              "exampleid": "sass_3_1_4_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"5\"><li><strong>Caution with Deep Nesting</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>Although nesting can make your SASS more readable and maintainable, it can also make your output CSS very hard to read if overused. Deeply nested rules will result in more specific selectors, which could lead to specificity issues. Generally, it's best to avoid nesting more than three levels deep.</ul>"
          },
          {
            "paraid": 1,
            "text": "Nesting is a powerful feature in SASS that, when used wisely, can make your development process more efficient and your code easier to maintain."
          }
        ]
      },
      {
        "secid": 2,
        "subtitle": "Mixins",
        "paragraphs": [
          {
            "paraid": 1,
            "text": "In SASS, mixins are a way to encapsulate a group of CSS declarations and re-use them throughout your stylesheet. They are particularly useful for reusing sets of styling rules, making your SASS files DRY (Don't Repeat Yourself) and easier to maintain."
          },
          {
            "paraid": 1,
            "text": "<ol><li><strong>Basic Usage</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>To define a mixin, you use the `<code>@mixin</code>` directive followed by the mixin's name. Here is an example:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_2_1",
              "exampleid": "",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "",
              "codeLangs": "scss",
              "exampleLangs": "",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ul>To include a mixin in your code, you use the `<code>@include</code>` directive followed by the mixin's name:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_2_2",
              "exampleid": "sass_3_2_2_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"2\"><li><strong>Arguments and Defaults</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>Mixins can also take arguments, allowing them to be more dynamic. Here's a mixin for creating simple text shadows:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_2_3",
              "exampleid": "",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "",
              "codeLangs": "scss",
              "exampleLangs": "",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ul>You can include it like this:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_2_4",
              "exampleid": "sass_3_2_4_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ul>Or use the default values:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_2_5",
              "exampleid": "sass_3_2_5_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"3\"><li><strong>Variable Arguments</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>You can also pass a variable number of arguments to a mixin by using the `<code>...</code>` syntax. This is useful for mixins that may need to accept a variety of input:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_2_6",
              "exampleid": "",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "",
              "codeLangs": "scss",
              "exampleLangs": "",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ul>You can include it like this:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_2_7",
              "exampleid": "sass_3_2_7_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"4\"><li><strong>Content Blocks</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>In SASS, mixins can also include content blocks, which allows you to pass in a block of styles that will be styled according to the mixin's logic. Use the `<code>@content</code>` directive within the mixin to include the content block:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_2_8",
              "exampleid": "",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "",
              "codeLangs": "scss",
              "exampleLangs": "",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ul>Include the mixin with a content block:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_2_9",
              "exampleid": "sass_3_2_9_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"5\"><li><strong>Caution with Mixins</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>Mixins are powerful but can lead to bloated CSS if used excessively. Use them judiciously and consider the compiled output.</ul>"
          },
          {
            "paraid": 1,
            "text": "Mixins are a potent tool in your SASS toolbox, letting you write DRY, readable, and maintainable code. By understanding their capabilities and using them wisely, you can significantly improve your workflow."
          }
        ]
      },
      {
        "secid": 3,
        "subtitle": "Inheritance and Placeholders",
        "paragraphs": [
          {
            "paraid": 1,
            "text": "In SASS, inheritance and placeholders allow you to share sets of CSS properties from one selector to another to eliminate redundancy, thereby keeping your CSS DRY (Don't Repeat Yourself). They are particularly useful for defining generic, reusable styles that can be shared across multiple elements or components."
          },
          {
            "paraid": 1,
            "text": "<ol><li><strong>SASS Inheritance</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>SASS provides the `<code>@extend</code>` directive for inheritance. It allows one selector to inherit the styles of another selector. For example:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_3_1",
              "exampleid": "sass_3_3_1_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ul>As you can see in css code, `<code>.success</code>` and `<code>.error</code>` classes have inherited all styles from `<code>.message</code>`.</ul>"
          },
          {
            "paraid": 1,
            "text": "<ol start=\"2\"><li><strong>Placeholders</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>Placeholders in SASS are similar to regular CSS classes, but they are prefixed with a `<code>%</code>` and they are not outputted to the final CSS unless extended. These are ideal for storing styles that are meant to be reused across your application but shouldn't stand alone.</ul>"
          },
          {
            "paraid": 1,
            "text": "<ul>Here's an example using placeholders:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_3_2",
              "exampleid": "sass_3_3_2_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ul>Note how the `<code>%message-shared</code>` placeholder itself doesn't appear in the final CSS.</ul>"
          },
          {
            "paraid": 1,
            "text": "In summary, both inheritance and placeholders provide powerful mechanisms for writing maintainable and DRY SASS code. While they seem similar, the two have distinct use-cases and limitations. Inheritance is generally good for extending existing classes, while placeholders are ideal for defining base styles that are not meant to be used directly but are intended to be extended."
          }
        ]
      },
      {
        "secid": 4,
        "subtitle": "Custom Functions",
        "paragraphs": [
          {
            "paraid": 1,
            "text": "SASS custom functions are user-defined functions that you can create to perform specific tasks. These functions can accept arguments and return values, much like built-in functions or functions in other programming languages. Custom functions can encapsulate complex logic, calculations, or transformations that are not provided by SASS’s built-in functions."
          },
          {
            "paraid": 1,
            "text": "<ol><li><strong>Defining Custom Functions</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>You define a custom function in SASS using the `<code>@function</code>` directive. Here's a simple example of a function that calculates the square of a number:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_4_1",
              "exampleid": "sass_3_4_1_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"2\"><li><strong>Using `<code>@return</code>`</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>The `<code>@return</code>` directive is used to specify the value that the function will return. This value will replace the function call wherever it appears in your SASS files.</ul>"
          },
          {
            "paraid": 1,
            "text": "<ol start=\"3\"><li><strong>Function Arguments</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>Functions can accept multiple arguments. You can also specify default values for these arguments. Here's an example that calculates the area of a rectangle:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_4_2",
              "exampleid": "sass_3_4_2_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ul>In this case, the function area will return the area of a square if only one argument is provided, thanks to the default value `<code>$width: $length</code>`.</ul>"
          },
          {
            "paraid": 1,
            "text": "<ol start=\"4\"><li><strong>Variable Arguments</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>Much like mixins, functions can accept a variable number of arguments. You specify this with the `<code>...</code>` syntax. Here's an example that calculates the average of a list of numbers:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_4_3",
              "exampleid": "sass_3_4_3_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"5\"><li><strong>An Example of Custom Color Function</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>Here's a more complex example, a custom function to darken a color by a certain percentage:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_4_4",
              "exampleid": "sass_3_4_4_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "Custom functions can make your SASS code more efficient, easier to read, and easier to maintain. They also allow you to encapsulate complex logic or calculations in a reusable way. By following best practices, you can create a toolkit of custom functions that can make your stylesheets more powerful and expressive."
          }
        ]
      },
      {
        "secid": 5,
        "subtitle": "Built-in Functions",
        "paragraphs": [
          {
            "paraid": 1,
            "text": "SASS comes with a large amount of built-in functions that help you manipulate values and perform calculations right within your stylesheets. These functions can handle colors, strings, numbers, lists, and maps. Here is a detailed breakdown of the various types of built-in SASS functions:"
          },
          {
            "paraid": 1,
            "text": "<ol><li><strong>Color Functions</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>SASS has an extensive list of built-in color manipulation functions:</ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>`<code>darken($color, $amount)</code>`</strong>: Makes a color darker.</li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>`<code>lighten($color, $amount)</code>`</strong>: Makes a color lighter.</li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>`<code>saturate($color, $amount)</code>`</strong>: Increases the saturation of a color.</li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>`<code>desaturate($color, $amount)</code>`</strong>: Decreases the saturation of a color.</li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>`<code>invert($color)</code>`</strong>: Inverts the color.</li></ul></ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_5_1",
              "exampleid": "sass_3_5_1_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"2\"><li><strong>String Functions</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>You can manipulate strings in SASS using its built-in string functions:</ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>`<code>str-length($string)</code>`</strong>: Returns the length of the string.</li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>`<code>str-insert($string, $insert, $index)</code>`</strong>: Inserts a substring at a given index in a string.</li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>`<code>to-upper-case($string)</code>`</strong>: Converts a string to upper case.</li></ul></ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_5_2",
              "exampleid": "sass_3_5_2_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"3\"><li><strong>Number Functions</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>SASS provides a set of functions that operate on numerical values:</ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>`<code>percentage($number)</code>`</strong>: Converts a unitless number to a percentage.</li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>`<code>round($number)</code>`</strong>: Rounds a number to the nearest whole number.</li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>`<code>ceil($number)</code>`</strong>: Rounds a number up to the nearest whole number.</li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>`<code>floor($number)</code>`</strong>: Rounds a number down to the nearest whole number.</li></ul></ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_5_3",
              "exampleid": "sass_3_5_3_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"4\"><li><strong>List Functions</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>These are useful for manipulating SASS lists:</ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>`<code>length($list)</code>`</strong>: Returns the number of items in a list.</li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>`<code>nth($list, $n)</code>`</strong>: Returns the nth item in a list.</li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>`<code>set-nth($list, $n, $value)</code>`</strong>: Replaces the nth item in a list.</li></ul></ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_5_4",
              "exampleid": "sass_3_5_4_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"5\"><li><strong>Map Functions</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>SASS also supports map data types, and you can manipulate these using built-in functions:</ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>`<code>map-get($map, $key)</code>`</strong>: Returns the value associated with a given key in a map.</li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>`<code>map-merge($map1, $map2)</code>`</strong>: Merges two maps into a new map.</li></ul></ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_5_5",
              "exampleid": "sass_3_5_5_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"6\"><li><strong>Miscellaneous Functions</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>SASS also provides functions for other purposes:</ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>`<code>if($condition, $if-true, $if-false)</code>`</strong>: A simple conditional function that returns `<code>$if-true</code>` if `<code>$condition</code>` is true and `<code>$if-false</code>` otherwise.</li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>`<code>unique-id()</code>`</strong>: Returns a randomly generated, and unique CSS identifier.</li></ul></ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_5_6",
              "exampleid": "sass_3_5_6_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "5rem"
            }
          },
          {
            "paraid": 1,
            "text": "By utilizing built-in functions, you can make your SASS code more efficient, maintainable, and concise. The sheer number of these functions allows for a lot of flexibility and advanced operations that can make your CSS generation process significantly more robust."
          }
        ]
      },
      {
        "secid": 6,
        "subtitle": "Partials",
        "paragraphs": [
          {
            "paraid": 1,
            "text": "SASS partials are a feature that allows you to create smaller SASS files that can be imported into other SASS files. This can make maintaining CSS more comfortable, more modular, and easier to understand. Partials in SASS start with an underscore (`<code>_</code>`) and have a `<code>.scss</code>` or `<code>.sass</code>` extension (e.g., `<code>_partial.scss</code>`)."
          },
          {
            "paraid": 1,
            "text": "<ol><li><strong>Basic Usage</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>To create a SASS partial, simply create a new SASS file and prepend its name with an underscore (`<code>_</code>`). For example, you might create a `<code>_variables.scss</code>` file to store all your variables:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_6_1",
              "exampleid": "",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "",
              "codeLangs": "scss",
              "exampleLangs": "",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ul>You can then import this partial into another SASS file using the `<code>@import</code>` directive:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_6_2",
              "exampleid": "",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "",
              "codeLangs": "scss",
              "exampleLangs": "",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ul>Note: The underscore and file extension are omitted when using `<code>@import</code>`.</ul>"
          },
          {
            "paraid": 1,
            "text": "<ol start=\"2\"><li><strong>Directory Structure</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>The use of partials often leads to a directory structure that helps organize your stylesheets logically. For example:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_6_3",
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
            "text": "<ul>In `<code>main.scss</code>`, you could import all these partials:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_6_4",
              "exampleid": "",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "",
              "codeLangs": "scss",
              "exampleLangs": "",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "In summary, SASS partials help you break down complex stylesheets into more manageable, reusable, and maintainable pieces. They provide a way to segment your styles logically and cleanly, enabling a more streamlined and organized workflow."
          }
        ]
      },
      {
        "secid": 7,
        "subtitle": "Built-in Modules",
        "paragraphs": [
          {
            "paraid": 1,
            "text": "SASS has a modular system that provides a variety of built-in modules containing functions, mixins, and variables to perform various tasks. These modules cover functionalities like string manipulation, color modification, and mathematical operations, among others."
          },
          {
            "paraid": 1,
            "text": "Here's a brief introduction to some of the commonly used built-in modules:"
          },
          {
            "paraid": 1,
            "text": "<ol><li><strong>`<code>sass:math</code>`</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>This module provides a host of mathematical functions for operations like rounding, square roots, etc. To use these, you'll need to `<code>@use 'sass:math'</code>`.</ul>"
          },
          {
            "paraid": 1,
            "text": "<ul>For example:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_7_1",
              "exampleid": "sass_3_7_1_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"2\"><li><strong>`<code>sass:string</code>`</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>This module contains functions for string manipulation like changing case, string slicing, etc.</ul>"
          },
          {
            "paraid": 1,
            "text": "<ul>For example:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_7_2",
              "exampleid": "sass_3_7_2_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"3\"><li><strong>`<code>sass:color</code>`</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>This module provides a comprehensive set of functions to manipulate color values. These include converting between color models, adjusting individual color components, and so on.</ul>"
          },
          {
            "paraid": 1,
            "text": "<ul>For example:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_7_3",
              "exampleid": "sass_3_7_3_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"4\"><li><strong>`<code>sass:list</code>`</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>This module provides functions for list manipulations, including creating lists, appending values, and so on.</ul>"
          },
          {
            "paraid": 1,
            "text": "<ul>For example:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_7_4",
              "exampleid": "sass_3_7_4_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"5\"><li><strong>`<code>sass:map</code>`</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>This module offers various utilities for map manipulations like adding, merging, and removing key-value pairs.</ul>"
          },
          {
            "paraid": 1,
            "text": "<ul>For example:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_7_5",
              "exampleid": "sass_3_7_5_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"6\"><li><strong>`<code>sass:selector</code>`</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>This module is designed for manipulating and querying selectors.</ul>"
          },
          {
            "paraid": 1,
            "text": "<ul>For example:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_7_6",
              "exampleid": "sass_3_7_6_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"7\"><li><strong>`<code>sass:meta</code>`</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>This module provides functionality for introspecting SASS code, like inspecting the type of a value or loading other modules dynamically.</ul>"
          },
          {
            "paraid": 1,
            "text": "<ul>For example:</ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_3_7_7",
              "exampleid": "sass_3_7_7_1",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "CSS",
              "codeLangs": "scss",
              "exampleLangs": "css",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "2.5rem"
            }
          },
          {
            "paraid": 1,
            "text": "To use any of these modules, you need to employ the `<code>@use</code>` rule at the beginning of your SASS file. Using these built-in modules is generally a good practice as it eliminates the need to write custom functions or mixins for common operations, making your SASS code more readable and maintainable."
          }
        ]
      }
    ]
  },
  {
    "category": "sass",
    "chid": 4,
    "title": "Best Practices and Tools",
    "sections": [
      {
        "secid": 1,
        "subtitle": "SASS Style Guide",
        "paragraphs": [
          {
            "paraid": 1,
            "text": "A SASS style guide serves as a set of coding conventions and guidelines aimed at improving the quality, consistency, and readability of SASS (or SCSS) code. Having a style guide is important in any development environment to maintain consistency, especially when working in a team. Below are some common rules and best practices that are often included in a SASS style guide:"
          },
          {
            "paraid": 1,
            "text": "<ol><li><strong>File Organization</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Directory Structure</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Organize your SASS code into separate directories like `<code>base</code>`, `<code>components</code>`, `<code>layouts</code>`, etc., to make the codebase more maintainable.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>File Naming</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Use meaningful and clear file names. Commonly, partials (sub-files) are prefixed with an underscore `<code>_</code>`.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Import Order</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Maintain a consistent import order, usually starting with variables, then mixins, and lastly, the actual styles.</ul></ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_4_1_1",
              "exampleid": "",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "",
              "codeLangs": "scss",
              "exampleLangs": "",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"2\"><li><strong>Syntax and Formatting</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Indentation</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Use consistent indentation, often 2 or 4 spaces, to indicate nested blocks of code.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Brackets</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>If using SCSS, opening brackets should be on the same line as the selector or rule.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Semicolons</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Always end statements with a semicolon for readability and to prevent errors.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Quotations</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Stick to either single or double quotes but be consistent throughout the project.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Property Order</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Arrange the CSS properties in a logical or alphabetical order for readability.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ol start=\"3\"><li><strong>Naming Conventions</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Selectors</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Use clear, meaningful names for selectors. BEM (Block Element Modifier) is a popular methodology.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Variables</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Use kebab-case or camelCase and meaningful names for variables.</ul></ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_4_1_2",
              "exampleid": "",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "",
              "codeLangs": "scss",
              "exampleLangs": "",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"4\"><li><strong>Comments</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Inline Comments</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Use inline comments to explain complex sections of code.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Section Comments</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Use comments to separate different sections or components.</ul></ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_4_1_3",
              "exampleid": "",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "",
              "codeLangs": "scss",
              "exampleLangs": "",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"5\"><li><strong>Nesting</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Limit Depth</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Avoid overly nested rules, as they make the code harder to read and understand.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Parent References</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Use the `<code>&</code>` symbol responsibly, mainly when needed for combinators and state classes like `<code>:hover</code>`.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ol start=\"6\"><li><strong>Variables and Mixins</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Global Variables</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Store global settings like color schemes and typography rules in variables.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Local Variables</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Use variables within specific scopes when you don't need to expose them globally.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Mixins</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Use mixins for reusable code snippets but try not to bloat the mixins with too many arguments or nested rules.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ol start=\"7\"><li><strong>Best Practices</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Color Functions</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Use SASS functions for color manipulation rather than manual calculations.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Units</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Use relative units like `<code>em</code>` and `<code>rem</code>` for typography and spacing, unless pixels are specifically required.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "By adhering to a SASS style guide, you're not just making your own life easier; you're making it easier for anyone who might read or work with your code in the future. Therefore, adopting a SASS style guide early on in the project can save a lot of time and effort down the line."
          }
        ]
      },
      {
        "secid": 2,
        "subtitle": "Debugging SASS",
        "paragraphs": [
          {
            "paraid": 1,
            "text": "Debugging is an essential part of any development process, and SASS is no exception. Debugging SASS can be a bit different from debugging plain CSS or JavaScript, but various tools and techniques can help you troubleshoot issues effectively. Here are some strategies and best practices for debugging SASS:"
          },
          {
            "paraid": 1,
            "text": "<ol><li><strong>Syntax Errors</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Command-Line Feedback</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>If you are compiling SASS from the command line, errors will be printed to the terminal. Make sure to read these errors carefully for clues.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Error Logs in Build Tools</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>If you're using build tools like Gulp or Webpack, check the logs for error messages. They will often point you to the line number and file where the error occurred.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ol start=\"2\"><li><strong>Using `<code>@debug</code>` and `<code>@warn</code>`</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>`<code>@debug</code>`</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>The `<code>@debug</code>` directive prints the value of a SASS expression to the standard error output stream, usually your terminal. This is useful for checking the value of variables.</ul></ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_4_2_1",
              "exampleid": "",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "",
              "codeLangs": "scss",
              "exampleLangs": "",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>`<code>@warn</code>`</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>This outputs warnings to the terminal. Unlike `<code>@debug</code>`, `<code>@warn</code>` is often used to show messages that don't necessarily stop compilation but indicate potential issues.</ul></ul>"
          },
          {
            "paraid": 13,
            "text": "",
            "codeConfig": {
              "codeid": "sass_4_2_2",
              "exampleid": "",
              "codeOutput": false,
              "exampleOutput": false,
              "codeTitle": "SCSS",
              "exampleTitle": "",
              "codeLangs": "scss",
              "exampleLangs": "",
              "codeSource": "",
              "exampleSource": "",
              "marginLeft": "5rem"
            }
          },
          {
            "paraid": 1,
            "text": "<ol start=\"3\"><li><strong>Source Maps</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>Source maps map the compiled CSS back to your original SASS files, making it easier to debug issues directly from browser dev tools. When you inspect an element, the dev tools will show you where the style is defined in your SASS files, not just the CSS.</ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Enable Source Maps</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Make sure to enable source maps in your build process. How you do this will depend on the build tool you are using.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Browser Tools</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Modern browsers have developer tools that support source maps, allowing you to debug directly from the browser.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ol start=\"4\"><li><strong>Browser Developer Tools</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Inspect Element</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>Use the \"Inspect Element\" feature in your browser to check the styles being applied. If source maps are enabled, you should see references to your original SASS files.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Toggle Styles</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>You can toggle styles on and off to debug layout or styling issues.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul><li><strong>Computed Styles</strong></li></ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ul><ul>The \"Computed\" tab shows all styles affecting an element, computed from all the applied CSS rules. It can be useful to figure out why a certain style isn't being applied as expected.</ul></ul>"
          },
          {
            "paraid": 1,
            "text": "<ol start=\"5\"><li><strong>Linters</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>Linters like Stylelint can help catch issues before they become problems, like incorrect values, misspelled properties, or issues of specificity.</ul>"
          },
          {
            "paraid": 1,
            "text": "<ol start=\"6\"><li><strong>Binary Search Debugging</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>For more complex issues, comment out large sections of your SASS code, and then incrementally uncomment sections to identify the exact line or block causing the problem. This is an effective way to isolate the issue.</ul>"
          },
          {
            "paraid": 1,
            "text": "<ol start=\"7\"><li><strong>IDE Support</strong></li></ol>"
          },
          {
            "paraid": 1,
            "text": "<ul>Many modern IDEs have excellent SASS support and can highlight syntax errors directly in the editor.</ul>"
          },
          {
            "paraid": 1,
            "text": "By incorporating these tools and techniques into your debugging workflow, you can quickly identify and resolve issues in your SASS codebase."
          }
        ]
      }
    ]
  }
];