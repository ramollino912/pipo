import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const featureCards = [
  {
    id: 1,
    title: "Transferir dinero",
    description:
      "Aprende a enviar dinero a familiares y amigos de forma segura",
    icon: "/frame-7.svg", // IMAGEN: Icono de transferencia de dinero (flecha con símbolo de dinero)
    features: [
      "Paso a paso guiado",
      "Sin riesgo real",
      "Confirmaciones claras",
    ],
    bgColor: "bg-[#f5f9fb]",
    iconBg: "bg-[#ddedf3]",
  },
  {
    id: 2,
    title: "Recargar celular",
    description: "Mantén tu teléfono con datos y crédito siempre disponible",
    icon: "/frame-5.svg", // IMAGEN: Icono de teléfono móvil con señal de recarga
    features: [
      "Todas las compañías",
      "Montos sugeridos",
      "Recarga automática",
    ],
    bgColor: "bg-[#f5f9fb]",
    iconBg: "bg-[#ddedf3]",
  },
];

const subeCard = {
  title: "Recargar SUBE",
  description:
    "Cargar saldo en tu tarjeta SUBE para viajar en transporte público",
  icon: "/frame-16.svg", // IMAGEN: Icono de tarjeta SUBE o transporte público
  features: [
    "Carga instantánea",
    "Historial de recargas",
    "Recordatorios útiles",
  ],
  bgColor: "bg-[#f5f9fb]",
  iconBg: "bg-[#ddedf3]",
};

const benefitCards = [
  {
    id: 1,
    title: "100% seguro",
    description: "Simulación sin riesgo real de pérdida de dinero",
    icon: "/frame-6.svg", // IMAGEN: Icono de escudo de seguridad o candado
    bgColor: "bg-[#f5f9fb]",
    iconBg: "bg-[#ddedf3]",
  },
  {
    id: 2,
    title: "A tu ritmo",
    description: "Aprende sin presión, repite cuantas veces necesites.",
    icon: "/frame-14.svg", // IMAGEN: Icono de reloj o velocímetro
    bgColor: "bg-[#f5f9fb]",
    iconBg: "bg-[#ddedf3]",
  },
  {
    id: 3,
    title: "Soporte 24/7",
    description: "Ayuda disponible cuando la necesites",
    icon: "/frame-15.svg", // IMAGEN: Icono de auriculares o chat de soporte
    bgColor: "bg-[#f5f9fb]",
    iconBg: "bg-[#ddedf3]",
  },
  {
    id: 4,
    title: "Certificado",
    description: "Reconocimiento por completar el entrenamiento",
    icon: "/frame-12.svg", // IMAGEN: Icono de diploma o medalla
    bgColor: "bg-[#f5f9fb]",
    iconBg: "bg-[#ddedf3]",
  },
];

const Slide = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <header className="py-8 lg:py-12">
          <div className="bg-[#f5f9fb] border border-[#cadbe1] rounded-3xl p-6 lg:p-8 mb-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex items-center gap-6">
                <img
                  className="w-24 h-24 lg:w-32 lg:h-32 object-cover rounded-full"
                  alt="Logo de Wallet Simulator"
                  src="/chatgpt-image-7-may-2025--09-57-29-1.png" 
                  // IMAGEN: Logo principal de la aplicación - billetera digital o icono de simulador
                />
                <div>
                  <h1 className="text-4xl lg:text-6xl font-normal text-[#388fd7] leading-tight">
                    <span className="font-inter">Wallet</span>
                    <span className="font-itim"> </span>
                    <span className="font-inter">Simulator</span>
                  </h1>
                </div>
              </div>
              
              <div className="bg-[#f5f9fb] border-2 border-[#cadbe1] rounded-2xl p-4">
                <h2 className="text-2xl lg:text-4xl font-normal text-[#388fd7]">
                  Contacto
                </h2>
              </div>
            </div>
          </div>

          <div className="bg-[#2ac4cc] rounded-3xl py-6 px-8 text-center">
            <h3 className="text-3xl lg:text-5xl font-normal text-white">
              Diseñado para todos
            </h3>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-12 lg:py-20 text-center">
          <h2 className="text-4xl lg:text-6xl xl:text-7xl font-normal mb-8 lg:mb-12 max-w-5xl mx-auto leading-tight">
            <span className="text-black">
              Aprende a usar tu billetera virtual de forma{" "}
            </span>
            <span className="text-[#1c91b6]">segura y fácil</span>
          </h2>

          <p className="text-xl lg:text-2xl xl:text-3xl text-[#7f99a1] mb-12 lg:mb-16 max-w-6xl mx-auto leading-relaxed">
            Un simulador especialmente diseñado para personas con problemas cognitivos.
            <br className="hidden lg:block" />
            Practica sin riesgos y gana confianza en el manejo de tu dinero digital.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-4xl mx-auto">
            <Button className="bg-[#0083ad] hover:bg-[#006a8a] text-white text-xl lg:text-2xl px-8 py-6 rounded-3xl flex items-center gap-4 w-full sm:w-auto transition-colors">
              <img
                className="w-8 h-8"
                alt="Icono de play"
                src="/frame-8.svg"
                // IMAGEN: Icono de play o comenzar (triángulo de reproducción)
              />
              Comenzar simulación
            </Button>
            
            <Button className="bg-[#0083ad] hover:bg-[#006a8a] text-white text-xl lg:text-2xl px-8 py-6 rounded-3xl w-full sm:w-auto transition-colors">
              Ver tutoriales
            </Button>
          </div>
        </section>

        {/* Main Functions Section */}
        <section className="py-16 lg:py-24">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-6xl font-normal text-black mb-6">
              Funciones principales
            </h2>
            <p className="text-2xl lg:text-3xl text-[#7f99a1]">
              Practica las operaciones más comunes de forma segura
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
            {featureCards.map((card) => (
              <Card
                key={card.id}
                className={`${card.bgColor} rounded-[3rem] border-2 border-black p-8 lg:p-12 hover:shadow-lg transition-shadow`}
              >
                <CardContent className="p-0 text-center">
                  <div className={`w-32 h-32 ${card.iconBg} rounded-full mx-auto mb-8 flex items-center justify-center`}>
                    <img
                      className="w-20 h-20 object-contain"
                      alt="Frame"
                      src={card.icon}
                    />
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-normal text-black mb-6">
                    {card.title}
                  </h3>

                  <p className="text-xl lg:text-2xl text-[#7f99a1] mb-8 leading-relaxed">
                    {card.description}
                  </p>

                  <div className="space-y-4 text-left max-w-md mx-auto">
                    {card.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-4">
                        <img
                          className="w-8 h-8 flex-shrink-0"
                          alt="Check"
                          src="/frame.svg"
                          // IMAGEN: Icono de check o marca de verificación
                        />
                        <span className="text-lg lg:text-xl text-black">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* SUBE Card */}
          <div className="max-w-2xl mx-auto">
            <Card className={`${subeCard.bgColor} rounded-[3rem] border-2 border-black p-8 lg:p-12 hover:shadow-lg transition-shadow`}>
              <CardContent className="p-0 text-center">
                <div className={`w-32 h-32 ${subeCard.iconBg} rounded-full mx-auto mb-8 flex items-center justify-center`}>
                  <img
                    className="w-20 h-20 object-contain"
                    alt="SUBE"
                    src={subeCard.icon}
                  />
                </div>

                <h3 className="text-3xl lg:text-4xl font-normal text-black mb-6">
                  {subeCard.title}
                </h3>

                <p className="text-xl lg:text-2xl text-[#7f99a1] mb-8 leading-relaxed">
                  {subeCard.description}
                </p>

                <div className="space-y-4 text-left max-w-md mx-auto">
                  {subeCard.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <img
                        className="w-8 h-8 flex-shrink-0"
                        alt="Check"
                        src="/frame.svg"
                        // IMAGEN: Icono de check o marca de verificación
                      />
                      <span className="text-lg lg:text-xl text-black">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 lg:py-24">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-6xl font-normal text-black mb-6">
              ¿Por qué elegir billetera fácil?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {benefitCards.map((card) => (
              <Card
                key={card.id}
                className={`${card.bgColor} rounded-[3rem] border-2 border-black p-8 lg:p-12 hover:shadow-lg transition-shadow`}
              >
                <CardContent className="p-0 text-center">
                  <div className={`w-32 h-32 ${card.iconBg} rounded-full mx-auto mb-8 flex items-center justify-center`}>
                    <img
                      className="w-20 h-20 object-contain"
                      alt="Benefit"
                      src={card.icon}
                    />
                  </div>

                  <h3 className="text-3xl lg:text-4xl font-normal text-black mb-6">
                    {card.title}
                  </h3>

                  <p className="text-xl lg:text-2xl text-[#7f99a1] leading-relaxed">
                    {card.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Tutorials Section */}
        <section className="py-16 lg:py-24">
          <div className="text-center">
            <h2 className="text-4xl lg:text-6xl font-normal text-black mb-12">
              Tutoriales paso a paso
            </h2>

            <Card className="bg-[#f5f9fb] rounded-[4rem] border border-black p-12 lg:p-20">
              <CardContent className="p-0">
                <h3 className="text-4xl lg:text-5xl font-normal text-black">
                  Aprende a tu ritmo
                </h3>
                <p className="text-xl lg:text-2xl text-[#7f99a1] mt-6">
                  Contenido de tutoriales próximamente
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Slide;