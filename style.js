const domStyling = {
  size: function (element, widthValue, heightValue) {
    element.style.width = widthValue;
    element.style.height = heightValue;
  },
  bgcolor: function (element, backgroundColorValue, colorValue) {
    element.style.backgroundColor = backgroundColorValue;
    element.style.color = colorValue;
  },
  display: function (element, flexDirectionValue) {
    element.style.display = flex;
    element.style.flexDirection = flexDirectionValue;
  },
  border: function (element, borderValue, borderRadiusValue) {
    element.style.border = borderValue;
    element.style.borderRadius = borderRadiusValue;
  },
};

export default domStyling;
