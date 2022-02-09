function mudar() {
    var body = document.getElementsByTagName('body')[0]
    var h1 = document.getElementsByTagName('h1')[0]
    var btn1 = document.getElementById('btn1')

    // BODY STYLE
    body.style.background = 'Black'
    body.style.transition = '1s'
    
    // H1
    h1.style.color = 'white'
    h1.style.transition = '2s'
    h1.style.boxShadow = '1px 2px 5px rgba(255, 255, 255, 0.541);'

    // BTN1
    btn1.style.color = 'black'
    btn1.style.border = '1px solid black'
    btn1.innerText = 'Black'
    $(function(){
		$("btn1").hover(
			function(){
				//Ao posicionar o cursor sobre a div
				$(this).css('background', 'white');
                $(this).css('color', 'white');
			},
			function(){
				//Ao remover o cursor da div
				$(this).css('background', 'black');
                $(this).css('color', 'white');
			}
		);
	});

    $(function(){
		$("btn2").hover(
			function(){
				//Ao posicionar o cursor sobre a div
				$(this).css('background', 'white');
                $(this).css('color', 'white');
			},
			function(){
				//Ao remover o cursor da div
				$(this).css('background', 'black');
                $(this).css('color', 'white');
			}
		);
	});
}

function voltar() {
    var body = document.getElementsByTagName('body')[0]
    var h1 = document.getElementsByTagName('h1')[0]
    var btn2 = document.getElementById('btn2')

    // BODY STYLE
    body.style.background = 'white'
    body.style.transition = '1s'
    
    // H1
    h1.style.color = 'black'
    h1.style.transition = '2s'

    // BTN2
    btn2.style.color = 'white'
    btn2.style.border = '1px solid white'
    btn2.innerText = 'White'
    $(function(){
		$("btn2").hover(
			function(){
				//Ao posicionar o cursor sobre a div
				$(this).css('background', 'white');
                $(this).css('color', 'white');
			},
			function(){
				//Ao remover o cursor da div
				$(this).css('background', 'black');
                $(this).css('color', 'white');
			}
		);
	});

    $(function(){
		$("btn1").hover(
			function(){
				//Ao posicionar o cursor sobre a div
				$(this).css('background', 'white');
                $(this).css('color', 'black');
			},
			function(){
				//Ao remover o cursor da div
				$(this).css('background', 'black');
                $(this).css('color', 'white');
			}
		);
	});
}