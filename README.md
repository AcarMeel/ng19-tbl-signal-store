

## Development server

To start a local development server, run:

```bash
ng serve
```

Features to implement:

- Switch between theme modes
- signal store in localstorage
- Testing


ManageItemsPageComponent (la ruta)
├── HeaderComponent (título + subtítulo)
├── ManageItemsToolbarComponent (filtros, page size, iconos)
│   ├── FilterDropdownComponent
│   └── PageSizeDropdownComponent
├── ItemsTableComponent (tabla completa)
│   ├── ItemsTableHeaderComponent (headers + sorting)
│   ├── ItemsTableBodyComponent (filas + checkbox + dropdowns)
├── PaginationComponent
