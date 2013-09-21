(function() {
  var body, container, html, script, styles, width, wrapperClass;

  wrapperClass = ".kids404-wrapper";

  width = 500;

  styles = "<style>\n  #kids404 {\n    perspective: 1000;\n  }\n  #kids404.flipped " + wrapperClass + " {\n    transform: rotateY(180deg);\n    -webkit-transform: rotateY(180deg);\n    -moz-transform: rotateY(180deg);\n  }\n  " + wrapperClass + " {\n    font-family: Helvetica, Arial, Sans-Serif;\n    font-weight: 300;\n    margin: 0px auto;\n    width: " + width + "px;\n    box-shadow: 0 0 4px black;\n    padding: 10px 10px 23px 10px;\n    border-radius: 3px;\n    position: relative;\n    height: 190px;\n    transition: 0.5s;\n    transform-style: preserve-3d;\n    -webkit-transform-style: preserve-3d;\n    -moz-transform-style: preserve-3d;\n  }\n  " + wrapperClass + " .image {\n    float: left;\n    width: 200px;\n  }\n  " + wrapperClass + " .image img {\n    width: 200px;\n  }\n  " + wrapperClass + " .info {\n    margin-left: 10px;\n    position: relative;\n    left: 10px;\n    top: 4px;\n  }\n  " + wrapperClass + " .info h2 {\n    margin: 0px;\n  }\n  " + wrapperClass + " .btn {\n    text-decoration: none;\n    color: white;\n    padding: 10px 34px;\n    background-color: #ccc;\n    margin-right: 10px;\n    border-radius: 3px;\n  }\n  " + wrapperClass + " .btn-yes {\n    background-color: rgba(0,162,0,0.8)\n  }\n  " + wrapperClass + " .more-info {\n    position: absolute;\n    right: 0px;\n    bottom: 6px;\n    cursor: pointer;\n  }\n  " + wrapperClass + " .more-info span {\n    border-radius: 8px;\n    font-size: 10px;\n    background-color: #ccc;\n    padding: 3px 6px;\n    color: white;\n    font-weight: 500;\n    font-family: Courier New;\n  }\n\n  " + wrapperClass + " .front, " + wrapperClass + " .back {\n    backface-visibility: hidden;\n    -webkit-backface-visibility: hidden;\n    -moz-backface-visibility: hidden;\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    width: " + width + "px;\n    background-color: white;\n    height: 200px;\n  }\n  " + wrapperClass + " .back {\n    -webkit-transform: rotateY(180deg);\n    -moz-transform: rotateY(180deg);\n    transform: rotateY(180deg);\n  }\n  " + wrapperClass + " .front {\n    z-index: 2;\n  }\n  " + wrapperClass + " h2, " + wrapperClass + " h4 {\n    font-weight: 300;\n    letter-spacing: 1px;\n  }\n</style>";

  html = "" + styles + "\n<div class=\"" + (wrapperClass.slice(1)) + "\">\n  <div class=\"front\">\n    <div class=\"image\">\n      <img src=\"http://placehold.it/200x200\">\n    </div>\n    <div class=\"info\">\n      <h2>Jane Doe</h2>\n      <h4>14 Years Old</h4>\n      <h4>Seattle, WA</h4>\n      <h4>Have You Seen Her?</h4>\n      <a href=\"#\" class=\"btn btn-yes\">Yes</a><a href=\"#\" class=\"btn\">No</a>\n    </div>\n    <div class=\"more-info\" onclick=\"document.getElementById('kids404').className = 'flipped';\">\n      <span>?</span>\n    </div>\n  </div>\n  <div class=\"back\">\n    <p>More Information!</p>\n    <p>This person was first reported missing after leaving school in Tacoma, WA.</p>\n    <p>If you have any information report, please\n    <a href=\"#\">fill out a report</a>. It takes less than 60 seconds.</p>\n    <div class=\"more-info\" onclick=\"document.getElementById('kids404').className = '';\">\n      <span>x</span>\n    </div>\n  </div>\n</div>";

  container = document.createElement('div');

  container.id = "kids404";

  container.innerHTML = html;

  script = document.getElementById("404kids-script");

  body = document.getElementsByTagName('body')[0];

  body.insertBefore(container, script);

}).call(this);
