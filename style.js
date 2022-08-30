const domStyling = {
  size: function (element, widthValue, heightValue) {
    element.style.width = widthValue;
    element.style.height = heightValue;
  },
  bgcolor: function (element, backgroundColorValue, colorValue) {
    element.style.backgroundColor = backgroundColorValue;
    element.style.color = colorValue;
  },
  display: function (element, flexDirection = c) {
    element.style.flexDirection;
  },
  border: function (element, border, borderRadius) {
    element.style.border = borderValue;
    element.style.borderRadius = borderRadiusValue;
  },
};
export default domStyling;
