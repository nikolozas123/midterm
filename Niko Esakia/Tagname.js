function mygetElementsByTagName() {
    var allParas = document.getElementsByTagName('p');
    var num = allParas.length;
    alert('There are ' + num + ' paragraph in this document');
  }

  function div1ParaElems() {
    var div1 = document.getElementById('div1');
    var div1Paras = div1.getElementsByTagName('p');
    var num = div1Paras.length;
    alert('There are ' + num + ' paragraph in #div1');
  }

  function div2ParaElems() {
    var div2 = document.getElementById('div2');
    var div2Paras = div2.getElementsByTagName('p');
    var num = div2Paras.length;
    alert('There are ' + num + ' paragraph in #div2');
  }