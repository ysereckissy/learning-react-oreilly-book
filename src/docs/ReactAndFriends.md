# 1. Babel Presets
Babel 6 breaks possible transformations up into modules called presets. It requires engineers to explicitly define which transformations should be run by specifying which presets to use. The goal was to make everything more modular to allow developers to decide which syntax should be converted. The plugins fall into a few categories, and all are opt-in based on the needs of the application. The presets you're most likely to use are:

___babel-preset-es2015___: Compile ES2015, or ES6, to ES5

___babel-preset-es2016___: Compile ES2016 to ES2015

___babel-preset-es2017___: Compile what is ES2017 to ES2016

___babe-preset-env___: Compiles everything from ES2015, ES2016, ES2017. A catch-all for the previous three presets.

___babel-preset-react___: Compiles JSX to React.createElement calls.

When a new feature is proposed for inclusion in the ECMAScript spec, it goes through stages of acceptance from stage 0, Strawman (newly proposed and vey experimental), to stage 4, Finished (accepted as part of the standard). Babel provides presets for each of these stages, so you can choose whch stage you want to allow in your application:

- babe-preset-stage-0: Strawman
- babel-preset-stage-1: Proposal
- babel-preset-stage-2: Draft
- babel-preset-stage-3: Candidate

# 2. Introduction to Webpack
