import Iframe from 'react-iframe';
import { Examples } from './examples/Examples';

export const App = () => (
  <div className="bg-white dark:bg-slate-800">
    <title>React Compiler</title>
    <meta name="description" content="A simple app." />
    <link rel="author" href="https://github.com/MartinKristof" />
    <section className="py-3 container mx-auto px-4 flex flex-col space-y-4 text-left">
      <h1 className="text-4xl dark:text-white font-bold">React Compiler Demo</h1>
      <h2 className="text-2xl dark:text-white font-bold">Preview</h2>
      <div className="border p-4 bg-gray-100 dark:bg-slate-700 dark:text-white rounded-lg shadow-md">
        <Examples />
      </div>
      <div>
        <h2 className="text-2xl dark:text-white font-bold">Babel</h2>
        <Iframe
          url="https://babeljs.io/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=JYWwDg9gTgLgBAbzgVwM4FMDKMCGN0A0KGAsuiBEQGIDCcAvnAGZQQhwDkU6OAxjBwDcAKGHoAHpFhxeEAHap4NCMjn4oAERUAjADboAJgC44tOAF44ACgCUFgHyJhcGfMVwA2rNUwiGGMo-ALoWxFi4-FYADDYizq4K8AY6-gaBaqFo6GQUVrYOrj5wAFRwAExEXipqQbGiLtwwyFBy1vEuADwGwABu9u0ucB1g9ukwJgjJyHqGY_QdAPQjA53ayDAw8nAwAJ5g6OYARGsb8odw8jS6wLwA1uYI-eaO_mNW3hkA1HAAjDb0_UGQLgAEk5LxuCB0GoVkMFidNnJAYNFt0-vE6vQREA&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2%2Ctypescript&prettier=true&targets=&version=7.25.8&externalPlugins=&assumptions=%7B%7D"
          width="100%"
          height="500px"
          id="babel"
          className=""
          display="block"
          position="relative"
          allowFullScreen
        />
        <h2 className="text-2xl dark:text-white font-bold">Compiler</h2>
        <Iframe
          url="https://playground.react.dev/#N4Igzg9grgTgxgUxALhASwLYAcIwC4AEwBUYCAyngIZ4IA0JZAsghhAwGIDCBAvgQDMYEDAQDkMBFTh4xAbgA6AO2UIAHjnwE4EJWEJdoS2jAAi0AEYAbBABNkBbgQC8BABQBKFwD4iygtq6+gQA2jpQxgxkeIYReAC6LowU1LRuAAweiipKATp6hLaWNraxxkmkCCxsbp4+gXEEAFQEAEwMYUYJWcr+BJJ4sLlufQEAPLZoAG7eowEEY1jeZXgOwEVQ1nYrvGMA9Etz4xZQeHi6BHgAnlgIzgogJ2e6DwS6XFZocADWzsB1zl80RWbnC5QA1AQAIweXizXLzREASSUcEkGAQxiOCz2T3OSnhiP2kxmfR6Sl42RAvCAA"
          width="100%"
          height="800px"
          id="compiler"
          className=""
          display="block"
          position="relative"
          allowFullScreen
        />
      </div>
    </section>
  </div>
);
