# Contributing

BlizzAPI is as an open source project. Contributions of any kind are welcome.

You can contribute to the project in many ways:

- file a bug report
- suggest a feature
- improve documentation either within the project itself or the [doc site repository](https://github.com/blizzapi/blizzapi-docs)
- submit a pull request

## Bug reports

If you encounter unexpected behavior, design flaw or any other kind of error that needs to be fixed, feel free to file a bug report in [Issues section on GitHub](https://github.com/blizzapi/blizzapi/issues).

There is no specific format you have to follow while filing your report. However, it's highly advisable you include at least some of following information:

- clear and concise bug description
- steps to reproduce the problem
- code samples or test cases that induce faulty behavior (if applicable)
- expected behavior - what you expected to happen
- any other contextual information about the problem (if applicable)

## Feature suggestions

You can use [GitHub Issues section](https://github.com/blizzapi/blizzapi/issues) to suggest ideas or features you would like to be added to the project.

There is no specific format you have to follow while filling your request. Just be sure to provide clear and concise description of the feature. Examples, test cases and any additional context would be greatly appreciated.

## Documentation improvements

Documentation in BlizzAPI exists primarily in two forms:

- Text files such as README.md that function alongside project code
- Documentation site maintained at https://github.com/blizzapi/blizzapi-docs

Feel free to submit any relevant fixes (typos, error corrections, improvements to code samples) regardless of how trivial they seem.

## Pull requests

Code patches that add features or fix bugs can be sent as [pull requests on GitHub](https://github.com/blizzapi/blizzapi/pulls).

To make the process of merging your pull request as quick as possible, be sure to read and follow the guidelines below:

- All GitHub status checks marked as 'Required' MUST pass in order to merge the pull request.

- It's highly appreciated if you attempt to fix any failing status checks not marked as 'Required'. Their purpose is to help maintaining general project hygiene but they aren't meant to be gatekeepers. A small percentage of issues may be false positives that can be safely ignored. Use your best judgement while deciding whether it's something you should spend time working on.

- Adding tests for your code is highly appreciated but not mandatory. Again, use your best judgement whether this is something you can provide within reasonable timeframe.

- If your pull request isn't ready to be merged, please prefix its title with 'WIP' (Work In Progress) or indicate this in the description.

- Pull requests are merged to `master` branch via squash-and-merge strategy. There are no specific requirements about quality and quantity of commits within feature branches.

- Feel free to add yourself to [AUTHORS](https://github.com/blizzapi/blizzapi/blob/master/AUTHORS) file if you haven't done so.

## Technical information

This section intends to explain how the project works from the developer's point of view. If you have any questions that weren't answered here, feel free to [submit an issue on GitHub](https://github.com/blizzapi/blizzapi/issues).

### Development

BlizzAPI is written in TypeScript and compiles to ES5 with `tsc` command. To run the project in development mode, use `npm run dev` or `tsc -w`.

Full project build, including linting and testing, can be triggered with `npm run build`. To trigger a build without linting and testing use `tsc`.

Type definitions are storted in `types.ts` file. Storing them in a separate file allows for reusing them in multiple places.

### Code conventions / linting

BlizzAPI uses [Airbnb style guide](https://github.com/airbnb/javascript) as a base for linting. Code formatting is enforced by [Prettier](https://prettier.io/). If your editor doesn't support automatic formatting on save, please make sure to run `npm run format` before submitting your change.

Internal project code is intended to follow basic principles of functional programming. Non-functional constructs, such as `BlizzAPI` class, are occasionally used for user interface.

Linting is a part of build process. Unresolved lint errors fail the build. However, in justified situations it's acceptable to [disable selected lint rules with inline comments](https://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments).

### Testing

For automated unit testing, BlizzAPI uses [Jest](https://jestjs.io/). All code related to testing is contained in `tests` folder which mimicks the structure of `src` directory. Names of test files follow the following pattern: `nameOfRelevantSourceFile.test.ts`.

Testing is done via:

- manual and automatic mocks contained in `__mocks__` directory as well as within the test files,
- reusable sample data sets contained within `__testData__` directory
- auto-generated Jest snapshots within `__snapshots__` directory which describe desired outcome of code being tested

All test components and assertions are treated as an integral part of project code.

It's possible to create new snapshots in test assertions with help of [`toMatchSnapshot()`](https://jestjs.io/docs/en/snapshot-testing) method. Jest will auto-generate new snapshots on next run of `npm test`. Resulting changes must be committed to Git.

If a code change modifies one or more existing snapshots or makes any of the existing snapshots obsolete, snapshot changes have to be reviewed and accepted manually before proceeding. Accepting snapshot changes is done by running `npm test -- -u`. Resulting changes must be committed to Git.

Each run of `npm test` command generates human-readable coverage report which can be accessed locally in a web browser by opening `/path/to/blizzapi/coverage/lcov-report/index.html`. Those reports often provide hints on how to fill coverage gaps.

Note that automated unit tests are powerful tool for quick quality control, but they don't replace the need for integration testing against real-life contexts. In other words, be sure to test your change with Battle.net API. :)

### Releases

Whenever possible, BlizzAPI follows [semantic versioning](https://semver.org/) for all releases available in [Releases section on GitHub](https://github.com/blizzapi/blizzapi/releases) and on [NPM package manager](https://www.npmjs.com/package/blizzapi). The project is considered production-ready and it doesn't follow any specific release schedule.
