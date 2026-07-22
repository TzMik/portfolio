---
title: "SuperFeels: App de ventas con perfiles, comisiones y pagos online"
description: "Desarrollo de una plataforma web y mobile para facilitar el levantamiento de pedidos, gestión de clientes, comisiones de vendedores, pagos con Authorize.Net y control de inventario con visibilidad por perfil (vendedor, manager, admin)."
image: "/public/assets/images/projects/super-feels.webp"
pub_date: 2026-07-22
start_date: 2026-04-01
end_date: 2026-07-31
tags: ["Laravel", "Vue.js", "Inertia.js", "React Native", "Authorize.Net", "comisiones", "rol de usuarios", "mobile app", "web app"]
top_project: true
draft: false
---

### De qué se trató el proyecto  
**SuperFeels** es una empresa con sede en **Florida, EE.UU.** que vende suplementos naturales para calmar el estrés y la ansiedad. Todo el proyecto se desarrolló **enteramente en inglés**, trabajando codo a codo con el CTO de la compañía para definir los requerimientos y la arquitectura. 

Antes de este sistema, los procesos de pedidos, pagos y comisiones se gestionaban de forma manual y descentralizada. No existía una plataforma unificada que permitiera a cada actor del negocio operar con la información que realmente necesitaba.

El objetivo fue construir un **ecosistema completo** compuesto por una **web app** (para administración y operación general) y una **mobile app** (enfocada en el levantamiento de pedidos en campo), ambas conectadas al mismo backend.

### Qué problema solucionó  

- **Levantamiento de pedidos digital:** Los representantes de ventas capturan pedidos desde la mobile app o la web, eliminando el papel y la doble transcripción.  
- **Gestión de clientes:** Cada vendedor tiene su cartera de clientes con historial de pedidos, saldos y datos de contacto.  
- **Comisiones automatizadas:** El sistema orquesta el cálculo de comisiones por vendedor, liberando a los managers de hojas de cálculo interminables.  
- **Pagos online con Authorize.Net:** Los administradores pueden procesar pagos directamente desde la plataforma, con integración segura a la pasarela de pagos.  
- **Stock global y por representante:** Visibilidad del inventario total del almacén y del stock asignado a cada vendedor, evitando sobreventas y faltantes.  
- **Perfiles con acceso granular:** Tres roles bien definidos —Representante, Manager y Administrador— cada uno con acceso exclusivo a las pantallas y acciones que necesita para operar.

### Tecnologías y habilidades  

- **Backend (web app + API mobile):** Laravel + Vue.js con Inertia.js para una experiencia SPA fluida.  
- **Mobile App:** React Native, con una interfaz simplificada centrada en el levantamiento de pedidos.  
- **Pagos online:** Integración con Authorize.Net para procesar pagos con tarjeta de crédito/débito.  
- **Roles y permisos:** Implementación granular basada en perfiles (Representante, Manager, Admin).  
- **Arquitectura multidispositivo:** Backend único compartido entre web app y mobile app.  

---

### Storytelling  

SuperFeels llegó en un momento clave de mi carrera como **Lead Software Developer**. Trabajar directamente con el **CTO de la compañía en Florida** —todo en **inglés**, desde la primera llamada hasta la entrega final— me recordó lo importante que es la comunicación clara cuando no compartes idioma nativo con tu cliente.  

No solo se trataba de escribir código; implicaba diseñar una arquitectura que funcionara tanto en el escritorio como en el bolsillo de un vendedor, con lógicas de negocio distintas para cada perfil.  

La web app se convirtió en el centro de comando para administradores y managers, mientras que la mobile app fue la herramienta de batalla para los representantes en campo. Ver cómo el sistema orquestaba comisiones, pagos e inventario en tiempo real —y cómo cada usuario veía únicamente lo que necesitaba— fue la confirmación de que una buena arquitectura de permisos y roles es tan valiosa como el propio código.