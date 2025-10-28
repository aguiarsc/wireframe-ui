# Contributing

Thanks for your interest in contributing to wireframe-ui. I'm happy to have you here.

Please take a moment to review this document before submitting your first pull request. I also strongly recommend that you check for open issues and pull requests to see if someone else is working on something similar.

If you need any help, feel free to reach out to [@aguiarsc](https://github.com/aguiarsc).

## About this repository

This repository contains the wireframe-ui component library and documentation site.

- I use [pnpm](https://pnpm.io) for package management.
- I use [Next.js](https://nextjs.org) for the documentation site.
- I use [Tailwind CSS](https://tailwindcss.com) for styling.

## Structure

This repository is structured as follows:

```
wireframe-ui
├── app
│   ├── page.tsx          # Component documentation
│   └── showcase          # Showcase blocks
├── components
│   ├── icons             # Animated icons for docs
│   └── ...               # Site components
├── registry
│   └── new-york
│       ├── ui            # Wireframe components
│       └── lib           # Utilities
│       └── icons         # Animated icons dependant to wireframe components
└── public
    └── r                 # Component registry JSON
```

| Path                     | Description                                    |
| ------------------------ | ---------------------------------------------- |
| `app`                    | The Next.js application for the website.       |
| `components`             | The React components for the website.          |
| `registry/new-york/ui`   | The wireframe UI components.                   |
| `registry/new-york/lib`  | Utilities for wireframe components.            |
| `registry/new-york/icons`| Animated icons dependant to wireframe components.|
| `public/r`               | The registry JSON files for the components.    |

## Development

### Fork this repo

You can fork this repo by clicking the fork button in the top right corner of this page.

### Clone on your local machine

```bash
git clone https://github.com/your-username/wireframe-ui.git
```

### Navigate to project directory

```bash
cd wireframe-ui
```

### Create a new Branch

```bash
git checkout -b my-new-branch
```

### Install dependencies

```bash
pnpm install
```

### Run the development server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Components

I use a registry system for developing components. You can find the source code for the components under `registry/new-york/ui`.

When adding or modifying components, please ensure that:

1. You update the component in `registry/new-york/ui`.
2. You update the documentation in `app/page.tsx`.
3. You run `pnpm registry:build` to update the registry.
4. You run `pnpm validate:registry` to validate the registry.

## Commit Convention

Before you create a Pull Request, please check whether your commits comply with the commit conventions used in this repository.

When you create a commit we kindly ask you to follow the convention `category(scope): message` in your commit message while using one of the following categories:

- `feat`: all changes that introduce completely new code or new features
- `fix`: changes that fix a bug (ideally you will additionally reference an issue if present)
- `refactor`: any code related change that is not a fix nor a feature
- `docs`: changing existing or creating new documentation (i.e. README, docs for usage)
- `style`: changes that do not affect the meaning of the code (white-space, formatting, etc)
- `perf`: changes that improve performance
- `test`: all changes regarding tests (adding new tests or changing existing ones)
- `chore`: all changes to the repository that do not fit into any of the above categories

e.g. `feat(components): add new wireframe text component`

If you are interested in the detailed specification you can visit https://www.conventionalcommits.org/

## Requests for new components

If you have a request for a new component, please open an issue on GitHub. I'll be happy to help you out.

## Testing

Please ensure that your changes pass linting and type checking:

```bash
pnpm lint
pnpm type-check
```

Please ensure that the tests are passing when submitting a pull request. If you are adding new features, please include tests.
