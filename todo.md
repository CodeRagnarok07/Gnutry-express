# registro de alimentos
nombre
tipo = [carbohidrato, proteina, grasa]
proteinas/100
calorias/100

# medida de ingredientes
nombre = [cucharadas, vaso, rebanada]
gr/ml = numero
alimento [forekey]

# recetas
nombre
preparacion
tipo 
cantidades [forekey]

# cantidades receta
receta [forekey]
medida de ingredientes [forekey]
cantidad