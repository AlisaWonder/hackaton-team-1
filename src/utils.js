export function random(min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1))
}
export function setAttributesElement(el, attrs) {
  for (var key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}