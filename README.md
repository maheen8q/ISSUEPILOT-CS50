# IssuePilot: AI-Powered Bug Triage Assistant

#### Video Demo: https://youtu.be/YOUR_VIDEO_LINK_HERE

#### Description:

IssuePilot is an AI-powered web application designed to assist software developers and teams in triaging bug reports efficiently. The application analyzes a bug report's title and description using machine learning models to predict its priority, suggest the most relevant software component, and retrieve similar issues from a historical dataset. The goal of the project is to reduce the manual effort involved in categorizing incoming issues while providing developers with useful context from previously reported bugs.

I chose this project because issue triaging is a repetitive yet important task in software development. Many open-source projects receive hundreds or thousands of bug reports, making it difficult to determine which issues should be addressed first or which team is responsible for resolving them. IssuePilot aims to simplify this process by automating the initial analysis of bug reports using machine learning techniques.

The project consists of a FastAPI backend and a React frontend. The backend exposes REST API endpoints that receive bug reports, process them through trained machine learning models, and return structured predictions. The frontend provides a clean and user-friendly interface where users can submit bug reports and instantly view the predictions.

The backend is responsible for handling all business logic. The main application is implemented using FastAPI, which provides a lightweight and efficient framework for creating APIs. The backend contains several modules that separate different responsibilities:

- **main.py (or app.py)** initializes the FastAPI application, configures middleware such as CORS, and defines the API endpoints.
- **schemas.py** defines the request and response models using Pydantic to validate incoming data.
- **services/predictor.py** loads the trained machine learning models and predicts both the issue priority and the software component.
- **services/similarity.py** computes textual similarity using TF-IDF vectorization and cosine similarity to retrieve the most relevant historical issues.
- **ml/** contains scripts used to clean datasets, prepare training data, and train the machine learning models. The trained models are stored as serialized joblib files and loaded during runtime.

The frontend was developed using React with Vite. It communicates with the backend through HTTP requests and displays predictions in an intuitive layout. The interface contains several reusable components:

- **IssueForm** allows users to enter the bug title and description.
- **Prediction** displays the predicted priority and component.
- **SimilarIssues** lists historical issues that are most similar to the submitted report.
- **Navbar**, **Hero**, and **Footer** provide the overall page layout and navigation.

Machine learning is one of the key aspects of this project. Two separate text classification models were trained: one predicts issue priority (Low, Medium, or High) while the other predicts the affected software component (Frontend, Backend, Database, API, Authentication, UI, or Other). Both models use TF-IDF vectorization to transform textual bug reports into numerical feature vectors before classification. A separate TF-IDF vectorizer and cosine similarity algorithm are used to retrieve the three most similar issues from the dataset.

Several datasets were cleaned and processed before training. Duplicate issues were removed, missing values were handled, and issue descriptions were normalized to improve model performance. This preprocessing significantly improved prediction quality and similarity search accuracy.

One of the biggest design decisions during development was separating machine learning logic from the web application itself. Instead of embedding all prediction code directly into the API routes, the prediction and similarity logic were implemented as independent service modules. This makes the application easier to maintain, extend, and test. If different machine learning models are trained in the future, they can simply replace the existing model files without requiring major changes to the API.

Another design decision was choosing FastAPI instead of Flask. FastAPI offers automatic request validation through Pydantic, interactive API documentation, excellent performance, and asynchronous support, making it a better choice for a machine learning inference service.

Docker support was also added to simplify deployment. Containerizing the application ensures that all dependencies are installed consistently across different environments, making the project easier to run on any machine or cloud platform.

Throughout this project, I gained practical experience with backend API development, machine learning model deployment, REST APIs, React frontend development, Docker, Git, and software project organization. Working on IssuePilot allowed me to combine multiple areas of computer science into a single application rather than focusing on only one technology.

There are several possible improvements that could be added in the future. These include user authentication, issue history tracking, confidence scores for predictions, support for additional issue categories, cloud deployment, integration with GitHub Issues or Jira APIs, and replacing the classical machine learning models with transformer-based language models for improved prediction accuracy.

Overall, IssuePilot demonstrates how machine learning can be integrated into modern web applications to automate repetitive software engineering tasks. It combines backend development, frontend development, machine learning, and software engineering principles into a practical tool that can assist developers during the bug triage process.
