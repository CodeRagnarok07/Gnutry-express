
# template https://mui.com/store/previews/mira-pro-react-material-admin-dashboard/


# base de datos


### registro de alimentos
nombre
tipo = [carbohidrato, proteina, grasa]
proteinas/100
calorias/100

### medida de ingredientes
nombre = [cucharadas, vaso, rebanada]
gr/ml = numero
alimento [forekey]

### recetas
nombre
preparacion
tipo 
cantidades [forekey]

### cantidades receta
receta [forekey]
medida de ingredientes [forekey]
cantidad

- [ ] crud de ingredientes
  - [ ] claves foraneas
  - [ ] create
  - [ ] get
  - [ ] view de tabla de ingredientes
  - [ ] put
  - [ ] delete


- [ ] crud de recetas
  - [ ] claves foraneas
  - [ ] create
  - [ ] get
  - [ ] view de tabla de ingredientes
  - [ ] put
  - [ ] delete


- [ ] menu de alimentacion
