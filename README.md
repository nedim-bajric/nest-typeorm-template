# Nest TypeORM Template

This is a template for a NestJS project using TypeORM for database management. This README will guide you through setting up your environment variables and running migrations.

## Getting Started

1. **Clone the Repository:**

   ```
   git clone https://github.com/nedim-bajric/nest-typeorm-template.git

   ```

2. **Configure .env file**

   ```
   APP_PORT=
   POSTGRES_DB=
   POSTGRES_USER=
   POSTGRES_PASSWORD=
   POSTGRES_HOST=
   POSTGRES_PORT=

   ```

3. **Install dependencies**
   ```
   yarn
   ```
4. **Start docker**
   ```
   docker-compose up -d
   ```
5. **Start application**

   ```
   yarn start:dev

   ```

6. **Database migrations**

   Create entity inside the <b>/src/shared/database/entities</b>.
   Create migration file with command:

   ```
   yarn run create /src/shared/database/migrations/MIGRATION_NAME
   ```

   Open created file, write migration and run command:

   ```
   yarn run migrate
   ```
