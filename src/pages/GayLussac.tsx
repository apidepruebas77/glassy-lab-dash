import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlassCard from "@/components/GlassCard";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import { Thermometer, Activity, Target, Beaker, CheckCircle2 } from "lucide-react";

const GayLussac = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-3 bg-accent/10 px-6 py-3 rounded-full mb-6">
              <Thermometer className="w-6 h-6 text-accent" />
              <span className="text-accent font-semibold">Ley de Gay-Lussac</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Presión vs Temperatura
            </h1>
            <p className="text-xl text-muted-foreground">
              Verificación experimental a volumen constante
            </p>
          </div>

          {/* Estudio Previo */}
          <GlassCard className="mb-8 animate-fade-in [animation-delay:200ms]">
            <h2 className="text-2xl font-bold text-foreground mb-6">Fundamentos Teóricos</h2>
            
            <div className="space-y-6 text-muted-foreground">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">¿Por qué funciona la Ley de Gay-Lussac?</h3>
                <p className="mb-3">A nivel molecular, cuando aumenta la temperatura de un gas:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Las moléculas se mueven más rápido (mayor energía cinética)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Chocan con más fuerza contra las paredes del recipiente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Si el volumen no puede expandirse (recipiente sellado), la presión aumenta proporcionalmente</span>
                  </li>
                </ul>
              </div>

              <div className="backdrop-blur-sm bg-accent/5 border border-accent/20 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Ecuación de los Gases Ideales</h3>
                <p className="font-mono text-lg mb-3">PV = nRT</p>
                <p className="mb-2">Cuando V, n y R son constantes: <span className="font-semibold">P/T = constante</span></p>
                <p>Esto genera una relación lineal: <span className="font-mono bg-secondary/50 px-2 py-1 rounded">P = (nR/V) × T</span></p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">Aplicaciones Prácticas</h3>
                <p className="mb-3">Esta ley explica fenómenos cotidianos:</p>
                <ul className="space-y-2 ml-6">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Ollas a presión:</strong> Mayor temperatura → mayor presión interna</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Neumáticos:</strong> Se calientan al rodar → aumenta presión</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Aerosoles:</strong> No exponer al calor (riesgo de explosión)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span><strong>Globos aerostáticos:</strong> Calentar aire → expande → menor densidad → flota</span>
                  </li>
                </ul>
              </div>
            </div>
          </GlassCard>

          {/* Objetivo */}
          <GlassCard className="mb-8 animate-scale-in [animation-delay:400ms]">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-xl shrink-0">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">Objetivo</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Observar la variación lineal de la presión de un gas con la temperatura a volumen constante, 
                  verificando la Ley de Gay-Lussac, y determinar experimentalmente el cero absoluto 
                  (teórico: -273,15 °C).
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Materiales */}
          <GlassCard className="mb-8 animate-fade-in [animation-delay:600ms]">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-accent/10 rounded-xl shrink-0">
                <Beaker className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Materiales</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground mb-8">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>Erlenmeyer con tapón de caucho</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>Sensores de presión absoluta y temperatura (acero inoxidable)</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>Interfaz PASCO + software Capstone</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>Plancha con agitador magnético</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>Beaker con agua, hielo y sal</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>Magneto</span>
              </li>
            </ul>
            <MediaPlaceholder type="image" />
          </GlassCard>

          {/* Procedimiento */}
          <GlassCard className="mb-8 animate-slide-in-right [animation-delay:800ms]">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-accent/10 rounded-xl shrink-0">
                <Activity className="w-6 h-6 text-accent" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Procedimiento</h2>
            </div>
            <ol className="space-y-4 text-muted-foreground mb-8">
              {[
                "Preparar baño de hielo-sal en beaker para baja temperatura.",
                "Sellar Erlenmeyer con tapón y sumergirlo en el beaker.",
                "Conectar sensores a PASCO (muestreo 10 Hz, modo continuo).",
                "Agitar mezcla con magneto.",
                "Registrar presión y temperatura cada 2 °C al aumentar gradualmente el calor con la plancha."
              ].map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-accent/20 text-accent font-bold shrink-0">
                    {index + 1}
                  </span>
                  <span className="pt-1">{step}</span>
                </li>
              ))}
            </ol>
            <MediaPlaceholder type="video" />
          </GlassCard>

          {/* Resultados */}
          <GlassCard className="mb-8 animate-fade-in [animation-delay:1000ms]">
            <h2 className="text-2xl font-bold text-foreground mb-6">Resultados</h2>
            
            <div className="space-y-6">
              <div className="backdrop-blur-sm bg-accent/5 border border-accent/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Ajuste Lineal</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p className="flex items-center gap-2">
                    <span className="font-mono bg-secondary/50 px-3 py-1 rounded">
                      P = 0,334T + 82,4
                    </span>
                    <span className="text-sm">(r = 1,000)</span>
                  </p>
                  <p>• Pendiente: <span className="font-semibold">m = 0,334 ± 0,0022 kPa/°C</span></p>
                  <p>• Intersección: <span className="font-semibold">b = 82,4 ± 0,11 kPa</span></p>
                  <p>• Relación lineal perfecta confirma la Ley de Gay-Lussac.</p>
                </div>
              </div>

              <div className="backdrop-blur-sm bg-accent/5 border border-accent/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Cero Absoluto Experimental</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p className="font-mono bg-secondary/50 px-3 py-2 rounded inline-block">
                    T = -b/m → -246,7 °C
                  </p>
                  <p>• Teórico: <span className="font-semibold">-273,15 °C</span></p>
                  <p>• Diferencia atribuida a precisión instrumental, fugas o calibración.</p>
                </div>
              </div>

              <div className="backdrop-blur-sm bg-accent/5 border border-accent/20 rounded-xl p-6">
                <h3 className="text-xl font-bold text-foreground mb-4">Incertidumbre</h3>
                <div className="space-y-3 text-muted-foreground">
                  <p>• ΔT ≈ <span className="font-semibold">1,7 °C</span></p>
                  <p>• Resultado: <span className="font-semibold">-246,7 ± 1,7 °C</span></p>
                  <p>• Incertidumbre relativa: <span className="font-semibold">0,67 %</span> → alta precisión.</p>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Conclusiones */}
          <GlassCard className="mb-8 animate-scale-in [animation-delay:1200ms]">
            <h2 className="text-2xl font-bold text-foreground mb-6">Conclusiones</h2>
            <div className="space-y-4 text-muted-foreground">
              <p className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                <span>Se confirmó experimentalmente la Ley de Gay-Lussac.</span>
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                <span>Excelente ajuste lineal (r=1,000).</span>
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                <span>Cero absoluto estimado con buena precisión, pese a limitaciones prácticas.</span>
              </p>
              <p className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-1" />
                <span>El experimento resalta la importancia de la instrumentación y el análisis riguroso de datos.</span>
              </p>
            </div>
          </GlassCard>

          {/* Procesos Matemáticos */}
          <GlassCard className="animate-fade-in [animation-delay:1400ms]">
            <h2 className="text-2xl font-bold text-foreground mb-6">Procesos Matemáticos</h2>
            <p className="text-muted-foreground mb-6">
              Análisis detallado de los cálculos y procedimientos matemáticos utilizados en el experimento.
            </p>
            <MediaPlaceholder type="video" />
          </GlassCard>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default GayLussac;
