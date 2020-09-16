# Materialize CSS boilerplate

A boilerplate for a static site using materialize.

## Table of Contents

- [Getting Started](#getting-started)

  - [Installation](#installation)
  - [Editing](#editing)

- [Contributing](#contributing)

  - [Issue tracker](#issue-tracker)
  - [Issue labels](#issue-labels)
  - [Bugs](#bugs)
  - [Feature requests](#feature-requests)
  - [Pull requests](#pull-requests)

## Getting Started

### Installation

To start using this project you will need to clone it or download the zip. Type the following to clone the project: `git clone https://github.com/Kvanrooyen/materializecss-boilerplate.git` or you can download the zip file from [here](https://github.com/Kvanrooyen/materializecss-boilerplate/archive/master.zip).

### Editing

The project conatins a simple setup of what you can do with materialize. The names and titles of certain elements will assist you in what to edit. (e.g. A `h1` might have the following "Insert your company name here"). Bodies of text will be filled with [lorem ipsum](https://lipsum.com/), any lorem ipsum text can be changed.

## Contributing

If you would like to contribute please read this first.

### Issue tracker

Use the issue tracker for any issues - bug reports, feature requests etc. - you may come across. Provide as much detail as you can, to help make the process go quicker.

### Issue labels

Use lables to help organise your issue. The project uses the following lables:

- `bug` - Something isn't working
- `duplicate` - This issue or pull request already exists
- `enhancement` - New feature or request
- `good first issue` - Good for newcomers
- `help wanted` - Extra attention is needed
- `invalid` - This doesn't seem right
- `question` - Further information is requested
- `wontfix` - This will not be worked on

### Bugs

When reporting a bug in the code, make sure that it can be reproduced - show the steps to reproduce. Rememeber the following before making a bug report.

1. **Search the issues page** - make sure the issue hasn't been reported already or been fixed in a newer release.
2. **Reproduce the problem** - make sure you can reproduce the problem, and it's not an error in your own code.

If you are sure that the problem is a bug and reproduceable, you can then create an issue. When creating an issue be as detailed as possible, this makes it easier to try and solve the problem. Use the example below as reference.

> Short and descriptive example bug report title
>
> A summary of the issue and the browser/OS environment in which it occurs. If suitable, include the steps required to reproduce the bug.
>
> This is the first step
> This is the second step
> Further steps, etc.
>
> Any other information you want to share that is relevant to the issue being reported. This might include the lines of code that you have identified as causing the bug, and potential solutions (and your opinions on their merits).

### Feature requests

Feature requests are welcome and encouraged, if you believe they will benefit the project. When creating a feature request, you will need to provide as many details as you can - sample code is great.

### Pull requests

Pull requests can be a great help if done correctly. To help everyone involved please adhere to the following guidelines.

1. [Fork](https://help.github.com/articles/fork-a-repo/) the project, clone your fork, and configure the remotes:

   ```git
   # Clone your fork of the repo into the current directory
   git clone https://github.com/<your-username>/materializecss-boilerplate.git
   # Navigate to the newly cloned directory
   cd materializecss-boilerplate
   # Assign the original repo to a remote called "upstream"
   git remote add upstream https://github.com/Kvanrooyen/materializecss-boilerplate.git
   ```

2. If its been a while since you cloned, get the lates changes from the upstream:

   ```git
   # Ensure you are on master branch
   git checkout master
   # Get any changes from upstream
   git pull upstream master
   ```

3. Create a new branch - off of main developement branch - to contain any new features, changes or fixes:

   ```git
   # Create a new branch and switch to it
   git checkour -b <branch-name>
   ```

4. Commit your changes. Remember when commiting, to keep it logical and related to your feature, change or fix.

5. Push your changes to your fork:

   ```git
   git push origin <branch-name>
   ```
