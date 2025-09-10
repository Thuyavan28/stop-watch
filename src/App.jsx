import { useEffect, useState } from "react";

function App() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setTime((preTime) => preTime + 10);
      }, 10);
    } else if (!running) clearInterval(interval);
    return () => clearInterval(interval);
  }, [running]);

  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-black text-white">
        <div className="space-y-6 p-6 bg-gray-800 bg-opacity-60 rounded-2xl shadow-lg">
          <h1 className="text-4xl font-bold tracking-widest">Stopwatch</h1>
          <div className="text-3xl font-mono bg-gray-900 p-4 rounded-lg shadow-inner">
            <span>{"0" + Math.floor((time / 60000) % 60).toString().slice(-2)}:</span>
            <span>{"0" + Math.floor((time / 1000) % 60).toString().slice(-2)}:</span>
            <span>{"0" + Math.floor((time / 10) % 100).toString().slice(-1)}</span>
          </div>
          <div className="flex space-x-4 justify-center">
            {!running ? (
              <button
                onClick={() => setRunning(true)}
                className="px-6 py-2 bg-green-600 hover:bg-green-500 rounded-full font-semibold transition"
              >
                Start
              </button>
            ) : (
              <button
                onClick={() => setRunning(false)}
                className="px-6 py-2 bg-red-600 hover:bg-red-500 rounded-full font-semibold transition"
              >
                Stop
              </button>
            )}
            <button
              onClick={() => setTime(0)}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-500 rounded-full font-semibold transition"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
