import { useEffect } from "react";
import "./App.css";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://api.thedogapi.com/v1/images/search?limit=100&api_key=live_kpDnTm16Rv2OHPDDjvlWGNozll34qx2QsKGLbWVO9gbbZ4FA1FG6cEWNVoKAsurV&has_breeds=1"
      );
      const data = await res.json();
      console.log(data);
      // Filter out the images that have breed information
    };

    fetchData();
  }, []);
  return <div className="App">app</div>;
}

export default App;
