function mudar() {
    var body = document.getElementsByTagName('body')[0]
    var h1 = document.getElementsByTagName('h1')[0]
    var button = document.getElementsByTagName('button')[0]

    // BODY STYLE
    body.style.background = 'Black'
    body.style.transition = '1s'
    
    // H1
    h1.style.color = 'white'
    h1.style.transition = '2s'

    // BUTTON
    button.style.color = 'white'
    button.style.border = '1px solid white'
    $(function(){
		$("button").hover(
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
    button.innerText = 'White'
    button.click.voltar()
}