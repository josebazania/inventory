# 📦 Sistema de Inventario con React

Un sistema de inventario básico pero funcional desarrollado con **React** y **TypeScript**, diseñado para gestionar productos, cantidades y precios de manera sencilla e intuitiva.

## ✨ Características

- ➕ **Agregar productos**: Añade nuevos items con nombre, cantidad y precio
- 📋 **Listado completo**: Visualiza todos los productos en una tabla organizada
- ➖➕ **Control de stock**: Aumenta o disminuye cantidades con botones dedicados
- 🗑️ **Eliminar productos**: Remueve items del inventario fácilmente
- 💰 **Cálculos automáticos**: 
  - Total de items en inventario
  - Valor total del inventario (suma de cantidad × precio)
- 🎨 **Interfaz limpia**: Diseño moderno y responsive con CSS personalizado
- 🇪🇸 **Interfaz en español**: Completamente localizado para usuarios hispanohablantes

## 🚀 Tecnologías Utilizadas

- **React** - Biblioteca para construir interfaces de usuario
- **TypeScript** - Tipado estático para mayor seguridad y mantenibilidad
- **CSS3** - Estilos personalizados sin dependencias externas
- **Vite** - Build tool rápido y ligero

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── types.ts          # Definiciones de tipos TypeScript
│   ├── ItemForm.tsx      # Formulario para agregar productos
│   ├── ItemForm.css      # Estilos del formulario
│   ├── ItemList.tsx      # Tabla de listado de inventario
│   └── ItemList.css      # Estilos de la tabla
├── App.tsx               # Componente principal con estado global
├── App.css               # Estilos generales de la aplicación
└── main.tsx              # Punto de entrada
```

## 🛠️ Instalación y Uso

### Prerrequisitos

- Node.js (versión 16 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
   ```bash
   git clone <url-del-repositorio>
   cd <nombre-del-proyecto>
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Ejecutar en modo desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   
   La aplicación estará disponible en `http://localhost:5173` (o el puerto que indique Vite)

### Comandos disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run build` | Compila el proyecto para producción |
| `npm run preview` | Vista previa de la build de producción |

## 📖 Cómo Usar

1. **Agregar un producto**: 
   - Completa los campos: Nombre, Cantidad y Precio
   - Haz clic en "Agregar Producto"

2. **Gestionar stock**:
   - Usa los botones `+` y `−` para ajustar cantidades
   - Las cantidades no pueden ser negativas

3. **Eliminar productos**:
   - Haz clic en el botón "Eliminar" para remover un item

4. **Ver totales**:
   - El panel superior muestra automáticamente:
     - Total de items únicos
     - Cantidad total de productos
     - Valor total del inventario

## 🎯 Datos de Ejemplo

La aplicación incluye algunos productos de ejemplo al iniciar:
- Laptop (10 unidades - $999.99)
- Mouse (50 unidades - $29.99)
- Teclado (30 unidades - $79.99)

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Si deseas mejorar este proyecto:

1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Añadir nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 👨‍💻 Autor

Desarrollado como demostración de las capacidades de React y TypeScript para la gestión de estados y componentes.

---

**¡Disfruta gestionando tu inventario! 📊**
