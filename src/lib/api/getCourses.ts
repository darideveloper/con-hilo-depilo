import type { Course } from "./types";
import imgIniciacion from "../../assets/images/course/iniciacion-hilo.jpg";
import imgPerfeccionamiento from "../../assets/images/course/perfeccionamiento-cejas.jpg";
import imgMasterclass from "../../assets/images/course/masterclass-lash.jpg";

export const getCourses = async (): Promise<Course[]> => {
  try {
    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 100));

    return [
      {
        id: "iniciacion-hilo",
        title: "Iniciación al Hilo",
        duration: "2 Días",
        level: "Inicial",
        description: "Domina la técnica ancestral del hilo desde cero. Teoría de visagismo y práctica intensiva en modelos reales.",
        image: imgIniciacion,
        alt: "Curso Iniciación al Hilo"
      },
      {
        id: "perfeccionamiento-cejas",
        title: "Perfeccionamiento de Cejas",
        duration: "1 Día",
        level: "Avanzado",
        description: "Para profesionales que buscan pulir su técnica, mejorar la velocidad y perfeccionar el acabado K-Beauty.",
        image: imgPerfeccionamiento,
        alt: "Curso Perfeccionamiento de Cejas"
      },
      {
        id: "masterclass-lash-lift",
        title: "Masterclass Lash Lift",
        duration: "1.5 Días",
        level: "Experto",
        description: "Especialización técnica en curvatura de pestañas. Protocolos de seguridad y química del tratamiento.",
        image: imgMasterclass,
        alt: "Curso Masterclass Lash Lift"
      }
    ];
  } catch (error) {
    console.error("Failed to fetch courses:", error);
    return [];
  }
};
