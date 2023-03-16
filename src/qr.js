import qrjs2 from "qrjs2";
import CryptoJS from "crypto-js";

export const makeQR = (text) => {
  const img = document.getElementById("qrimg");
  const txtQR = "https://qrypt.site/?qr=" + text;
  if (document.implementation.hasFeature("http://www.w3.org/2000/svg", "1.1")) {
    var qr = QRCode.generateSVG(txtQR, {
      ecclevel: "M",
      fillcolor: "#E6E6E6",
      textcolor: "#486860",
      margin: 4,
      modulesize: 8,
    });
    var XMLS = new XMLSerializer();
    qr = XMLS.serializeToString(qr);
    qr = "data:image/svg+xml;base64," + window.btoa(unescape(encodeURIComponent(qr)));
  } else {
    var qr = QRCode.generatePNG(text, {
      ecclevel: "M",
      format: "html",
      fillcolor: "#CCCCCC",
      textcolor: "#006F94",
      margin: 4,
      modulesize: 8,
    });
  }
  img.src = qr;
  img.href = txtQR;
  document.getElementById("qrspot").style.height = "400px";
  img.style.height = "400px";
};
