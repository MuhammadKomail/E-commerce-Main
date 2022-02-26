import React from "react";
import Loader from "react-loader-spinner";

const App = () => {
  return (
    <div className="center">
      <Loader
        type="Puff"
        color="black"
        height={100}
        width={100}
      />
    </div>
  )
}

export default App;