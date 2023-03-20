import React from 'react';
import {useState} from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  ImageBackground,
} from 'react-native';
import SelectBox from 'react-native-multi-selectbox';
import Form from '../../components/Form';
import Input from '../../components/input';
import {useForm} from 'react-hook-form';
import {xorBy} from 'lodash';
const image = {
  uri: 'https://www.nicepng.com/png/detail/23-234376_white-play-png-play-video-icon-white.png',
};
const K_OPTIONS = [
  {
    item: 'Agencia de marketing y publicidad',

    id: 'Agencia de marketing y publicidad',
  },

  {
    item: 'Entretenimiento y recreación',

    id: ' Entretenimiento y recreación',
  },

  {
    item: 'Adtech/Martech',

    id: 'Adtech/Martech',
  },

  {
    item: 'Agencia y consultoría',

    id: 'Agencia y consultoría',
  },

  {
    item: 'Agencia de talento',

    id: 'Agencia de talento',
  },

  {
    item: 'Agrotech',

    id: 'Agrotech',
  },

  {
    item: 'Articulos para bebes/niños',

    id: 'Articulos para bebes/niños',
  },

  {
    item: 'Abogado(a) y firmas de abogados(as)',

    id: 'Abogado(a) y firmas de abogados(as)',
  },

  {
    item: 'Arte',

    id: 'Arte',
  },

  {
    item: 'Agropecuario',

    id: 'Agropecuario',
  },

  {
    item: 'Arte y entretenimiento',

    id: 'Arte y entretenimiento',
  },

  {
    item: 'Aplicación móvil',

    id: 'Aplicación móvil',
  },

  {
    item: 'Artes visuales/graficas',

    id: 'Artes visuales/graficas',
  },

  {
    item: 'Autos/automotor',

    id: 'Autos/automotor',
  },

  {
    item: 'Automoción y transporte',

    id: 'Automoción y transporte',
  },

  {
    item: 'Automotriz',

    id: 'Automotriz',
  },

  {
    item: 'Agencia de empleo',

    id: 'Agencia de empleo',
  },

  {
    item: 'Aviación',

    id: 'Aviación',
  },

  {
    item: 'Belleza, cosmética y estetica',

    id: 'Belleza, cosmética y estetica',
  },

  {
    item: 'Bienes raices',

    id: 'Bienes raices',
  },

  {
    item: 'Bolsos/equipaje',

    id: 'Bolsos/equipaje',
  },

  {
    item: 'Biblioteca/museo',

    id: 'Biblioteca/museo',
  },

  {
    item: 'Bodas',

    id: 'Bodas',
  },

  {
    item: 'Bar',

    id: 'Bar',
  },

  {
    item: 'Biotech',

    id: 'Biotech',
  },

  {
    item: 'Bar deportivo',

    id: 'Bar deportivo',
  },

  {
    item: 'Capital de riesgo',

    id: 'Capital de riesgo',
  },

  {
    item: 'Compras y minoristas',

    id: 'Compras y minoristas',
  },

  {
    item: 'Comunidad',

    id: 'Comunidad',
  },

  {
    item: 'Contratista',

    id: 'Contratista',
  },

  {
    item: 'Comercial e industrial',

    id: 'Comercial e industrial',
  },

  {
    item: 'Cafeteria',

    id: 'Cafeteria',
  },

  {
    item: 'Ciencia y tecnologia',

    id: 'Ciencia y tecnologia',
  },

  {
    item: 'Climate tech',

    id: 'Climate tech',
  },

  {
    item: 'Creador digital',

    id: 'Creador digital',
  },

  {
    item: 'Ciberseguridad',

    id: 'Ciberseguridad',
  },

  {
    item: 'Cine y televisión',

    id: 'Cine y televisión',
  },

  {
    item: 'Construcción',

    id: 'Construcción',
  },

  {
    item: 'Cosplay',

    id: 'Cosplay',
  },

  {
    item: 'Computadoras e internet',

    id: 'Computadoras e internet',
  },

  {
    item: 'Club nocturno de baile',

    Id: 'Club nocturno de baile',
  },

  {
    item: 'Calzado',

    id: 'Calzado',
  },

  {
    item: 'Deportes',

    id: 'Deportes',
  },

  {
    item: 'Diseño y moda',

    id: 'Diseño y moda',
  },

  {
    item: 'Dentista y consultorio dental',

    id: 'Dentista y consultorio dental ',
  },

  {
    item: 'Diseñador web',

    id: 'Diseñador web',
  },

  {
    item: 'Diseñador arquitectónico',

    id: 'Diseñador arquitectónico',
  },

  {
    item: 'Derecho',

    id: 'Derecho',
  },

  {
    item: 'DJ',

    id: 'DJ',
  },

  {
    item: 'DeepTech',

    id: 'DeepTech',
  },

  {
    item: 'Diseñador gráfico',

    id: 'Diseñador gráfico',
  },

  {
    item: 'Decoración de interiores',

    id: 'Decoración de interiores',
  },

  {
    item: 'Educación y entrenamiento',

    id: 'Educación y entrnamiento',
  },

  {
    item: 'Empresa de moda',

    id: 'Empresa de moda',
  },

  {
    item: 'Escuela',

    id: 'Escuela',
  },

  {
    item: 'Editorial',

    id: 'Editorial',
  },

  {
    item: 'Espacio',

    id: 'Espacio',
  },

  {
    item: 'Eléctrico',

    id: 'Eléctrico',
  },

  {
    item: 'EnergyTech',

    id: 'EnergyTech',
  },

  {
    item: 'Edutech',

    id: 'Edutech',
  },

  {
    item: 'Electrónica',

    id: 'Electrónica',
  },

  {
    item: 'E-Commerce',

    id: 'E-Commerce',
  },

  {
    item: 'Equpo deportivo',

    id: 'Equipo deportivo',
  },

  {
    item: 'Edificio de departamentos y condominios',

    id: 'Edificio de departamentos y condominios',
  },

  {
    item: 'Episodio',

    id: 'Episodio',
  },

  {
    item: 'Emprendedor(a)',

    id: 'Emprendedor(a)',
  },

  {
    item: 'Empresario(a)',

    id: 'Empresario(a)',
  },

  {
    item: 'Empresa minorista',

    id: 'Empresa minorista',
  },

  {
    item: 'Entrenador',

    id: 'Entrenador',
  },

  {
    item: 'Eventos',

    id: 'Eventos',
  },

  {
    item: 'Eventos en vivo',

    id: 'Eventos en vivo',
  },

  {
    item: 'Entretenimiento',

    id: 'Entretenimiento',
  },

  {
    item: 'Facultad y universidad',

    id: 'Facultad y universidad',
  },

  {
    item: 'Figura pública',

    id: 'Figura publica',
  },

  {
    item: 'Farmacia',

    id: 'Farmacia',
  },

  {
    item: 'Fintech',

    id: 'Fintech',
  },

  {
    item: 'Fotógrafo(a)',

    id: 'Fotógrafo(a)',
  },

  {
    item: 'Ferretería',

    id: 'Ferretería',
  },

  {
    item: 'Florista',

    id: 'Florista',
  },

  {
    item: 'FoodTech',

    id: 'FoodTech',
  },

  {
    item: 'Fotografía y videografía',

    id: 'Fotografía y videografía',
  },

  {
    item: 'Finanzas e inversión',

    id: 'Finanzas e inversión',
  },

  {
    item: 'Financiero',

    id: 'Financiero',
  },

  {
    item: 'Fabricación de vehículos motorizados',

    id: 'Fabricación de vehículos motorizados',
  },

  {
    item: 'Fabricación de productos de defensa y espacio',

    id: 'Fabricación de productos de defensa y espacio',
  },

  {
    item: 'Fabricación de aviación y componentes aeroespaciales',

    id: 'Fabricación de aviación y componentes aeroespaciales',
  },

  {
    item: 'Funcionario del gobierno',

    id: 'Funcionario del gobierno',
  },

  {
    item: 'Festival',

    id: 'Festival',
  },

  {
    item: 'Gamer',

    id: 'Gamer',
  },

  {
    item: 'Gestión del talento',

    id: 'Gestión del talento',
  },

  {
    item: 'Gimnasio o centro de fitness',

    id: 'Gimnasio o centro de fitness',
  },

  {
    item: 'Granja',

    id: 'Granja',
  },

  {
    item: 'Greentech',

    id: 'Greentech',
  },

  {
    item: 'Guardería',

    id: 'Guardería',
  },

  {
    item: 'Gestión de negocios',

    id: 'Gestión de negocios',
  },

  {
    item: 'Grupo musical',

    id: 'Grupo musical',
  },

  {
    item: 'Gira de conciertos',

    id: 'Gira de conciertos',
  },

  {
    item: 'Galeria de arte',

    id: 'Galeria de arte',
  },

  {
    item: 'Gasolinera',

    id: 'Gasolinera',
  },

  {
    item: 'Guia de turismo',

    id: 'Guia de turismo',
  },

  {
    item: 'Ginecólogo obstetra',

    id: 'Ginecologo obstetra',
  },

  {
    item: 'Hoteles y alojamiento',

    id: 'Hoteles y alojamiento',
  },

  {
    item: 'HR Tech',

    id: 'HR Tech',
  },

  {
    item: 'Hospital',

    id: 'Hospital',
  },

  {
    item: 'HealthTech',

    id: 'HealthTech',
  },

  {
    item: 'Hogar y jardineria',

    id: 'Hogar y jardineria',
  },

  {
    item: 'Hogar de retiro y vivienda asistida',

    id: 'Hogar de retiro y vivienda asistida',
  },

  {
    item: 'Herramientas/equipamiento',

    id: 'Herramientas/equipamiento',
  },

  {
    item: 'Hostal',

    id: 'Hostal',
  },

  {
    item: 'Hardware',

    id: 'Hardware',
  },

  {
    item: 'Heladería',

    id: 'Heladería',
  },

  {
    item: 'Heladería italiana',

    id: 'Heladería italiana',
  },

  {
    item: 'Iglesia',

    id: 'Iglesia',
  },

  {
    item: 'Insurtech',

    id: 'Insurtech',
  },

  {
    item: 'Industria 4.0',

    id: 'Industria 4.0',
  },

  {
    item: 'Institución educativa/universidad',

    id: 'Institución educativa/universidad',
  },

  {
    item: 'Informático y software',

    id: 'Informático y software',
  },

  {
    item: 'Indumentaria y accesorios',

    id: 'Indumentaria y accesorios',
  },

  {
    item: 'Instructor personal',

    id: 'Instructor personal',
  },

  {
    item: 'Instrucción deportiva y de acondicionamiento físico',

    id: 'Instrucción deportiva y de acondicionamiento físico',
  },

  {
    item: 'Inmobiliaria',

    id: 'Inmobiliaria',
  },

  {
    item: 'Jardín botánico',

    id: 'Jardín botánico',
  },

  {
    item: 'Joyería y relojería',

    id: 'Joyería y relojería',
  },

  {
    item: 'Juguetería',

    id: 'Juguetería',
  },

  {
    item: 'Jardinero',

    id: 'Jardinero',
  },

  {
    item: 'Juegos de escape',

    id: 'Juegos de escape',
  },

  {
    item: 'Juegos y deportes electrónicos',

    id: 'Juegos y deportes electrónicos',
  },

  {
    item: 'Jardín comunitario',

    id: 'Jardín comunitario',
  },

  {
    item: 'Jaula de bateo',

    id: 'Jaula de bateo',
  },

  {
    item: 'Judicial',

    id: 'Judicial',
  },

  {
    item: 'Karaoke',

    id: 'Karaoke',
  },

  {
    item: 'Alquiler de canoas y kayaks',

    id: 'Alquiler de canoas y kayaks',
  },

  {
    item: 'Pista de karting',

    id: 'Pista de karting',
  },

  {
    item: 'Centro de rafting y kayak',

    id: 'Centro de rafting y kayak',
  },

  {
    item: 'Restaurante kosher',

    id: 'Restaurante Kosher',
  },

  {
    item: 'Recreación',

    id: 'Recreacion',
  },

  {
    item: 'Recaudación de fondos',

    id: 'Recaudación de fondos',
  },

  {
    item: 'Radio y podcast',

    id: 'Radio y podscast',
  },

  {
    item: 'RetailTech',

    id: 'RetailTech',
  },

  {
    item: 'RegTech',

    id: 'RegTech',
  },
  {
    tem: 'Real Estate',

    id: 'Real Estate',
  },

  {
    item: 'Recursos humanos y reclutamiento',

    id: 'Recursos humanos y reclutamiento',
  },

  {
    item: 'Restaurante de comida de Karnataka',

    id: 'Restaurante de comida de Karnataka',
  },

  {
    item: 'Restaurante de comida Kerala',

    id: 'Restaurante de comida Kerala',
  },

  {
    item: 'Restaurante kurdo',

    id: 'Restaurante kurdo',
  },

  {
    item: 'Restaurante de kushikatsu',

    id: 'Restaurante de kushikatsu',
  },

  {
    item: 'Redes sociales',

    id: 'Redes sociales',
  },

  {
    item: 'Centro de kitesurf',

    id: 'Centro de kitesurf',
  },

  {
    item: 'Librería',

    id: 'Librería',
  },

  {
    item: 'Liga deportiva',

    id: 'Liga deportiva',
  },

  {
    item: 'Lavado de coches',

    id: 'Lavado de coches',
  },

  {
    item: 'Laboratorio medico',

    id: 'Laboratorio medico',
  },

  {
    item: 'Lavandería',

    id: 'Lavandería',
  },

  {
    item: 'Logistica y almacenamiento',

    id: 'Logistica y almacenamiento',
  },

  {
    item: 'LegalTech',

    id: 'LegalTech',
  },

  {
    item: 'Lounge/salón',

    id: 'Lounge/salón',
  },

  {
    item: 'Lugar de ocio',

    id: 'Lugar de ocio',
  },

  {
    item: 'Lugar para practicar el surf',

    id: 'Lugar para practicar el surf',
  },

  {
    item: 'Liga de eSports',

    id: 'Liga de eSports',
  },

  {
    item: 'Musico(a)/banda',

    id: 'Musico(a)/banda',
  },

  {
    item: 'Medicina y salud',

    id: 'Medicina y salud',
  },

  {
    item: 'Mueblería',

    id: 'Mueblería',
  },

  {
    item: 'Marca',

    id: 'Marca',
  },

  {
    item: 'Modelo',

    id: 'Modelo',
  },

  {
    item: 'Mascotas',

    id: 'Mascotas',
  },

  {
    item: 'Marina',

    id: 'Marina',
  },

  {
    item: 'Marketplace',

    id: 'Marketplace',
  },

  {
    item: 'Medios de comunicación/noticias',

    id: 'Medios de comunicación/noticias',
  },

  {
    item: 'medico familiar',

    id: 'medico familiar',
  },

  {
    item: 'Movilidad',

    id: 'Movilidad',
  },

  {
    item: 'Minería y petróleo',

    id: 'Minería y petróleo',
  },

  {
    item: 'Medio ambiente',

    id: 'Medio ambiente',
  },

  {
    item: 'Muebles y madera',

    id: 'Muebles y madera',
  },

  {
    item: 'Maquinaria y equipos tecnicos',

    id: 'Maquinaria y equipos tecnicos',
  },

  {
    item: 'Nutricionista',

    id: 'Nutricionista',
  },

  {
    item: 'Negocio de ropa deportiva',

    id: 'Negocio de ropa deportiva',
  },

  {
    item: 'Negocios familiares',

    id: 'Negocios familiares',
  },

  {
    item: 'Notaria publica',

    id: 'Notaria publica',
  },

  {
    item: 'Neurólogo',

    id: 'Neurólogo',
  },

  {
    item: 'Novelista',

    id: 'Novelista',
  },

  {
    item: 'Niñera',

    id: 'Niñera',
  },

  {
    item: 'Naturópata',

    id: 'Naturópata',
  },

  {
    item: 'Organización gubernamental',

    id: 'Organización gubernamental',
  },

  {
    item: 'Organización comunitaria',

    id: 'Organización comunitaria',
  },

  {
    item: 'Organización religiosa',

    id: 'Organización religiosa',
  },

  {
    item: 'Organización benéfica',

    id: 'Organización benéfica',
  },

  {
    item: 'Orador especialista en motivación',

    id: 'Orador especialista en motivación',
  },

  {
    item: 'Organización no gubernamental (ONG) y sin fines de lucro',

    id: 'Organización no gubernamental (ONG) y sin fines de lucro',
  },

  {
    item: 'Organización política',

    id: 'Organización política',
  },

  {
    item: 'Organización juvenil',

    id: 'Organización juvenil',
  },

  {
    item: 'Optometrista',

    id: 'Optometrista',
  },

  {
    item: 'Obra de teatro',

    id: 'Obra de teatro',
  },

  {
    item: 'Producto/servicio',

    id: 'Producto/servicio',
  },

  {
    item: 'Postal',

    id: 'Postal',
  },

  {
    item: 'Proptech',

    id: 'Proptech',
  },

  {
    item: 'Publicidad/marketing',

    id: 'Publicida/marketing',
  },

  {
    item: 'Plásticos',

    id: 'Plásticos',
  },

  {
    item: 'Pet',

    id: 'Pet',
  },

  {
    item: 'Papel y cartón',

    id: 'Papel y cartón',
  },

  {
    item: 'Peluquería',

    id: 'Peluquería',
  },

  {
    item: 'Programa de tv',

    id: 'Programa de tv',
  },

  {
    item: 'Politico(a)',

    id: 'Politico(a)',
  },

  {
    item: 'Pizzería',

    id: 'Pizzería',
  },

  {
    item: 'Productor',

    id: 'Productor',
  },

  {
    item: 'Periodista',

    id: 'Periodista',
  },

  {
    item: 'Países y municipios',

    id: 'Países y municipio',
  },

  {
    item: 'Personalidad de los medios de comunicación',

    id: 'Personalidad de los medios de comunicación',
  },

  {
    item: 'Publicaciones y medios digitales',

    id: 'Publicaciones y medios digitales',
  },

  {
    item: 'Quesería',

    id: 'Quesería',
  },

  {
    item: 'Empresa química',

    id: 'Empresa química',
  },

  {
    item: 'Centro quirúrgico',

    id: 'Centro quirúrgico',
  },

  {
    item: 'Servicio de gas y productos químicos',

    id: 'Servicio de gas y productos químicos',
  },

  {
    item: 'Servicios jurídicos',

    id: 'Servicios jurídicos',
  },

  {
    item: 'SaaS',

    id: 'SaaS',
  },

  {
    item: 'SportsTech',

    id: 'SportsTech',
  },

  {
    item: 'Supply Chain',

    id: 'Supply Chain',
  },

  {
    item: 'Streaming',

    id: 'Streaming',
  },

  {
    item: 'Servicios',

    id: 'Servicios',
  },

  {
    item: 'Quiropráctico',

    id: 'Quiropráctico',
  },

  {
    item: 'Ropa(marca)',

    id: 'Ropa(marca)',
  },

  {
    item: 'Residencia',

    id: 'Residencia',
  },

  {
    item: 'Revista',

    id: 'Revista',
  },

  {
    item: 'Relaciones publicas',

    id: 'Relaciones publicas',
  },

  {
    item: 'Restaurante',

    id: 'Restaurante',
  },

  {
    item: 'Restaurante chino',

    id: 'Restaurante chino',
  },

  {
    item: 'Restaurante norteamericano',

    id: 'Restaurante norteamericano',
  },

  {
    item: 'Restaurante de mariscos',

    id: 'Restaurante de mariscos',
  },

  {
    item: 'Ranking de éxitos',

    id: 'Ranking de éxitos',
  },

  {
    item: 'Restaurante de carnes asadas',

    id: 'Restaurante coreano',
  },

  {
    item: 'Ropa y accesorios',

    id: 'Ropa y accesorios',
  },

  {
    item: 'Salud/belleza',

    id: 'Salud/belleza',
  },

  {
    item: 'Salón de belleza',

    id: 'Salón de belleza',
  },

  {
    item: 'Servicio empresarial',

    id: 'Servicio empresarial',
  },

  {
    item: 'Servicios',

    id: 'Servicios',
  },

  {
    item: 'Sin fines de lucro',

    id: 'Sin fines de lucro',
  },

  {
    item: 'Servicio local',

    id: 'Servicio local',
  },

  {
    item: 'Seguridad social',

    id: 'Seguridad social',
  },

  {
    item: 'Sitio web de comercio electrónico',

    id: 'Sitio web de comercio electrónico',
  },

  {
    item: 'Servicio de transporte',

    id: 'Servicio de transporte',
  },

  {
    item: 'Sitio web',

    id: 'Sitio web',
  },

  {
    item: 'Sitio web de salud y bienestar',

    id: 'Sitio web de salud y bienestar',
  },

  {
    item: 'Servicios profesionales',

    id: 'Servicios profesionales',
  },

  {
    item: 'Servicios públicos',

    id: 'Servicios públicos',
  },

  {
    item: 'Sector agropecuario',

    id: 'Sector agropecuario',
  },

  {
    item: 'Servicios financieros',

    id: 'Servicios financieros',
  },

  {
    item: 'Servicios de internet',

    id: 'Servicios de internet',
  },

  {
    item: 'Servicios Ti y consultoría Ti',

    id: 'Servicios Ti y consultoría Ti',
  },

  {
    item: 'Software y aplicaciones',

    id: 'Software y aplicaciones',
  },

  {
    item: 'Sector metalúrgico',

    id: 'Sector metalúrgico',
  },

  {
    item: 'Seguridad e investigaciones',

    id: 'Seguridad e investigaciones',
  },

  {
    item: 'Tienda de ropa',

    id: 'Tienda de ropa',
  },

  {
    item: 'Taller de reparación de automóviles',

    id: 'Taller de reparación de automóviles',
  },

  {
    item: 'Tienda de comestibles',

    id: 'Tienda de comestibles',
  },

  {
    item: 'Tienda de ropa para mujeres',

    id: 'Tienda de ropa para mujeres',
  },

  {
    item: 'Tienda de café',

    id: 'Tienda de café',
  },

  {
    item: 'Tienda de repuestos de automóviles',

    id: 'Tienda de repuesto de automóviles',
  },

  {
    item: 'Tienda departamental',

    id: 'Tienda departamental',
  },

  {
    item: 'Tintorería',

    id: 'Tintorería',
  },

  {
    item: 'Teléfono/tableta',

    id: 'Teléfono/tableta',
  },

  {
    item: 'TravelTech',

    id: 'TravelTech',
  },

  {
    item: 'Telecomunicaciones',

    id: 'Telecomunicaciones',
  },

  {
    item: 'Textil y confección',

    id: 'Textil y confección',
  },

  {
    item: 'Turísmo',

    id: 'Turísmo',
  },

  {
    item: 'Tecnología',

    id: 'Tecnología',
  },

  {
    item: 'Tatuajes y piercings',

    id: 'Tatuajes y piercings',
  },

  {
    item: 'Urgencias',

    id: 'Urgencias',
  },

  {
    item: 'Urólogo',

    id: 'Urólogo',
  },

  {
    item: 'Tienda pop-up',

    id: 'Tienda pop-up',
  },

  {
    item: 'Proveedor de uniformes',

    id: 'Proveedor de uniformes',
  },

  {
    item: 'Vehículos usados',

    id: 'Vehículos usados',
  },

  {
    item: 'Infraestructura urbana',

    id: 'Infraestructura urbana',
  },

  {
    item: 'Granja urbana',

    id: 'Granja urbana',
  },

  {
    item: 'Restaurante de comida Uttar Pradesh',

    id: 'Restaurante de comida Uttar Pradesh ',
  },

  {
    item: 'Viajes y atracciones locales',

    id: 'Viajes y atracciones locales',
  },

  {
    item: 'Viajes y turismo',

    id: 'Viajes y turismo',
  },

  {
    item: 'Video juego',

    id: 'Video juego',
  },

  {
    item: 'Veterinario',

    id: 'Veterinario',
  },

  {
    item: 'Vendedor de neumaticos y tienda de reparacion',

    id: 'Vendedor de neumáticos y tienda de reparación',
  },

  {
    item: 'Vitaminas/suplementos',

    id: 'Vitaminas/suplementos',
  },

  {
    item: 'Vinos/licores',

    id: 'Vinos/licores',
  },

  {
    item: 'Vendedor de alimentos',

    id: 'Vendedor de alimentos',
  },

  {
    item: 'Vendedor de joyas',

    id: 'Vendedor de joyas',
  },

  {
    item: 'Vendedor de casas rodantes',

    id: 'Vendedor de casas rodantes',
  },

  {
    item: 'Whiskería',

    id: 'Whiskería',
  },

  {
    item: 'Sitio web de sociedad y cultura',

    id: ' Sitio web de sociedad y cultura',
  },

  {
    item: 'X tech',

    id: 'X tech',
  },

  {
    item: 'Zapatería',

    id: 'Zapatería',
  },

  {
    item: 'Zoológico',

    id: 'Zoológico',
  },

  {
    item: 'Otros',

    id: 'Otros',
  },
];
export default function MakePage() {
  const [selectedTeam, setSelectedTeam] = useState({});
  const [selectedTeams, setSelectedTeams] = useState([]);
  const formData = {
    name_company: '',
    web: '',
    n_integrantes: 0,
    description_company: '',
    mision: '',
  };
  const {
    register,
    setValue,
    formState: {errors},
    handleSubmit,
  } = useForm({defaultValues: formData});
  const onSubmit = data => {
    console.log(data);
  };
  const onError = data => {
    console.log('compete');
  };
  // first view register of company and your data
  let Viewone = (
    <View>
      <Form {...{register, setValue, errors}}>
        <Text style={{fontSize: 15, marginTop: -20}}>
          nombre de tu compañia
        </Text>
        <Input
          name="name_company"
          placeholder="nombre de su empresa"
          maxLength={15}
        />
        <Text style={{fontSize: 15, marginTop: -20}}>
          Seleciona el sector que pertenece tu empresa{' '}
        </Text>
        <SelectBox
          label="sector"
          options={K_OPTIONS}
          value={selectedTeam}
          onChange={onChange()}
          hideInputFilter={false}
        />
      </Form>
      <TouchableOpacity
        onPress={handleSubmit(onSubmit, onError)}
        style={styles.btn}
        activeOpacity={0.6}>
        <Text style={styles.btnText}>seguir</Text>
      </TouchableOpacity>
    </View>
  );
  // second view of register company
  let ViewTwo = (
    <View>
      <Text style={styles.title}>crea tu empresa</Text>
      <Form {...{register, setValue, errors}}>
        <Text style={{fontSize: 15, marginTop: -20}}>
          -enlace directo a su web propia
        </Text>
        <Input name="web" placeholder="url de su web" />
        <Text style={{fontSize: 15, marginTop: -20}}>
          -tamaño aproximado de su empresa/startup
        </Text>
        <Input
          name="n_integrantes"
          placeholder="numero de colaboradores de su empresa"
          maxLength={15}
        />
        <Text style={{fontSize: 15, marginTop: -20}}>
          -descipcion corta de su empresa
        </Text>
        <Input name="description_company" placeholder="nombre de usuario" />
        <Text style={{fontSize: 15, marginTop: -20}}>
          Mision de su compañia
        </Text>
        <Input name="mision" placeholder="mision compañia" />
      </Form>
      <TouchableOpacity
        onPress={handleSubmit(onSubmit, onError)}
        style={styles.btn}
        activeOpacity={0.6}>
        <Text style={styles.btnText}>siguiente</Text>
      </TouchableOpacity>
    </View>
  );
  //three view add video and photo of profile
  let ViewThree = (
    <>
      <View style={styles.opcions}>
        <Text style={styles.btnText}>*MAXIMO 3 MINUTOS DE REPRODUCCION*</Text>
        <ImageBackground
          style={styles.container}
          source={image}
          resizeMode="cover">
          <TouchableOpacity onPress={() => alert('agregar video')}>
            <Text>AGREGAR VIDEO DE PRESENTACION</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
      <TouchableOpacity style={styles.btnAddInf} onPress={() => alert('foto')}>
        <Text style={styles.btnText}>AGREGAR FOTO DE PERFIL</Text>
      </TouchableOpacity>
      <View style={styles.opcionsTwo} px={10}>
        <TouchableOpacity
          style={styles.btnReady}
          onPress={() => alert('hhjjh')}>
          <Text>CREAR</Text>
        </TouchableOpacity>
      </View>
    </>
  );

  return <View style={styles.container}>{ViewThree}</View>;
  // functions of select
  function onMultiChange() {
    return item => setSelectedTeams(xorBy(selectedTeams, [item], 'id'));
  }

  function onChange() {
    return val => setSelectedTeam(val);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // styles of frist view
  title: {
    textAlign: 'center',
    color: '#000000',
    fontFamily: 'Nunito-Bold',
    fontSize: 20,
    marginBottom: 20,
  },
  btn: {
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: '#52A0CC',
    padding: 15,
    borderRadius: 30,
    marginVertical: 35,
  },

  // styles of three view
  btnReady: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#52A0CC',
    padding: 15,
    borderRadius: 30,
    marginVertical: 10,
  },
  btnAddInf: {
    backgroundColor: 'EAEFEF',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 60,
    width: 120,
    height: 120,
    position: 'absolute',
    left: 120,
    top: 200,
    zIndex: 1,
    color: 'black',
  },
  btnText: {
    fontFamily: 'Nunito-Bold',
    textAlign: 'center',
    fontSize: 10,
    color: 'black',
  },
  opcions: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
    width: '100%',
    backgroundColor: 'EAEFEF',
  },
  opcionsTwo: {
    justifyContent: 'flex-end',
    height: '50%',
    width: '100%',
    backgroundColor: 'white',
  },
});
