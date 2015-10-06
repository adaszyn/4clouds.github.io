$('.square .orange')
  .delay(500)
  .velocity({
    translateX: -15,
    translateY: -15,
    width: 80,
    height: 80
  })
  .velocity("reverse", {
    delay: 0
  });
