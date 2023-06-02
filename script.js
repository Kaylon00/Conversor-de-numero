function converterRomanoParaHebraico(numeroRomano) {
    var valoresRomanos = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };

    var valoresHebraicos = {
      1: 'א',
      5: 'ה',
      10: 'י',
      50: 'נ',
      100: 'ק',
      500: 'ת',
      1000: 'תתק'
    };

    var resultado = '';

    for (var i = 0; i < numeroRomano.length; i++) {
      var valorAtual = valoresRomanos[numeroRomano[i]];
      resultado += valoresHebraicos[valorAtual];
    }

    return resultado;
  }

  function converterHebraicoParaRomano(numeroHebraico) {
    var valoresHebraicos = {
      'א': 1,
      'ה': 5,
      'י': 10,
      'נ': 50,
      'ק': 100,
      'ת': 500,
      'תתק': 1000
    };

    var valoresRomanos = {
      1: 'I',
      5: 'V',
      10: 'X',
      50: 'L',
      100: 'C',
      500: 'D',
      1000: 'M'
    };

    var resultado = '';

    for (var i = 0; i < numeroHebraico.length; i++) {
      var valorAtual = valoresHebraicos[numeroHebraico[i]];
      resultado += valoresRomanos[valorAtual];
    }

    return resultado;
  }

  function converterNumeros() {
    var numeroInput = document.getElementById('numero').value;
    var tipoConversao = document.getElementById('tipo-conversao').value;
    var resultadoOutput = document.getElementById('resultado');

    var resultado;

    if (tipoConversao === 'romano-para-hebraico') {
      resultado = converterRomanoParaHebraico(numeroInput);
    } else if (tipoConversao === 'hebraico-para-romano') {
      resultado = converterHebraicoParaRomano (numeroInput);
    }

    resultadoOutput.textContent = resultado;
  }