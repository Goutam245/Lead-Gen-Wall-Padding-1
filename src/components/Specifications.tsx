import { ChevronDown } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const Specifications = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const specs = [
    {
      id: 'materials',
      title: 'Material Composition',
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">Our padding systems use premium, British-sourced materials:</p>
          <ul className="space-y-2 text-muted-foreground">
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary mt-2" />
              <span><strong className="text-foreground">Core:</strong> High-density closed-cell polyethylene foam (45kg/m³)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary mt-2" />
              <span><strong className="text-foreground">Cover:</strong> UV-stabilized PVC-coated polyester (650gsm)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary mt-2" />
              <span><strong className="text-foreground">Backing:</strong> Marine-grade aluminium mounting system</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="w-2 h-2 rounded-full bg-secondary mt-2" />
              <span><strong className="text-foreground">Fixings:</strong> Stainless steel A4 grade fasteners</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      id: 'thickness',
      title: 'Thickness Options',
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">Choose the right protection level for your venue:</p>
          <div className="grid md:grid-cols-3 gap-4 mt-4">
            <div className="bg-muted rounded-xl p-4 text-center">
              <div className="text-2xl font-display font-bold text-secondary mb-1">50mm</div>
              <div className="text-sm text-muted-foreground">Standard Protection</div>
              <div className="text-xs text-muted-foreground mt-2">Training facilities, youth academies</div>
            </div>
            <div className="bg-secondary/10 border-2 border-secondary rounded-xl p-4 text-center relative">
              <span className="absolute -top-2 left-1/2 -translate-x-1/2 bg-secondary text-white text-xs px-2 py-0.5 rounded-full">Most Popular</span>
              <div className="text-2xl font-display font-bold text-secondary mb-1">75mm</div>
              <div className="text-sm text-foreground font-medium">Professional Grade</div>
              <div className="text-xs text-muted-foreground mt-2">National League, Championship</div>
            </div>
            <div className="bg-muted rounded-xl p-4 text-center">
              <div className="text-2xl font-display font-bold text-secondary mb-1">100mm</div>
              <div className="text-sm text-muted-foreground">Maximum Protection</div>
              <div className="text-xs text-muted-foreground mt-2">Premier League, International</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'colors',
      title: 'Colour Range',
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">Standard colours available from stock, with RAL matching on request:</p>
          <div className="flex flex-wrap gap-3 mt-4">
            {[
              { name: 'Navy Blue', color: '#1a2332' },
              { name: 'Forest Green', color: '#1d4d2c' },
              { name: 'Cardinal Red', color: '#8b1538' },
              { name: 'Royal Blue', color: '#0066cc' },
              { name: 'Pure White', color: '#ffffff', border: true },
              { name: 'Charcoal', color: '#2d3748' },
              { name: 'Yellow', color: '#ffc107' },
              { name: 'Orange', color: '#ff6b00' },
            ].map((color) => (
              <div key={color.name} className="flex items-center gap-2 bg-muted rounded-lg p-2 pr-4">
                <div 
                  className={`w-8 h-8 rounded-lg ${color.border ? 'border border-border' : ''}`}
                  style={{ backgroundColor: color.color }}
                />
                <span className="text-sm text-foreground">{color.name}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            Full CMYK printing available for sponsor logos and custom graphics.
          </p>
        </div>
      ),
    },
    {
      id: 'dimensions',
      title: 'Dimensions & Customization',
      content: (
        <div className="space-y-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Standard Panel Sizes</h4>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>• Width: 1000mm - 2400mm</li>
                <li>• Height: 800mm - 1200mm (custom available)</li>
                <li>• Minimum order: 10 linear metres</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Custom Options</h4>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>• Curved sections for corner posts</li>
                <li>• Gate and access panel integration</li>
                <li>• Removable panels for advertising</li>
              </ul>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'fire-safety',
      title: 'Fire Safety Ratings',
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">All SAFEWALL products meet or exceed UK fire safety standards:</p>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-muted rounded-xl p-4">
              <div className="font-semibold text-foreground mb-1">BS 476 Part 7</div>
              <div className="text-sm text-muted-foreground">Class 1 Surface Spread of Flame</div>
            </div>
            <div className="bg-muted rounded-xl p-4">
              <div className="font-semibold text-foreground mb-1">EN 13501-1</div>
              <div className="text-sm text-muted-foreground">B-s1, d0 Classification</div>
            </div>
            <div className="bg-muted rounded-xl p-4">
              <div className="font-semibold text-foreground mb-1">FIRA Gold</div>
              <div className="text-sm text-muted-foreground">Certified Fire Retardant</div>
            </div>
            <div className="bg-muted rounded-xl p-4">
              <div className="font-semibold text-foreground mb-1">CPR Compliant</div>
              <div className="text-sm text-muted-foreground">Construction Products Regulation</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      id: 'installation',
      title: 'Installation Methods',
      content: (
        <div className="space-y-4">
          <p className="text-muted-foreground">Professional installation by our certified teams:</p>
          <div className="space-y-3 mt-4">
            <div className="flex items-start gap-4 bg-muted rounded-xl p-4">
              <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <div className="font-semibold text-foreground">Site Survey</div>
                <div className="text-sm text-muted-foreground">Free consultation and measurement</div>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-muted rounded-xl p-4">
              <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <div className="font-semibold text-foreground">Manufacturing</div>
                <div className="text-sm text-muted-foreground">Custom production (2-4 weeks typical)</div>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-muted rounded-xl p-4">
              <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <div className="font-semibold text-foreground">Installation</div>
                <div className="text-sm text-muted-foreground">Professional fitting (24-72 hours)</div>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-muted rounded-xl p-4">
              <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-sm">4</div>
              <div>
                <div className="font-semibold text-foreground">Handover</div>
                <div className="text-sm text-muted-foreground">Documentation and 10-year warranty activation</div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="specs" ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className={`text-center max-w-3xl mx-auto mb-16 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-semibold tracking-wide uppercase mb-4">
            Technical Details
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6">
            Engineering Excellence <span className="text-gradient">in Every Detail</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Comprehensive specifications for architects, specifiers, and facilities managers
          </p>
        </div>

        {/* Accordion */}
        <div className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Accordion type="single" collapsible className="space-y-4">
            {specs.map((spec) => (
              <AccordionItem
                key={spec.id}
                value={spec.id}
                className="bg-card rounded-2xl border border-border overflow-hidden shadow-sm"
              >
                <AccordionTrigger className="px-6 py-5 text-lg font-display font-semibold hover:no-underline hover:bg-muted/50 [&[data-state=open]]:bg-secondary/5">
                  {spec.title}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  {spec.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* Download Button */}
          <div className="text-center mt-8">
            <button className="btn-primary inline-flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Full Specification PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specifications;
