# StudAid Authentication Microservice
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](http://prettier.io) [![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/) [![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

### Before starting - dev stage
```bash
npm run build
npm run start:dev
```

### Before starting - dev stage
```bash
npm run start:dev
```

## Routes
  - User
    - [] Register User
    - [] Login User
  - Category
    - [] Create Category
    - [] Read Category
    - [] Edit Category
    - [] Delete Category
    - [] List Categories
  - Shop
    - [] Create Shop
    - [] Read Shop
    - [] Edit Shop
    - [] Delete Shop
    - [] List Shops
    

## Project Structure
| Name                        | Description                                             |
| --------------------------- | ------------------------------------------------------- |
| **@types/**                 | Custom Types                                            |
| **config/**                 | Project's Environment Variables                         |
| **config/jwt/**             | JWT public keys from OpenSSL                            |
| **src/**                    | Source files                                            |
| **src/auth/**               | Authenticating Requests                                 |
| **src/common/**             | Files Used by other structures such as utils            |
| **src/common/core/**        | Reusable source code / Generalized classes              |
| **src/common/exceptions/**  | Program Exception Handling files                        |
| **src/common/middlewares/** | Middlewares (Programs run at server entrance)           |
| **src/common/utils/**       | Utility files (contains small reusable code)            |
| **src/config/**             | All configuration variables                             |
| **src/loaders/**            | Loading of servers and bootsrap functions               |
| **src/modules/**            | Business logic modules                                  |
| **src/providers/**          | Third party services such as gps, logger                |


