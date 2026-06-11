/* @ds-bundle: {"format":3,"namespace":"ERCTemplate_de0071","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Stat","sourcePath":"components/core/Stat.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"f70c59d35374","components/core/Button.jsx":"c80d46d1518a","components/core/Card.jsx":"0c7bf3b70242","components/core/Input.jsx":"dba95cefee9c","components/core/SectionHeading.jsx":"f2ce67f8b5c9","components/core/Stat.jsx":"907a4c8fa795","components/core/Tag.jsx":"68e96ce8c0a8"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ERCTemplate_de0071 = window.ERCTemplate_de0071 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * INTREPID Badge — compact status / category label.
 */
function Badge({
  children,
  variant = "neutral",
  size = "md",
  dot = false,
  style,
  ...rest
}) {
  const palette = {
    neutral: {
      bg: "var(--neutral-100)",
      fg: "var(--neutral-700)",
      dot: "var(--neutral-400)"
    },
    brand: {
      bg: "var(--brand-soft)",
      fg: "var(--brand-strong)",
      dot: "var(--brand)"
    },
    accent: {
      bg: "var(--accent-soft)",
      fg: "var(--accent-strong)",
      dot: "var(--accent)"
    },
    success: {
      bg: "var(--success-soft)",
      fg: "var(--green-600)",
      dot: "var(--success)"
    },
    danger: {
      bg: "var(--danger-soft)",
      fg: "var(--red-600)",
      dot: "var(--danger)"
    },
    warning: {
      bg: "var(--warning-soft)",
      fg: "var(--gold-700)",
      dot: "var(--warning)"
    }
  };
  const sizes = {
    sm: {
      font: "var(--fs-xs)",
      pad: "2px var(--space-2)"
    },
    md: {
      font: "var(--fs-xs)",
      pad: "var(--space-1) var(--space-3)"
    }
  };
  const p = palette[variant] || palette.neutral;
  const s = sizes[size] || sizes.md;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      padding: s.pad,
      background: p.bg,
      color: p.fg,
      fontFamily: "var(--font-sans)",
      fontSize: s.font,
      fontWeight: "var(--fw-semibold)",
      letterSpacing: "var(--ls-wide)",
      textTransform: "uppercase",
      borderRadius: "var(--radius-pill)",
      lineHeight: 1.4,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: "50%",
      background: p.dot,
      flex: "none"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * INTREPID Button — primary action control.
 * Crisp corners, mono-tinted shadows, precise motion (no bounce).
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  type = "button",
  style,
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "0 var(--space-3)",
      height: "32px",
      font: "var(--fs-sm)",
      gap: "var(--space-2)"
    },
    md: {
      padding: "0 var(--space-5)",
      height: "42px",
      font: "var(--fs-base)",
      gap: "var(--space-2)"
    },
    lg: {
      padding: "0 var(--space-6)",
      height: "52px",
      font: "var(--fs-md)",
      gap: "var(--space-3)"
    }
  };
  const variants = {
    primary: {
      background: "var(--brand)",
      color: "var(--brand-on)",
      border: "var(--border-width) solid var(--brand)",
      boxShadow: "var(--shadow-sm)"
    },
    accent: {
      background: "var(--accent)",
      color: "var(--accent-on)",
      border: "var(--border-width) solid var(--accent)",
      boxShadow: "var(--shadow-sm)"
    },
    secondary: {
      background: "var(--surface-raised)",
      color: "var(--brand-strong)",
      border: "var(--border-width) solid var(--border-default)",
      boxShadow: "var(--shadow-xs)"
    },
    ghost: {
      background: "transparent",
      color: "var(--brand-strong)",
      border: "var(--border-width) solid transparent",
      boxShadow: "none"
    }
  };
  const s = sizes[size] || sizes.md;
  const v = variants[variant] || variants.primary;
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    className: `intrepid-btn intrepid-btn--${variant}`,
    style: {
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      gap: s.gap,
      height: s.height,
      padding: s.padding,
      width: fullWidth ? "100%" : "auto",
      fontFamily: "var(--font-sans)",
      fontSize: s.font,
      fontWeight: "var(--fw-semibold)",
      lineHeight: 1,
      letterSpacing: "var(--ls-tight)",
      borderRadius: "var(--radius-md)",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      transition: "transform var(--dur-fast) var(--ease-standard), background var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard), border-color var(--dur-fast) var(--ease-standard)",
      whiteSpace: "nowrap",
      ...v,
      ...style
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * INTREPID Card — crisp surface container.
 * Optional brand accent rail on the top edge (a circuit-trace nod).
 */
function Card({
  children,
  interactive = false,
  accent = false,
  padding = "var(--space-6)",
  as = "div",
  style,
  ...rest
}) {
  const Tag = as;
  return /*#__PURE__*/React.createElement(Tag, _extends({
    className: interactive ? "intrepid-card intrepid-card--interactive" : "intrepid-card",
    style: {
      position: "relative",
      background: "var(--surface-card)",
      border: "var(--border-width) solid var(--border-subtle)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-sm)",
      padding,
      overflow: "hidden",
      transition: "transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)",
      ...style
    }
  }, rest), accent && /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      insetInline: 0,
      top: 0,
      height: 3,
      background: "linear-gradient(90deg, var(--brand) 0%, var(--brand) 60%, var(--accent) 100%)"
    }
  }), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * INTREPID Input — labelled text field.
 */
function Input({
  label,
  hint,
  error,
  id,
  type = "text",
  prefix,
  style,
  ...rest
}) {
  const inputId = id || `intrepid-input-${Math.random().toString(36).slice(2, 8)}`;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-2)",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontSize: "var(--fs-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-strong)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      alignItems: "center"
    }
  }, prefix && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: "var(--space-3)",
      color: "var(--text-muted)",
      display: "flex"
    }
  }, prefix), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    className: "intrepid-input",
    style: {
      width: "100%",
      height: "44px",
      padding: prefix ? "0 var(--space-4) 0 var(--space-8)" : "0 var(--space-4)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--fs-base)",
      color: "var(--text-strong)",
      background: "var(--surface-raised)",
      border: `var(--border-width) solid ${error ? "var(--danger)" : "var(--border-default)"}`,
      borderRadius: "var(--radius-md)",
      transition: "border-color var(--dur-fast) var(--ease-standard), box-shadow var(--dur-fast) var(--ease-standard)"
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-xs)",
      color: error ? "var(--danger)" : "var(--text-muted)"
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * INTREPID SectionHeading — eyebrow + title (+ optional description).
 * The eyebrow uses the recurring mono-overline brand device.
 */
function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  level = 2,
  style,
  ...rest
}) {
  const Heading = `h${level}`;
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-3)",
      textAlign: align,
      alignItems: align === "center" ? "center" : "flex-start",
      maxWidth: align === "center" ? "44rem" : "none",
      marginInline: align === "center" ? "auto" : undefined,
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement("span", {
    className: "intrepid-eyebrow"
  }, eyebrow), /*#__PURE__*/React.createElement(Heading, {
    style: {
      font: "var(--text-h2)",
      color: "var(--text-strong)",
      letterSpacing: "var(--ls-tight)",
      margin: 0
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      font: "var(--text-lead)",
      color: "var(--text-muted)",
      margin: 0
    }
  }, description));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * INTREPID Stat — a big figure with label and optional unit.
 * Built for physics / project metrics (luminosity, rates, grant figures).
 */
function Stat({
  value,
  label,
  unit,
  sub,
  align = "left",
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-1)",
      textAlign: align,
      alignItems: align === "center" ? "center" : "flex-start",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      gap: "var(--space-1)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-3xl)",
      fontWeight: "var(--fw-bold)",
      lineHeight: 1,
      letterSpacing: "var(--ls-tight)",
      color: "var(--text-strong)",
      fontVariantNumeric: "tabular-nums"
    }
  }, value), unit && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--fs-md)",
      fontWeight: "var(--fw-medium)",
      color: "var(--brand)"
    }
  }, unit)), label && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-sm)",
      fontWeight: "var(--fw-semibold)",
      color: "var(--text-body)"
    }
  }, label), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--fs-xs)",
      color: "var(--text-muted)"
    }
  }, sub));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Stat.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * INTREPID Tag — outlined keyword / research-area chip.
 * Lighter than Badge; used in groups for topics, methods, keywords.
 */
function Tag({
  children,
  active = false,
  mono = false,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-2)",
      padding: "var(--space-1) var(--space-3)",
      background: active ? "var(--brand-soft)" : "var(--surface-raised)",
      color: active ? "var(--brand-strong)" : "var(--text-body)",
      border: `var(--border-width) solid ${active ? "var(--brand)" : "var(--border-subtle)"}`,
      fontFamily: mono ? "var(--font-mono)" : "var(--font-sans)",
      fontSize: "var(--fs-sm)",
      fontWeight: "var(--fw-medium)",
      borderRadius: "var(--radius-sm)",
      lineHeight: 1.4,
      whiteSpace: "nowrap",
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

})();
