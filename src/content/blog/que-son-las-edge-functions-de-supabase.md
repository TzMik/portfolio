---
title: "¿Qué son las Edge Functions de Supabase y por qué debería importarte?"
description: "Descubre las Edge Functions de Supabase: qué son, para qué sirven y cómo pueden optimizar tu negocio. Aprende con un ejemplo práctico de código para enviar emails y mejora la eficiencia de tus proyectos."
pub_date: 2025-09-27
tags: ["Edge Functions", "Supabase", "envío de emails", "Resend", "serveless", "ventajas Edge Functions", "desarrollo web eficiente", "eficiencia operativa"]
image: "/public/assets/images/blog/que-son-las-edge-functions-de-supabase.webp"
draft: false
---
Imagina que tu servidor es una oficina central y tus usuarios están distribuidos por todo el mundo. Cada vez que alguien necesita algo, tiene que enviar una solicitud hasta la oficina, lo que puede ser lento. Las **Edge Functions** son como pequeñas sucursales de tu oficina, ubicadas estratégicamente en el **"borde" (edge)** de la red global de Cloudflare, cerca de tus usuarios. Esto reduce la latencia, es decir, el tiempo que tarda una solicitud en viajar del usuario al servidor y viceversa.

En pocas palabras, son funciones de código que se ejecutan en servidores distribuidos geográficamente, mucho más cerca de la ubicación de tus usuarios. Esto las hace ideales para tareas que necesitan una respuesta rápida y eficiente.

## ¿Para qué sirven las Edge Functions?

Las Edge Functions tienen múltiples aplicaciones, pero brillan en escenarios que requieren una respuesta casi instantánea. Sirven para:

  * **Autenticación y autorización:** Puedes verificar permisos de usuario antes de que una solicitud llegue a tu base de datos.
  * **Transformación de datos:** Modificar o validar datos antes de que se almacenen.
  * **Webhooks y notificaciones:** Escuchar eventos y disparar acciones, como enviar un email de confirmación.
  * **Integraciones con APIs de terceros:** hacer llamadas a servicios externos como Resend (como en el ejemplo que vamos a ver a continuación).

El ejemplo que vamos a ver posteriormente es un caso de uso genial para las Edge Functions. En lugar de procesar el envío en el servidor principal de la aplicación (por ejemplo, en Laravel o Next.js), lo vamos a delegar a una función ligera y específica. Esto libera recursos en la aplicación principal y asegura que el envío de emails sea rápido y fiable.

## Ventajas de las Edge Functions para tu PYME

Usar Edge Functions no solo es una decisión técnica inteligente, sino que también tiene un impacto directo en el negocio.

  * **Reducción de costos operativos**: Solo pagas por el tiempo de ejecución de la función, lo que puede ser mucho más económico que mantener un servidor dedicado.
  * **Mejora de la experiencia de usuario (UX)**: Al reducir la latencia, las acciones del usuario, como el envío de un formulario, se sienten más rápidas y fluidas.
  * **Aumento de la fiabilidad**: Las funciones están diseñadas para ser resilientes. Si una falla, otra instancia la reemplaza rápidamente, asegurando la continuidad del servicio.

### Ejemplo práctico: código para enviar emails

Aquí está el código que desarrollé para enviar emails con Resend. Como puedes ver, es un código minimalista que se enfoca en una sola tarea, lo que lo hace fácil de mantener y escalar.

```javascript
// La clave de la API de Resend se almacena de forma segura como una variable de entorno en Supabase
const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
// Este handler es la función principal que procesa la petición
const handler = async (request) => {
  // Solo se permiten peticiones POST para seguridad
  if (request.method !== 'POST') {
    return new Response(JSON.stringify({
      error: 'Method Not Allowed'
    }), {
      status: 405,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
  try {
    // Se extraen los datos del cuerpo de la petición (el "payload")
    const { to, subject, html } = await request.json();
    // Se valida que los datos necesarios estén presentes
    if (!to || !subject || !html) {
      return new Response(JSON.stringify({
        error: 'Missing required fields: to, subject, or html'
      }), {
        status: 400,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    // Se hace la llamada a la API de Resend para enviar el email
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'example@mikelcantero.dev', // Aquí defines el remitente
        to,
        subject,
        html,
      })
    });
    // Se devuelve la respuesta de la API de Resend al cliente
    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: res.status,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({
      error: 'Failed to parse request body'
    }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
// Deno.serve es el método que pone la función en marcha
Deno.serve(handler);
```

Este código demuestra cómo una **Edge Function** puede ser una solución simple, pero poderosa para delegar tareas específicas a un servicio eficiente.