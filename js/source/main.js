(function()
{
  'use strict';
  $(document).ready(initialize);

  function initialize()
  {
    $('#title').click(title);
    $('.number').click(number);
    $('.clear').click(clear);
    $('.decimal').click(decimal);
    $('.sign').click(sign);
    $('.push').click(push);
    $('.operator').click(operator);
  }

  function operator()
  {
    var op = $(this).data('op');
    var x = $('#queue > div:nth-child(1)').text() * 1;
    var y = $('#queue > div:nth-child(2)').text() * 1;
    var result;

    switch(op)
    {
    case 'add':
      result = x + y;
      break;
    case 'sub':
      result = x - y;
      break;
    case 'mult':
      result = x * y;
      break;
    case 'div':
      result = x / y;
      break;
    case 'exp':
      result = Math.pow(x, y);
      break;
    case 'fact':
      result = factorial(x);
      break;
    case 'root':
      result = Math.sqrt(x);
      break;
    case 'sum':
      result = sum();
    }

    $('#display').text(result);

  }

  function sum()
  {
    var total = 0;

    $('#queue > div').each(function(index, div)
    {
      var x = div.textContent * 1;
      total += x;

      $('#display').text(total);

    });

  }

  function factorial(x)
  {
    var product = 1;
    for(var i = 2; i <= x ; i++)
    {
      product *= i;
    }
    return product;
  }

  function push()
  {
    var display = $('#display').text();
    $('#display').text(0);
    var $div = $('<div>');
    $div.text(display);
    $('#queue').prepend($div);
  }


  function title ()
  {
    var display = $('#calculator').css('display');

    if(display === 'none'){
      $('#calculator').fadeIn();
    }else{
      $('#calculator').fadeOut();
    }
  }

  function number()
  {
    var num = this.textContent;
    var output = $('#display').text();

    if(output === '0'){
      output = num;
    } else{
      output += num;
    }

    $('#display').text(output);
  }

  function clear()
  {
    var input = $(this).text();
      if(input === 'C'){
        $('#display').text('0');
      } else
      {
        $('#queue').empty();
      }
  }

  function decimal()
  {
    var display = $('#display').text();
    var dec = '.';
      if(display.indexOf('.') === -1){
        $('#display').text(display + dec);
      }
  }

  function sign()
  {
    var display = $('#display').text();
    $('#display').text(display * -1);
  }

})();
