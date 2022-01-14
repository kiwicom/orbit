# Commits

## Commit Messages

We're using [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) to ensure consistency of commit messages and to generate a changelog. We set up a git hook which makes sure that your commit message follows this format.

Furthermore, it's important to write good commit messages because they tell the story of why certain changes have been made. While the reason might seem obvious based on the changes at the moment of committing, it often isn't after some time has passed, and a problem that has been fixed without explanation is bound to re-emerge again. For pratical tips we recommend reading [_How to Write a Git Commit Message_](https://chris.beams.io/posts/git-commit/).

For example, the commit message `fix(Tooltip): wrong colors` doesn't tell us enough, but even worse it actually sounds like it's _introducing_ the problem! 😄 Instead do your best to express the commit message as a solution, not a problem: `fix(Tooltip): unify background colors across devices`.

Summarizing the solution is often tricky because it's recommended to keep the subject length under 50 characters, so try your best to be creative. However, also keep in mind that commit subjects are used to generate the changelog, so if you _have_ to break the character limit to make that changelog entry clear enough, do it.

## Commit History

We usually merge pull requests by squashing them, when changes belong together. In that case feel free to use GitHub's "Update branch" button to merge latest changes from the main branch into your branch.

Sometimes, though, some sets of changes aren't really related and should ideally be committed separately, in that case make sure to [keep your history tidy with git rebase](https://silvenon.com/blog/better-git-history/rebasing) so we can merge your pull request without squashing. However, we're aware that git isn't everyone's strong suit, so we will never ask this of you. 😉
