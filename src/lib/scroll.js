/**
 * Smooth-scroll to a section by its hash href (e.g. "#hero").
 * Offsets by the top-app-bar height so the section isn't hidden behind it.
 */
export function scrollTo(href) {
  if (!href.startsWith("#")) return
  const id = href.slice(1)
  const el = document.getElementById(id)
  if (!el) return
  const offset = 64 // top-app-bar height
  const top = el.getBoundingClientRect().top + window.scrollY - offset
  window.scrollTo({ top, behavior: "smooth" })
}
