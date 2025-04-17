# 🎬 Buscador de Películas con la API de The Movie Database (TMDb)

## 🔍 Objetivo

Investigar y utilizar la API de películas **The Movie Database (TMDb)** para crear un buscador de películas dinámico.

---

## ✅ Pasos a seguir

1. **Registrarse** en la web oficial de TMDb: [https://www.themoviedb.org](https://www.themoviedb.org)
2. **Generar una API KEY** (o Token de acceso) desde el apartado de configuración de cuenta / API.

---

## 🛠️ Requisitos funcionales

Crear una aplicación que permita:

- Un **input** donde el usuario pueda escribir el nombre de una película.
- Al buscar, se debe realizar una petición a la API con el nombre ingresado.
- Mostrar una lista de resultados que incluya:

  - 📷 **Imagen** (poster de la película)
  - 🎞️ **Título**
  - 📝 **Descripción**
  - 🎭 **Géneros** de la película (obtenidos mediante `genre_ids`)

---

## 🔧 Recomendaciones técnicas

- Utilizar `fetch` o `axios` para realizar las peticiones HTTP.
- Para mostrar los géneros correctamente, se debe mapear el array de `genre_ids` con la lista completa de géneros obtenida desde la API.
- Aplicar estilos con CSS (opcionalmente usar Bootstrap para diseño responsive).

---

## 📚 Recursos útiles

- [Documentación oficial de la API](https://developer.themoviedb.org/docs)
- [Listado de géneros de películas (endpoint)](https://developer.themoviedb.org/reference/genre-movie-list)
