        const watchesData = {
            1: {
                name: "Rolex Cosmograph Daytona",
                image: "", 
                description: "Este es uno de los relojes más icónicos y deseados del mundo: el Rolex Cosmograph Daytona (referencia 116500LN), específicamente la versión conocida popularmente como ¨Panda¨ por su contraste de dial blanco con subesferas negras. Originalmente diseñado en 1963 para satisfacer las necesidades de los pilotos de carreras profesionales, se ha convertido en un símbolo de estatus y precisión técnica que trasciende el ámbito deportivo.",
                movement: "Automático Suizo (Calibre 4130)",
                material: "Acero Oystersteel y Bisel Cerámico",
                resistance: "100m / 10 ATM",
                warranty: "10 Años de Cobertura Total"
            },
            2: {
                name: "Rolex Cosmograph Daytona ¨John Mayer¨",
                image: "",
                description: "Esta es la ficha técnica del Rolex Cosmograph Daytona ¨John Mayer¨ (referencia 116508), una de las piezas de oro más codiciadas y reconocibles del mundo debido a su vibrante esfera verde.",
                movement: "Automático Suizo (Calibre 4130)",
                material: "Oro Amarillo de 18 quilates",
                resistance: "100m / 10 ATM",
                warranty: "5 Años de Servicio Premium Integral"
            },
            3: {
                name: "Rolex Cosmograph Daytona",
                image: "",
                description: "Este modelo representa la cara más sobria y técnica del cronógrafo más famoso de Rolex. A diferencia de la versión blanca, la esfera negra ofrece una estética monocromática que resalta los anillos de metal de las subesferas, logrando un aspecto más compacto y elegante en la muñeca. Es la elección predilecta para quienes buscan un reloj que combine perfectamente con un traje formal o un equipo de carreras, manteniendo siempre ese aire de exclusividad inalcanzable.",
                movement: "Automático Suizo (Calibre 4131)",
                material: "Acero Oystersteel y Bisel Cerámico",
                resistance: "100m / 10 ATM",
                warranty: "5 Años de Garantía Internacional de Lujo"
            },
            4: {
                name: "Longines Spirit Zulu Time",
                image: "",
                description: "Este es el Longines Spirit Zulu Time, un reloj que rinde homenaje a la rica herencia de la marca en la aviación y su dominio de los husos horarios. Con su estética neovintage, combina un dial negro mate con detalles en color arena y una aguja GMT con punta de flecha roja, logrando un diseño funcional y extremadamente sofisticado para el viajero moderno.",
                movement: "Automático Suizo (Calibre GMT con certificado COSC)",
                material: "Acero Inoxidable y Bisel Cerámico Bidireccional",
                resistance: "100m / 10 ATM",
                warranty: "5 Años de Garantía Internacional de Precisión"
            },
            5: {
                name: "Swatch Irony Chrono (modelo ¨Blue Grid)¨",
                image: "",
                description: "Este es el Swatch Irony Chrono (¨modelo Blue Grid¨), un reloj que combina la ligereza característica de la marca con la robustez del acero inoxidable. Su esfera azul con efecto ¨sunray¨ y su correa de cuero con patrón de cocodrilo le dan un aspecto deportivo pero lo suficientemente elegante para el día a día.",
                movement: "Cuarzo Suizo (Cronógrafo de alta precisión)",
                material: "Acero Inoxidable y Correa de Cuero",
                resistance: "30m / 3 ATM (Resistente a salpicaduras)",
                warranty: "2 Años de Sustitución Directa Swatch"
            },
            6: {
                name: "Rolex Explorer 36 (Ref. 124273)",
                image: "",
                description: "Este es el Rolex Explorer 36 (Ref. 124273), una versión moderna que introduce el lujoso acabado ¨Rolesor¨ (combinación de acero y oro) en uno de los relojes de herramientas más puros de la historia. Su esfera negra con los icónicos números 3, 6 y 9 ofrece una legibilidad inmejorable, manteniendo el espíritu de aventura que lo llevó a la cima del Everest, pero con un toque extra de distinción.",
                movement: "Automático Suizo (Calibre 3230)",
                material: "Rolesor Amarillo (Acero Oystersteel y Oro de 18k",
                resistance: "100m / 10 ATM",
                warranty: "Garantía de Expedición de 10 Años"
            },
            7: {
                name: "Swatch Irony Chrono ¨Dark Phoenix¨ (Ref. YCS429)",
                image: "",
                description: "Este es el Swatch Irony Chrono ¨Dark Phoenix¨ (Ref. YCS429), un modelo clásico y robusto de la línea Irony que destaca por su contraste dinámico entre el acero y el cuero. Su diseño con esfera negra y detalles en rojo evoca una estética de fuerza y resiliencia, ideal para quienes buscan un cronógrafo suizo con personalidad pero accesible para el uso diario.",
                movement: "Cuarzo Suizo (Cronógrafo de alta precisión)",
                material: "Acero Inoxidable y Correa de Cuero Marrón",
                resistance: "30m / 3 ATM (Resistente a salpicaduras)",
                warranty: "Garantía ¨Fénix¨ de 3 Años contra todo riesgo"
            },
            8: {
                name: "Swatch Irony Chrono ¨Boxengasse¨ (Ref. YVS423G)",
                image: "",
                description: "Este es el Swatch Irony Chrono ¨Boxengasse¨ (Ref. YVS423G), un reloj que destaca por su estética clásica de cronógrafo de carreras con un toque contemporáneo y limpio. Su esfera plateada con efecto ¨sunray¨ y subesferas blancas le otorgan una legibilidad excepcional y un aspecto metálico muy atractivo para el uso diario.",
                movement: "Cuarzo Suizo (Cronógrafo de alta precisión)",
                material: "Acero Inoxidable (Caja y Brazalete)",
                resistance: "30m / 3 ATM (Resistente a salpicaduras)",
                warranty: "3 Años de Protección Integral en Centros Swatch"
            }
        };

        function openModal(watchId) {
            const watch = watchesData[watchId];
            const modal = document.getElementById('watchModal');
            
            document.getElementById('modalTitle').textContent = watch.name;
            document.getElementById('modalDescription').textContent = watch.description;
            document.getElementById('modalMovement').textContent = watch.movement;
            document.getElementById('modalMaterial').textContent = watch.material;
            document.getElementById('modalResistance').textContent = watch.resistance;
            document.getElementById('modalWarranty').textContent = watch.warranty;
            
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modal = document.getElementById('watchModal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        document.getElementById('watchModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        const observerOptions = {
            threshold: 0.2,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        document.querySelectorAll('.section-title').forEach(title => {
            observer.observe(title);
        });