import { BrowserRouter, Switch, Link } from 'react-router-dom';
import Beranda from './Component/Beranda';
import Sejarah from './Component/Sejarah';
import Pemerintahan from './Component/Pemerintahan';
import Pariwisata from './Component/Pariwisata';
import Kuliner from './Component/Kuliner';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Link path="/" exact component={Beranda} />
        <Link path="/Sejarah" exact component={Sejarah} />
        <Link path="/Pemerintahan" exact component={Pemerintahan} />
        <Link path="/Pariwisata" exact component={Pariwisata} />
        <Link path="/Kuliner" exact component={Kuliner} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
