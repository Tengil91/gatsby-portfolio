  
export let isElementInViewport = function(el){
  let rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth) 
  );
}
export let isElementUnderViewport = function(el){
  return el.getBoundingClientRect().top > window.innerHeight;
}

export function checkForVisibility(triggers, targets) {
  triggers.forEach(function(trigger, i) {
    if(isElementUnderViewport(targets[i])) {
      targets[i].classList.add('element-hidden');
    } else if (isElementInViewport(trigger)) {
      targets[i].classList.remove('element-hidden');
    }
  });
}