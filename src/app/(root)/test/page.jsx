"use client";

import { useState } from "react";
import HashLoader from "react-spinners/HashLoader";

function TestPage() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ed563b");

  return (
    <div className="mt-32">
      <button onClick={() => setLoading(!loading)}>Toggle Loader</button>
      <input
        value={color}
        onChange={(input) => setColor(input.target.value)}
        placeholder="Color of the loader"
      />

      <HashLoader
        color={color}
        loading={loading}
        size={150}
      />
    </div>
  );
}

export default TestPage;
