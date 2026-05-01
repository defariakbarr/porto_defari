import { cubicBezier } from "framer-motion";

/**
 * Shared motion easing function matching Material Design standard easing.
 * Uses cubicBezier from framer-motion to satisfy the Easing type in FM v12+.
 */
export const easeStandard = cubicBezier(0.4, 0, 0.2, 1);

/** Common fadeUp variant for use across components */
export const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeStandard } },
};

/** Stagger container variant */
export const staggerVariant = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } },
};
