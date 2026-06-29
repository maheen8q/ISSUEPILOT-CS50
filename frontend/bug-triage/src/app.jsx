import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import IssueForm from "./components/IssueForm";
import Prediction from "./components/Prediction";
import SimilarIssues from "./components/SimilarIssues";
import Footer from "./components/Footer";

function App() {
  const [result, setResult] = useState(null);

  return (
    <>
      <Navbar />

      <main className="container">
        <Hero />

        <IssueForm setResult={setResult} />

        {result && (
          <>
            <Prediction result={result} />

            <SimilarIssues issues={result.similar_issues} />
          </>
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;
