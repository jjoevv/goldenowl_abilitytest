import React, { useState } from 'react';
import InputForm from './InputForm';
import Breadcrumb from '../../components/Breadcrumbs/Breadcrumb';

// Define the type for each score item
type Score = {
  sbd: string;
  math: number;
  literature: number;
  foreign_language: number;
  physics?: number;
  chemistry?: number;
  biology?: number;
  history?: number;
  geography?: number;
  civic_education?: number;
};

const SearchScores: React.FunctionComponent = () => {
  const [input, setInput] = useState('');
  const [scores, setScores] = useState<Score[]>([]); // Specify Score[] as the type
  const [result, setResult] = useState(false); // Trạng thái cho kết quả

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Logic to handle the form submission and update scores
    // Example: Simulate fetching scores based on input
    const fetchedScores: Score[] = [
      { sbd: input, math: 85, literature: 90, foreign_language: 80 },
    ];

    setScores(fetchedScores); // Cập nhật điểm
    setResult(true); // Cập nhật kết quả
  };

  return (
    <div className="mx-auto max-w-270">
      <Breadcrumb pageName="Search Scores" />
      {/* Input Section */}
      <InputForm input={input} handleChange={handleChange} handleSubmit={handleSubmit} />

      {/* Display Section */}
      <section className="mt-5 w-full bg-white p-5 pt-10 rounded-lg">
        {result ? (
          <>
            <h2 className="text-lg md:text-xl font-semibold mb-3">Scores List</h2>
            <table className="w-full border border-gray-300 text-sm md:text-base">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2">Registration Number</th>
                  <th className="border p-2">Math</th>
                  <th className="border p-2">Literature</th>
                  <th className="border p-2">Foreign Language</th>
                  <th className="border p-2">Physics</th>
                  <th className="border p-2">Chemistry</th>
                  <th className="border p-2">Biology</th>
                  <th className="border p-2">History</th>
                  <th className="border p-2">Geography</th>
                  <th className="border p-2">Civic Education</th>
                </tr>
              </thead>
              <tbody>
                {scores.map((score, index) => (
                  <tr key={index} className="hover:bg-gray-200">
                    <td className="border p-2">{score.sbd}</td>
                    <td className="border p-2">{score.math}</td>
                    <td className="border p-2">{score.literature}</td>
                    <td className="border p-2">{score.foreign_language}</td>
                    <td className="border p-2">{score.physics ?? 'N/A'}</td>
                    <td className="border p-2">{score.chemistry ?? 'N/A'}</td>
                    <td className="border p-2">{score.biology ?? 'N/A'}</td>
                    <td className="border p-2">{score.history ?? 'N/A'}</td>
                    <td className="border p-2">{score.geography ?? 'N/A'}</td>
                    <td className="border p-2">{score.civic_education ?? 'N/A'}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        ) : (
          <>
            <h2 className="text-lg font-semibold text-gray-500 mt-5">Detailed Scores</h2>
            <span>Detailed view of search scores here!</span>
          </>
        )}
      </section>
    </div>
  );
};

export default SearchScores;
