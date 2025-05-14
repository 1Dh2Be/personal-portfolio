type Variant = {
  initial: Record<string, any>;
  animate: Record<string, any>;
  [key: string]: any;
};

/**
 * Extracts animation properties from a variant for easy spreading into motion components
 * @param variant The animation variant object
 * @returns Object with initial, animate properties ready to spread into motion components
 */
export const useVariant = (variant: Variant) => {
  return {
    initial: "initial",
    animate: "animate",
    variants: variant,
  };
};
