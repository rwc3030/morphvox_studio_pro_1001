# Project Setup
# Here are the requirements for the project setup.
---
### VST Plugin Requirements
1. **Using the following components**:
   - **VST SDK**: Required for building VST plugins.
   - **CMake**: For managing the build process.
   - **JUCE**: A framework for developing audio applications and plugins.
---
### Directory Structure with Specific Filenames
```
/project-root
├── /build                        # Build directory for compiled files
├── /source                       # Source code for the plugin
│   ├── PluginProcessor.cpp       # Main processing code for the plugin
│   ├── PluginEditor.cpp          # GUI code for the plugin
│   └── /utils                    # Utility functions for the plugin
├── /resources                    # Resources like images and audio files
├── /tests                        # Unit tests for the plugin
└── README.md                     # Documentation for setup and usage
```
---
## Development Best Practices
- **File Length:** Break files over 85 lines into smaller components.
- **Function Arguments:** Limit functions to five arguments maximum; use objects or arrays for additional data.
- **Function Size:** Keep functions under 20 lines; split complex functions as needed.
- **Code Comments:** Add comments for complex logic and functions.
- **Consistency:** Use camelCase for JavaScript, snake_case for C++, and consistent formatting.
- **Error Handling:** Include error handling with clear, informative messages.
- **DRY Principle:** Refactor redundant code into functions.
- **Modular Design:** Structure code in self-contained modules.
- **Reusability:** Create generic, reusable functions and components.
---
### Database Requirements (MySQL)
# Always prepend database names and tables with the project name
# Always use underscore_separated_names for databases and tables
# Always use the utf8mb4 character set and the utf8mb4_unicode_ci collation
# Use these exact credentials to setup the connection in the `config.php` file
- **Database Host:** `localhost`
- **Database Name:** `project_name_example_database`
- **Username:** `root`
- **Password:** `snapper`
---
### STARTER TEMPLATE
---
Revise this template with your project details:
---
# Product Development Plan
## Vision
For **(target customer)**  
Who **(statement of need or opportunity)**  
The **(product name)** is a **(product category)**  
That **(key benefit, reason to buy)**  
Unlike **(primary competitive alternative)**  
Our product **(statement of primary differentiation)**

## Purpose
> *Explain the specific objectives and the intended impact of the project.*
## Target Group
- **Users:** *Identify the primary users of the product.*
- **Customers:** *Specify the main customer segments.*
## Needs
> *Summarize the needs or pain points the product will address.*
## Product
- **Product Name:** *[Insert Product Name]*
- **Category:** *[Insert Product Category]*
- **Description:** *Brief overview of the product's functionality or appearance.*
## Business Goals
- *List key business goals for the product (e.g., revenue stream, brand development).*
---
Fill-in the following template to create a customized development checklist. Keep it updated as you develop the project:
---
# Development Checklist

## Milestone 1: [Milestone Name]

### Epic 1: [Epic Name]
- **Feature 1: [Feature Name]**
  - **User Story 1: [User Story Description]**
    - **Acceptance Criteria:**
      1. [Acceptance Criteria 1]
      2. [Acceptance Criteria 2]
      3. [Acceptance Criteria 3]
  - and so on...up to 3 user stories per feature

### Epic 2: [Epic Name]
- **Feature 1: [Feature Name]**
  - **User Story 1: [User Story Description]**
    - **Acceptance Criteria:**
      1. [Acceptance Criteria 1]
      and so on...up to 3 acceptance criteria per user story
  - and so on...up to 3 user stories per feature
- and so on...up to 3 features per epic
and so on...up to 3 epics per milestone
---
Make sure to ALWAYS update the README.md file with your current project details.
