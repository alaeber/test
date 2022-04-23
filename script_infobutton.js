function info(msg, gfg) {
   var confirmBox = $("#infobox");
    
   /* Trace message to display */
   confirmBox.find(".infotext").text(msg);
    
   /* Calling function */
   confirmBox.find(".close").unbind().click(function()
   {
      confirmBox.hide();
   });
   confirmBox.find(".close").click(gfg);
   confirmBox.show();
}
