const transform_origins = {
  3: 141,
  6: 207,
  9: 222,
  12: 226,
  15: 226,
  16: 228,
  18: 228,
  20: 305
};

let sides_per_section = 6;
const panel_2d_width = 485;
const section_repetitions = 3;

const renderCan = (sides_per_section) => {
  const canStyles = document.querySelector(".can-wrapper style");
  if (canStyles !== null) {
    canStyles.remove();
  }

  const overall_panels_3d = sides_per_section * section_repetitions;
  let style_tag_html = "";

  const panel_3d_width = panel_2d_width / sides_per_section;
  style_tag_html = ".kryshka { width: "+panel_3d_width+"px; height: " + transform_origins[overall_panels_3d]*2 + "px; }  .panel-3d { width: " + panel_3d_width + "px; transform-origin: 50% 50% " + transform_origins[overall_panels_3d] + "px; }";
  for (let i = 1; i < sides_per_section; i++) {
    style_tag_html += `.panel-3d-offset-${i} .panel-2d-section { margin-left: ${-panel_3d_width * i}px; }`;
  }

  document.querySelector(".can-sides-number").textContent = sides_per_section;

  const panels2d = document.querySelector(".panel-2d");
  const panels3d = document.querySelector(".panels-3d");
  const kryshki_top = document.querySelector(".kryshki-top");
  const kryshki_bottom = document.querySelector(".kryshki-bottom");
  const panel_2d_html = panels2d.innerHTML;

  let offset_id = sides_per_section - 1;

  panels3d.innerHTML = '';

  for (let i = 0; i < overall_panels_3d; i++) {
    const new_panel_3d = document.createElement("div");
    new_panel_3d.className = `panel-3d panel-3d-offset-${offset_id} panel-3d-${i}`;
    new_panel_3d.innerHTML = panel_2d_html;
    panels3d.appendChild(new_panel_3d);

    const kryshka_top = document.createElement("div");
    kryshka_top.className = `kryshka kryshka-${i}`;
    kryshki_top.appendChild(kryshka_top);

    const kryshka_bottom = document.createElement("div");
    kryshka_bottom.className = `kryshka kryshka-${i}`;
    kryshki_bottom.appendChild(kryshka_bottom);
    
    offset_id = (offset_id == 0) ? (sides_per_section - 1) : (offset_id - 1);

    const panel_rotation = (360 / overall_panels_3d) * i;
    const animation_delay = -0.18 * i;
    style_tag_html += `.panel-3d-${i} { transform: rotate3d(0, 1, 0, ${panel_rotation}deg); }`;
    style_tag_html += `.panel-3d-${i}::before { animation-delay: ${animation_delay}s; }`;
    style_tag_html += `.kryshka-${i} { transform: rotate3d(0, 0, 1, ${panel_rotation}deg); }`;
  }
  const styleBlock = document.createElement("style");
  styleBlock.innerHTML = style_tag_html;

  document.querySelector('.can-wrapper').appendChild(styleBlock);
};

renderCan(sides_per_section);

document.querySelector(".can-button.can-less").addEventListener("click", () => {
  if (sides_per_section > 2) {
    sides_per_section--;
  }
  if (sides_per_section < 3) {
    document.querySelector(".can-button.can-less").setAttribute("disabled", "");
  }
  if (sides_per_section < 6) {
    document.querySelector(".can-button.can-more").removeAttribute("disabled");
  }
  renderCan(sides_per_section);
})
document.querySelector(".can-button.can-more").addEventListener("click", () => {
  if (sides_per_section < 6) {
    sides_per_section++;
  }
  if (sides_per_section > 5) {
    document.querySelector(".can-button.can-more").setAttribute("disabled", "");
  }
  if (sides_per_section > 2) {
    document.querySelector(".can-button.can-less").removeAttribute("disabled");
  }
  renderCan(sides_per_section);
});