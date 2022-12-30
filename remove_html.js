function removeElem(classnam,elem,name) {
    if (elem.className == classnam) {
        if (elem.innerText == name) {
            elem.remove();
        }
    }
}
function remove_parent(classnam,elem,name) {
    if (elem.className == classnam) {
        if (elem.innerText == name) {
            elem.parentNode.remove();
        }
    }
}
function remvoeSection(classnam,elem) {
    if (elem.className == classnam) {
        elem.remove();
    }
}
function removethumbnail(classnam,elem) {
  if (elem.className == classnam){
    elem.innerText = elem.innerText.replace(/\s/g, '');
    if (elem.innerText == "SHORTS"){
      elem.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
    } 
  }
}
function removebaner(classnam,elem,count,limit) {
  if (elem.className == classnam){
    count = count + 1
    if (count == limit){
      elem.parentNode.remove();
    }
  }
  return count
}

function toolbar(classnam,elem,count,limit){
    if (elem.className == classnam){
      count = count + 1
      if (count == limit){
        elem.parentNode.parentNode.parentNode.remove();
      }
    }
    return count
}

counter_1 = 0
counter_2 = 0
counter_3 = 0
const onMutation = (mutations) => {
  mo.disconnect();
  for (const { addedNodes } of mutations) {
    for (const node of addedNodes) {
      if (node.id != null) {
        removeElem("yt-simple-endpoint style-scope ytd-mini-guide-entry-renderer",node,"Shorts");
        remvoeSection("style-scope ytd-rich-section-renderer",node);
        removethumbnail("style-scope ytd-thumbnail-overlay-time-status-renderer",node);
        counter_1 = removebaner("tab-content style-scope tp-yt-paper-tab",node,counter_1,3);
        counter_2 = toolbar("style-scope ytd-guide-entry-renderer",node,counter_2,5);
        remove_parent("style-scope ytd-reel-shelf-renderer",node,"Shorts");
      }
    }
  }
  observe();
}

const observe = () => {
  mo.observe(document, {
    subtree: true,
    childList: true,
  });
}
const mo = new MutationObserver(onMutation);
observe();