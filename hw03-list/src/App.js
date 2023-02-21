import { Home } from "./pages/home/Home";
import { Header } from "./common/header/Header";

import './style/main.css'


function App() {
  return (
    <div className="wraper">
<Header/>

<main>
<Home/>
</main>

    </div>
  );
}

export default App;
