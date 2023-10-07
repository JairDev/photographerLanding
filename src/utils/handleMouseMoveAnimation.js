export function handleMouseMoveAnimation(target, button, border, event) {
  const targetWidth = target.getBoundingClientRect().width;
  const targetHeight = target.getBoundingClientRect().height;
  const moveX = targetWidth / 2 - event.offsetX;
  const moveXBorder = targetWidth / 2 - event.offsetX;
  const moveY = targetHeight / 2 - event.offsetY;
  const moveYBorder = targetHeight / 2 - event.offsetY;

  gsap.to(button, {
    x: moveX / 6,
    y: moveY / 6,
  });
  gsap.to(border, {
    x: -moveXBorder / 6,
    y: -moveYBorder / 6,
  });
}
