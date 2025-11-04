import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import GlassCard from "@/components/GlassCard";
import { ArrowRight, FlaskConical, BookOpen, LineChart } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-secondary/30 to-background">
      <Navbar />
      
      <main className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 animate-scale-in">
              Laboratorios de Física
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Repositorio digital de experimentos y prácticas de laboratorio. 
              Documentación completa, procedimientos y resultados de cada experimento.
            </p>
          </div>

          <GlassCard className="mb-12 animate-fade-in [animation-delay:200ms]">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-accent/10 rounded-xl">
                <BookOpen className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  ¿Qué encontrarás aquí?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Esta plataforma contiene la documentación completa de los laboratorios realizados, 
                  incluyendo objetivos, materiales, procedimientos detallados, resultados experimentales, 
                  análisis de datos y conclusiones. Cada laboratorio está diseñado para verificar 
                  principios fundamentales de la física mediante experimentación práctica.
                </p>
              </div>
            </div>
          </GlassCard>

          <div className="grid gap-6 mb-12">
            <GlassCard className="animate-slide-in-right [animation-delay:400ms]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <FlaskConical className="w-8 h-8 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Metodología Experimental
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Cada experimento sigue un riguroso protocolo científico con instrumentación 
                    calibrada y análisis estadístico de los resultados obtenidos.
                  </p>
                </div>
              </div>
            </GlassCard>

            <GlassCard className="animate-slide-in-right [animation-delay:600ms]">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <LineChart className="w-8 h-8 text-accent" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-2">
                    Análisis de Datos
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Procesamiento matemático completo con ajustes lineales, cálculo de incertidumbres 
                    y comparación con valores teóricos esperados.
                  </p>
                </div>
              </div>
            </GlassCard>
          </div>

          <div className="text-center animate-scale-in [animation-delay:800ms]">
            <h2 className="text-3xl font-bold text-foreground mb-8">
              Laboratorios Disponibles
            </h2>
            
            <Link to="/gay-lussac">
              <GlassCard className="group cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="text-left">
                    <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors">
                      Presión vs Temperatura
                    </h3>
                    <p className="text-muted-foreground">
                      Verificación experimental de la Ley de Gay-Lussac y determinación del cero absoluto
                    </p>
                  </div>
                  <ArrowRight className="w-8 h-8 text-accent transition-transform group-hover:translate-x-2" />
                </div>
              </GlassCard>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
