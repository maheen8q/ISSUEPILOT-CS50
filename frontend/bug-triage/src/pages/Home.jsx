import { useState, useEffect, useRef } from "react";

import Hero from "../components/Hero";
import IssueForm from "../components/IssueForm";
import Prediction from "../components/Prediction";
import SimilarIssues from "../components/SimilarIssues";

function Home() {
  const [result, setResult] = useState(null);
  const [animKey, setAnimKey] = useState(0);
  const resultsRef = useRef(null);

  const handleResult = (data) => {
    setResult(data);
    setAnimKey((k) => k + 1);
  };

  useEffect(() => {
    if (result && resultsRef.current) {
      setTimeout(() => {
        resultsRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 80);
    }
  }, [animKey]);

  return (
    <main className="container page-enter">
      <Hero />

      <IssueForm setResult={handleResult} />

      {result && (
        <div key={animKey} ref={resultsRef} className="results-reveal">
          <Prediction result={result} />
          <SimilarIssues issues={result.similar_issues} />
        </div>
      )}
    </main>
  );
}

export default Home;
