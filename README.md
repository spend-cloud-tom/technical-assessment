# Notes from submission

Firstly, thank you for this exercise. Having almost no knowledge of Vue and Nuxt, this was a huge learning experience.

Here is a list of what I changed and my decisions:

- Created generic character components to manage both Pokemon and Rick and Morty views.
- Components:
  - character-details
  - character-image
  - character-list-item
  - character-list-view
- Page:
  - rick-and-morty
- Composables:
  - useRickAndMortyList
- Used existing practices such as snake case file naming, and auto imports (when available).
- Use Pinia for a global store to manage list toggle. This may not have been necessary but I wanted to understand the syntax.

## Trade offs

- I spent some time trying to implement e2e tests but ultimately ran into too many errors and opted for a few unit tests.
- I created a dynamic route for `/[characters]` with the intention of managing `/pokemon` and `/rick-and-morty` dynamically, but quickly learned that controlling the fetcher function needed for these unique instances was too messy. Keeping the explicit `/pokemon` and `/rick-and-morty` routes is cleaner from a maintenance and readability perspective. Given the current scope of the exercise, I feel this is an ok choice.
- UX changes. I renamed the header display of the app to be "Character browser" as it makes more sense after adding Rick and Morty. It is no longer just a Pokemon app.
- The list view CSS could likely be improved. I need to spend more time understanding how Nuxt handles dynamic css.
- Typing the `useRoute` hook I found to be difficult. Casting the types seems to be the only option right now.
- Pascal case for test component names. I didn't spend much time on this issue, but for some reason, vitest did not like naming test files as snake case.
- Properly mocking api-party module for testing was proving to be difficult. If I had more time, I would figure this out.

## Potential improvements

- Loading and error states
- Using cva for dynamic css
- e2e and integrations tests
- Route naming protection with constants rather than strings ex: <nuxt-link :to="ROUTES.rickAndMorty"...

## Running

Development server

```
pnpm run dev
```

Build

```
pnpm run build
```

Run test:

```
pnpm run test
```

# Tech assessment

## For the role of Software Engineer at Visma | ProActive

This repository contains an install of [Nuxt](https://nuxt.com/) with a simple layout and a few pages. It also has a couple of modules installed. There's one module that connects to the [Pokemon API](https://pokeapi.co/).

The goal of this assessment is to evaluate your skills in software development. We are looking for a candidate that can write clean, maintainable code and has a good understanding of the technologies used in this project.

Please don't spend more than 4 hours on this assessment. We are not looking for a perfect solution, but we want to see how you approach the problem and how you solve it. If you don't have time to finish all the tasks, that's fine. Just submit what you have done.

## Task

Connect to an additional API: the [Rick and Morty API](https://rickandmortyapi.com/). Display a list of characters from the Rick and Morty universe. The list should be displayed in a new page, `/rick-and-morty`. Each character should be displayed with their name, species, and an image. When clicking on a character, the user should be taken to a new page, `/rick-and-morty/:id`, where they can see more details about the character.

## Character list feature specs

- Display a list of characters
- Allow users to toggle between a grid and list view

## Bonus points

- Add a search bar to filter characters by name
- Add automated tests (use Vitest)

## Submission

Please submit your solution as a pull request to this repository. The PR should include a description of the changes you made and how to run the project locally.

Good luck! 🚀
