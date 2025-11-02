/* eslint-disable react/prop-types */
import { cn } from "../../lib/utils";

// Grid Background Component
export const GridBackground = ({
  className,
  children,
  gridSize = 20,
  gridColor = "#e4e4e7",
  showFade = true,
  fadeIntensity = 20,
  ...props
}) => {
  return (
    <div
      className={cn(
        "absolute inset-0 -z-10 w-full items-center justify-center bg-white",
        className,
      )}
      {...props}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: gridSize + "px " + gridSize + "px",
          backgroundImage: `
            linear-gradient(to right, ${gridColor} 1px, transparent 1px),
            linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)
          `,
        }}
      />

      {showFade && (
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white"
          style={{
            maskImage: `radial-gradient(ellipse at center, transparent ${fadeIntensity}%, black)`,
            WebkitMaskImage: `radial-gradient(ellipse at center, transparent ${fadeIntensity}%, black)`,
          }}
        />
      )}

      <div className="relative z-20">{children}</div>
    </div>
  );
};

// Dot Background Component
export const DotBackground = ({
  className,
  children,
  dotSize = 1,
  dotColor = "#000",
  spacing = 20,
  showFade = true,
  fadeIntensity = 20,
  ...props
}) => {
  return (
    <div
      className={cn(
        "absolute flex h-[50rem] w-full items-center justify-center bg-white",
        className,
      )}
      {...props}
    >
      <div
        className="absolute inset-0"
        style={{
          backgroundSize: spacing + "px " + spacing + "px",
          backgroundImage: `radial-gradient(${dotColor} ${dotSize}px, transparent ${dotSize}px)`,
        }}
      />

      {showFade && (
        <div
          className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white"
          style={{
            maskImage: `radial-gradient(ellipse at center, transparent ${fadeIntensity}%, black)`,
            WebkitMaskImage: `radial-gradient(ellipse at center, transparent ${fadeIntensity}%, black)`,
          }}
        />
      )}

      <div className="relative z-20">{children}</div>
    </div>
  );
};

export default { GridBackground, DotBackground };
