const Footer = () => {
  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 text-center md:text-left">
            {/* UAO */}
            <div>
              <h3 className="font-bold text-foreground mb-2">UAO Física</h3>
              <p className="text-sm text-muted-foreground">Universidad Autónoma de Occidente</p>
            </div>
            
            {/* Profesor */}
            <div>
              <h3 className="font-bold text-foreground mb-2">Profesor</h3>
              <p className="text-sm text-muted-foreground">Ruby Rocio Rodriguez Jacobo</p>
            </div>
            
            {/* Estudiante */}
            <div>
              <h3 className="font-bold text-foreground mb-2">Desarrollado por</h3>
              <p className="text-sm text-muted-foreground">Joan Mateo Cardona</p>
              <p className="text-sm text-muted-foreground">© 2025</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
