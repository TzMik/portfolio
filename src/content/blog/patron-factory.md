---
title: "Patrón de Diseño Factory: Creando Objetos sin Complicaciones"
description: "Aprende a implementar el patrón Factory en TypeScript. Descubre cómo eliminar el código acoplado y los condicionales infinitos para crear aplicaciones escalables y fáciles de mantener."
pub_date: 2026-01-15
tags: ["patrón factory", "factory pattern typescript", "patrones de diseño", "programación orientada a objetos", "typescript design patterns", "clean code"]
image: "/public/assets/images/blog/patron-factory.webp"
draft: false
---
En el desarrollo de software, a menudo nos encontramos con una pregunta simple que puede complicarse rápidamente: **¿Cómo instanciamos objetos sin acoplar nuestro código a clases específicas?** Aquí es donde entra el patrón Factory (Fábrica).

### ¿Qué es el patrón Factory?

El patrón Factory es un diseño **creacional** que proporciona una interfaz para crear objetos en una superclase, pero permite a las subclases alterar el tipo de objetos que se crearán.

En lugar de llamar directamente al constructor con un `new Clase()`, le pedimos a una "Fábrica" que lo haga por nosotros.

---

### ¿Qué problemas resuelve?

Si hoy usas `new` en todo tu código, podrías estar enfrentando estos problemas:

1. **Acoplamiento Fuerte:** Tu código depende de clases concretas. Si mañana necesitas cambiar una clase por otra, tendrás que buscar y reemplazar cada instancia en todo el proyecto.
2. **Dificultad para Extender:** Si tu aplicación crece y necesita manejar nuevos tipos de objetos (ej. pasar de solo procesar pagos con "PayPal" a incluir "Stripe"), el código se llena de condicionales `if/else` o `switch` gigantes.
3. **Violación del Principio de Responsabilidad Única:** El código que *usa* el objeto no debería preocuparse por *cómo se construye* ese objeto.

---

### Ejemplo Práctico: Un Sistema de Notificaciones

Imagina que estás construyendo una app que envía mensajes. Al principio solo usas Email, pero luego quieres añadir SMS.

#### Sin Factory (Código Frágil)

```typescript
// En el controlador de ventas, en el de usuarios, en el de soporte...
if (tipo === 'email') {
    const service = new EmailNotification();
    service.send(msg);
} else if (tipo === 'sms') {
    const service = new SMSNotification();
    service.send(msg);
}
// un else por cada tipo de notificación

```

#### Con Factory (Código Limpio)
Vamos a centralizar la creación en un solo lugar.

__Paso 1: Definir una interfaz común__
Todos los productos que la fábrica cree deben hablar el mismo "idioma".

```typescript
interface NotificationService {
    send(message: string): void;
}
```

__Paso 2: Crear las implementaciones concretas__

```typescript
class EmailNotification implements NotificationService {
    send(message: string): void {
        console.log(`Enviando Email: ${message}`);
    }
}

class SMSNotification implements NotificationService {
    send(message: string): void {
        console.log(`Enviando SMS: ${message}`);
    }
}

class PushNotification implements NotificationService {
    send(message: string): void {
        console.log(`Enviando Push: ${message}`);
    }
}
```

__Paso 3: La Fábrica (Factory)__
Aquí es donde ocurre la magia. La lógica de "qué objeto crear" vive solo aquí.
```typescript
class NotificationFactory {
    public static createNotification(type: 'email' | 'sms' | 'push'): NotificationService {
        switch (type) {
            case 'email':
                return new EmailNotification();
            case 'sms':
                return new SMSNotification();
            case 'push':
                return new PushNotification();
            default:
                throw new Error("Tipo de notificación no soportado.");
        }
    }
}
```

__Paso 4: el uso__
Ahora, el resto de tu aplicación no sabe (ni le importa) cómo se crean las notificaciones. Solo pide una y la usa.
```typescript
// No importa si es un controlador o un servicio de fondo
const notificationType = 'email'; // Esto podría venir de una DB o config

try {
    const myService = NotificationFactory.createNotification(notificationType);
    myService.send("¡Tu pedido ha sido enviado!");
} catch (e) {
    console.error(e.message);
}
```

---

### Ventajas y Desventajas

| Ventajas | Desventajas |
| --- | --- |
| **Flexibilidad:** Puedes añadir nuevos tipos de productos sin romper el código existente. | **Complejidad:** Introduces nuevas clases e interfaces al proyecto. |
| **Desacoplamiento:** El cliente no necesita conocer la lógica interna de creación. | **Abstracción excesiva:** Si solo tienes 2 clases simples, quizás un Factory sea demasiado. |
| **Testabilidad:** Es mucho más fácil hacer *mocking* de fábricas en pruebas unitarias. |  |

### Conclusión

El patrón Factory es ideal cuando no sabes de antemano qué tipos exactos de objetos necesitará tu código o cuando quieres centralizar la lógica de creación para facilitar el mantenimiento futuro.
