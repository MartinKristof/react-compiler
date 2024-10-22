import { Examples } from './examples/Examples';
import { Repl } from './components/Repl';

export const App = () => (
  <div className="bg-slate-800">
    <title>React Compiler</title>
    <meta name="description" content="A simple app." />
    <link rel="author" href="https://github.com/MartinKristof" />
    <section className="py-3 container mx-auto px-4 flex flex-col space-y-4 text-left">
      <div className="bg-slate-800">
        <h1 className="text-4xl text-white font-bold">React Compiler Demo</h1>
        <h2 className="mt-4 text-2xl text-white font-bold">Preview</h2>
        <div className="mt-2 border p-4 bg-slate-700 text-white rounded-lg shadow-md">
          <Examples />
        </div>
      </div>
      <Repl />
    </section>
  </div>
);
