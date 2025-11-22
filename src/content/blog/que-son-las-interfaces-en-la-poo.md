---
title: "¿Qué son las interfaces en la POO?"
description: "En este post veremos qué es y para qué sirven las interfaces en la Programación Orientada a Objetos"
pub_date: 2023-04-07
tags: ["php", "programación orientada a objetos", "interfaces"]
image: "/assets/images/blog/que-son-las-interfaces-en-la-poo.webp"
draft: false
---
Las interfaces son una parte esencial de la programación orientada a objetos (POO). **Una interfaz es un conjunto de métodos abstractos que una clase debe implementar para cumplir con un contrato determinado**. En este artículo, explicaremos en detalle qué son las interfaces, sus ventajas y desventajas y un ejemplo con PHP.

## ¿Qué son las interfaces?

En POO, una interfaz es un conjunto de métodos abstractos que define un contrato que las clases que implementan dicha interfaz deben cumplir. Una interfaz puede contener tanto métodos abstractos como constantes, pero **no puede contener variables ni métodos concretos (métodos que tienen una implementación)**.

### Ventajas de las interfaces

Las interfaces proporcionan varias ventajas en la programación orientada a objetos:

- **Encapsulación**: Las interfaces permiten separar la interfaz pública de una clase de su implementación interna. Esto permite cambiar la implementación sin afectar a la interfaz pública, lo que a su vez permite reducir el acoplamiento entre clases.

- **Polimorfismo**: Las interfaces permiten que varias clases diferentes implementen la misma interfaz. Esto significa que un objeto puede ser utilizado de manera polimórfica, es decir, como si fuera de un tipo diferente al que realmente es.

- **Flexibilidad**: Las interfaces permiten agregar funcionalidad a una clase sin cambiar su jerarquía de clases. Esto es especialmente útil en situaciones donde una clase ya tiene una jerarquía de herencia compleja.

- **Reutilización de código**: Las interfaces permiten definir un conjunto de métodos comunes que pueden ser utilizados por varias clases diferentes. Esto puede reducir la duplicación de código y mejorar la legibilidad y mantenibilidad del código.

### Desventajas de las interfaces

Si bien las interfaces proporcionan muchas ventajas en la programación orientada a objetos, también presentan algunas desventajas:

- **Complejidad**: El uso de interfaces puede aumentar la complejidad del código, especialmente en situaciones donde una clase implementa varias interfaces. Esto puede hacer que el código sea más difícil de entender y mantener.

- **Sobrecarga de métodos**: Las interfaces pueden introducir una sobrecarga de métodos en una clase que las implementa. Esto puede hacer que la clase sea más difícil de entender y mantener.

## Ejemplo con PHP
Supongamos que queremos implementar un sistema de pago en línea en nuestro sitio web. Para ello, definimos una interfaz llamada `Pago` que contiene los métodos `realizarPago` y `cancelarPago`:

```php
interface Pago {
  public function realizarPago($cantidad);
  public function cancelarPago();
}
```

A continuación, creamos una clase llamada `PagoTarjeta` que implementa la interfaz `Pago`:

```php
class PagoTarjeta implements Pago {
  public function realizarPago($cantidad) {
    // código para realizar el pago con tarjeta de crédito
  }
  
  public function cancelarPago() {
    // código para cancelar el pago con tarjeta de crédito
  }
}
```

Por último, creamos una clase llamada `PagoPaypal` que también implementa la interfaz `Pago`:

```php
class PagoPaypal implements Pago {
  public function realizarPago($cantidad) {
  // código para realizar el pago con Paypal
  }

  public function cancelarPago() {
  // código para cancelar el pago con Paypal
  }
}
```

Ahora, podemos utilizar ambas clases de la siguiente manera:

```php
$pagoTarjeta = new PagoTarjeta();
$pagoTarjeta->realizarPago(100);

$pagoPaypal = new PagoPaypal();
$pagoPaypal->realizarPago(100);
$pagoPaypal->cancelarPago();
```

En este ejemplo, hemos utilizado dos clases diferentes que implementan la misma interfaz `Pago`. Esto nos permite utilizar ambas clases de manera polimórfica, es decir, podemos utilizar los mismos métodos para realizar y cancelar un pago sin preocuparnos por la implementación interna de cada clase.

## Conclusión
En resumen, las interfaces son una parte importante de la programación orientada a objetos. Permiten separar la interfaz pública de una clase de su implementación interna, lo que a su vez reduce el acoplamiento entre clases, mejora la flexibilidad y la reutilización de código, y permite la utilización polimórfica de objetos. Sin embargo, también pueden introducir complejidad y sobrecarga de métodos en una clase que las implementa. Es importante tener en cuenta estas ventajas y desventajas al utilizar interfaces en nuestro código.