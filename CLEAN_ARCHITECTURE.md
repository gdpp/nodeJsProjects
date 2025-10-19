# Clean Architecture

![clear arch](https://camo.githubusercontent.com/a9ffe098440725568506d9677ddf80f1960c893d3054a02341b2f329462bf523/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313230302f312a454e2d6a6f563043725f674d6e386158303669484e512e6a706567)

Clean Architecture, busca separar las preocupaciones del software en capas con dependencias que apuntan hacia adentro (hacia el dominio).

### Su objetivo:

- Que los cambios externos (frameworks, base de datos, UI, APIs) no afecten la lógica de negocio.
- Que el código sea mantenible, testeable y desacoplado.

## Capas principales

### 1. Domain (Logica de Negocios / Entidades)

- Cualquier cosa que sea un requerimiento el cual no depende de la tecnologia estamos hablando de logica de negocios. Aquí vive la lógica de negocio pura, si esa lógica aplica a toda la empresa (no solo a un módulo o app), se llama lógica de negocio empresarial (organizacional).
- Los modelos del dominio (las entidades)Las entidades (Entities) son modelos con reglas y comportamiento. Se representan típicamente como clases, porque las clases te permiten expresar tanto datos (propiedades) como comportamientos (métodos con reglas de negocio).

```ts
// domain/entities/User.ts
export class User {
  constructor(
    public readonly id: number,
    private _name: string,
    private _email: string
  ) {}

  get name(): string {
    return this._name;
  }

  get email(): string {
    return this._email;
  }

  changeEmail(newEmail: string): void {
    if (!newEmail.includes("@")) {
      throw new Error("Invalid email address");
    }
    this._email = newEmail;
  }
}
```

### 2. Use Cases (Reglas de logica de negocios)

- Los use cases (o interactors) contienen la lógica de aplicación, orquestan las entidades para cumplir un requerimiento específico del negocio.
- Representan acciones o flujos específicos que la aplicación debe cumplir usando las entidades.

  > Ejemplo: 'Transferir dinero', 'Registrar usuario', 'Procesar pedido'.

- Aquí se define qué debe ocurrir, no cómo se implementa (no se habla de frameworks ni de persistencia concreta).
- No dependen de frameworks, bases de datos ni APIs externas.

  > La tecnología se adapta a ellos, no al revés.

### 3. Interface Adapters (o simplemente Adapters)

Esta capa traduce datos entre el mundo externo y el interno (por eso se llama adapter o mapper). Es el traductor que conecta los use cases (lógica de aplicación) con los frameworks externos (Express, React, DBs, APIs, etc.).

> Ejemplo: convertir un DTO o JSON de una API a un objeto de dominio, o viceversa.

Aquí también viven los controladores, presenters, y gateways que adaptan datos para los casos de uso o para la vista.

#### 1. Controllers — Adaptan la entrada (input adapters)

Qué hacen:
Reciben la entrada desde el mundo externo (ej. una petición HTTP o evento).
La traducen a una estructura que el use case entiende.
Llaman al caso de uso correspondiente.
Devuelven la respuesta (normalmente a través de un Presenter).

#### 2. Presenters — Adaptan la salida (output adapters)

Qué hacen:
Reciben el resultado de un caso de uso o entidad.
Lo transforman en el formato que la capa exterior necesita (JSON, HTML, DTO, etc.).
Sirven para aislar la lógica de presentación del resto del sistema.

#### 3. Gateways — Adaptan la comunicación con servicios externos

Qué hacen:
Son adaptadores de fuentes externas de datos o APIs externas.
Cumplen una interfaz definida en el dominio o la aplicación.
Pueden ser llamados por los casos de uso.

### 4. Frameworks & Drivers (External Layer)

Aquí están las herramientas que pueden cambiar sin romper el núcleo, cualquier cosa que pueda cambiarse: frameworks web, bases de datos, sistemas de archivos, APIs externas, UI, etc. Un recurso el cual nosotros estamos utilizando dentro de nuestra aplicacion pero el dia de maniana puede cambiar

Esta capa depende de las abstracciones que definen los casos de uso o el dominio (no al revés).

Ejemplo:

Hoy usas PostgreSQL, mañana podrías cambiar a MongoDB, y tu dominio ni se entera.

## Dependencia de Abstracciones

Significa que las dependencias apuntan hacia las abstracciones, no hacia implementaciones concretas. Las capas externas dependen de las internas (y no al revés). Se logra con interfaces o contratos, que las capas internas definen y las externas implementan.

## Structure

src/
├── application/ # Use cases, lógica de aplicación
│ ├── use-cases/
│ │ └── createUserUseCase.ts
│ └── services/
│ └── userService.ts
│
├── domain/ # Entidades y contratos (interfaces)
│ ├── entities/
│ │ └── user.ts
│ ├── repositories/
│ │ └── userRepository.ts
│ └── value-objects/
│ └── email.ts
│
├── infrastructure/ # Implementaciones técnicas (DB, APIs externas, etc.)
│ ├── database/
│ │ └── userRepositoryImpl.ts
│ ├── config/
│ │ └── db.ts
│ └── services/
│ └── emailServiceImpl.ts
│
├── presentation/ # Controladores, rutas, middlewares
│ ├── controllers/
│ │ └── userController.ts
│ ├── routes/
│ │ └── userRoutes.ts
│ └── middlewares/
│ └── errorHandler.ts
│
├── shared/ # Utilidades, errores comunes, tipos globales
│ ├── utils/
│ │ └── logger.ts
│ ├── errors/
│ │ └── AppError.ts
│ └── types/
│ └── index.d.ts
│
├── server.ts # Punto de entrada
└── app.ts # Configura Express, middlewares y rutas
