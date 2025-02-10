# 🚀 Executar o projeto

Para executar o projeto localmente, basta executar o seguinte comando para gerar o `arquivo .env` e o `container com o banco de dados`:

```bash
cp .env.example .env && docker compose up --build -d
```

E executar o seguinte comando para rodar o projeto:

```bash
npm run dev
```

# Prisma

O Prisma é uma ORM (Object-Relational Mapping) que facilita a interação com bancos de dados. Ele é composto por três principais ferramentas:

- `Prisma Client` - Gerador automático de consultas com segurança de tipos.
- `Prisma Migrate` - Gerencia migrações do banco de dados.
- `Prisma Studio` - Interface gráfica para visualizar a manipular os dados do banco de dados.

Para instalá-lo, é necessário executar o seguinte comando, definindo que ele será uma `devDependency`:

```bash
npm install -D prisma
```

# Gerar o Schema

Para definir a estrutura do banco de dados, como o client, o tipo de banco de dados e a connection string, é necessário gerar o schema executando o seguinte comando no terminal:

```bash
prisma init
```

# Criando o Model

No Prisma, as tabelas do banco de dados são representadas como models. A extensão do Prisma oferece `IntelliSense`, incluindo `destaque de sintaxe` e `autocomplete` ao escrever os models.

Cada campo do model contém:

- Nome do campo.
- Tipo de dado.
- Atributos e decorators, como @default, que define um valor padrão, e outros específicos para cada tipo de dado.

Caso seja necessário mapear nomes de campos ou tabelas para um padrão diferente no banco de dados, é possível utilizar os `decorators @@map()` (para tabelas) e `@map()` (para campos).

```prisma
model User {
  id        String @id @default(uuid())
  firstName String @map("first_name")
  lastName  String @map("last_name")

  @@map("users")
}
```

Para tornar um campo opcional, basta adicionar um ? após o tipo:

```prisma
model User {
  id        String @id @default(uuid())
  firstName String @map("first_name")
  lastName  String @map("last_name")
  email     String? @map("email")

  @@map("users")
}
```

# Criando Migration

Para criar uma migration, aplicar as alterações no banco de dados e gerar um arquivo contendo as queries SQL correspondentes à estrutura atual do schema, basta executar o seguinte comando:

```bash
prisma migrate dev
```

É possível gerar a migration sem aplicá-la imediatamente, permitindo a `revisão do código SQL` antes da execução, utilizando a `flag --create-only`:

```bash
prisma migrate dev --create-only
```

Se houver migrações pendentes e for necessário aplicá-las diretamente no banco de dados sem verificar alterações no schema ou gerar novas migrations, basta utilizar:

```bash
prisma migrate deploy
```

Além disso, para garantir um código mais organizado e padronizado, é possível formatar automaticamente o arquivo schema.prisma com o comando:

```bash
prisma format
```

# Prisma Client

Após executar o comando para aplicar as migrations, o Prisma Client é gerado automaticamente e cria ou altera o `arquivo index.js` presente na pasta `node_modules/.prisma/client`, contendo um `enum` para os `campos do Model`:

```js
exports.Prisma.UserScalarFieldEnum = {
  id: "id",
  firstName: "firstName",
  lastName: "lastName",
};
```

Para realizar consultas no banco de dados, é necessário `instanciar o Prisma Client`:

```ts
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
```

# Realizando Queries

O enum gerado garante a segurança de tipo ao utilizar o PrismaClient, fornecendo um gerador de queries automático com segurança de tipo.

Para criar um registro, basta utilizar o método `.create()` e passar um objeto com a propriedade data, contendo os valores a serem inseridos. O PrismaClient fornecerá `sugestões automáticas` para os campos disponíveis, com base no schema definido:

```ts
const userRepository = {
  create: async ({ firstName, lastName }: IUser) => {
    return await prisma.user.create({
      data: {
        firstName,
        lastName,
      },
    });
  },
};
```

O Prisma suporta operações CRUD completas com métodos como `.findMany()`, `.create()`, `.update()`, `.delete()`, entre outros. Além de permitir filtrar registros com `where` e incluir dados relacionados com `include`:

```ts
const houseRepository = {
  withFilters: async () => {
    return await prisma.house.findMany({
      where: {
        wifiPassword: {
          not: null,
        },
        owner: {
          age: {
            gte: 22,
          },
        },
      },
      orderBy: {
        owner: {
          firstName: "desc",
        },
      },
      include: {
        owner: true,
        builtBy: true,
      },
    });
  },
};
```

# Prisma Studio

Além disso, é possível `visualizar` os dados do banco de dados com o `Prisma Studio`. Para iniciá-lo, basta executar o seguinte comando, que abrirá uma página no navegador:

```bash
prisma studio
```
