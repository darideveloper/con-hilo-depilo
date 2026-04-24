import type { Service } from "./types";
import imgLimpiezaHilo from "../../assets/images/limpieza-hilo.jpg";
import imgDisenoCejas from "../../assets/images/diseno-cejas.jpg";
import imgLiftingPestanas from "../../assets/images/lifting-pestanas.jpg";

export const getServices = async (): Promise<Service[]> => {
  try {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 100));

    return [
      {
        id: "diseno-cejas",
        title: "Diseño de Cejas",
        price: "25€",
        duration: "45 min",
        description: "Definición natural con hilo técnica coreana para un arco perfecto y duradero.",
        image: imgDisenoCejas,
        category: "brows",
        order: 1
      },
      {
        id: "limpieza-hilo",
        title: "Limpieza con Hilo",
        price: "15€",
        duration: "20 min",
        description: "Eliminación precisa del vello facial no deseado respetando la sensibilidad de la piel.",
        image: imgLimpiezaHilo,
        category: "threading",
        order: 2
      },
      {
        id: "lifting-pestanas",
        title: "Lifting de Pestañas",
        price: "45€",
        duration: "60 min",
        description: "Realza tu mirada de forma natural con un rizado perfecto desde la raíz.",
        image: imgLiftingPestanas,
        category: "lashes",
        order: 3
      },
      {
        id: "lifting-pestanas-copy",
        title: "Lifting de Pestañas Copy",
        price: "45€",
        duration: "60 min",
        description: "Realza tu mirada de forma natural con un rizado perfecto desde la raíz.",
        image: imgLiftingPestanas,
        category: "lashes",
        order: 3
      },
      {
        id: "laminado-cejas",
        title: "Laminado de Cejas",
        price: "40€",
        duration: "60 min",
        description: "Tratamiento para alisar y direccionar el vello de las cejas, logrando un efecto de mayor volumen.",
        image: imgDisenoCejas,
        category: "brows",
        order: 5
      },
      {
        id: "tinte-cejas",
        title: "Tinte de Cejas",
        price: "15€",
        duration: "20 min",
        description: "Coloración específica para cejas que aporta densidad y define la mirada de forma natural.",
        image: imgDisenoCejas,
        category: "brows",
        order: 6
      },
      {
        id: "extensiones-pestanas",
        title: "Extensiones de Pestañas",
        price: "60€",
        duration: "120 min",
        description: "Colocación de extensiones pelo a pelo para una mirada más profunda y unas pestañas largas.",
        image: imgLiftingPestanas,
        category: "lashes",
        order: 7
      },
      {
        id: "tinte-pestanas",
        title: "Tinte de Pestañas",
        price: "18€",
        duration: "25 min",
        description: "Intensifica el color natural de tus pestañas, ideal para prescindir de la máscara de pestañas.",
        image: imgLiftingPestanas,
        category: "lashes",
        order: 8
      },
      {
        id: "masaje-facial",
        title: "Masaje Facial Japonés",
        price: "50€",
        duration: "60 min",
        description: "Masaje lifting natural que mejora la circulación y tonifica los músculos del rostro.",
        image: imgLimpiezaHilo,
        category: "threading",
        order: 9
      },
      {
        id: "limpieza-profunda",
        title: "Limpieza Profunda",
        price: "45€",
        duration: "75 min",
        description: "Extracción de impurezas y mascarilla hidratante para un cutis renovado y luminoso.",
        image: imgLimpiezaHilo,
        category: "threading",
        order: 10
      },
      {
        id: "depilacion-labio",
        title: "Depilación Labio Superior",
        price: "10€",
        duration: "15 min",
        description: "Eliminación del vello del labio superior con técnica de hilo, rápida y sin irritaciones.",
        image: imgLimpiezaHilo,
        category: "threading",
        order: 11
      },
      {
        id: "depilacion-barbilla",
        title: "Depilación Barbilla",
        price: "12€",
        duration: "15 min",
        description: "Depilación con hilo para la zona de la barbilla, dejando la piel suave y limpia.",
        image: imgLimpiezaHilo,
        category: "threading",
        order: 12
      }
    ];
  } catch (error) {
    console.error("Failed to fetch services:", error);
    return [];
  }
};
